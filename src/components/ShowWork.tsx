import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { 
  Play, 
  Palette,
  ArrowRight,
  Search
} from "lucide-react";

// --- Data ---
const VIDEO_WORK = [
  {
    id: 1,
    title: "Social Reel 01",
    category: "Reel",
    thumbnail: "https://img.youtube.com/vi/ZSSCOZ4jfNY/maxresdefault.jpg",
    videoUrl: "https://youtube.com/shorts/ZSSCOZ4jfNY?feature=share",
  },
  {
    id: 2,
    title: "Cinematic Landscape",
    category: "Cinematic",
    thumbnail: "https://img.youtube.com/vi/ysrGvz16ezI/maxresdefault.jpg",
    videoUrl: "https://youtube.com/shorts/ysrGvz16ezI?feature=share",
  },
  {
    id: 3,
    title: "Product Commercial",
    category: "Commercial",
    thumbnail: "https://img.youtube.com/vi/8ZPgg-0yEAI/maxresdefault.jpg",
    videoUrl: "https://youtube.com/shorts/8ZPgg-0yEAI?feature=share",
  },
  {
    id: 4,
    title: "Artist Spotlight",
    category: "Documentary",
    thumbnail: "https://img.youtube.com/vi/BDc4Lnitkcg/maxresdefault.jpg",
    videoUrl: "https://youtube.com/shorts/BDc4Lnitkcg?feature=share",
  },
  {
    id: 5,
    title: "Music Visualizer",
    category: "Music",
    thumbnail: "https://img.youtube.com/vi/0hp5rbId7oY/maxresdefault.jpg",
    videoUrl: "https://youtu.be/0hp5rbId7oY",
  },
  {
    id: 6,
    title: "Travel Story",
    category: "Reel",
    thumbnail: "https://img.youtube.com/vi/B0NTl7bELbg/maxresdefault.jpg",
    videoUrl: "https://youtu.be/B0NTl7bELbg",
  },
  {
    id: 7,
    title: "Brand Narrative",
    category: "Corporate",
    thumbnail: "https://img.youtube.com/vi/RMzfx2R56QQ/maxresdefault.jpg",
    videoUrl: "https://youtu.be/RMzfx2R56QQ",
  },
  {
    id: 8,
    title: "Short Film Promo",
    category: "Motion",
    thumbnail: "https://img.youtube.com/vi/Ul87MLAgJPY/maxresdefault.jpg",
    videoUrl: "https://youtu.be/Ul87MLAgJPY",
  },

  // More Data

  {
    id: 9,
    title: "Urban Motion",
    category: "Cinematic",
    thumbnail: "https://img.youtube.com/vi/jNQXAC9IVRw/maxresdefault.jpg",
    videoUrl: "https://youtu.be/jNQXAC9IVRw",
  },
  {
    id: 10,
    title: "Creative Edit",
    category: "Editing",
    thumbnail: "https://img.youtube.com/vi/ScMzIvxBSi4/maxresdefault.jpg",
    videoUrl: "https://youtu.be/ScMzIvxBSi4",
  },
  {
    id: 11,
    title: "Motion Graphics",
    category: "Motion",
    thumbnail: "https://img.youtube.com/vi/tgbNymZ7vqY/maxresdefault.jpg",
    videoUrl: "https://youtu.be/tgbNymZ7vqY",
  },
  {
    id: 12,
    title: "Street Photography Reel",
    category: "Reel",
    thumbnail: "https://img.youtube.com/vi/kXYiU_JCYtU/maxresdefault.jpg",
    videoUrl: "https://youtu.be/kXYiU_JCYtU",
  },
  {
    id: 13,
    title: "Luxury Product Ad",
    category: "Commercial",
    thumbnail: "https://img.youtube.com/vi/aqz-KE-bpKQ/maxresdefault.jpg",
    videoUrl: "https://youtu.be/aqz-KE-bpKQ",
  },
  {
    id: 14,
    title: "Modern Branding",
    category: "Corporate",
    thumbnail: "https://img.youtube.com/vi/ysz5S6PUM-U/maxresdefault.jpg",
    videoUrl: "https://youtu.be/ysz5S6PUM-U",
  },
  {
    id: 15,
    title: "Dynamic Trailer",
    category: "Trailer",
    thumbnail: "https://img.youtube.com/vi/LXb3EKWsInQ/maxresdefault.jpg",
    videoUrl: "https://youtu.be/LXb3EKWsInQ",
  },
  {
    id: 16,
    title: "Creative Portfolio",
    category: "Portfolio",
    thumbnail: "https://img.youtube.com/vi/e-ORhEE9VVg/maxresdefault.jpg",
    videoUrl: "https://youtu.be/e-ORhEE9VVg",
  },
  {
    id: 17,
    title: "Minimal Animation",
    category: "Animation",
    thumbnail: "https://img.youtube.com/vi/fLexgOxsZu0/maxresdefault.jpg",
    videoUrl: "https://youtu.be/fLexgOxsZu0",
  },
  {
    id: 18,
    title: "Visual Storytelling",
    category: "Story",
    thumbnail: "https://img.youtube.com/vi/C0DPdy98e4c/maxresdefault.jpg",
    videoUrl: "https://youtu.be/C0DPdy98e4c",
  },
  {
    id: 19,
    title: "Night Drive",
    category: "Cinematic",
    thumbnail: "https://img.youtube.com/vi/hTWKbfoikeg/maxresdefault.jpg",
    videoUrl: "https://youtu.be/hTWKbfoikeg",
  },
  {
    id: 20,
    title: "Creative Vlog",
    category: "Vlog",
    thumbnail: "https://img.youtube.com/vi/3JZ_D3ELwOQ/maxresdefault.jpg",
    videoUrl: "https://youtu.be/3JZ_D3ELwOQ",
  },
];

