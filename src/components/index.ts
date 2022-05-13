// import VTable from './v-table/index.vue'

const NAV_HEIGHT = 60

const getContainerHeight = () => {
  const { innerHeight } = window
  const height = innerHeight - NAV_HEIGHT - 32
  window.containerHeight = height
  document.body.style.setProperty('--container-height', `${height}px`)
}
getContainerHeight()
window.addEventListener('resize', () => getContainerHeight())

// export default {
//   VTable
// }

export {default as VTable} from './v-table/index.vue'