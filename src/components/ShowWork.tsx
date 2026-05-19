import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Play, 
  Palette,
  ArrowRight,
  Search
} from "lucide-react";
import { VIDEO_WORK, DESIGN_WORK, WorkItem } from "./constants";

function getAspectRatio(item: any) {
  const cat = item.category.toLowerCase();
  const url = (item.videoUrl || '').toLowerCase();
  
  // Detect portrait/vertical content (Reels or Shorts)
  if (cat.includes('reel') || cat.includes('short') || url.includes('shorts')) {
    return "aspect-[9/16]";
  }
  // Detect landscape video content
  if (cat.includes('video') || cat.includes('cinematic') || url.includes('youtu.be') || url.includes('watch')) {
    return "aspect-video";
  }
  // Fallback for design or other types
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

function MasonryGrid({ items, isVideo = false }: { items: WorkItem[], isVideo?: boolean }) {
  const handleItemClick = (url: string | undefined) => {
    if (url) window.open(url, '_blank');
  };

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8">
        {items.map((item, index) => (
          <motion.div 
            key={item.id}
            className="relative group overflow-hidden bg-zinc-900 border border-zinc-800 break-inside-avoid cursor-pointer rounded-sm"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.05 }}
            whileHover={{ y: -5 }}
            onClick={() => isVideo && handleItemClick(item.videoUrl)}
          >
            <div className={`relative w-full overflow-hidden ${isVideo ? getAspectRatio(item) : 'aspect-auto'}`}>
              <img 
                src={item.thumbnail} 
                alt={item.title}
                className="w-full h-full object-cover transition-all duration-700 grayscale group-hover:grayscale-0 scale-100 group-hover:scale-105"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              {/* Scanline effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-red/5 to-transparent h-20 w-full top-[-20%] group-hover:animate-[scanline_2s_linear_infinite] pointer-events-none opacity-0 group-hover:opacity-100" />
            </div>
            
            {/* Overlay */}
            {/* <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6">
              <div className="flex justify-between items-end translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="text-left">
                  <span className="text-[10px] mono text-accent-red uppercase tracking-[0.2em] mb-1 block">
                    {item.category}
                  </span>
                  <h3 className="text-white font-bold text-xl uppercase tracking-tighter leading-none">
                    {item.title}
                  </h3>
                </div>
                <div className="w-10 h-10 border border-white/20 flex items-center justify-center bg-white/5 backdrop-blur-md shrink-0">
                  {isVideo ? <Play size={16} className="fill-white text-white" /> : <Search size={16} className="text-white" />}
                </div>
              </div>
            </div> */}
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
    <div className="min-h-screen bg-[#050505] selection:bg-accent-red selection:text-white">
      {/* Background Grid Lines */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <section id="work" className="relative z-10 pt-32 pb-20 overflow-hidden">
        <div className="container mx-auto px-6 mb-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="mono text-accent-red text-xs uppercase tracking-[0.4em] mb-4">
                {" >> "}SELECTED_ASSETS_V2
              </div>
              <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter serif leading-[0.8] mb-2">
                the <span className="text-accent-red">evidence</span>
              </h2>
              <p className="text-gray-500 mono text-[10px] uppercase max-w-[300px] leading-relaxed">
                A curated selection of high-end motion artifacts and visual identity systems.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex bg-[#0a0a0a] border border-[#222] p-1 self-start"
            >
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
            </motion.div>
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
                {activeTab === 'design' ? (
                  <MasonryGrid items={DESIGN_WORK} />
                ) : (
                  <MasonryGrid items={VIDEO_WORK} isVideo={true} />
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        
      </section>

            
    </div>
  );
}
