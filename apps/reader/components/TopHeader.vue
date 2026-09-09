<script setup lang="ts">
import { readerMenu } from "~/config/menu";
const route = useRoute();
</script>

<template>
  <header class="top-header">
    <div class="top-header__inner">
      <NuxtLink to="/" class="brand">
        <span class="brand__mark">R</span>
        <span class="brand__name">ReadFlow</span>
      </NuxtLink>

      <!-- Desktop 메뉴 (Tablet/Desktop 에서 노출) -->
      <nav class="top-nav" aria-label="주요 메뉴">
        <NuxtLink
          v-for="item in readerMenu.slice(0, 4)"
          :key="item.key"
          :to="item.to"
          class="top-nav__item"
          :class="{ 'is-active': route.path === item.to }"
        >{{ item.label }}</NuxtLink>
      </nav>

      <button class="searchbar" @click="navigateTo('/search')">
        <AppIcon name="search" :size="17" />
        <span>어떤 책을 찾고 계세요?</span>
      </button>

      <div class="top-actions">
        <button class="icon-btn" aria-label="알림"><AppIcon name="bell" /></button>
        <NuxtLink to="/me" class="avatar">김</NuxtLink>
      </div>
    </div>
  </header>
</template>

<style scoped>
.top-header {
  background: #fff;
  border-bottom: 1px solid var(--color-line);
  position: sticky;
  top: 0;
  z-index: 30;
}
.top-header__inner {
  /* 본문(.reader-page)과 동일한 컨테이너 폭/패딩을 공유해 좌우 정렬선을 맞춘다 */
  max-width: var(--reader-max);
  margin: 0 auto;
  height: 60px;
  padding: 0 var(--reader-pad);
  display: flex;
  align-items: center;
  gap: 16px;
}
.brand { display: flex; align-items: center; gap: 9px; font-weight: 800; color: #193354; }
.brand__mark {
  width: 32px; height: 32px; border-radius: 9px;
  background: var(--color-primary); color: #fff;
  display: grid; place-items: center; font-size: 15px;
}
.top-nav { display: none; align-items: center; gap: 4px; }
.top-nav__item {
  min-height: 38px; display: flex; align-items: center; padding: 0 12px;
  border-radius: 9px; color: #5d7087; font-size: 13px; font-weight: 700;
}
.top-nav__item:hover { background: #f3f7fb; color: #29415f; }
.top-nav__item.is-active { background: var(--color-primary-50); color: var(--color-primary); }
.searchbar {
  flex: 1; max-width: 520px; height: 40px; display: flex; align-items: center; gap: 8px;
  padding: 0 12px; border: 1px solid #d6e0ea; border-radius: 20px;
  background: #fff; color: #8997a7; font-size: 13px; font-weight: 600; cursor: pointer;
}
.top-actions { display: flex; align-items: center; gap: 8px; }
.icon-btn {
  width: 38px; height: 38px; border: 0; border-radius: 11px; background: transparent;
  display: grid; place-items: center; color: #29415f; cursor: pointer;
}
.icon-btn:hover { background: #f3f7fb; }
.avatar {
  width: 34px; height: 34px; border-radius: 50%;
  background: #dceaff; color: var(--color-primary);
  display: grid; place-items: center; font-weight: 800;
}
.brand__name { display: none; }
@media (min-width: 768px) {
  .brand__name { display: inline; }
}
@media (min-width: 1100px) {
  .top-nav { display: flex; }
}
</style>
