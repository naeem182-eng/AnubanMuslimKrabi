import { useRef } from "react";
import { videos } from "../data/videos";
import { useTranslation } from "react-i18next";

export default function VideoSection() {
  const scrollRef = useRef(null);
  const { t } = useTranslation();

  const scroll = (direction) => {
    const scrollAmount = 360;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-6 relative">

        <h2 className="text-2xl font-semibold text-center mb-8">
          {t("video")}
        </h2>

        {/* left Arrows */}
        <button
  onClick={() => scroll("left")}
  className="
    hidden md:flex
    absolute left-0 top-1/2 -translate-y-1/2
    z-10
    bg-white
    w-10 h-10
    rounded-full
    shadow
    items-center justify-center
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
    bg-white
    w-10 h-10
    rounded-full
    shadow
    items-center justify-center
  "
>
  ›
</button>


        {/* Videos */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-hidden overflow-x-auto no-scrollbar px-12"
        >
          {videos.map(video => (
            <div
              key={video.id}
              className="
                shrink-0
                w-[360px]
                bg-white
                rounded-2xl
                shadow-sm
              "
            >
              <div className="aspect-video">
                <iframe
                  src={video.embedUrl}
                  title={video.title}
                  className="w-full h-full"
                  allowFullScreen
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

