import { useRef } from "react";
import { images } from "../data/images";
import { useTranslation } from "react-i18next";

export default function GallerySection() {
  const scrollRef = useRef(null);
  const { t } = useTranslation();

  const scroll = (direction) => {
    const scrollAmount = 260; // ระยะเลื่อนต่อคลิก
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-6 relative">

        <h2 className="text-2xl font-semibold text-center mb-8">
          {t("latestActivity")}
        </h2>

        {/* Left Arrow */}
        <button
          onClick={() => scroll("left")}
          className="
            absolute left-0 top-1/2 -translate-y-1/2
            z-10
            bg-white shadow-md
            w-10 h-10
            rounded-full
            flex items-center justify-center
            hover:bg-gray-100
          "
        >
          ‹
        </button>

        {/* Right Arrow */}
        <button
          onClick={() => scroll("right")}
          className="
            absolute right-0 top-1/2 -translate-y-1/2
            z-10
            bg-white shadow-md
            w-10 h-10
            rounded-full
            flex items-center justify-center
            hover:bg-gray-100
          "
        >
          ›
        </button>

        {/* Gallery */}
        <div
          ref={scrollRef}
          className="
            flex gap-6
            overflow-hidden
            px-12
          "
        >
          {images.map((image) => (
            <div
              key={image.id}
              className="
                shrink-0
                w-56
                bg-white
                rounded-2xl
                shadow-sm
              "
            >
              <div className="aspect-square overflow-hidden rounded-2xl">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
