<template>
  <el-carousel :interval="2000" type="card" height="400px">
    <el-carousel-item>
      <img src="@/assets/imgs/past/1.jpg" alt="carousel image" style="width: 100%; height: 100%; object-fit: cover;" />
    </el-carousel-item>
    <el-carousel-item>
      <img src="@/assets/imgs/past/2.jpg" alt="carousel image" style="width: 100%; height: 100%; object-fit: cover;" />
    </el-carousel-item>
    <el-carousel-item>
      <img src="@/assets/imgs/past/3.png" alt="carousel image" style="width: 100%; height: 100%; object-fit: cover;" />
    </el-carousel-item>
    <el-carousel-item>
      <img src="@/assets/imgs/past/4.jpg" alt="carousel image" style="width: 100%; height: 100%; object-fit: cover;" />
    </el-carousel-item>
    <el-carousel-item>
      <img src="@/assets/imgs/past/5.jpg" alt="carousel image" style="width: 100%; height: 100%; object-fit: cover;" />
    </el-carousel-item>
    <el-carousel-item>
      <img src="@/assets/imgs/past/6.jpg" alt="carousel image" style="width: 100%; height: 100%; object-fit: cover;" />
    </el-carousel-item>
    <el-carousel-item>
      <img src="@/assets/imgs/past/7.jpg" alt="carousel image" style="width: 100%; height: 100%; object-fit: cover;" />
    </el-carousel-item>
    <el-carousel-item>
      <img src="@/assets/imgs/past/8.jpg" alt="carousel image" style="width: 100%; height: 100%; object-fit: cover;" />
    </el-carousel-item>
  </el-carousel>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const photos = ref([
  '../../assets/imgs/past/1.jpg',
  '../../assets/imgs/past/2.jpg',
  '../../assets/imgs/past/3.png',
  '../../assets/imgs/past/4.jpg',
  '../../assets/imgs/past/5.jpg',
  '../../assets/imgs/past/6.jpg',
  '../../assets/imgs/past/7.jpg',
  '../../assets/imgs/past/8.jpg',
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
