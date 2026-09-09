// Platform Operator 사이드바 메뉴 (docs 23 / 24 Sitemap)
export interface MenuItem {
  key: string;
  label: string;
  to: string;
  icon: string;
}

export const managerMenu: MenuItem[] = [
  { key: "global", label: "Global Book", to: "/", icon: "global" },
  { key: "pending", label: "임시 Book 검토", to: "/pending", icon: "alert" },
  { key: "edition", label: "Edition History", to: "/edition", icon: "book" },
  { key: "authority", label: "저자 / 주제", to: "/authority", icon: "users" },
  { key: "merge", label: "Merge / Split", to: "/merge", icon: "split" },
  { key: "external", label: "외부 데이터 / MARC", to: "/external", icon: "import" },
  { key: "libraries", label: "도서관 관리", to: "/libraries", icon: "building" },
  { key: "stats", label: "운영 통계", to: "/stats", icon: "chart" },
  { key: "settings", label: "시스템 설정", to: "/settings", icon: "settings" },
];
