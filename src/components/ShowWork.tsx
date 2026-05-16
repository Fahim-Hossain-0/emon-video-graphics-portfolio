/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { 
  Github, 
  Linkedin, 
  Mail, 
  Instagram, 
  ExternalLink, 
  Play, 
  Palette,
  ArrowRight
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

// --- Components ---

function MasonryGrid({ items, isVideo = false }: { items: any[], isVideo?: boolean }) {
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8">
        {items.map((item) => (
          <motion.div 
            key={item.id}
            className="relative group overflow-hidden bg-zinc-900 border border-zinc-800 rounded-2xl break-inside-avoid cursor-pointer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
          >
            <a
  href={item.videoUrl}
  target="_blank"
  rel="noopener noreferrer"
>
  <img
    src={item.thumbnail}
    alt={item.title}
    className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
  />
</a>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
              <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-[0.3em] mb-2">{item.category}</span>
              <h3 className="text-white font-display text-2xl font-medium tracking-tight mb-4">{item.title}</h3>
              <motion.div 
                className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center bg-white/5 backdrop-blur-sm shadow-xl"
                whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.15)" }}
              >
                {isVideo ? (
                  <Play className="w-5 h-5 text-white fill-current" />
                ) : (
                  <ArrowRight className="w-5 h-5 text-white" />
                )}
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default function ShowWork() {
  const [activeTab, setActiveTab] = useState<'video' | 'design'>('video');

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black overflow-x-hidden pt-28">
      
      

      {/* Section 2: Work Loop */}
      <section className="min-h-screen flex flex-col justify-center border-t border-zinc-900">
        <div className="container mx-auto px-6 mb-12 flex flex-col items-center">
          <div className="flex gap-4 p-2 bg-zinc-900 border border-zinc-800 rounded-full shadow-2xl">
            <button 
              onClick={() => setActiveTab('video')}
              className={`flex items-center gap-2 px-8 py-3 rounded-full transition-all duration-300 ${
                activeTab === 'video' 
                  ? 'bg-white text-black shadow-lg scale-105' 
                  : 'text-zinc-500 hover:text-white'
              }`}
            >
              <Play className={`w-4 h-4 ${activeTab === 'video' ? 'fill-current' : ''}`} />
              <span className="font-bold text-sm uppercase tracking-wider">Video</span>
            </button>
            <button 
              onClick={() => setActiveTab('design')}
              className={`flex items-center gap-2 px-8 py-3 rounded-full transition-all duration-300 ${
                activeTab === 'design' 
                  ? 'bg-white text-black shadow-lg scale-105' 
                  : 'text-zinc-500 hover:text-white'
              }`}
            >
              <Palette className={`w-4 h-4 ${activeTab === 'design' ? 'fill-current' : ''}`} />
              <span className="font-bold text-sm uppercase tracking-wider">Design</span>
            </button>
          </div>
          
          <motion.div 
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-12 text-center"
          >
            <h3 className="text-3xl sm:text-5xl font-light italic text-white/90">
              {activeTab === 'video' ? "Featured Motion Works" : "Curated Visual Identity"}
            </h3>
            <p className="text-zinc-500 mt-4 font-mono text-xs uppercase tracking-[0.2em]">Scroll to explore collection</p>
          </motion.div>
        </div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {activeTab === 'video' ? (
                <MasonryGrid items={VIDEO_WORK} isVideo={true} />
              ) : (
                <MasonryGrid items={DESIGN_WORK} />
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="container mx-auto px-6 mt-12 flex justify-center">
            <motion.div
                className="flex items-center gap-2 group cursor-pointer"
                whileHover={{ x: 10 }}
            >
                <span className="text-xs font-mono text-zinc-600 uppercase tracking-widest">Keep Exploring</span>
                <ArrowRight className="w-4 h-4 text-zinc-600 group-hover:text-white transition-colors" />
            </motion.div>
        </div>
      </section>

      {/* Decorative BG elements */}
      <div className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none opacity-20 overflow-hidden">
        <div className="absolute top-[20%] -left-[10%] w-[500px] h-[500px] bg-white/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] -right-[10%] w-[400px] h-[400px] bg-zinc-500/10 rounded-full blur-[100px]" />
      </div>

    </div>
  );
}
