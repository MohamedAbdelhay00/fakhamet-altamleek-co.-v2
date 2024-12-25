const sidebarLinks = (locale: string) => [
  {
    route: `/${locale}/`,
    label: locale === "en" ? "Home" : "الرئيسية",
  },
  {
    route: `/${locale}/projects`,
    label: locale === "en" ? "Projects" : "المشاريع",
  },
  {
    route: `/${locale}/about-us`,
    label: locale === "en" ? "About Us" : "من نحن",
  },
  {
    route: `/${locale}/contact-us`,
    label: locale === "en" ? "Contact Us" : "اتصل بنا",
  },
];

export default sidebarLinks;
