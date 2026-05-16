import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

type Item = {
  video: string;
};

type Category = {
  name: string;
  items: Item[];
};

const categories: Category[] = [
  {
    name: "Social Media Reels",
    items: [
      { video: "https://youtube.com/shorts/1pzJxAmL06k" },
      { video: "https://youtube.com/shorts/3i22i3KZf_4" },
      { video: "https://youtube.com/shorts/w0PKqvgdUWI" },
      { video: "https://youtube.com/shorts/cvxru314dOA" },
      { video: "https://youtube.com/shorts/GJeyBsi1i74" },
      { video: "https://youtube.com/shorts/gwy_RVUOBdM" },
    ],
  },
  {
    name: "2D Motion AB",
    items: [
      { video: "https://youtube.com/shorts/ZSSCOZ4jfNY" },
      { video: "https://youtube.com/shorts/ysrGvz16ezI" },
      { video: "https://youtube.com/shorts/8ZPgg-0yEAI" },
      { video: "https://youtube.com/shorts/BDc4Lnitkcg" },
    ],
  },
  {
    name: "Music & Lyrics",
    items: [
      { video: "https://youtu.be/2HQqQ-NdVco" },
      { video: "https://youtu.be/07XWPgvLAlQ" },
      { video: "https://youtu.be/PMU2wNVj7DY" },
      { video: "https://youtu.be/51eOiTEq8Us" },
      { video: "https://youtu.be/3b1N2Qi-Lp0" },
    ],
  },
  {
    name: "Promotionals",
    items: [{ video: "https://youtu.be/0hp5rbId7oY" }],
  },
];

// 🔥 Extract YouTube ID safely
const getVideoId = (url: string) => {
  if (url.includes("shorts")) return url.split("/shorts/")[1].split("?")[0];
  if (url.includes("youtu.be")) return url.split("youtu.be/")[1].split("?")[0];
  if (url.includes("watch?v=")) return url.split("v=")[1].split("&")[0];
  return "";
};

const EditingSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const [active, setActive] = useState(0);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [tabLoading, setTabLoading] = useState(false);

  const handleTabChange = (i: number) => {
    if (i === active) return;
    setTabLoading(true);
    setActive(i);
    setTimeout(() => setTabLoading(false), 500);
  };

  return (
    <section className="pb-32 pt-28 px-4">
      <div ref={ref} className="max-w-6xl mx-auto">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="gradient-text">Video's and Motion's</span>
          </h2>
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          {categories.map((cat, i) => (
            <button
              key={cat.name}
              onClick={() => handleTabChange(i)}
              className={`px-5 py-2 rounded-full transition ${
                active === i
                  ? "bg-white text-black"
                  : "bg-muted text-muted-foreground"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="min-h-[400px]">
          {tabLoading ? (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="aspect-square bg-muted animate-pulse rounded-xl"
                />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {categories[active].items.map((item, i) => {
                const videoId = getVideoId(item.video);

                return (
                  <div
                    key={i}
                    onClick={() => setSelectedVideo(item.video)}
                    className="cursor-pointer"
                  >
                    <div className="relative aspect-square rounded-xl overflow-hidden">
                      {/* Thumbnail */}
                      <img
                        src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
                        className="w-full h-full object-cover"
                      />

                      {/* Play Icon */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-black/60 text-white w-12 h-12 rounded-full flex items-center justify-center">
                          ▶
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* 🔥 MODAL */}
      {selectedVideo && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={() => setSelectedVideo(null)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative max-w-4xl w-full p-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute top-4 right-4 bg-black/60 text-white w-10 h-10 rounded-full"
            >
              ✕
            </button>

            {/* Video */}
            <iframe
              src={`https://www.youtube.com/embed/${getVideoId(selectedVideo)}?autoplay=1&mute=0&loop=1&playlist=${getVideoId(selectedVideo)}`}
              className="w-full h-[70vh] rounded-xl"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default EditingSection;
