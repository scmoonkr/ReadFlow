<script setup lang="ts">
defineProps<{ title: string; breadcrumb?: string; desc?: string; action?: string; items?: string[] }>();
</script>

<template>
  <div>
    <header class="page-header">
      <div class="page-header__row">
        <div>
          <div v-if="breadcrumb" class="breadcrumb">{{ breadcrumb }}</div>
          <h1 class="page-title">{{ title }}</h1>
          <p v-if="desc" class="page-desc">{{ desc }}</p>
        </div>
        <button v-if="action" class="btn btn--primary">{{ action }}</button>
      </div>
    </header>

    <div v-if="items?.length" class="sub-grid">
      <div v-for="it in items" :key="it" class="card sub">{{ it }}</div>
    </div>

    <div class="card empty">
      <p>이 화면은 파일럿 스캐폴드입니다.</p>
      <p class="muted">docs 지침에 따라 목록·상세·Drawer 업무 UI를 이 영역에 구성합니다.</p>
    </div>
  </div>
</template>

<style scoped>
.sub-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); gap: 10px; margin-bottom: 16px; }
.sub { padding: 14px; font-weight: 700; font-size: 14px; }
.empty { padding: 40px; text-align: center; }
.empty p { margin: 4px 0; font-weight: 600; }
</style>
