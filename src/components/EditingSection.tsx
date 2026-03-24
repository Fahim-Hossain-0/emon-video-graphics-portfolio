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
      { video: "https://youtube.com/shorts/1pzJxAmL06k?feature=share"},
      { video: "https://youtube.com/shorts/3i22i3KZf_4?feature=share" },
      { video: "https://youtube.com/shorts/w0PKqvgdUWI?feature=share" },
      { video: "https://youtube.com/shorts/cvxru314dOA?feature=share" },
      { video: "https://youtube.com/shorts/GJeyBsi1i74?feature=share" },
      { video: "https://youtube.com/shorts/gwy_RVUOBdM?feature=share" },
    ],
  },
  {
    name: "2D Motion AB",
    items: [
      { video: "https://youtube.com/shorts/ZSSCOZ4jfNY?feature=share" },
      { video: "https://youtube.com/shorts/ysrGvz16ezI?feature=share" },
      { video: "https://youtube.com/shorts/8ZPgg-0yEAI?feature=share" },
      { video: "https://youtube.com/shorts/BDc4Lnitkcg?feature=share" },
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
    items: [
      { video: "https://youtu.be/0hp5rbId7oY" },
    ],
  },
];

// 🔥 Universal function to extract video ID
const getVideoId = (url: string) => {
  if (url.includes("shorts")) {
    return url.split("/shorts/")[1].split("?")[0];
  }
  if (url.includes("youtu.be")) {
    return url.split("youtu.be/")[1].split("?")[0];
  }
  if (url.includes("watch?v=")) {
    return url.split("v=")[1].split("&")[0];
  }
  return "";
};

const EditingSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const [active, setActive] = useState(0);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [loadingVideos, setLoadingVideos] = useState<{ [key: string]: boolean }>({});

  return (
    <section id="EditingSection" className="pb-32 pt-28 px-4 relative scroll-mt-[4.5rem]">

      <div
        className="absolute top-1/2 right-0 w-[400px] h-[400px] rounded-full opacity-10 blur-[150px]"
        style={{ background: "hsl(var(--gradient-end))" }}
      />

      <div ref={ref} className="max-w-6xl mx-auto">

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Video's and Motion's</span>
          </h2>

          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore the different areas of my creative expertise
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {categories.map((cat, i) => (
            <button
              key={cat.name}
              onClick={() => setActive(i)}
              className={`px-6 py-3 rounded-full transition-all ${
                active === i
                  ? "gradient-bg text-primary-foreground gradient-glow"
                  : "bg-muted text-muted-foreground hover:text-foreground"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <motion.div
          key={active}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {categories[active].items.map((item, i) => {
            const videoId = getVideoId(item.video);

            return (
              <motion.div
                key={i}
                onClick={() => setSelectedVideo(item.video)}
                whileHover={{ scale: 1.05 }}
                className="flex items-center justify-center cursor-pointer"
              >
                <div className="relative">

                  {/* Loader */}
                  {loadingVideos[item.video] !== false && (
                    <div className="absolute inset-0 flex items-center justify-center bg-muted rounded-xl">
                      <div className="w-6 h-6 border-2 border-gray-300 border-t-transparent rounded-full animate-spin"></div>
                    </div>
                  )}

                  {/* Thumbnail */}
                  <img
                    src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
                    onLoad={() =>
                      setLoadingVideos((prev) => ({ ...prev, [item.video]: false }))
                    }
                    className={`w-full h-full object-cover rounded-xl ${
                      loadingVideos[item.video] === false ? "opacity-100" : "opacity-0"
                    }`}
                  />

                  {/* Play Icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-black/60 text-white w-12 h-12 rounded-full flex items-center justify-center">
                      ▶
                    </div>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>

      {/* Modal */}
      {selectedVideo && (() => {
        const videoId = getVideoId(selectedVideo);

        return (
          <div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="relative max-w-4xl w-full p-4"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close */}
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute top-4 right-4 bg-black/60 text-white rounded-full w-10 h-10"
              >
                ✕
              </button>

              {/* Video */}
              <iframe
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&loop=1&playlist=${videoId}&controls=0&modestbranding=1`}
                className="w-full h-[70vh] rounded-xl"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            </motion.div>
          </div>
        );
      })()}
    </section>
  );
};

export default EditingSection;
