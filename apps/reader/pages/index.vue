<script setup lang="ts">
// 홈: 현재 독서 상황과 다음 행동 (docs 21.1 / style 13)
const nowReading = {
  title: "어린 왕자", author: "생텍쥐페리", publisher: "문학동네",
  startedAt: "2026. 9. 5.", progress: 60,
};
const borrowed = { title: "불편한 편의점", author: "김호연", library: "중앙도서관", due: "9월 20일 · 3일 남음" };
const wantList = [
  { title: "프로젝트 헤일메리", author: "앤디 위어" },
  { title: "아몬드", author: "손원평" },
];
</script>

<template>
  <div>
    <h1 class="page-title">김민수님, 오늘도 좋은 책과 함께해요 👋</h1>

    <section>
      <h2 class="section-title">지금 읽는 책</h2>
      <article class="card now-reading">
        <div class="cover" aria-hidden="true"></div>
        <div class="now-reading__body">
          <div class="book-name">{{ nowReading.title }}</div>
          <div class="muted book-author">{{ nowReading.author }} 지음 · {{ nowReading.publisher }}</div>
          <span class="badge badge--reading">읽는 중</span>
          <div class="muted reading-date">{{ nowReading.startedAt }} 읽기 시작</div>
          <div class="progress-row">
            <div class="progress"><span :style="{ width: nowReading.progress + '%' }" /></div>
            <span class="progress-pct">{{ nowReading.progress }}%</span>
          </div>
          <div class="now-reading__actions">
            <button class="btn btn--primary"><AppIcon name="check" :size="16" /> 다 읽었어요</button>
            <button class="btn btn--secondary"><AppIcon name="edit" :size="16" /> 기록하기</button>
          </div>
        </div>
      </article>
    </section>

    <section>
      <h2 class="section-title">도서관에서 빌린 책</h2>
      <article class="card mini-row">
        <div class="mini-cover" aria-hidden="true"></div>
        <div>
          <div class="mini-title">{{ borrowed.title }}</div>
          <div class="muted mini-sub">{{ borrowed.author }} · {{ borrowed.library }}</div>
          <div class="due">{{ borrowed.due }} 반납</div>
        </div>
      </article>
    </section>

    <section>
      <h2 class="section-title">다음에 읽고 싶은 책</h2>
      <article v-for="b in wantList" :key="b.title" class="card mini-row">
        <div class="mini-cover" aria-hidden="true"></div>
        <div>
          <div class="mini-title">{{ b.title }}</div>
          <div class="muted mini-sub">{{ b.author }}</div>
          <span class="badge badge--want">읽고 싶어요</span>
        </div>
      </article>
    </section>
  </div>
</template>

<style scoped>
.now-reading { display: grid; grid-template-columns: 90px 1fr; gap: 14px; }
.cover, .mini-cover {
  aspect-ratio: 2 / 3; border-radius: 8px; border: 1px solid #d8e0e8;
  background: linear-gradient(135deg, #e8eef6, #f4f7fb); box-shadow: 0 3px 8px rgba(18, 38, 63, 0.1);
}
.mini-row { display: grid; grid-template-columns: 54px 1fr; gap: 12px; align-items: center; }
.book-name { font-size: 17px; font-weight: 800; margin-bottom: 3px; }
.book-author { font-size: 13px; margin-bottom: 8px; }
.reading-date { font-size: 12px; margin: 8px 0 6px; }
.progress-row { display: flex; align-items: center; gap: 8px; }
.progress { flex: 1; height: 6px; border-radius: 99px; background: #e6edf4; overflow: hidden; }
.progress span { display: block; height: 100%; border-radius: 99px; background: linear-gradient(90deg, #2563eb, #4a94f4); }
.progress-pct { font-size: 12px; font-weight: 800; color: #526984; }
.now-reading__actions { display: grid; grid-template-columns: 1.1fr 1fr; gap: 8px; margin-top: 12px; }
.mini-title { font-size: 15px; font-weight: 800; margin-bottom: 3px; }
.mini-sub { font-size: 13px; margin-bottom: 6px; }
.due { font-size: 13px; color: var(--color-danger); font-weight: 700; }
</style>
