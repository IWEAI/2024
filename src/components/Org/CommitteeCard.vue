<template>
  <div>
    <el-card>
      <h2 class="title">ORGANIZING COMMITTEE</h2>
      <div class="mx-auto text-center">
                        <div class="col-lg-12">
                            <h3>Workshop Chairs</h3>
                        </div>
                    <div class="row committee-sub mx-auto">
                        <div class="col-lg-4 committee-people">
                            <img src="@/assets/imgs/keynote1.jpg" class="img-thumbnail rounded-circle">
                            <br><strong>Yuncheng Jiang</strong>
                            <!-- <br>University of Technology Sydney, Australia -->
                        </div>
                        <div class="col-lg-4 committee-people">
                            <img src="@/assets/imgs/keynote1.jpg" class="img-thumbnail rounded-circle">
                            <br><strong>Gang Li</strong>
                            <!-- <br>University of Tasmania, Australia -->
                        </div>
                        <!-- <div class="col-lg-4 committee-people">
                            <img src="@/assets/imgs/keynote1.jpg" class="img-thumbnail rounded-circle">
                            <br><strong>Muhammad Bilal Amin</strong>
                            <br>University of Tasmania, Australia
                        </div> -->
                    </div>
                        <div class="col-lg-12">
                            <h3>Program Chairs</h3>
                        </div>
                    <div class="row committee-sub mx-auto">
                        <div class="col-lg-6 committee-people">
                            <img src="@/assets/imgs/keynote1.jpg" class="img-thumbnail rounded-circle">
                            <br><strong>Jieyu Zhan</strong>
                            <!-- <br>University of Tasmania, Australia -->
                        </div>
                        <div class="col-lg-6 committee-people">
                            <img src="@/assets/imgs/keynote1.jpg" class="img-thumbnail rounded-circle">
                            <br><strong>Guojing Zhou</strong>
                            <!-- <br>University of Technology Sydney, Australia -->
                        </div>
                    </div>
                        <div class="col-lg-12">
                            <h3>Publicity Chair</h3>
                        </div>
                    <div class="row committee-sub mx-auto">
                        <div class="col-lg-12 committee-people">
                            <img src="@/assets/imgs/keynote1.jpg" class="img-thumbnail rounded-circle">
                            <br><strong>Lihua Cai</strong>
                            <!-- <br>Nanjing University of Information Science &amp; Technology, China -->
                        </div>
                        <div class="col-lg-12 committee-people">
                            <img src="@/assets/imgs/keynote1.jpg" class="img-thumbnail rounded-circle">
                            <br><strong>Wenjun Ma</strong>
                            <!-- <br>Nanjing University of Information Science &amp; Technology, China -->
                        </div>
                    </div>
                        <!-- <div class="col-lg-12">
                            <h3>Webmaster and Workshop Coordinators</h3>
                        </div>
                    <div class="row committee-sub mx-auto">
                        <div class="col-lg-6 committee-people">
                            <img src="@/assets/imgs/keynote1.jpg" class="img-thumbnail rounded-circle">
                            <br><strong>Hai Huang</strong>
                            <br>University of Tasmania, Australia
                        </div>
                        <div class="col-lg-6 committee-people">
                            <img src="@/assets/imgs/keynote1.jpg" class="img-thumbnail rounded-circle">
                            <br><strong>Yuhui Jin</strong>
                            <br>University of Tasmania, Australia
                        </div>
                    </div>

                        <div class="col-lg-12">
                            <h3>Honorary Chairs</h3>
                        </div>
                    <div class="row committee-sub mx-auto">
                        <div class="col-lg-6 committee-people">
                            <img src="@/assets/imgs/keynote1.jpg" class="img-thumbnail rounded-circle">
                            <br><strong>Paul Compton</strong>
                            <br>University of New South Wales, Australia
                        </div>
                        <div class="col-lg-6 committee-people">
                            <img src="@/assets/imgs/keynote1.jpg" class="img-thumbnail rounded-circle">
                            <br><strong>Hiroshi Motoda</strong>
                            <br>Osaka University, Japan
                        </div>
                    </div> -->
                        <div class="col-lg-12">
                            <h3>Advisory Board</h3>
                        </div>
                    <div class="row committee-sub mx-auto">
                        <div class="col-lg-4 committee-people">
                            <h2>To Be Determined</h2>
                            <!-- <br>University of Tasmania, Australia -->
                        </div>


                    </div>
                </div>
    </el-card>
  </div>
</template>
<script lang="ts" setup></script>
<style lang="less" scoped>
.title {
  padding-bottom: 10px;
  border-bottom: 1px solid #04162c;
  text-align: center;
}

strong{
    border-bottom: solid 2px #004076;
}
.committee-sub{
  margin-top:20px;
  margin-bottom:40px;
  width:100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  color: #004076;
}

.committee-people{
  margin-top:20px;
  width: 33%;
  br{
      text-align: left;
  }
  h2{
    border: double 6px #004076;
  }
}


.committee-people > img{
  width:100px;
  margin-bottom:15px;
  border-radius: 50%;
  // image-rendering:-moz-crisp-edges;
  // image-rendering:-o-crisp-edges;
  // image-rendering:-webkit-optimize-contrast;
  // image-rendering: crisp-edges;
  -ms-interpolation-mode:nearest-neighbor;
    border: solid 2px #004076;  
}
</style>
