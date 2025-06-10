// @ts-nocheck
import 'viewerjs/dist/viewer.min.css'
import { useRoute } from 'vitepress'
import imageViewer from 'vitepress-plugin-image-viewer'
import vImageViewer from 'vitepress-plugin-image-viewer/lib/vImageViewer.vue'
import Theme from "vitepress/theme"
import VuaImage from "../components/vua-image/index.vue"
import "./style/var.css"

export default {
  ...Theme,
  enhanceApp({ app }) {
    app.component('VuaImage', VuaImage)
    app.component('vImageViewer', vImageViewer)
  },
  setup() {
    // 获取路由
    const route = useRoute()
    console.log(route);

    // 使用
    imageViewer(route)
  }
}
