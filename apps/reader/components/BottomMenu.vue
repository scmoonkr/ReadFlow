<script setup lang="ts">
import { readerMenu } from "~/config/menu";
const route = useRoute();
const isActive = (to: string) => (to === "/" ? route.path === "/" : route.path.startsWith(to));
</script>

<template>
  <nav class="bottom-nav" aria-label="주요 메뉴">
    <NuxtLink
      v-for="item in readerMenu"
      :key="item.key"
      :to="item.to"
      class="bottom-nav__item"
      :class="{ 'is-active': isActive(item.to) }"
    >
      <AppIcon :name="item.icon" :size="18" />
      <span>{{ item.label }}</span>
    </NuxtLink>
  </nav>
</template>

<style scoped>
.bottom-nav {
  position: fixed;
  left: 0; right: 0; bottom: 0;
  z-index: 50;
  height: 68px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  background: rgba(255, 255, 255, 0.97);
  border-top: 1px solid #e4ebf2;
  padding-bottom: max(5px, env(safe-area-inset-bottom));
  backdrop-filter: blur(10px);
}
.bottom-nav__item {
  display: flex; flex-direction: column; align-items: center; justify-content: center;
  gap: 3px; color: #6c7d91; font-size: 10px; font-weight: 700;
}
.bottom-nav__item.is-active { color: var(--color-primary); }
@media (min-width: 1100px) {
  .bottom-nav { display: none; }
}
</style>
