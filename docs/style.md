# 차세대 독서·도서관 플랫폼 UI/UX Style Guide

## 1. 문서 목적

이 문서는 차세대 독서·도서관 플랫폼의 **Reader 화면**과 **Library Backend 화면**을 일관되게 설계하기 위한 UI/UX 스타일 기준을 정의한다.

플랫폼 내부에는 Global Book Master, Local Book Master, Holding, Reader, Membership, State, Event 등의 구조가 존재하지만, UI에서는 이를 그대로 노출하지 않고 사용자의 목적에 맞는 용어와 흐름으로 단순화한다.

핵심 원칙:

> **Simple by default, detailed when needed.**

즉, 평소에는 단순하게 보여주고 실제 필요가 있을 때만 상세정보와 예외 기능을 펼친다.

---

# 2. 전체 UI/UX 방향

## 2.1 Reader

Reader 화면은 **책 관리 시스템**이 아니라 **독서 경험 플랫폼**으로 느껴져야 한다.

핵심 경험:

```text
발견
↓
관심
↓
확보
↓
읽기
↓
완독
↓
기록
↓
추천 / 연결
```

디자인 키워드:

- 편안함
- 따뜻함
- 가벼움
- 책 중심
- 넉넉한 여백
- 명확한 다음 행동
- Mobile First

핵심 문장:

> **책이 먼저 보이고 시스템은 뒤로 숨는다.**

## 2.2 Library Backend

Library Backend는 **업무 메뉴를 탐색하는 시스템**보다 **현재 상태를 빠르게 파악하고 다음 업무를 처리하는 시스템**으로 설계한다.

디자인 키워드:

- 명확함
- 안정감
- 업무 효율
- 높은 정보 가독성
- 상태 중심
- Task 중심
- Desktop First
- Tablet 업무 지원

핵심 문장:

> **현재 상황을 빠르게 파악하고 다음 업무를 즉시 처리한다.**

---

# 3. 공통 디자인 철학

Reader와 Backend는 사용 목적과 정보 밀도는 다르지만 하나의 서비스처럼 보여야 한다.

공통 디자인 키워드:

```text
Clean
Calm
Human
Structured
```

공통 시각 요소:

- 밝은 배경
- 흰색 Surface
- 얇은 Border
- 절제된 Shadow
- 명확한 Typography
- 일관된 Icon
- 적절한 Border Radius
- 과도하지 않은 색상 사용
- 상태는 색보다 텍스트 우선

---

# 4. 정보 노출 원칙

## 4.1 내부 DB 구조를 그대로 보여주지 않는다

내부:

```text
Global Book
Local Book
Holding
Membership
State
Event
```

사용자 화면:

```text
공통 책 정보
우리 도서관 정보
소장책
회원정보
현재 상태
이력
```

Reader에게는 더욱 단순하게 표현한다.

예:

```text
읽는 중
내 서재에 있음
도서관에서 대출 중
반납까지 3일
```

## 4.2 현재 상태를 먼저 보여준다

```text
현재 상태
대출중
반납예정 9월 20일
```

그 아래에 과거 이력을 보여준다.

```text
최근 이력
9/12 대출
8/20 반납
7/10 대출
```

원칙:

```text
State → 상단 / 강조
Event → 하단 / Timeline
```

## 4.3 정상 흐름은 단순하게, 예외는 펼쳐서 처리한다

소장 등록 기본 화면:

```text
등록번호
바코드
위치
상태
```

대표 서지정보와 실제 소장책 정보가 다른 경우에만:

```text
[이 책은 대표 서지정보와 다릅니다]
```

를 선택해 다음 필드를 펼친다.

```text
판사항
출간일
정가
페이지
크기
```

희귀한 예외 때문에 모든 사용자의 기본 화면을 복잡하게 만들지 않는다.

---

# 5. Color System

## 5.1 Primary

Blue 계열을 서비스의 기본 Primary Color로 사용한다.

```text
Primary 600   #2563EB
Primary 500   #3B82F6
Primary 100   #DBEAFE
Primary 50    #EFF6FF
```

