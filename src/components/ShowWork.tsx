import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Play,
  Palette,
  X,
} from "lucide-react";
import { VIDEO_WORK, DESIGN_WORK, WorkItem } from "./constants";

function getAspectRatio(item: any) {
  const cat = item.category.toLowerCase();
  const url = (item.videoUrl || "").toLowerCase();

  if (
    cat.includes("reel") ||
    cat.includes("short") ||
    url.includes("shorts")
  ) {
    return "aspect-[9/16]";
  }

  if (
    cat.includes("video") ||
    cat.includes("cinematic") ||
    url.includes("youtu.be") ||
    url.includes("watch")
  ) {
    return "aspect-video";
  }

  return "aspect-square";
}

// Convert youtube url to embed
function getEmbedUrl(url: string) {
  if (url.includes("shorts")) {
    const id = url.split("/shorts/")[1]?.split("?")[0];
    return `https://www.youtube.com/embed/${id}?autoplay=1&mute=1`;
  }

  if (url.includes("youtu.be")) {
    const id = url.split("youtu.be/")[1]?.split("?")[0];
    return `https://www.youtube.com/embed/${id}?autoplay=1&mute=1`;
  }

  return url;
}

function MasonryGrid({
  items,
  isVideo = false,
}: {
  items: WorkItem[];
  isVideo?: boolean;
}) {
  const [hoveredVideo, setHoveredVideo] = useState<number | null>(null);
  const [selectedItem, setSelectedItem] = useState<WorkItem | null>(null);

  return (
    <>
      <div className="container mx-auto px-6 py-12">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8">
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              className="relative group overflow-hidden bg-zinc-900 border border-zinc-800 break-inside-avoid  rounded-2xl"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              whileHover={{ y: -5 }}
              onMouseEnter={() => isVideo && setHoveredVideo(item.id)}
              onMouseLeave={() => isVideo && setHoveredVideo(null)}
              onClick={() => setSelectedItem(item)}
            >
              <div
                className={`relative w-full overflow-hidden ${
                  isVideo ? getAspectRatio(item) : "aspect-auto"
                }`}
              >
                {/* Hover Video */}
                {isVideo && hoveredVideo === item.id ? (
                  <iframe
                    src={getEmbedUrl(item.videoUrl || "")}
                    className="w-full h-full absolute inset-0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                  />
                ) : (
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-full h-full object-cover transition-all duration-700 grayscale-[0.6] group-hover:grayscale-0 scale-100 group-hover:scale-105"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                )}

                {/* Overlay */}
                {/* <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                  {isVideo && (
                    <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30">
                      <Play
                        size={22}
                        className="text-white fill-white ml-1"
                      />
                    </div>
                  )}
                </div> */}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            className="fixed inset-0 z-[999] bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              className="relative w-full max-w-6xl"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close */}
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute -top-14 right-0 text-white hover:text-accent-red transition z-50"
              >
                <X size={32} />
              </button>

              {/* Video Modal */}
              {selectedItem.videoUrl ? (
                <div className="aspect-video w-full overflow-hidden rounded-2xl border border-zinc-800 bg-black">
                  <iframe
                    src={getEmbedUrl(selectedItem.videoUrl)}
                    className="w-full h-full"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                  />
                </div>
              ) : (
                <img
                  src={selectedItem.thumbnail}
                  alt={selectedItem.title}
                  className="w-full max-h-[90vh] object-contain rounded-2xl"
                />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default function ShowWork() {
  const [activeTab, setActiveTab] = useState<"video" | "design">("video");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => setLoading(false), 800);

    return () => clearTimeout(timer);
  }, [activeTab]);

  return (
    <div className="min-h-screen bg-[#050505]">
      <section id="work" className="relative z-10 pt-32 pb-20 overflow-hidden">
        <div className="container mx-auto px-6 mb-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <div className="mono text-accent-red text-xs uppercase tracking-[0.4em] mb-4">
                {" >> "}SELECTED_ASSETS_V2
              </div>

              <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter serif leading-[0.8] mb-2">
                the <span className="text-accent-red">evidence</span>
              </h2>
            </div>

            <div className="flex bg-[#0a0a0a] border border-[#222] p-1 self-start">
              <button
                onClick={() => setActiveTab("video")}
                className={`flex items-center gap-2 px-6 py-2 mono text-xs uppercase transition-all duration-300 ${
                  activeTab === "video"
                    ? "bg-accent-red text-white"
                    : "text-gray-500 hover:text-white"
                }`}
              >
                <Play
                  size={12}
                  className={activeTab === "video" ? "fill-current" : ""}
                />
                Video
              </button>

              <button
                onClick={() => setActiveTab("design")}
                className={`flex items-center gap-2 px-6 py-2 mono text-xs uppercase transition-all duration-300 ${
                  activeTab === "design"
                    ? "bg-accent-red text-white"
                    : "text-gray-500 hover:text-white"
                }`}
              >
                <Palette size={12} />
                Design
              </button>
            </div>
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {activeTab === "design" ? (
              <MasonryGrid items={DESIGN_WORK} />
            ) : (
              <MasonryGrid items={VIDEO_WORK} isVideo />
            )}
          </motion.div>
        </AnimatePresence>
      </section>
    </div>
  );
}