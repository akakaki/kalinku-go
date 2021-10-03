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
  ])"
)
  #mountain(
    :class="tw([\
      'h-screen',\
      'w-screen',\
    ])"
  )
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
    const mapObject = ref(null)
    const list = ref([])
    const lastItem = ref({})

    const initMapCanvas = () => {
      const defaultCoordinate = {latitude: 24.1096584, longitude: 120.6190964}
      const coordinate = Object.keys(lastItem.value).length ? lastItem.value : defaultCoordinate

      mapObject.value = L.map('mountain', {
        // 緯度(latitude)、經度(longitude)
        center: [coordinate.latitude, coordinate.longitude],
        zoom: 16,
      })

      const tileLayer = L.tileLayer(
        'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        {  attribution: false },
      )
        .addTo(mapObject.value)

      if (!Object.keys(lastItem.value).length) {
        tileLayer.getContainer().classList.add(tw(['filter']), tw('grayscale'), tw(['blur-sm']))
        return false
      }

      const marker = L.marker([lastItem.value.latitude, lastItem.value.longitude], {
        icon: new L.divIcon({
          className: tw(['bg-green-500', 'rounded-full', 'border', 'border-white']),
          html: `<span class="${tw(['bg-green-500', 'rounded-full', 'animate-ping', 'block', 'h-full'])}"></span>`,
        })
      })

      marker.addTo(mapObject.value)

      // set ago time
      const timeHourBefore = dayjs().diff(dayjs(lastItem.value.time), 'hour')
      const timeMinuteBefore = dayjs().diff(dayjs(lastItem.value.time), 'minute')
      const timeSecondBefore = dayjs().diff(dayjs(lastItem.value.time), 'second')
      const timeBefore = timeHourBefore || timeMinuteBefore || timeSecondBefore
      const timeBeforeLabel = timeHourBefore ? '小時' : timeMinuteBefore ? '分鐘' : timeSecondBefore ? '秒' : '🥳'

      // remark
      if (lastItem.value.remark) {
        marker.bindPopup(`
          <div class="${tw(['flex', 'flex-col', 'items-end'])}">
            <span class="${tw(['text-base'])}">${lastItem.value.remark}</span>
            <span class="${tw(['text-gray-400', 'text-xs', 'mt-4'])}">${timeBefore}${timeBeforeLabel}前更新</span>
          </div>
        `)
        marker.openPopup()
      } else marker.bindPopup(`<div>${timeBefore}${timeBeforeLabel}前更新</div>`)

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

    onMounted(() => {
      nextTick(() => {
        init()      
      })
    })

    return {
      mapObject,
      loading,
      list,
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
