// Reader 메인 메뉴 (docs 12 / 21) — Bottom Navigation 5개 기본
export interface MenuItem {
  key: string;
  label: string;
  to: string;
  icon: string; // 아이콘 키 (AppIcon 참조)
}

export const readerMenu: MenuItem[] = [
  { key: "home", label: "홈", to: "/", icon: "home" },
  { key: "search", label: "검색", to: "/search", icon: "search" },
  { key: "library", label: "나의 서재", to: "/library", icon: "book" },
  { key: "activity", label: "활동", to: "/activity", icon: "activity" },
  { key: "me", label: "나", to: "/me", icon: "user" },
];