역할:

- Primary Action
- 선택 메뉴
- 링크
- 강조 정보
- Active State

## 5.2 Neutral

```text
Text Primary      #111827
Text Secondary    #6B7280
Border            #E5E7EB
Background        #F8FAFC
Surface           #FFFFFF
```

## 5.3 Semantic Color

```text
Success   Green
Warning   Amber
Danger    Red
Info      Blue
```

상태는 색상만으로 표현하지 않는다.

좋은 예:

```text
[대출가능]
[대출중 · 9/20 반납]
[예약중]
[분실]
```

## 5.4 Reader 보조 색상

Reader는 Backend보다 조금 더 따뜻한 느낌을 사용할 수 있다.

추천:

- Soft Green
- Soft Blue
- Soft Lavender
- Soft Orange
- Warm Cream

예:

```text
읽는 중       Soft Green
읽고 싶어요    Soft Blue
다 읽음        Soft Lavender
추천           Soft Orange
```

책 표지 자체에 색이 많기 때문에 페이지 전체 배경은 대부분 흰색 또는 아주 옅은 회색을 유지한다.

---

# 6. Typography

## 6.1 Font

권장:

```text
Pretendard
Noto Sans KR
Apple SD Gothic Neo
system-ui
```

## 6.2 Reader Typography

```text
Page Title       24px / Bold
Section Title    18px / SemiBold
Book Title       17px / SemiBold
Body             15~16px
Meta             13~14px
Caption          12px
```

Reader는 여백과 행간을 넉넉하게 사용한다.

## 6.3 Backend Typography

```text
Page Title       22~24px
Section Title    16~18px
Body             14px
Table            13~14px
Meta             12~13px
```

Backend라고 해서 지나치게 작은 폰트를 사용하지 않는다.

---

# 7. Spacing System

4px 기반 spacing system을 사용한다.

```text
4
8
12
16
24
32
48
64
```

Reader:

- 16~24px 간격을 자주 사용
- 카드 사이 여백을 넉넉하게

Backend:

- 8~16px 간격을 기본으로
- 정보 밀도를 높이되 읽기 어렵지 않게

---

# 8. Border Radius

```text
Small Control      6~8px
Button             8px
Backend Card       8~12px
Reader Card        12~16px
Modal              16px
```

Reader는 조금 더 둥글고 부드럽게, Backend는 조금 더 정돈되고 구조적으로 표현한다.

---

# 9. Shadow

Shadow는 최소화한다.

- Reader Card: 아주 약한 Shadow 또는 Border
- Backend Card: Border 중심
- Floating Drawer / Modal: 약한 Shadow 허용

과도한 Floating Card UI는 피한다.

---

# 10. Icon Style

Line Icon 계열을 사용한다.

추천 스타일:

- Lucide 계열
- 1색
- 단순한 형태
- 동일한 Stroke Weight

주요 Icon:

```text
Home
Search
Book
Library
User
Clock
Bookmark
Heart
Message
Barcode
Bell
History
Settings
```

---

# 11. Reader Layout

## 11.1 Responsive

```text
Mobile       < 768
Tablet       768 ~ 1199
Desktop      >= 1200
```

Reader는 Mobile First로 설계한다.

## 11.2 Container

```text
Mobile
좌우 Padding 16px

Tablet
좌우 Padding 24px

Desktop
max-width 약 1200px
```

---

# 12. Reader Navigation

모바일 Bottom Navigation은 5개를 기본으로 한다.

```text
홈
검색
나의 서재
활동
나
```

선택 상태:

- Primary Blue
- Icon + Label 모두 강조

비선택 상태:

- Neutral Gray

5개 이상으로 늘리지 않는 것을 원칙으로 한다.

---

# 13. Reader Home

Reader Home은 Dashboard가 아니라 **현재 독서 흐름을 이어주는 화면**으로 설계한다.

권장 순서:

