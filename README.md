# ReadFlow — 독서 중심 차세대 도서관 플랫폼

책·독자·도서관을 중심으로 발생하는 관계와 활동을 연결하는 독서 중심 플랫폼.
자세한 설계 철학은 [`docs/차세대_독서도서관_플랫폼_프로젝트_정리.md`](docs/차세대_독서도서관_플랫폼_프로젝트_정리.md),
UI/UX 기준은 [`docs/style.md`](docs/style.md) 참조.

## 구성 (Monorepo)

| 앱 | 설명 | 포트 | 스택 |
|---|---|---|---|
| `server` | API 서버 (공통 백엔드) | **9910** | Node.js + Express + Mongoose(MongoDB) |
| `apps/manager` | 시스템 운영 (Platform Operator) | **9911** | Vue + Nuxt |
| `apps/library` | 도서관 운영 관리 (Library Backend) | **9912** | Vue + Nuxt |
| `apps/reader` | 이용자 서비스 (Reader) | **9913** | Vue + Nuxt |

```
ReadFlow/
├── server/            # Express + Mongoose API (9910)
├── apps/
│   ├── manager/       # Nuxt - 시스템 운영 (9911)
│   ├── library/       # Nuxt - 도서관 운영 (9912)
│   └── reader/        # Nuxt - 이용자 서비스 (9913)
├── shared/            # 공용 디자인 토큰 CSS
└── docs/              # 설계/스타일 지침 + HTML 화면 참조
```

## 실행

```bash
# 최초 1회 - 의존성 설치 (workspace 전체)
npm install

# 개별 실행
npm run dev:server     # http://localhost:9910
npm run dev:manager    # http://localhost:9911
npm run dev:library    # http://localhost:9912
npm run dev:reader     # http://localhost:9913

# 전체 동시 실행
npm run dev
```

## 환경 변수

루트 `.env` 파일에서 MongoDB 접속 정보를 읽는다.
`.env` 는 비밀번호 노출 방지를 위해 커밋 대상에서 제외되며([.gitignore](.gitignore)),
[`\.env.example`](.env.example) 을 복사해 실제 값을 채운다.

```bash
cp .env.example .env   # 이후 .env 의 값을 실제 접속 정보로 수정
```

```
MONGODB_ADDR=...
MONGO_USERNAME=...
MONGO_PWD=...
MONGODB_DB=LibrarySchool
MONGODB_READING=Reading
```

## Git

저장소: https://github.com/scmoonkr/ReadFlow.git

```bash
# 최초 클론
git clone https://github.com/scmoonkr/ReadFlow.git
cd ReadFlow
cp .env.example .env   # 접속 정보 입력 후
npm install

# 변경 반영
git add .
git commit -m "메시지"
git push origin main
```

> `.env`, `node_modules/`, Nuxt 빌드 산출물(`.nuxt/`, `.output/`)은 커밋되지 않는다.

## 핵심 도메인 (파일럿)

Bibliographic(GlobalBook) · LocalBook · Holding · Circulation(Loan/Reservation) · Reading · Identity(Reader/Membership)
