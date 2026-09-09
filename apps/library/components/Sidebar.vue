<script setup lang="ts">
import { libraryMenu } from "~/config/menu";
const route = useRoute();
const isActive = (to: string) => (to === "/" ? route.path === "/" : route.path.startsWith(to));
</script>

<template>
  <aside class="sidebar">
    <div class="brand">
      ReadFlow
      <small>도서관 운영 관리</small>
    </div>
    <nav class="nav" aria-label="업무 메뉴">
      <NuxtLink
        v-for="item in libraryMenu"
        :key="item.key"
        :to="item.to"
        class="nav__item"
        :class="{ 'is-active': isActive(item.to) }"
      >
        <AppIcon :name="item.icon" :size="17" />
        <span>{{ item.label }}</span>
      </NuxtLink>
    </nav>
  </aside>
</template>

<style scoped>
.sidebar {
  position: sticky; top: 0; height: 100vh; overflow: auto;
  padding: 18px 14px; background: #fff; border-right: 1px solid var(--color-line);
}
.brand { padding: 6px 10px 20px; font-size: 18px; font-weight: 800; letter-spacing: -0.03em; color: #193354; }
.brand small { display: block; margin-top: 4px; font-size: 11px; color: #8a97a7; font-weight: 700; }
.nav { display: flex; flex-direction: column; gap: 3px; }
.nav__item {
  min-height: 40px; display: flex; align-items: center; gap: 10px; padding: 0 12px;
  border-radius: 9px; color: #637389; font-size: 13px; font-weight: 700;
}
.nav__item:hover { background: #f6f9fc; color: #243b58; }
.nav__item.is-active { background: var(--color-primary-50); color: var(--color-primary); }
@media (max-width: 1024px) {
  .sidebar {
    position: fixed; z-index: 60; width: var(--sidebar-w);
    transform: translateX(-100%); transition: transform 0.2s;
  }
  .sidebar.is-open { transform: translateX(0); }
}
</style>
