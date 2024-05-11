<template>
        <!-- <el-card> -->
            <div class="dates">
                <h2>Welcome to IWEAI</h2>
                <p>
                    Welcome to the 2023 Principle and practice of data and Knowledge Acquisition Workshop (PKAW). In the past, the workshops have been held in Guilin (2006), Hanoi (2008), Daegu (2010), Kuching (2012), Gold Coast (2014), Phuket (2016), Nanjing (2018), Fiji (2019), Yokohama (2020, online), and Shanghai (2022, hybrid). PKAW 2023 will be collocated with the 20th Pacific Rim International Conference on Artificial Intelligence (PRICAI 2023) and held virtually in Jakarta, Indonesia in November 2023.
                </p>
                <p>
                    PKAW has provided a forum for researchers and practitioners to discuss the state-of-the-art in the areas of knowledge acquisition and machine intelligence (MI, also Artificial Intelligence, AI). PKAW2023 will continue the above focus and welcome the contributions to the multi-disciplinary approach of human and big data-driven knowledge acquisition and AI techniques and applications.
                </p>
                <p>
                    AI is changing the way in which organizations innovate and communicate their processes, products, and services. Also, in our daily life, AI-embedded devices such as smart speakers are about to become widely used, which extends the possibility of acquiring knowledge from users’ behavior observed through the interaction between those devices and their users. Knowledge acquisition and learning from big data are becoming more challenging than ever. Various knowledge can be acquired not only from human experts but also from heterogeneous data. Multidisciplinary research, including knowledge engineering, artificial intelligence and machine learning, human-computer interaction, etc., is required to meet the challenge. We invite authors to submit papers on all aspects of these areas.
                </p>
                <p>
                    Furthermore, not only in the engineering field but also in the social science field (e.g., economics, social networks, and sociology), recent progress in knowledge acquisition and data engineering techniques is realizing interesting applications. We also invite submissions that present applications tested and deployed in real-life settings and lessons learned during this process.
                </p>
        <p class="bold">
            Proceedings of PKAW 2023 will be published by Springer as a volume of Lecture Notes in Artificial Intelligence (LNAI) series. For more details, please visit here.
        </p>
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
    background: #003973;
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
}

.bold{
    font-weight: bold;
}
p{
    text-align: left;
}
</style>