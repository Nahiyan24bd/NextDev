export interface NavItem {
    title: string;
    path: string;
  }
  
  export const NAV_LINKS: NavItem[] = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { title: "Contact", path: "/contact" },
    { title: "Services", path: "/services/web-dev" },
    { title: "Blogs", path: "/blogs" },
    { title: "Foods", path: "/foods" },
  ];