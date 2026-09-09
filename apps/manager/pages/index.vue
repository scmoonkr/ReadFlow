<script setup lang="ts">
// Global Book (docs 23.1) — 전체 현황 + 검토 필요 항목
const summary = [
  { label: "전체 Book", value: "128,940" },
  { label: "임시 등록", value: "342" },
  { label: "검토 필요", value: "57" },
  { label: "ISBN 중복 후보", value: "12" },
];
const recent = [
  { title: "어린 왕자", isbn: "9788954699655", status: "ACTIVE", badge: "badge--available" },
  { title: "불편한 편의점", isbn: "9791168340923", status: "PENDING", badge: "badge--reserved" },
  { title: "아몬드", isbn: "9791162540640", status: "VERIFIED", badge: "badge--finished" },
];
</script>

<template>
  <div>
    <header class="page-header">
      <div class="breadcrumb">시스템 운영</div>
      <h1 class="page-title">Global Book</h1>
      <p class="page-desc">플랫폼 공통 책 정보의 품질을 관리합니다.</p>
    </header>

    <div class="status-grid">
      <div v-for="s in summary" :key="s.label" class="card status">
        <div class="muted">{{ s.label }}</div>
        <div class="status__value">{{ s.value }}</div>
      </div>
    </div>

    <div class="card" style="margin-top:16px">
      <div class="card__head">최근 변경</div>
      <table class="table">
        <thead><tr><th>제목</th><th>ISBN</th><th>상태</th></tr></thead>
        <tbody>
          <tr v-for="r in recent" :key="r.isbn">
            <td><strong>{{ r.title }}</strong></td>
            <td class="muted">{{ r.isbn }}</td>
            <td><span class="badge" :class="r.badge">{{ r.status }}</span></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
.status-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); gap: 12px; }
.status { padding: 16px; }
.status__value { font-size: 26px; font-weight: 800; margin-top: 6px; }
</style>
