<script setup lang="ts">
// 오늘 — Task Queue 중심 (docs 22.1 / style 23)
const tasks = [
  { label: "예약도서 준비", count: 8, icon: "layers" },
  { label: "입고 확인", count: 12, icon: "import" },
  { label: "희망도서 검토", count: 5, icon: "cart" },
  { label: "연체 확인", count: 14, icon: "alert" },
  { label: "서지 보완", count: 4, icon: "edit" },
];
const status = [
  { label: "오늘 대출", value: 127 },
  { label: "오늘 반납", value: 98 },
  { label: "현재 연체", value: 14 },
  { label: "현재 예약", value: 22 },
];
</script>

<template>
  <div>
    <header class="page-header">
      <div class="breadcrumb">도서관 운영</div>
      <h1 class="page-title">오늘</h1>
      <p class="page-desc">해야 할 일과 현재 상태를 먼저 확인하세요.</p>
    </header>

    <h2 class="block-title">오늘 할 일</h2>
    <div class="task-grid">
      <button v-for="t in tasks" :key="t.label" class="task">
        <span class="task__icon"><AppIcon :name="t.icon" :size="18" /></span>
        <span class="task__label">{{ t.label }}</span>
        <span class="task__count">{{ t.count }}건</span>
      </button>
    </div>

    <h2 class="block-title">현재 상태</h2>
    <div class="status-grid">
      <div v-for="s in status" :key="s.label" class="card status">
        <div class="status__label muted">{{ s.label }}</div>
        <div class="status__value">{{ s.value }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.block-title { font-size: 16px; font-weight: 800; margin: 8px 0 12px; }
.task-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 12px; margin-bottom: 28px; }
.task {
  display: flex; align-items: center; gap: 12px; padding: 16px; cursor: pointer; text-align: left;
  background: #fff; border: 1px solid var(--color-line); border-radius: var(--radius-card-backend); box-shadow: var(--shadow-card);
}
.task:hover { border-color: var(--color-primary-100); }
.task__icon { width: 38px; height: 38px; border-radius: 10px; background: var(--color-primary-50); color: var(--color-primary); display: grid; place-items: center; }
.task__label { flex: 1; font-weight: 700; font-size: 14px; }
.task__count { font-weight: 800; color: var(--color-primary); }
.status-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); gap: 12px; }
.status { padding: 16px; }
.status__label { font-size: 13px; }
.status__value { font-size: 28px; font-weight: 800; margin-top: 6px; }
</style>
