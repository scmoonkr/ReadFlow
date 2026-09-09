<script setup lang="ts">
// 활동 (docs 21.5 / style 20) — 독서 여정을 시간순으로. "Event" 용어 미사용
const timeline = [
  { date: "9월 9일", text: "어린 왕자를 다 읽었어요.", tone: "badge--finished" },
  { date: "9월 5일", text: "어린 왕자를 읽기 시작했어요.", tone: "badge--reading" },
  { date: "8월 28일", text: "불편한 편의점을 대출했어요.", tone: "badge--available" },
];
</script>

<template>
  <div>
    <h1 class="page-title">활동</h1>
    <div class="timeline">
      <div v-for="(t, i) in timeline" :key="i" class="card row">
        <div class="date muted">{{ t.date }}</div>
        <div class="text">{{ t.text }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.timeline { display: flex; flex-direction: column; gap: 10px; }
.row { display: grid; grid-template-columns: 72px 1fr; gap: 12px; align-items: center; }
.date { font-size: 13px; font-weight: 700; }
.text { font-size: 15px; font-weight: 600; }
</style>