const DESIGN_WORK = [
  { id: 1, title: "Brand Identity", category: "Design", thumbnail: "https://res.cloudinary.com/dydo0ncjr/image/upload/v1776112560/Untitled-1_n7wjuj.jpg" },

  { id: 2, title: "Abstract Shapes", category: "Design", thumbnail: "https://res.cloudinary.com/dydo0ncjr/image/upload/v1776112559/Linked_In_banner_jeuimk.jpg" },

  { id: 3, title: "Minimal UI", category: "Design", thumbnail: "https://res.cloudinary.com/dydo0ncjr/image/upload/v1776112573/You_Tube_Banner_omoqmz.jpg" },

  { id: 4, title: "Typography", category: "Design", thumbnail: "https://res.cloudinary.com/dydo0ncjr/image/upload/v1778942499/Test_Work_ugxojk.jpg" },

  { id: 5, title: "Visual Story", category: "Design", thumbnail: "https://res.cloudinary.com/dydo0ncjr/image/upload/v1776112561/Untitled-2_hjj2m4.jpg" },

  { id: 6, title: "App Interface", category: "Design", thumbnail: "https://res.cloudinary.com/dydo0ncjr/image/upload/v1776112559/COVER_kthlvp.jpg" },

  { id: 7, title: "Poster Concept", category: "Design", thumbnail: "https://res.cloudinary.com/dydo0ncjr/image/upload/v1776112559/Linked_In_banner_jeuimk.jpg" },

  { id: 8, title: "Brand Guidelines", category: "Design", thumbnail: "https://res.cloudinary.com/dydo0ncjr/image/upload/v1776112560/Untitled-1_n7wjuj.jpg" },

  { id: 9, title: "Creative Layout", category: "Design", thumbnail: "https://res.cloudinary.com/dydo0ncjr/image/upload/v1776112561/Untitled-2_hjj2m4.jpg" },

  { id: 10, title: "Creative Layout", category: "Design", thumbnail: "https://res.cloudinary.com/dydo0ncjr/image/upload/v1776112573/You_Tube_Banner_omoqmz.jpg" },

  { id: 11, title: "Creative Layout", category: "Design", thumbnail: "https://res.cloudinary.com/dydo0ncjr/image/upload/v1776112559/COVER_kthlvp.jpg" },

  { id: 12, title: "Creative Layout", category: "Design", thumbnail: "https://res.cloudinary.com/dydo0ncjr/image/upload/v1778942499/Test_Work_ugxojk.jpg" },

  { id: 13, title: "Creative Layout", category: "Design", thumbnail: "https://res.cloudinary.com/dydo0ncjr/image/upload/v1776112559/Linked_In_banner_jeuimk.jpg" },

  { id: 14, title: "Creative Layout", category: "Design", thumbnail: "https://res.cloudinary.com/dydo0ncjr/image/upload/v1776112561/Untitled-2_hjj2m4.jpg" },

  { id: 15, title: "Creative Layout", category: "Design", thumbnail: "https://res.cloudinary.com/dydo0ncjr/image/upload/v1776112560/Untitled-1_n7wjuj.jpg" },

  { id: 16, title: "Creative Layout", category: "Design", thumbnail: "https://res.cloudinary.com/dydo0ncjr/image/upload/v1776112559/COVER_kthlvp.jpg" },

  { id: 17, title: "Creative Layout", category: "Design", thumbnail: "https://res.cloudinary.com/dydo0ncjr/image/upload/v1776112573/You_Tube_Banner_omoqmz.jpg" },

  { id: 18, title: "Creative Layout", category: "Design", thumbnail: "https://res.cloudinary.com/dydo0ncjr/image/upload/v1778942499/Test_Work_ugxojk.jpg" },

  { id: 19, title: "Creative Layout", category: "Design", thumbnail: "https://res.cloudinary.com/dydo0ncjr/image/upload/v1776112559/Linked_In_banner_jeuimk.jpg" },

  { id: 20, title: "Creative Layout", category: "Design", thumbnail: "https://res.cloudinary.com/dydo0ncjr/image/upload/v1776112561/Untitled-2_hjj2m4.jpg" },

  { id: 21, title: "Creative Layout", category: "Design", thumbnail: "https://res.cloudinary.com/dydo0ncjr/image/upload/v1776112573/You_Tube_Banner_omoqmz.jpg" },

  { id: 22, title: "Creative Layout", category: "Design", thumbnail: "https://res.cloudinary.com/dydo0ncjr/image/upload/v1776112559/COVER_kthlvp.jpg" },

  { id: 23, title: "Creative Layout", category: "Design", thumbnail: "https://res.cloudinary.com/dydo0ncjr/image/upload/v1776112560/Untitled-1_n7wjuj.jpg" },

  { id: 24, title: "Creative Layout", category: "Design", thumbnail: "https://res.cloudinary.com/dydo0ncjr/image/upload/v1778942499/Test_Work_ugxojk.jpg" },

  { id: 25, title: "Creative Layout", category: "Design", thumbnail: "https://res.cloudinary.com/dydo0ncjr/image/upload/v1776112561/Untitled-2_hjj2m4.jpg" },
];

