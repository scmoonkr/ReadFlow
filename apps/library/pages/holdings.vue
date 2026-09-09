<script setup lang="ts">
// 소장 — 등록번호 단위 실제 책. Table + Drawer (docs 27 / style 27~29)
const rows = [
  { no: "H0001", status: "대출중", badge: "badge--loaned", location: "문학실", edition: "초판", regAt: "2021.01" },
  { no: "H0002", status: "대출가능", badge: "badge--available", location: "문학실", edition: "2판", regAt: "2022.02" },
  { no: "H0003", status: "예약중", badge: "badge--reserved", location: "대출대", edition: "2판", regAt: "2022.02" },
  { no: "H0004", status: "대출가능", badge: "badge--available", location: "문학실", edition: "초판", regAt: "2021.03" },
];
const selected = ref<any>(null);
</script>

<template>
  <div>
    <header class="page-header">
      <div class="page-header__row">
        <div>
          <div class="breadcrumb">도서관 운영 › 소장</div>
          <h1 class="page-title">소장</h1>
          <p class="page-desc">등록번호 단위로 실제 소장책을 관리합니다.</p>
        </div>
        <button class="btn btn--primary"><AppIcon name="layers" :size="16" /> 소장 등록</button>
      </div>
    </header>

    <div class="card">
      <table class="table">
        <thead>
          <tr><th>등록번호</th><th>현재 상태</th><th>위치</th><th>판사항</th><th>등록일</th></tr>
        </thead>
        <tbody>
          <tr v-for="r in rows" :key="r.no" @click="selected = r">
            <td><strong>{{ r.no }}</strong></td>
            <td><span class="badge" :class="r.badge">{{ r.status }}</span></td>
            <td>{{ r.location }}</td>
            <td>{{ r.edition }}</td>
            <td class="muted">{{ r.regAt }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Row 선택 시 오른쪽 Drawer -->
    <div v-if="selected" class="drawer-backdrop" @click.self="selected = null">
      <aside class="drawer">
        <div class="drawer__head">
          <strong>{{ selected.no }}</strong>
          <button class="btn btn--ghost" @click="selected = null">닫기</button>
        </div>
        <div class="drawer__body">
          <div class="field"><span class="muted">현재 상태</span><span class="badge" :class="selected.badge">{{ selected.status }}</span></div>
          <div class="field"><span class="muted">위치</span><span>{{ selected.location }}</span></div>
          <div class="field"><span class="muted">판사항</span><span>{{ selected.edition }}</span></div>
          <div class="field"><span class="muted">등록일</span><span>{{ selected.regAt }}</span></div>
          <h3 class="drawer__sub">최근 이력</h3>
          <ul class="timeline">
            <li><span class="muted">9/12</span> 대출 · 김민수</li>
            <li><span class="muted">8/20</span> 반납 · 김민수</li>
            <li><span class="muted">7/10</span> 대출 · 이영희</li>
          </ul>
          <button class="btn btn--primary btn--block"><AppIcon name="edit" :size="16" /> 수정</button>
        </div>
      </aside>
    </div>
  </div>
</template>

<style scoped>
.drawer-backdrop { position: fixed; inset: 0; background: rgba(15, 30, 50, 0.25); z-index: 70; display: flex; justify-content: flex-end; }
.drawer { width: min(380px, 92vw); height: 100%; background: #fff; box-shadow: var(--shadow-float); display: flex; flex-direction: column; }
.drawer__head { display: flex; align-items: center; justify-content: space-between; padding: 16px; border-bottom: 1px solid var(--color-line); font-size: 16px; }
.drawer__body { padding: 16px; overflow: auto; }
.field { display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px solid #eef2f6; font-size: 14px; }
.drawer__sub { font-size: 14px; margin: 18px 0 10px; }
.timeline { list-style: none; margin: 0 0 20px; padding: 0; font-size: 13px; display: flex; flex-direction: column; gap: 8px; }
.timeline .muted { display: inline-block; width: 44px; }
.btn--block { width: 100%; justify-content: center; }
</style>
