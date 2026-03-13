import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Play } from "lucide-react";

import thumbnail1 from "../assets/3945.jpg";
import thumbnail2 from "../assets/3947.jpg";
import thumbnail3 from "../assets/Untitled-1.jpg";
import thumbnail4 from "../assets/Thumbnail 2.jpg";
import thumbnail5 from "../assets/394.jpg";
import thumbnail6 from "../assets/39.jpg";

import video1 from "../assets/video/Highlight_1.mp4";

import video2 from "../assets/video/high-energy-fitness-racing-promo-video.mp4.mp4";
import video3 from "../assets/video/WIN OVER A NARCISSIST.mp4";
import video4 from "../assets/video/Lyric Video 4.mp4";

const thumbnails = [
  { title: "Gaming Thumbnail", category: "YouTube", img: thumbnail1 },
  { title: "Tech Review", category: "YouTube", img: thumbnail2 },
  { title: "Podcast Cover", category: "Podcast", img: thumbnail3 },
  { title: "Vlog Thumbnail", category: "YouTube", img: thumbnail4 },
  { title: "Music Video", category: "Music", img: thumbnail5 },
  { title: "Tutorial Series", category: "Education", img: thumbnail6 },
];

const videoEdits = [
  { title: "Brand Commercial", duration: "6:05", video: video1 },
  { title: "Music Video Edit", duration: "1:15", video: video2 },
  { title: "Product Launch", duration: "0:51", video: video3 },
  { title: "Social Media Reel", duration: "3:24 ", video: video4 },
];

const PortfolioSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const [hoveredThumb, setHoveredThumb] = useState<number | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  return (
    <section id="work" className="pb-32 pt-24 px-4 relative">
      <div
        className="absolute top-0 left-1/3 w-[500px] h-[500px] rounded-full opacity-10 blur-[150px]"
        style={{ background: "hsl(var(--gradient-start))" }}
      />

      <div ref={ref} className="max-w-6xl mx-auto">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Graphic's Design</span>
          </h2>

          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-body">
            Thumbnails and video edits that drive engagement
          </p>
        </motion.div>

        {/* THUMBNAILS */}
        <div className="mb-20">
          <h3 className="font-display text-2xl font-semibold mb-8 gradient-text">
            Most Popular
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {thumbnails.map((thumb, i) => (
              <motion.div
                key={thumb.title}
                initial={{ opacity: 0, y: 30, rotate: -2 }}
                animate={inView ? { opacity: 1, y: 0, rotate: 0 } : {}}
                transition={{ delay: i * 0.1, type: "spring", stiffness: 100 }}
                whileHover={{ scale: 1.05, rotate: 1 }}
                onHoverStart={() => setHoveredThumb(i)}
                onHoverEnd={() => setHoveredThumb(null)}
                onClick={() => setSelectedImage(thumb.img)}
                className="relative aspect-video glass-card overflow-hidden rounded-xl cursor-pointer group"
              >
                <img
                  src={thumb.img}
                  alt={thumb.title}
                  className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-300"
                />

                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-lg font-semibold text-transparent group-hover:text-white transition duration-300">
                    {thumb.category}
                  </p>
                </div>

                <motion.div
                  className="absolute inset-0 bg-black/60"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredThumb === i ? 1 : 0 }}
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* VIDEO HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold gradient-text underline">
            VIDEO'S
          </h2>
        </motion.div>

        {/* VIDEO CARDS */}
        <div>
          <h3 className="font-display text-2xl font-semibold mt-20 mb-8 gradient-text">
            Video Editing
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {videoEdits.map((video, i) => (
              <motion.div
                key={video.title}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.15 }}
                whileHover={{ scale: 1.03 }}
                onClick={() => setSelectedVideo(video.video)}
                className="relative aspect-video overflow-hidden rounded-xl cursor-pointer group"
              >
                {/* VIDEO PREVIEW */}
                <video
                  src={video.video}
                  muted
                  loop
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover"
                  onMouseEnter={(e) => e.currentTarget.play()}
                  onMouseLeave={(e) => {
                    e.currentTarget.pause();
                    e.currentTarget.currentTime = 0;
                  }}
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-black/40"></div>

                {/* PLAY BUTTON */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur flex items-center justify-center">
                    <Play className="w-6 h-6 text-white ml-1" />
                  </div>
                </div>

                {/* TITLE */}
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                  <p className="font-semibold text-white">{video.title}</p>

                  <span className="text-xs bg-black/60 px-2 py-1 rounded text-white">
                    {video.duration}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* IMAGE MODAL */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            className="max-w-[90%] max-h-[90%] rounded-xl"
          />
        </div>
      )}

      {/* VIDEO MODAL */}
      {selectedVideo && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
          onClick={() => setSelectedVideo(null)}
        >
          <video
            src={selectedVideo}
            controls
            autoPlay
            className="max-w-[90%] max-h-[90%] rounded-xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default PortfolioSection;
