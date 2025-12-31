import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

export default function Navbar() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <nav className=" fixed top-0 left-0 w-full bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img src="/logo.jpg" alt="Logo" className="w-12 h-12" />
          <span className="text-xl font-semibold">{t("schoolName")}</span>
        </Link>

        {/* Menu */}
        <ul className="hidden md:flex gap-8 text-lg font-light">
          <Link to="/" className="hover:text-amber-600">{t("home")}</Link>
          <a href="#about-us" className="hover:text-amber-600">{t("about")}</a>
          <Link to="/admissions"  className="hover:text-amber-600">{t("admissions")}</Link>
          <a href="#about-us"  className="hover:text-amber-600">{t("contact")}</a>
        </ul>

        {/* Language Dropdown */}
        <div className="relative">
          <select
            onChange={(e) => changeLanguage(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-1 bg-white"
            defaultValue={i18n.language}
          >
            <option value="th">TH ไทย</option>
            <option value="en">EN English</option>
            {/* เพิ่มภาษาในอนาคตตรงนี้ เช่น */}
            {/* <option value="ar">🇸🇦 Arabic</option> */}
          </select>
        </div>
      </div>
    </nav>
  );
}
