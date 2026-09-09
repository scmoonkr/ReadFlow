<script setup lang="ts">
// 나 (docs 21.6) — 프로필 + 이용 도서관/Membership + 설정
const libraries = [
  { name: "중앙도서관", memberNo: "A12345", loan: 1, reserve: 0, status: "이용 중" },
  { name: "구립도서관", memberNo: "B78901", loan: 0, reserve: 1, status: "이용 중" },
];
const settings = ["알림", "공개범위", "독서 설정", "계정 설정"];
</script>

<template>
  <div>
    <section class="card profile">
      <div class="avatar">김</div>
      <div>
        <div class="name">김민수</div>
        <div class="muted">clibraryschool@gmail.com</div>
      </div>
    </section>

    <h2 class="section-title">이용 도서관</h2>
    <article v-for="l in libraries" :key="l.name" class="card lib">
      <div>
        <div class="lib__name">{{ l.name }}</div>
        <div class="muted lib__meta">회원번호 {{ l.memberNo }} · 대출 {{ l.loan }}권 · 예약 {{ l.reserve }}권</div>
      </div>
      <span class="badge badge--available">{{ l.status }}</span>
    </article>

    <h2 class="section-title">설정</h2>
    <div class="card settings">
      <button v-for="s in settings" :key="s" class="settings__row">{{ s }} <span class="muted">›</span></button>
    </div>
  </div>
</template>

<style scoped>
.profile { display: flex; align-items: center; gap: 14px; }
.avatar { width: 56px; height: 56px; border-radius: 50%; background: #dceaff; color: var(--color-primary); display: grid; place-items: center; font-weight: 800; font-size: 22px; }
.name { font-size: 18px; font-weight: 800; }
.lib { display: flex; align-items: center; justify-content: space-between; }
.lib__name { font-size: 15px; font-weight: 800; }
.lib__meta { font-size: 13px; margin-top: 3px; }
.settings { padding: 0; }
.settings__row { width: 100%; text-align: left; background: transparent; border: 0; border-bottom: 1px solid var(--color-line); padding: 16px; font-size: 15px; font-weight: 600; display: flex; justify-content: space-between; cursor: pointer; }
.settings__row:last-child { border-bottom: 0; }
</style>
