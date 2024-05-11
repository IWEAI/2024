<script setup lang="ts">
import NavView from '@/components/NavView/NavView.vue'
import Carousel from '@/components/Carousel/Carousel.vue'
import { useRouter } from 'vue-router';
const router = useRouter();
router.afterEach((to: { path: any; }) => {
  const carouselHeight = document.querySelector('.carousel')?.scrollHeight;
  if(to.path !== '/home'){
    window.scrollTo({
      top: carouselHeight+60,
      behavior: 'smooth',
    });
  }


});
// onMounted(() => {
//   const carouselHeight = document.querySelector('.carousel')?.scrollHeight;
//   console.log(carouselHeight);
//   window.scrollTo({
//     top: carouselHeight-60,
//     behavior: 'smooth',
//   });
// })
</script>
<template>
  <div id="app">
    <!-- <el-container>
      <el-header> -->
    <!-- <keep-alive> -->
    <el-affix :offset="0">
      <NavView class="nav"></NavView>
    </el-affix>
    <!-- </keep-alive> -->
    <!-- </el-header> -->
    <!-- <el-main class="main"> -->
    <Carousel class="carousel"></Carousel>
    <router-view></router-view>
    <div class="row">
      <div class="col-sm-12 text-center">
        <h3>
          © IWEAI 2024
        </h3>
      </div>
  </div>
    <!-- </el-main>
    </el-container> -->
  </div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  /* overflow:auto; */
}

body {
  width: 100%;
  /* height: 100%; */
  margin: auto;
  padding: 0;
  background-color: #b1dbf4;
}


.nav {
  width: 100%;
  height: 60px;
  color: #fff;
}

.carousel {
  width: 100%;
}

.row{
  height: 50px;
  background: #fff;
  margin: auto;
  align-content: center;
}

</style>
