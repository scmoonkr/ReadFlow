<template>
  <div class="backend-app">
    <Sidebar />
    <div class="backend-main">
      <Topbar />
      <main class="backend-content">
        <slot />
      </main>
    </div>
  </div>
</template>
