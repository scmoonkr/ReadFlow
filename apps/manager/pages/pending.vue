<script setup lang="ts">
// 임시 Book 검토 (docs 7.1) — 사서가 최소정보로 등록한 PENDING GlobalBook 보완
const rows = [
  { title: "불편한 편의점 2", author: "김호연", isbn: "9791168345677", library: "중앙도서관", at: "오늘" },
  { title: "물고기는 존재하지 않는다", author: "룰루 밀러", isbn: "9788972919964", library: "구립도서관", at: "어제" },
  { title: "달러구트 꿈 백화점", author: "이미예", isbn: "", library: "중앙도서관", at: "9월 6일" },
];
</script>

<template>
  <div>
    <header class="page-header">
      <div class="page-header__row">
        <div>
          <div class="breadcrumb">시스템 운영 › 임시 Book 검토</div>
          <h1 class="page-title">임시 Book 검토</h1>
          <p class="page-desc">사서가 최소 정보로 등록한 임시 책의 서지정보를 보완합니다.</p>
        </div>
      </div>
    </header>

    <div class="card">
      <table class="table">
        <thead><tr><th>제목</th><th>저자</th><th>ISBN</th><th>등록 도서관</th><th>등록</th><th></th></tr></thead>
        <tbody>
          <tr v-for="r in rows" :key="r.title">
            <td><strong>{{ r.title }}</strong></td>
            <td>{{ r.author }}</td>
            <td class="muted">{{ r.isbn || "— 없음" }}</td>
            <td>{{ r.library }}</td>
            <td class="muted">{{ r.at }}</td>
            <td><button class="btn btn--primary"><AppIcon name="check" :size="15" /> 보완</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
