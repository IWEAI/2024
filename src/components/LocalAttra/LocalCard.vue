<template>
  <div>
    <el-card class="card">
      <h2 class="title">LOCAL ATTRACTIONS</h2>
      <p>This year, the AI4Environment workshop is being organized as part of the <a
          href="/2023/workshop/ai4environment/../../">PRICAI-23</a> conference and will be co-located at the same <a
          href="/2023/workshop/ai4environment/venue">venue</a> in Jakarta, Indonesia.</p>
      <h4>Local Attractions in Jakarta&nbsp;</h4>
      <p>Jakarta is not only the seat of the national government and the provincial government, but it is also
        Indonesia’s political center. Moreover, Jakarta is the hub of Indonesia’s national finance and trade. It is no
        wonder, that you will find Jakarta as a dynamic city, with activities taking place around-the-clock throughout
        its populated areas. On this page, we have gathered information from Jakarta Tourism Office for you.</p>
      <p><strong>Heritage, Architecture &amp; Nature</strong></p>
      <ul>
        <li><strong><a href="https://www.indonesia.travel/gb/en/destinations/java/dki-jakarta/national-monument"
              target="_blank" rel="noopener">The National Monument</a> – </strong>Jakarta's Famous Landmark</li>
        <li><a href="https://www.jakarta-tourism.go.id/article/enjoy-peninggalan-sejarah/museum-fatahillah"
            target="_blank" rel="noopener"><strong>The Jakarta History</strong> <strong>Museum</strong></a> - An Icon
          for Old Town</li>
        <li><strong><a href="https://www.indonesia.travel/gb/en/destinations/java/dki-jakarta/the-grand-istiqlal-mosque"
              target="_blank" rel="noopener">The Grand Istiqlal Mosque</a> –&nbsp;</strong>The Largest Mosque in
          Southeast Asia&nbsp;</li>
        <li><strong><a
              href="https://www.indonesia.travel/gb/en/destinations/java/dki-jakarta/merdeka-palace-and-state-palace">Merdeka
              Palace</a> –&nbsp;</strong>The State Palace</li>
        <li><strong><a href="https://www.indonesia.travel/gb/en/destinations/java/dki-jakarta/catholic-catedral"
              target="_blank" rel="noopener">Jakarta's Cathedral</a> –&nbsp;</strong>Neo Gothic Catholic Cathedral</li>
        <li><strong><a
              href="https://www.indonesia.travel/gb/en/destinations/java/dki-jakarta/taman-mini-indonesia-indah">Taman
              Mini Indonesia Indah Park</a> –&nbsp;</strong>Cultural Tour &amp; Park</li>
        <li><strong><a href="https://www.indonesia.travel/gb/en/destinations/java/dki-jakarta/national-museum">National
              Museum of Indonesia</a> –&nbsp;</strong>Cultural History in One Place&nbsp;</li>
        <li><strong><a href="https://www.indonesia.travel/gb/en/destinations/java/dki-jakarta/glodok" target="_blank"
              rel="noopener">Glodok</a> –&nbsp;</strong>Jakarta's Historic Chinatown&nbsp;</li>
        <li><strong><a
              href="https://www.indonesia.travel/gb/en/trip-ideas/10-betawi-uniqueness-that-you-can-find-in-setu-babakan">Setu
              Babakan</a> –&nbsp;</strong>Betawi Culture</li>
        <li><strong><a
              href="https://www.indonesia.travel/id/en/trip-ideas/explore-jakarta-kota-tua-today-s-old-batavia">Kota
              Tua</a> – </strong>Old Batavia&nbsp;Dutch-Inspired Architecture&nbsp;</li>
        <li><a
            href="https://www.indonesia.travel/id/en/trip-ideas/10-islands-to-plunge-into-in-jakarta-s-thousand-islands">Jakarta's
            Thousand Islands</a> - The National Marine Park</li>
      </ul>
      <p><strong>Shopping</strong></p>
      <ul>
        <li><strong><a href="https://www.jakarta-tourism.go.id/article/enjoy-belanja/pasar-baru">Pasar Baru</a> -
          </strong>One of Jakarta's oldest markets</li>
        <li><a
            href="https://www.jakarta-tourism.go.id/article/enjoy-belanja/crafting-joy-at-kemala-home-living"><strong>Kemala
              Home</strong></a> – Crafting Joy</li>
        <li><strong><a href="https://www.jakarta-tourism.go.id/article/enjoy-belanja/atlas-records">Atlas
              Records</a></strong> - Vynil Paradise</li>
        <li><a href="https://senayancity.com"><strong>Senayan City Shopping Mall</strong></a> – Shopper’s Paradise</li>
      </ul>
      <p><strong>Culinary</strong></p>
      <ul>
        <li><strong><a href="https://www.jakarta-tourism.go.id/article/traditional-food/soto-betawi-h-mamat">Soto Betawi
              H. Mamat</a></strong></li>
        <li><strong><a href="https://www.jakarta-tourism.go.id/article/traditional-food/nasi-kapau">Nasi
              Kapau</a></strong></li>
        <li><strong><a href="https://www.jakarta-tourism.go.id/article/traditional-food/gado-gado-cemara">Gado-gado
              Cemara</a></strong></li>
      </ul>
      <p>&nbsp;</p>
  </el-card>
  </div>
</template>
<script lang="ts" setup>
// import { nextTick, onMounted } from "vue";
// const scrollToBottom = () => {
//   // 获取聊天窗口容器
//   let chatRoom: any = document.querySelector(".card");
//   // 滚动到容器底部
//   console.log(chatRoom.scrollHeight);
//   chatRoom.scrollTop = chatRoom.scrollHeight;
//   window.scrollTo(0, chatRoom.scrollHeight);

// }
// onMounted(() => {
// nextTick(() => {
//     scrollToBottom();
//   });
// })
</script>
<style lang="less" scoped>
.title {
  padding-bottom: 10px;
  border-bottom: 1px solid #04162c;
  text-align: center;
}

h2,
p {
  text-align: left;
}

ul {
  list-style-type: none;
  text-align: left;
}

.btn {
  background-color: #04162c;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  margin: 10px;
  text-decoration: none;
}
</style>