```text
지금 읽는 책
대출 중인 책
반납 예정
읽고 싶은 책
추천
참여 중인 모임
최근 기록
```

예:

```text
지금 읽는 책

[표지] 어린 왕자
       읽는 중
       9월 5일 시작

       [다 읽었어요]
       [기록하기]
```

숫자형 KPI 카드 중심 화면은 피한다.

---

# 14. Reader Search

검색은 단순 서지검색을 넘어 책 발견 기능을 포함한다.

주요 UI:

```text
검색창
필터
검색결과
```

필터 예:

- 대출 가능
- 내 서재
- 도서관
- 주제
- 출판년도

검색 결과에는 다음 정보를 함께 보여줄 수 있다.

```text
어린 왕자
생텍쥐페리

중앙도서관 · 대출가능 2권
내 서재 · 소장
나는 · 읽는 중
```

---

# 15. Reader Book Card

책 카드는 서비스 전체에서 일관된 디자인을 유지한다.

## Compact Card

검색과 목록에 사용한다.

```text
[표지] 제목
       저자
       출판사

       대출가능 2권
       읽고 싶어요
```

## Large Card

홈과 추천에 사용한다.

```text
[큰 표지]

어린 왕자
생텍쥐페리

읽는 중 · 60%

[계속 읽기]
```

책 표지 기본 비율:

```text
2 : 3
```

---

# 16. Reader Book Detail

책 상세는 Reader 서비스의 중심 화면이다.

기본 구조:

```text
표지
제목
저자
출판정보

Primary Action

책 소개
주제
목차
관련 책

내 독서 상태
내 소장
내 대출 현황

도서관 소장 정보
리뷰
사람들의 활동
```

내부의 Global / Local / Holding 구조를 독자에게 직접 보여주지 않는다.

---

# 17. Reader Button System

## Primary

현재 가장 중요한 다음 행동.

```text
[읽기 시작]
[다 읽었어요]
[대출하기]
```

## Secondary

```text
[기록하기]
[추천하기]
```

## Tertiary

```text
더보기
전체 보기
취소
```

한 화면에서 Primary Button이 여러 개 경쟁하지 않도록 한다.

---

# 18. Reader Reading State

기본 독서 상태:

```text
읽고 싶어요
읽는 중
다 읽음
중단
```

상태는 별도 관리 메뉴보다 해당 책 화면에서 직접 변경할 수 있게 한다.

예:

```text
읽는 중 ▼
```

선택:

```text
읽고 싶어요
읽는 중 ✓
다 읽었어요
읽기 중단
```

---

# 19. Reader 나의 서재

나의 서재는 실제 소장책만 의미하지 않고 사용자의 책 세계 전체를 보여준다.

```text
전체
소장
읽는 중
읽고 싶어요
다 읽음
```

추가 기능:

- 나의 분류
- 나의 태그
- 컬렉션
- 메모
- 소장 관리

내부적으로 서로 다른 데이터 모델을 사용하더라도 UI에서는 하나의 서재 경험으로 통합한다.

---

# 20. Reader 활동

활동 화면은 Reader의 독서 여정을 시간순으로 보여준다.

예:

```text
9월 9일
어린 왕자를 다 읽었어요.

9월 5일
어린 왕자를 읽기 시작했어요.

8월 28일
불편한 편의점을 대출했어요.
```

Event라는 시스템 용어는 사용하지 않는다.

---

# 21. Library Backend Layout

기본 구조:

```text
┌────────┬─────────────────────────────┐
│Sidebar │ Header                      │
│        ├─────────────────────────────┤
│        │ Page Title + Actions        │
│        │                             │
│        │ Content                     │
│        │                             │
└────────┴─────────────────────────────┘
```

Sidebar 권장 폭:

```text
220~240px
```

---

# 22. Backend Navigation

추천 메뉴:

```text
오늘
책
소장
대출·반납
회원
수서
프로그램
통계
관리
```

Sidebar는 항상 위치가 고정되며 선택된 메뉴를 명확히 표시한다.

---

# 23. Backend Home

