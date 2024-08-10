import Theme from "vitepress/theme"
import VuaImage from "../components/vua-image/index.vue"
import "./style/var.css"

export default {
  ...Theme,
  enhanceApp({ app }) {
    app.component('VuaImage', VuaImage)
  }
};
