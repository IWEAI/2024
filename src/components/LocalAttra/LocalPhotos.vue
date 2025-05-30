<template>
  <el-carousel :interval="2000" type="card" height="400px">
    <el-carousel-item v-for="item in photos" :key="item">
      <img :src="item" alt="carousel image" style="width: 100%; height: 100%; object-fit: cover;" />
    </el-carousel-item>
  </el-carousel>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const photos = ref([
  'src/assets/imgs/past/1.jpg',
  'src/assets/imgs/past/2.jpg',
  'src/assets/imgs/past/3.png',
  'src/assets/imgs/past/4.jpg',
  'src/assets/imgs/past/5.jpg',
  'src/assets/imgs/past/6.jpg',
  'src/assets/imgs/past/7.jpg',
  'src/assets/imgs/past/8.jpg',
  // 添加更多图片路径
])
</script>

<style scoped>
.el-carousel__item {
  height: 400px;
}

.el-carousel__item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