Backend Home은 **Task Dashboard**로 설계한다.

가장 먼저:

```text
오늘 할 일
```

예:

```text
예약도서 준비        8건
입고 확인           12건
희망도서 검토        5건
서지 보완             4건
```

그 아래:

```text
오늘 대출 127
오늘 반납 98
현재 연체 14
```

권장 정보 우선순위:

```text
Task
↓
Current Status
↓
Analytics
```

---

# 24. Backend Page Header

모든 업무 화면에 동일한 구조를 사용한다.

```text
Breadcrumb
Page Title
Description / Current State
Primary Action
```

예:

```text
도서관리 > 책 상세

어린 왕자

우리 도서관 소장 4권 · 대출중 2권

[소장 추가] [수정] [...]
```

---

# 25. Global / Local 정보 표현

개발자 용어를 화면에 그대로 사용하지 않는다.

사용하지 않는 표현:

```text
GLOBAL DATA
LOCAL OVERRIDE
INHERITED FIELD
```

사용하는 표현:

```text
공통 책 정보
우리 도서관 정보
```

---

# 26. Local Fallback UI

기본 규칙:

```text
Local 값이 있으면 Local 사용
Local 값이 없으면 Global 사용
```

조회 화면에서는 최종 적용값 하나만 보여준다.

관리 화면에서는 필요할 때 출처를 표시한다.

예:

```text
분류
863
출처: 우리 도서관

주제
프랑스 문학
출처: 공통 책 정보
```

Local 값이 없는 경우:

```text
주제
프랑스 문학

전체 책 정보 사용 중
[우리 도서관 정보로 변경]
```

---

# 27. Holding UI

Holding은 실제 한 권을 의미한다.

도서관에서는 등록번호 단위로 관리한다.

권장 Table:

```text
등록번호   상태      위치        판사항      등록일
H0001     대출중    문학실      초판        2021.01
H0002     대출가능  문학실      2판         2022.02
H0003     예약중    대출대      2판         2022.02
H0004     대출가능  문학실      초판        2021.03
```

컬럼 순서 원칙:

1. 등록번호
2. 현재 상태
3. 위치
4. 예외적인 판사항
5. 등록일
6. 작업

---

# 28. Backend Table

Table은 Backend에서 적극적으로 사용한다.

주요 대상:

- Holding
- 회원
- 대출
- 주문
- 희망도서
- 수서
- 예약

한 화면에서 너무 많은 컬럼을 노출하지 않는다.

권장:

```text
핵심 컬럼 5~7개
+
상세 Drawer
```

---

# 29. Drawer

Backend에서는 화면 이동을 줄이기 위해 Drawer를 적극 활용한다.

예:

```text
Holding 목록
      ↓
Row 선택
      ↓
오른쪽 Drawer

등록번호
현재상태
위치
판사항
최근 이력

[수정]
```

적용 대상:

- Holding 상세
- 회원 상세
- 예약 상세
- 희망도서 상세
- 입고 확인

---

# 30. Backend Form

입력 필드가 많은 경우 Section으로 나눈다.

예:

```text
기본정보
────────
제목
저자
ISBN

도서관 정보
────────
분류
주제
청구기호

소장 정보
────────
등록번호
위치
상태
```

20개 이상의 필드를 한 화면에 길게 나열하지 않는다.

---

# 31. 신규 책 등록 UI

신규 책 등록의 기본 흐름:

```text
ISBN / 제목 검색
↓
Global Book 검색
```

존재하는 경우:

```text
책 정보 확인
↓
[소장 등록]
```

없는 경우:

```text
최소 정보 입력

제목
저자
ISBN
출판사
출간일
정가
형태사항

↓
임시 Global Book 생성
↓
Local Book 생성
↓
Holding 생성
```

운영자가 이후 Global Book 정보를 보완한다.

사서에게 완전한 MARC 수준의 입력을 요구하지 않는다.

---

# 32. State UI

현재 상태는 항상 눈에 잘 띄는 위치에 둔다.

예:

