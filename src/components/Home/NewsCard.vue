<template>
        <!-- <el-card> -->
            <div class="dates">
                <h2>News</h2>
                <ul>
                    <!-- <li>(16 October)  The program for PKAW 2023 has been released.</li>
                    <li>(07 September) The instruction for submitting Camera-ready paper has been released.</li>
                    <li>(24 August) Registration information has been released!</li>
                    <li>(07 August) For authors whose papers are rejected by PRICAI 2023, please re-submit to PKAW 2023 through the submission link ASAP. The submission link is open until 20 August.</li>
                    <li>(01 August) The submission deadline has been extended to 7 August.</li>
                    <li>(01 July) The submission site is open!</li> -->
                    <li>(01 July) The website is open!</li>
                </ul>
            </div>
        <!-- </el-card> -->
</template>
<script lang="ts" setup>
</script>
<style scoped>
.dates{
    background-size: cover;
    background-position: center;
    /* background: linear-gradient(90deg,  rgba(222, 238, 255, 0.5),rgba(0, 57, 115, 1) 95%); */
    background: #004076;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px #a1adb9;
    color: #fff;
}
.dates:hover{
    box-shadow: 0 0 20px #a1adb9;
    transition: all linear 0.3s;
    scale: 1.01;
}
h2{
    padding-bottom: 10px;
    border-bottom: 1px solid #fff;
    /* border-bottom: 1px solid #04162c; */
}
ul{
    list-style-type: none;
    text-align: left;
    min-height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
</style>