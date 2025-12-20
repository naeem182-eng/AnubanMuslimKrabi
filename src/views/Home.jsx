import Hero from "../components/Hero";
import GallerySection from "../components/GallerySection";
import VideoSection from "../components/VideoSection";

export default function Home() {
  return (
    <>
      <Hero />
      <GallerySection />
      <VideoSection />

      {/* <div className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-semibold mb-6 font-serif">
          ข่าวสารและกิจกรรมล่าสุด
        </h2>
        <p className="text-gray-600">
          (ตรงนี้จะเพิ่ม Section ข่าว + แกลเลอรี ใน version ถัดไป)
        </p>
      </div> */}
    </>
  );
}
