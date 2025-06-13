<template>
  <div v-if="frontmatter.createTime" style="
        line-height: 32px;
        font-size: 14px;
        font-weight: 500;
        margin-bottom: 20px;
        float: right;">
    创建时间: {{ formatDate(frontmatter.createTime) }}
  </div>
</template>

<script setup lang="ts">
import { useData } from 'vitepress';

function formatDate(inputStr) {
  // 提取日期时间各部分
  const matches = inputStr.match(/(\d+)年(\d+)月(\d+)日(\d+):(\d+):(\d+)/)
  if (!matches) return inputStr

  const [_, year, month, day, hour, minute] = matches

  // 构造新格式
  return `${year}/${parseInt(month)}/${parseInt(day)} ${hour}:${minute}`
}


const { frontmatter, page } = useData()

console.log(frontmatter.value.createTime);

</script>

<style lang="scss" scoped></style>