function getAspectRatio(category: string) {
  const cat = category.toLowerCase();
  if (cat.includes('reel') || cat.includes('story') || cat.includes('shorts')) return "aspect-[9/16]";
  if (cat.includes('cinematic') || cat.includes('trailer') || cat.includes('commercial')) return "aspect-video";
  return "aspect-square";
}

function GridLoader() {
  return (
    <div className="w-full py-32 flex flex-col items-center justify-center space-y-6">
      <div className="relative w-64 h-1 bg-zinc-900 overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-accent-red"
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
      <div className="mono text-[10px] text-accent-red uppercase animate-pulse">
        Initializing_Data_Stream...
      </div>
    </div>
  );
}

function MasonryGrid({ items, isVideo = false }: { items: any[], isVideo?: boolean }) {
  const handleItemClick = (url: string | undefined) => {
    if (url) window.open(url, '_blank');
  };

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8">
        {items.map((item, index) => (
          <motion.div 
            key={item.id}
            className="relative group overflow-hidden bg-zinc-900 border border-zinc-800 break-inside-avoid cursor-pointer"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.05 }}
            whileHover={{ y: -5 }}
            onClick={() => isVideo && handleItemClick(item.videoUrl)}
          >
            <div className={`relative w-full overflow-hidden ${isVideo ? getAspectRatio(item.category) : 'aspect-auto'}`}>
              <img 
                src={item.thumbnail} 
                alt={item.title}
                className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              {/* Scanline effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-red/5 to-transparent h-20 w-full top-[-20%] group-hover:animate-[scanline_2s_linear_infinite] pointer-events-none opacity-0 group-hover:opacity-100" />
            </div>
            
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
              <div className="flex justify-between items-end">
                <div>
                  <span className="text-[10px] mono text-accent-red uppercase tracking-[0.2em] mb-1 block">
                    {item.category}
                  </span>
                  <h3 className="text-white font-bold text-xl uppercase tracking-tighter">
                    {item.title}
                  </h3>
                </div>
                <div className="w-10 h-10 border border-white/20 flex items-center justify-center bg-white/5 backdrop-blur-md">
                  {isVideo ? <Play size={16} className="fill-white" /> : <Search size={16} />}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default function ShowWork() {
  const [activeTab, setActiveTab] = useState<'video' | 'design'>('video');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, [activeTab]);

  return (
    <section id="work" className="min-h-screen bg-[#050505] pt-32 pb-20 overflow-hidden relative">
      <div className="container mx-auto px-6 mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <div className="mono text-accent-red text-xs uppercase tracking-[0.4em] mb-4">
              {" >> "}SELECTED_ASSETS_V2
            </div>
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter serif leading-[0.8] mb-2">
              The <span className="text-accent-red">Archive</span>
            </h2>
            <p className="text-gray-500 mono text-[10px] uppercase max-w-[300px] leading-relaxed">
              A curated selection of high-end motion artifacts and visual identity systems.
            </p>
          </div>

          <div className="flex bg-[#0a0a0a] border border-[#222] p-1 self-start">
            <button 
              onClick={() => setActiveTab('video')}
              className={`flex items-center gap-2 px-6 py-2 mono text-xs uppercase transition-all duration-300 ${
                activeTab === 'video' 
                  ? 'bg-accent-red text-white' 
                  : 'text-gray-500 hover:text-white'
              }`}
            >
              <Play size={12} className={activeTab === 'video' ? 'fill-current' : ''} />
              Video
            </button>
            <button 
              onClick={() => setActiveTab('design')}
              className={`flex items-center gap-2 px-6 py-2 mono text-xs uppercase transition-all duration-300 ${
                activeTab === 'design' 
                  ? 'bg-accent-red text-white' 
                  : 'text-gray-500 hover:text-white'
              }`}
            >
              <Palette size={12} />
              Design
            </button>
          </div>
        </div>
      </div>

      <div className="relative min-h-[400px]">
        <AnimatePresence mode="wait">
          {loading ? (
            <motion.div
              key="loader"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <GridLoader />
            </motion.div>
          ) : (
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
            >
              {activeTab === 'video' ? (
                <MasonryGrid items={VIDEO_WORK} isVideo={true} />
              ) : (
                <MasonryGrid items={DESIGN_WORK} />
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="container mx-auto px-6 mt-12 flex justify-center">
        <motion.button
          className="flex items-center gap-4 group px-8 py-4 border border-[#222] hover:border-accent-red transition-colors"
          whileHover={{ x: 5 }}
        >
          <span className="text-[10px] mono text-gray-500 group-hover:text-white uppercase tracking-[0.3em]">Load Next Evidence</span>
          <ArrowRight className="w-4 h-4 text-accent-red" />
        </motion.button>
      </div>
    </section>
  );
}
