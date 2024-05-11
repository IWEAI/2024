<template>
  <div>
    <el-card>
      <h2 class="title">PC MEMBERS</h2>
      <div class="mx-auto">
        <div class="text-center animate__animated animate__backInDown">
            <div class="col-md-6" style="padding: 10px"><b>Xiongcai Cai</b><br>The University of New South Wales, Australia</div>
            <div class="col-md-6" style="padding: 10px"><b>Wen Gu</b><br>Japan Advanced Institute of Science and Technology, Japan</div>
            <div class="col-md-6" style="padding: 10px"><b>Jianhua Jiang</b><br>Jilin University of Finance and Economics, China</div>
            <div class="col-md-6" style="padding: 10px"><b>Toshihiro Kamishima</b><br>National Institute of Advanced Industrial Science and Technology (AIST), Japan</div>
            <div class="col-md-6" style="padding: 10px"><b>Huan Huo</b><br>University of Technology Sydney, Australia</div>
            <div class="col-md-6" style="padding: 10px"><b>Matthew Kuo</b><br>Auckland University of Technology, New Zealand</div>
            <div class="col-md-6" style="padding: 10px"><b>Weihua Li</b><br>Auckland University of Technology, New Zealand</div>
            <div class="col-md-6" style="padding: 10px"><b>Lei Niu</b><br>Central China Normal University, China</div>
            <div class="col-md-6" style="padding: 10px"><b>Kouzou Ohara</b><br>Aoyama Gakuin University, Japan</div>
            <div class="col-md-6" style="padding: 10px"><b>Tomonobu Ozaki</b><br>Nihon University, Japan</div>
            <div class="col-md-6" style="padding: 10px"><b>Fenghui Ren</b><br>University of Wollongong, Australia</div>
            <div class="col-md-6" style="padding: 10px"><b>Kaize Shi</b><br>University of Technology Sydney, Australia</div>
            <div class="col-md-6" style="padding: 10px"><b>Shuxiang Xu</b><br>University of Tasmania, Australia</div>
            <div class="col-md-6" style="padding: 10px"><b>Takahira Yamaguchi</b><br>Keio University, Japan</div>
            <div class="col-md-6" style="padding: 10px"><b>Yi Yang</b><br>Hefei University of Technology, China</div>
            <div class="col-md-6" style="padding: 10px"><b>Dayong Ye</b><br>University of Wollongong, Australia</div>
            <div class="col-md-6" style="padding: 10px"><b>Tetsuya Yoshida</b><br>Nara Women's University, Japan</div>
            <div class="col-md-6" style="padding: 10px"><b>Zi-Ke Zhang</b><br>Zhejiang University, China</div>
        </div>
    </div>
    </el-card>
  </div>
</template>
<script lang="ts" setup>

</script>
<style lang="less" scoped>
.title {
  padding-bottom: 10px;
  border-bottom: 1px solid #003973;
  text-align: center;
}
h2,p{
    text-align: left;
}
.text-center{
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    align-content: center;
    justify-content: center;
    animation-delay: 0.5s;
}
.col-md-6 {
    cursor: pointer;
    // flex: 0 0 50%;
    width: 40%;
    margin: 10px;
    border-radius: 5px;
    box-shadow: 0 0 10px #003973;
    background: #003973;
    color: #fff;
    }
.col-md-6:hover {
    // 缓慢放大缓慢缩回
    transform: scale(1.02);
    transition: ease-in-out 0.2s;
    }
</style>
