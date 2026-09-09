<script setup lang="ts">
// 검색 (docs 21.2 / style 14) — 통합검색 + 필터
const q = ref("");
const filters = ["대출 가능", "내 서재", "도서관", "주제", "출판년도"];
const active = ref<string[]>([]);
const toggle = (f: string) => {
  active.value = active.value.includes(f) ? active.value.filter((x) => x !== f) : [...active.value, f];
};
const results = [
  { title: "어린 왕자", author: "생텍쥐페리", meta: ["중앙도서관 · 대출가능 2권", "내 서재 · 소장", "나는 · 읽는 중"] },
  { title: "아몬드", author: "손원평", meta: ["중앙도서관 · 대출중", "읽고 싶어요"] },
];
</script>

<template>
  <div>
    <h1 class="page-title">검색</h1>
    <div class="card searchbox">
      <AppIcon name="search" :size="18" />
      <input v-model="q" placeholder="책, 저자, 주제, 도서관을 검색하세요" />
    </div>

    <div class="filters">
      <button
        v-for="f in filters" :key="f"
        class="chip" :class="{ 'is-on': active.includes(f) }"
        @click="toggle(f)"
      >{{ f }}</button>
    </div>

    <article v-for="r in results" :key="r.title" class="card result">
      <div class="mini-cover" aria-hidden="true"></div>
      <div>
        <div class="mini-title">{{ r.title }}</div>
        <div class="muted mini-sub">{{ r.author }}</div>
        <div class="result__meta">
          <span v-for="m in r.meta" :key="m" class="muted">{{ m }}</span>
        </div>
      </div>
    </article>
  </div>
</template>

<style scoped>
.searchbox { display: flex; align-items: center; gap: 10px; color: #8997a7; }
.searchbox input { flex: 1; border: 0; outline: none; font-size: 15px; color: var(--color-ink); background: transparent; }
.filters { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 16px; }
.chip {
  height: 34px; padding: 0 14px; border-radius: 99px; border: 1px solid #d7e1eb;
  background: #fff; color: #4a5b6f; font-size: 13px; font-weight: 700; cursor: pointer;
}
.chip.is-on { background: var(--color-primary-50); border-color: var(--color-primary-100); color: var(--color-primary); }
.result { display: grid; grid-template-columns: 54px 1fr; gap: 12px; align-items: start; }
.mini-cover { aspect-ratio: 2 / 3; border-radius: 8px; border: 1px solid #d8e0e8; background: linear-gradient(135deg, #e8eef6, #f4f7fb); }
.mini-title { font-size: 15px; font-weight: 800; margin-bottom: 3px; }
.mini-sub { font-size: 13px; margin-bottom: 8px; }
.result__meta { display: flex; flex-direction: column; gap: 3px; font-size: 13px; }
</style>
