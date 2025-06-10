<template>
  <photo-provider>
    <photo-consumer  :key="props.src" :src="props.src">
      <img :src="props.src" class="view-box">
    </photo-consumer>
  </photo-provider>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps(['src', 'style'])

let isShow = ref(false)
const imgClick = () => {
  isShow.value = true
}

// 这个组件是图片点击放大的组件
</script>

<style scoped>
.vua-image img {
  cursor: pointer;
  transition: transform 0.3s ease-out;
  /* 添加过渡效果 */
  margin-bottom: 10px;
  margin-top: 10px;
  box-shadow: 0px 0px 6px rgba(0, 21, 41, 0.35);
}

.vua-image .img:hover {
  transform: scale(1.03);
  /* 图片放大 20% */
}

.enlarge-img {
  position: fixed;
  z-index: 20;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(18, 18, 18, 0.65);

  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-enter-active {
  transition: opacity 0.3s ease;
}

.modal-leave-active {
  transition: opacity 0.2s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
</style>
