<template lang="pug">
.opps(
  v-if="!list.length"
  :class="tw([\
    'fixed',\
    'top-0',\
    'left-0',\
    'w-full',\
    'h-full',\
    'flex',\
    'flex-col',\
    'items-center',\
    'justify-center',\
    'text(white lg)',\
    'bg-black',\
    'bg-opacity-50',\
    'z-20',\
  ])"
)
  span(v-if="!loading && !list.length") 👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾
  span {{ loading ? '獲取宇宙天地力量中...' : !list.length && '👾 被外星人攻擊中沒有取到任何資料 👾' }}
  span(v-if="!loading && !list.length") 👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾

.mountain__wrap(
  :class="tw([\
    'relative',\
    'z-10',\
    'flex',\
    'overflow-hidden',\
    'transition-all',\
    'duration-200',\
    switchHistoryList ? 'ml-[-120px]' : '',\
  ])"
)
  .mountain__container(
    :class="tw([\
      'relative',\
    ])"
  )
    #mountain(
      :class="tw([\
        'h-screen',\
        'w-screen',\
        'z-10',\
      ])"
    )
    .switch(
      :class="tw([\
        'absolute',\
        'top-3',\
        'right-3',\
        'z-10',\
      ])"
    )
      .history__switch(
        :class="tw([\
          'cursor-pointer',\
          'text-[20px]',\
          'transition-all',\
          'duration-200',\
          switchHistoryList ? 'bg-gray-600' : 'bg-white',\
          'rounded-full',\
          'h-10',\
          'w-10',\
          'flex',\
          'items-center',\
          'justify-center',\
          'pt-[6px]',\
          'shadow-xl',\
          'mb-4',\
        ])"
        @click="history"
      ) 📚
      .tips__switch(
        :class="tw([\
          'cursor-pointer',\
          'text-[20px]',\
          'transition-all',\
          'duration-200',\
          switchTips ? 'bg-gray-600' : 'bg-white',\
          'rounded-full',\
          'h-10',\
          'w-10',\
          'flex',\
          'items-center',\
          'justify-center',\
          'pt-[6px]',\
          'shadow-xl',\
        ])"
        @click="tips"
      ) 💡
  .history__wrap(
    :class="tw([\
      'w-[120px]',\
      'flex-shrink-0',\
      'overflow-y-auto',\
      'h-screen',\
      'relative',\
      'z-10',\
      switchHistoryList ? 'shadow-lg' : '',\
    ])"
  )
    .history__label(
      :class="tw([\
        'my-2',\
        'font-bold',\
      ])"
    ) 歷史紀錄
    .history__list(
      :class="tw([\
        'p-2',\
      ])"
    )
      .history__item(
        v-for="item of list"
        :class="tw([\
          'border-b',\
          'mb-2',\
        ])"
      )
        div(
          :class="tw([\
            'mt-2',\
            'text-xs',\
          ])"
        )
          | 經緯 {{ item.latitude.toFixed(4) }},
          | 經度 {{ item.longitude.toFixed(4) }}
        div(
          :class="tw([\
            'mt-2',\
            'text-xs',\
          ])"
        ) {{ formatTimer(item.time) }}
</template>

<script>
import 'leaflet/dist/leaflet.css'
import L from 'leaflet/dist/leaflet.js'
import { ref } from '@vue/reactivity'
import { nextTick, onMounted } from '@vue/runtime-core'
import { tw } from 'twind'
import dayjs from 'dayjs'

export default {
  name: 'App',

  setup () {
    const loading = ref(false)
    let mapObject = null
    const list = ref([])
    const lastItem = ref({})
    const marker = ref(null)

    const initMapCanvas = () => {
      const defaultCoordinate = {latitude: 24.1096584, longitude: 120.6190964}
      const coordinate = Object.keys(lastItem.value).length ? lastItem.value : defaultCoordinate

      mapObject = L.map('mountain', {
        // 緯度(latitude)、經度(longitude)
        center: [coordinate.latitude, coordinate.longitude],
        zoom: 16,
      })

      const tileLayer = L.tileLayer(
        'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        {  attribution: false },
      )
        .addTo(mapObject)

      if (!Object.keys(lastItem.value).length) {
        tileLayer.getContainer().classList.add(tw(['filter']), tw('grayscale'), tw(['blur-sm']))
        return false
      }

      marker.value = L.marker([lastItem.value.latitude, lastItem.value.longitude], {
        icon: new L.divIcon({
          className: tw(['bg-green-500', 'rounded-full', 'border', 'border-white']),
          html: `<span class="${tw(['bg-green-500', 'rounded-full', 'animate-ping', 'block', 'h-full'])}"></span>`,
        })
      })

      marker.value.addTo(mapObject)

      // set ago time
      const timeYearBefore = dayjs().diff(dayjs(lastItem.value.time), 'year')
      const timeMonthBefore = dayjs().diff(dayjs(lastItem.value.time), 'month')
      const timeDayBefore = dayjs().diff(dayjs(lastItem.value.time), 'day')
      const timeHourBefore = dayjs().diff(dayjs(lastItem.value.time), 'hour')
      const timeMinuteBefore = dayjs().diff(dayjs(lastItem.value.time), 'minute')
      const timeSecondBefore = dayjs().diff(dayjs(lastItem.value.time), 'second')
      const timeBefore = timeYearBefore || timeMonthBefore || timeDayBefore || timeHourBefore || timeMinuteBefore || timeSecondBefore
      console.log('timeBefore', lastItem.value.time)
      const timeBeforeLabel = timeYearBefore ? '年' : timeMonthBefore ? '月' : timeDayBefore ? '天' : timeHourBefore ? '小時' : timeMinuteBefore ? '分鐘' : timeSecondBefore ? '秒' : '🥳'

      const botIcon = ['🤖', '🏃🏽‍♂️', '⛰', '📍', '🙌🏻', '💫', '🛵', '🏍', '🚀', '🛸']
      const randomBotIconIndex = Math.floor(Math.random() * botIcon.length)


      // remark
      marker.value.bindPopup(`
        <div class="${tw(['flex', 'flex-col', 'min-w-[10vw]'])}">
          <span class="${tw(['text-base', 'break-all'])}">${lastItem.value.remark || botIcon[randomBotIconIndex]}</span>
          <div class="${tw(['text(xs right gray-400)', 'mt-2'])}">${timeBefore}${timeBeforeLabel}前更新</div>
        </div>
      `)
      marker.value.openPopup()

      document.querySelector('.leaflet-control-attribution').remove()
    }

    const getMapPointList = () => {
      const url = process.env.VUE_APP_URL
      return new Promise((reslove, reject) => {
        fetch(url)
          .then(res => res.json())
          .then(res => reslove(res))
          .catch(err => reject(err))
      })
    }

    const init = async () => {
      loading.value = true
      await getMapPointList()
        .then(res => {
          list.value = res
          if (list.value.length) lastItem.value = list.value[list.value.length - 1]
        })
        .catch(err => console.error(err))
      loading.value = false
      initMapCanvas()
    }

    const formatTimer = (string) => {
      return dayjs(string).format('YY-MM-DD HH:mm')
    }

    const switchHistoryList = ref(false)
    const history = () => {
      switchHistoryList.value = !switchHistoryList.value
    }

    const switchTips = ref(false)
    const tips = () => {
      switchTips.value = !switchTips.value
      switchTips.value ? marker.value.openPopup() : marker.value.closePopup()
    }

    onMounted(() => {
      nextTick(() => {
        init()      
      })
    })

    return {
      loading,
      list,
      formatTimer,
      history,
      switchHistoryList,
      switchTips,
      tips,
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
