<script setup lang="ts">
// 나의 서재 (docs 21.4 / style 19) — 책 세계 전체를 통합
const tabs = ["전체", "소장", "읽는 중", "읽고 싶어요", "다 읽음"];
const tab = ref("전체");
const books = [
  { title: "어린 왕자", author: "생텍쥐페리", state: "읽는 중", badge: "badge--reading" },
  { title: "불편한 편의점", author: "김호연", state: "소장", badge: "badge--available" },
  { title: "프로젝트 헤일메리", author: "앤디 위어", state: "읽고 싶어요", badge: "badge--want" },
  { title: "아몬드", author: "손원평", state: "다 읽음", badge: "badge--finished" },
];
const filtered = computed(() =>
  tab.value === "전체" ? books : books.filter((b) => b.state === tab.value)
);
</script>

<template>
  <div>
    <h1 class="page-title">나의 서재</h1>
    <div class="tabs">
      <button v-for="t in tabs" :key="t" class="tab" :class="{ 'is-on': tab === t }" @click="tab = t">{{ t }}</button>
    </div>

    <div class="grid">
      <article v-for="b in filtered" :key="b.title" class="card book">
        <div class="cover" aria-hidden="true"></div>
        <div class="book__title">{{ b.title }}</div>
        <div class="muted book__author">{{ b.author }}</div>
        <span class="badge" :class="b.badge">{{ b.state }}</span>
      </article>
    </div>
  </div>
</template>

<style scoped>
.tabs { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 16px; }
.tab {
  height: 34px; padding: 0 14px; border-radius: 99px; border: 1px solid #d7e1eb;
  background: #fff; color: #4a5b6f; font-size: 13px; font-weight: 700; cursor: pointer;
}
.tab.is-on { background: var(--color-primary); border-color: var(--color-primary); color: #fff; }
.grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; }
.cover { aspect-ratio: 2 / 3; border-radius: 8px; border: 1px solid #d8e0e8; background: linear-gradient(135deg, #e8eef6, #f4f7fb); margin-bottom: 10px; }
.book__title { font-size: 14px; font-weight: 800; }
.book__author { font-size: 12px; margin: 2px 0 8px; }
@media (min-width: 768px) { .grid { grid-template-columns: repeat(4, 1fr); } }
</style>
