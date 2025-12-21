import { useRef } from "react";
import { images } from "../data/images";
import { useTranslation } from "react-i18next";
import { useState } from "react";

export default function GallerySection() {
  const scrollRef = useRef(null);
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(null);

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
    hidden md:flex
    absolute left-0 top-1/2 -translate-y-1/2
    z-10
    bg-white shadow-md
    w-10 h-10
    rounded-full
    items-center justify-center
    hover:bg-gray-100
  "
>
  ‹
</button>

{/* Right Arrow */}
<button
  onClick={() => scroll("right")}
  className="
    hidden md:flex
    absolute right-0 top-1/2 -translate-y-1/2
    z-10
    bg-white shadow-md
    w-10 h-10
    rounded-full
    items-center justify-center
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
            overflow-x-auto
            no-scrollbar
            px-12
          "
        >
          {images.map((image, index) => (
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
                <img onClick={() => setActiveIndex(index)}
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover cursor-pointer"
                />
              </div>
            </div>
          ))}

        {/*Modal Viewer*/}
        </div>
        {activeIndex !== null && (
          <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center"
          onClick={() => setActiveIndex(null)}>

          {/* Content wrapper */}
          <div
          className="relative flex items-center justify-center"
          onClick={(e) => e.stopPropagation()} // ❗ กันเด้งทั้งหมด
          >

          {/* Close */}
          <button onClick={() => setActiveIndex(null)} className="absolute top-4 right-4 text-white text-3xl" > ✕
            </button>

          {/* Prev */}
          {activeIndex > 0 && ( <button onClick={() => setActiveIndex(activeIndex - 1)} className="absolute left-4 text-white text-4xl" > ‹ </button>
           )}

          {/* Image */}
          <img src={images[activeIndex].src}
          className="max-h-[90vh] max-w-[90vw] rounded-xl" />

          {/* Next */}
          {activeIndex < images.length - 1 && ( <button onClick={() => setActiveIndex(activeIndex + 1)} className="absolute right-4 text-white text-4xl" > › </button> 
          )}
        </div>
      </div>
      )}</div>
    </section>
  );
}
