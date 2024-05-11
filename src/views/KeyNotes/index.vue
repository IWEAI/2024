<template>
    <div class="keynotes-container animate__animated animate__fadeIn" id="keynotes">
    <ProfileCard class="commom"></ProfileCard>
    </div>
</template>
<script lang="ts" setup>
import Vue from 'vue'
import ProfileCard from '@/components/KeyNotes/ProfileCard.vue'
</script>

<style scoped>
.keynotes-container {
  width: 80%;
  margin: auto;
  padding: 10px 0px;

  animation-duration: 3s;
  animation-delay: 0.7s;
}
.commom {
  margin: 20px 0px;
}
</style>