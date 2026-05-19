export interface WorkItem {
  id: number;
  title: string;
  category: string;
  thumbnail: string;
  videoUrl?: string; // Optional for design items
}

export const VIDEO_WORK: WorkItem[] = [
  // First 6 shorts (Reel)
  {
    id: 1,
    title: "Social Reel 01",
    category: "Reel",
    thumbnail: "https://img.youtube.com/vi/1pzJxAmL06k/maxresdefault.jpg",
    videoUrl: "https://youtube.com/shorts/1pzJxAmL06k?feature=share"
  },
  {
    id: 2,
    title: "Social Reel 02",
    category: "Reel",
    thumbnail: "https://img.youtube.com/vi/3i22i3KZf_4/maxresdefault.jpg",
    videoUrl: "https://youtube.com/shorts/3i22i3KZf_4?feature=share"
  },
  {
    id: 3,
    title: "Social Reel 03",
    category: "Reel",
    thumbnail: "https://img.youtube.com/vi/w0PKqvgdUWI/maxresdefault.jpg",
    videoUrl: "https://youtube.com/shorts/w0PKqvgdUWI?feature=share"
  },
  {
    id: 4,
    title: "Social Reel 04",
    category: "Reel",
    thumbnail: "https://img.youtube.com/vi/cvxru314dOA/maxresdefault.jpg",
    videoUrl: "https://youtube.com/shorts/cvxru314dOA?feature=share"
  },
  {
    id: 5,
    title: "Social Reel 05",
    category: "Reel",
    thumbnail: "https://img.youtube.com/vi/GJeyBsi1i74/maxresdefault.jpg",
    videoUrl: "https://youtube.com/shorts/GJeyBsi1i74?feature=share"
  },
  {
    id: 6,
    title: "Social Reel 06",
    category: "Reel",
    thumbnail: "https://img.youtube.com/vi/gwy_RVUOBdM/maxresdefault.jpg",
    videoUrl: "https://youtube.com/shorts/gwy_RVUOBdM?feature=share"
  },

  // Next 5 regular videos
  {
    id: 7,
    title: "Motion Video 01",
    category: "Video",
    thumbnail: "https://img.youtube.com/vi/2HQqQ-NdVco/maxresdefault.jpg",
    videoUrl: "https://youtu.be/2HQqQ-NdVco"
  },
  {
    id: 8,
    title: "Motion Video 02",
    category: "Video",
    thumbnail: "https://img.youtube.com/vi/07XWPgvLAlQ/maxresdefault.jpg",
    videoUrl: "https://youtu.be/07XWPgvLAlQ"
  },
  {
    id: 9,
    title: "Motion Video 03",
    category: "Video",
    thumbnail: "https://img.youtube.com/vi/PMU2wNVj7DY/maxresdefault.jpg",
    videoUrl: "https://youtu.be/PMU2wNVj7DY"
  },
  {
    id: 10,
    title: "Motion Video 04",
    category: "Video",
    thumbnail: "https://img.youtube.com/vi/51eOiTEq8Us/maxresdefault.jpg",
    videoUrl: "https://youtu.be/51eOiTEq8Us"
  },
  {
    id: 11,
    title: "Motion Video 05",
    category: "Video",
    thumbnail: "https://img.youtube.com/vi/3b1N2Qi-Lp0/maxresdefault.jpg",
    videoUrl: "https://youtu.be/3b1N2Qi-Lp0"
  },

  // 4 shorts under "2D Motion AD"
  {
    id: 12,
    title: "2D Motion AD 01",
    category: "2D Motion AD",
    thumbnail: "https://img.youtube.com/vi/ZSSCOZ4jfNY/maxresdefault.jpg",
    videoUrl: "https://youtube.com/shorts/ZSSCOZ4jfNY?feature=share"
  },
  {
    id: 13,
    title: "2D Motion AD 02",
    category: "2D Motion AD",
    thumbnail: "https://img.youtube.com/vi/ysrGvz16ezI/maxresdefault.jpg",
    videoUrl: "https://youtube.com/shorts/ysrGvz16ezI?feature=share"
  },
  {
    id: 14,
    title: "2D Motion AD 03",
    category: "2D Motion AD",
    thumbnail: "https://img.youtube.com/vi/8ZPgg-0yEAI/maxresdefault.jpg",
    videoUrl: "https://youtube.com/shorts/8ZPgg-0yEAI?feature=share"
  },
  {
    id: 15,
    title: "2D Motion AD 04",
    category: "2D Motion AD",
    thumbnail: "https://img.youtube.com/vi/BDc4Lnitkcg/maxresdefault.jpg",
    videoUrl: "https://youtube.com/shorts/BDc4Lnitkcg?feature=share"
  },

  // Next 2 regular videos
  {
    id: 16,
    title: "Motion Video 06",
    category: "Video",
    thumbnail: "https://img.youtube.com/vi/0hp5rbId7oY/maxresdefault.jpg",
    videoUrl: "https://youtu.be/0hp5rbId7oY"
  },
  {
    id: 17,
    title: "Motion Video 07",
    category: "Video",
    thumbnail: "https://img.youtube.com/vi/B0NTl7bELbg/maxresdefault.jpg",
    videoUrl: "https://youtu.be/B0NTl7bELbg"
  },

  // Last 2 regular videos
  {
    id: 18,
    title: "Motion Video 08",
    category: "Video",
    thumbnail: "https://img.youtube.com/vi/RMzfx2R56QQ/maxresdefault.jpg",
    videoUrl: "https://youtu.be/RMzfx2R56QQ"
  },
  {
    id: 19,
    title: "Motion Video 09",
    category: "Video",
    thumbnail: "https://img.youtube.com/vi/Ul87MLAgJPY/maxresdefault.jpg",
    videoUrl: "https://youtu.be/Ul87MLAgJPY"
  }
];

export const DESIGN_WORK: WorkItem[] = [
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