```text
현재상태
대출중

반납예정
2026.09.20
```

상태는 Badge + Text 조합을 사용한다.

---

# 33. Event / History UI

이력은 Timeline 또는 Table로 표시한다.

예:

```text
최근 이력

2026.09.12   대출     김민수
2026.08.20   반납     김민수
2026.07.10   대출     이영희
```

현재 State와 과거 History를 한 영역에서 혼합하지 않는다.

---

# 34. Empty State

단순히 빈 화면을 보여주지 않는다.

Reader 예:

```text
아직 읽고 싶은 책이 없어요.

새로운 책을 찾아볼까요?

[책 찾기]
```

Backend 예:

```text
등록된 책을 찾지 못했습니다.

ISBN이나 제목을 다시 확인하거나
새 책으로 등록할 수 있습니다.

[새 책 등록]
```

항상 다음 행동을 제안한다.

---

# 35. Error State

오류 메시지는 기술용어보다 사용자가 해결할 수 있는 행동을 중심으로 작성한다.

나쁜 예:

```text
Validation Error 1024
```

좋은 예:

```text
ISBN 형식을 확인해주세요.

13자리 ISBN을 입력하거나
ISBN 없이 책을 등록할 수 있습니다.
```

---

# 36. Loading

긴 작업에서는 Skeleton UI를 기본으로 사용한다.

사용 대상:

- 검색 결과
- 책 상세
- 서재
- Backend 목록
- Table

전체 화면 Spinner 사용은 최소화한다.

---

# 37. 반응형 원칙

## Reader

```text
Mobile First
→ Tablet
→ Desktop
```

모든 핵심 기능을 Mobile에서 사용할 수 있어야 한다.

## Backend

```text
Desktop First
```

Tablet에서는 다음 핵심 업무를 우선 지원한다.

- 오늘 할 일
- 대출 / 반납
- 바코드 스캔
- Holding 확인
- 회원 확인
- 예약도서 처리
- 입고 확인

복잡한 통계, 대량 수정, MARC, 설정 기능까지 모바일에 억지로 넣지 않는다.

---

# 38. Reader vs Backend Style 비교

| 항목 | Reader | Library Backend |
|---|---|---|
| 목적 | 독서 경험 | 업무 처리 |
| Device | Mobile First | Desktop First |
| 정보 밀도 | 낮음~중간 | 중간~높음 |
| Navigation | Bottom Tab | Sidebar |
| 중심 UI | Card | Table + Drawer |
| 시각 강조 | 책 표지 | 상태와 업무 |
| 여백 | 넉넉함 | 효율적 |
| Action | 다음 독서 행동 | 다음 업무 행동 |
| Tone | 친근함 | 명확함 |
| 예외 처리 | 숨김 | 필요 시 펼침 |

---

# 39. 핵심 Design Principles

1. **내부 DB 구조를 사용자에게 보여주지 않는다.**
2. **메뉴보다 현재 대상과 다음 행동을 우선한다.**
3. **Global / Local / Holding 차이는 필요한 순간에만 보여준다.**
4. **정상 흐름은 짧게, 예외는 필요할 때 펼친다.**
5. **현재 State를 먼저 보여주고 Event는 이력으로 보여준다.**
6. **Reader 화면은 책과 독서 흐름을 중심으로 한다.**
7. **Backend 화면은 업무 Queue와 현재 상태를 중심으로 한다.**
8. **색은 상태를 보조하지만 의미를 대신하지 않는다.**
9. **Reader와 Backend는 정보 밀도는 달라도 하나의 Design System을 공유한다.**
10. **Simple by default, detailed when needed.**

---

# 40. 한 문장 정리

> **Reader UI는 책과 독서 경험을 앞에 두고 시스템을 뒤로 숨기며, Library Backend는 현재 업무 상태와 다음 행동을 명확하게 보여주되, 두 영역 모두 동일한 디자인 시스템 안에서 단순한 기본 흐름과 필요할 때만 펼쳐지는 상세 기능을 제공한다.**
