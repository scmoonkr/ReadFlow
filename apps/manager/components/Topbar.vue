<script setup lang="ts"></script>

<template>
  <header class="topbar">
    <div class="search">
      <AppIcon name="search" :size="17" />
      <input placeholder="Global Book, ISBN, 저자 검색" />
    </div>
    <div class="actions">
      <span class="lib-pill"><AppIcon name="global" :size="15" /> 플랫폼 운영자</span>
      <button class="icon-btn" aria-label="알림"><AppIcon name="bell" /></button>
      <div class="profile"><span class="avatar">운</span> 운영자</div>
    </div>
  </header>
</template>

<style scoped>
.topbar {
  height: 62px; display: flex; align-items: center; justify-content: space-between; gap: 20px;
  padding: 0 24px; background: rgba(255, 255, 255, 0.96); border-bottom: 1px solid var(--color-line);
  position: sticky; top: 0; z-index: 20; backdrop-filter: blur(10px);
}
.search { width: min(460px, 46vw); height: 40px; display: flex; align-items: center; gap: 8px; padding: 0 12px; border: 1px solid #d6e0ea; border-radius: 9px; color: #8997a7; }
.search input { flex: 1; border: 0; outline: none; font-size: 13px; background: transparent; color: var(--color-ink); }
.actions { display: flex; align-items: center; gap: 12px; }
.lib-pill { display: inline-flex; align-items: center; gap: 6px; font-size: 12px; font-weight: 700; color: #45586e; background: #f2f6fb; padding: 6px 10px; border-radius: 8px; }
.icon-btn { width: 38px; height: 38px; border: 0; border-radius: 10px; background: transparent; display: grid; place-items: center; color: #29415f; cursor: pointer; }
.icon-btn:hover { background: #f3f7fb; }
.profile { display: flex; align-items: center; gap: 8px; font-size: 13px; font-weight: 700; color: #45586e; }
.avatar { width: 32px; height: 32px; border-radius: 50%; background: #dceaff; color: var(--color-primary); display: grid; place-items: center; font-weight: 800; }
</style>
