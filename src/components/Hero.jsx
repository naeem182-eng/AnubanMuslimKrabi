import { useTranslation } from "react-i18next";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="w-full h-[80vh] relative mt-[72px]">
      <img
        src="/hero.jpg"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/40"></div>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
        <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg">
          {t("schoolName")}
        </h1>

        <p className="mt-4 text-lg md:text-2xl font-light max-w-2xl">
          {t("schoolSlogan")}
        </p>

        <div className="mt-8 flex gap-4">
          <a className="px-6 py-3 bg-amber-500 text-white rounded-lg text-lg shadow-md">
            {t("viewSchool")}
          </a>
          <a className="px-6 py-3 bg-white text-gray-700 rounded-lg text-lg shadow-md">
            {t("apply")}
          </a>
        </div>
      </div>
    </section>
  );
}
