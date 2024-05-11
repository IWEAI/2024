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
                            <br><strong>Shiqing Wu</strong>
                            <br>University of Technology Sydney, Australia
                        </div>
                        <div class="col-lg-4 committee-people">
                            <img src="@/assets/imgs/keynote1.jpg" class="img-thumbnail rounded-circle">
                            <br><strong>Wenli Yang</strong>
                            <br>University of Tasmania, Australia
                        </div>
                        <div class="col-lg-4 committee-people">
                            <img src="@/assets/imgs/keynote1.jpg" class="img-thumbnail rounded-circle">
                            <br><strong>Muhammad Bilal Amin</strong>
                            <br>University of Tasmania, Australia
                        </div>
                    </div>
                        <div class="col-lg-12">
                            <h3>Program Chairs</h3>
                        </div>
                    <div class="row committee-sub mx-auto">
                        <div class="col-lg-6 committee-people">
                            <img src="@/assets/imgs/keynote1.jpg" class="img-thumbnail rounded-circle">
                            <br><strong>Byeong Kang</strong>
                            <br>University of Tasmania, Australia
                        </div>
                        <div class="col-lg-6 committee-people">
                            <img src="@/assets/imgs/keynote1.jpg" class="img-thumbnail rounded-circle">
                            <br><strong>Guandong Xu</strong>
                            <br>University of Technology Sydney, Australia
                        </div>
                    </div>
                        <div class="col-lg-12">
                            <h3>Publicity Chair</h3>
                        </div>
                    <div class="row committee-sub mx-auto">
                        <div class="col-lg-12 committee-people">
                            <img src="@/assets/imgs/keynote1.jpg" class="img-thumbnail rounded-circle">
                            <br><strong>Yan Kong</strong>
                            <br>Nanjing University of Information Science &amp; Technology, China
                        </div>
                    </div>
                        <div class="col-lg-12">
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
                    </div>
                        <div class="col-lg-12">
                            <h3>Advisory Committee</h3>
                        </div>
                    <div class="row committee-sub mx-auto">
                        <div class="col-lg-4 committee-people">
                            <img src="@/assets/imgs/keynote1.jpg" class="img-thumbnail rounded-circle">
                            <br><strong>Quan Bai</strong>
                            <br>University of Tasmania, Australia
                        </div>
                        <div class="col-lg-4 committee-people">
                            <img src="@/assets/imgs/keynote1.jpg" class="img-thumbnail rounded-circle">
                            <br><strong>Qing Liu</strong>
                            <br>Data61, CSIRO, Australia
                        </div>
                        <div class="col-lg-4 committee-people">
                            <img src="@/assets/imgs/keynote1.jpg" class="img-thumbnail rounded-circle">
                            <br><strong>Maria R Lee</strong>
                            <br>Shih Chien University, Taiwan
                        </div>
                        <div class="col-lg-6 committee-people">
                            <img src="@/assets/imgs/keynote1.jpg" class="img-thumbnail rounded-circle">
                            <br><strong>Kenichi Yoshida</strong>
                            <br>University of Tsukuba, Japan
                        </div>
                        <div class="col-lg-6 committee-people">
                            <img src="@/assets/imgs/keynote1.jpg" class="img-thumbnail rounded-circle">
                            <br><strong>Deborah Richards</strong>
                            <br>Macquarie University, Australia
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
h2,p{
    text-align: left;
}
strong{
    border-bottom: solid 2px #003973;
}
.committee-sub{
  margin-top:20px;
  margin-bottom:40px;
  width:100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}

.committee-people{
  margin-top:20px;
  width: 33%;
  br{
      text-align: left;
  }
}


.committee-people > img{
  width:250px;
  margin-bottom:15px;
  border-radius: 50%;
  // image-rendering:-moz-crisp-edges;
  // image-rendering:-o-crisp-edges;
  // image-rendering:-webkit-optimize-contrast;
  // image-rendering: crisp-edges;
  -ms-interpolation-mode:nearest-neighbor;
    border: solid 3px #003973;  
}
</style>
