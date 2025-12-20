import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";


export default function Footer() {
    const { t } = useTranslation();
  return (
    <footer className="bg-[#e1b59b] text-white py-12">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* Left section */}
        <div>
          <h3 className="text-lg font-semibold mb-6">
            {t("about")}
          </h3>

          <ul className="space-y-4">
            <li className="flex items-center gap-3">
              <img src="https://upload.wikimedia.org/wikipedia/commons/2/2e/LINE_New_App_Icon_%282020-12%29.png" alt="LINE" className="w-8 h-8" />
              <span>087 902 4963</span>
            </li>

            <li className="flex items-center gap-3">
              <img src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png" alt="YouTube" className="w-8 h-8" />
              <span>Anuban Muslim Krabi Channel</span>
            </li>

            <li className="flex items-center gap-3">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/250px-Facebook_Logo_%282019%29.png" alt="Facebook" className="w-8 h-8" />
              <a href="https://www.facebook.com/AnubanMuslimKrabiSchool/?locale=th_TH">
                {t("schoolName")}
              </a>
            </li>
          </ul>
        </div>

        {/* Right section */}
        <div>
          <h3 className="text-lg font-semibold mb-6">
            {t("contact")}
          </h3>
          <p className="leading-relaxed">
            {t("schoolName")}<br />
          </p>
          <p className="leading-relaxed">
            {t("address")}
          </p>

          <p className="mt-4">
            <a href="https://maps.app.goo.gl/LW74kDksanPhupwL6">🗺️{t("googleMap")}</a>
          </p>

          <p className="mt-4">
            E-mail :
            <a
              href="k.anantaya@gmail.com"
              className="underline"
            >k.anantaya@gmail.com
            </a>
          </p>
        </div>

      </div>
    </footer>
  );
}
