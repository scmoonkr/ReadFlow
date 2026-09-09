// Library Backend 사이드바 메뉴 (docs 22 / style 22)
export interface MenuItem {
  key: string;
  label: string;
  to: string;
  icon: string;
}

export const libraryMenu: MenuItem[] = [
  { key: "today", label: "오늘", to: "/", icon: "today" },
  { key: "books", label: "책", to: "/books", icon: "book" },
  { key: "holdings", label: "소장", to: "/holdings", icon: "layers" },
  { key: "circulation", label: "대출·반납", to: "/circulation", icon: "swap" },
  { key: "members", label: "회원", to: "/members", icon: "users" },
  { key: "acquisition", label: "수서", to: "/acquisition", icon: "cart" },
  { key: "programs", label: "프로그램", to: "/programs", icon: "calendar" },
  { key: "stats", label: "통계", to: "/stats", icon: "chart" },
  { key: "admin", label: "관리", to: "/admin", icon: "settings" },
];
