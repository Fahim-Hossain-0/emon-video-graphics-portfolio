export interface WorkItem {
  id: number;
  // title: string;
  category: string;
  thumbnail: string;
  videoUrl?: string; // Optional for design items
}
export interface WorkItems {
  id: number;
  thumbnail: string;
}

export const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array];

  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled;
};

export const VIDEO_WORK: WorkItem[] = [
  
  {
    id: 18,
    category: "Video",
    thumbnail: "https://img.youtube.com/vi/RMzfx2R56QQ/maxresdefault.jpg",
    videoUrl: "https://youtu.be/RMzfx2R56QQ"
  },
  {
    id: 20,
    category: "Video",
    thumbnail: "https://img.youtube.com/vi/4VFa_TkQaFU/maxresdefault.jpg",
    videoUrl: "https://youtu.be/4VFa_TkQaFU"
  },
  {
    id: 3,
    category: "Reel",
    thumbnail: "https://img.youtube.com/vi/w0PKqvgdUWI/maxresdefault.jpg",
    videoUrl: "https://youtube.com/shorts/w0PKqvgdUWI?feature=share"
  },
  
  {
    id: 1,
    category: "Reel",
    thumbnail: "https://img.youtube.com/vi/1pzJxAmL06k/maxresdefault.jpg",
    videoUrl: "https://youtube.com/shorts/1pzJxAmL06k?feature=share"
  },
  
  {
    id: 12,
    category: "2D Motion AD",
    thumbnail: "https://img.youtube.com/vi/ZSSCOZ4jfNY/maxresdefault.jpg",
    videoUrl: "https://youtube.com/shorts/ZSSCOZ4jfNY?feature=share"
  },
  
  {
    id: 9,
    category: "Video",
    thumbnail: "https://img.youtube.com/vi/PMU2wNVj7DY/maxresdefault.jpg",
    videoUrl: "https://youtu.be/PMU2wNVj7DY"
  },
  {
    id: 11,
    category: "Video",
    thumbnail: "https://img.youtube.com/vi/3b1N2Qi-Lp0/maxresdefault.jpg",
    videoUrl: "https://youtu.be/3b1N2Qi-Lp0"
  },
  {
    id: 6,
    category: "Reel",
    thumbnail: "https://img.youtube.com/vi/gwy_RVUOBdM/maxresdefault.jpg",
    videoUrl: "https://youtube.com/shorts/gwy_RVUOBdM?feature=share"
  },
  
  {
    id: 16,
    category: "Video",
    thumbnail: "https://img.youtube.com/vi/0hp5rbId7oY/maxresdefault.jpg",
    videoUrl: "https://youtu.be/0hp5rbId7oY"
  },
  {
    id: 10,
    category: "Video",
    thumbnail: "https://img.youtube.com/vi/51eOiTEq8Us/maxresdefault.jpg",
    videoUrl: "https://youtu.be/51eOiTEq8Us"
  },
  
  {
    id: 15,
    category: "2D Motion AD",
    thumbnail: "https://img.youtube.com/vi/BDc4Lnitkcg/maxresdefault.jpg",
    videoUrl: "https://youtube.com/shorts/BDc4Lnitkcg?feature=share"
  },
  {
    id: 8,
    category: "Video",
    thumbnail: "https://img.youtube.com/vi/07XWPgvLAlQ/maxresdefault.jpg",
    videoUrl: "https://youtu.be/07XWPgvLAlQ"
  },
  {
    id: 4,
    category: "Reel",
    thumbnail: "https://img.youtube.com/vi/cvxru314dOA/maxresdefault.jpg",
    videoUrl: "https://youtube.com/shorts/cvxru314dOA?feature=share"
  },
  {
    id: 17,
    category: "Video",
    thumbnail: "https://img.youtube.com/vi/B0NTl7bELbg/maxresdefault.jpg",
    videoUrl: "https://youtu.be/B0NTl7bELbg"
  },
  
  {
    id: 22,
    category: "Video",
    thumbnail: "https://img.youtube.com/vi/QEQwjfxZhB4/maxresdefault.jpg",
    videoUrl: "https://youtu.be/QEQwjfxZhB4"
  },
  {
    id: 19,
    category: "Video",
    thumbnail: "https://img.youtube.com/vi/Ul87MLAgJPY/maxresdefault.jpg",
    videoUrl: "https://youtu.be/Ul87MLAgJPY"
  },
  
  {
    id: 21,
    category: "Reel",
    thumbnail: "https://img.youtube.com/vi/ba_aALAxBsE/maxresdefault.jpg",
    videoUrl: "https://youtube.com/shorts/ba_aALAxBsE?feature=share"
  },
  
  {
    id: 24,
    category: "Reel",
    thumbnail: "https://img.youtube.com/vi/xpxmTfXSiBE/maxresdefault.jpg",
    videoUrl: "https://youtube.com/shorts/xpxmTfXSiBE?feature=share"
  },
  {
    id: 5,
    category: "Reel",
    thumbnail: "https://img.youtube.com/vi/GJeyBsi1i74/maxresdefault.jpg",
    videoUrl: "https://youtube.com/shorts/GJeyBsi1i74?feature=share"
  },
  {
    id: 13,
    category: "2D Motion AD",
    thumbnail: "https://img.youtube.com/vi/ysrGvz16ezI/maxresdefault.jpg",
    videoUrl: "https://youtube.com/shorts/ysrGvz16ezI?feature=share"
  },
];

export const DESIGN_WORK: WorkItems[] = [
  // Featured items first
  {
    id: 1,
    thumbnail:
      "https://res.cloudinary.com/dbqg0h1aj/image/upload/v1779455976/Fitness_Racing_gvtrpi.png",
  },
  {
    id: 2,
    thumbnail:
      "https://res.cloudinary.com/dbqg0h1aj/image/upload/v1779455016/Demo_qsnypu.jpg",
  },
  {
    id: 3,
    thumbnail:
      "https://res.cloudinary.com/dbqg0h1aj/image/upload/v1779454949/mockup-with-a-button-on-a-red-gym-bag-a14329_ovjhuz.png",
  },
  {
    id: 4,
    thumbnail:
      "https://res.cloudinary.com/dbqg0h1aj/image/upload/v1779474781/mockup-of-a-man-holding-a-vinyl-cover-at-a-music-store-2411-el1_z7swpn.png",
  },
  {
    id: 5,
    thumbnail:
      "https://res.cloudinary.com/dbqg0h1aj/image/upload/v1779456383/BillBoard_mvwogh.png",
  },
  {
    id: 6,
    thumbnail:
      "https://res.cloudinary.com/dbqg0h1aj/image/upload/v1779474781/mockup-of-a-man-holding-a-kit-bag-23236_m4peu3.png",
  },
  {
    id: 7,
    thumbnail:
      "https://res.cloudinary.com/dbqg0h1aj/image/upload/v1779455918/Poster_Design_pxvjen.jpg",
  },
  {
    id: 8,
    thumbnail:
      "https://res.cloudinary.com/dbqg0h1aj/image/upload/v1779455457/frozen_fruits_2_efdgiy.jpg",
  },

  // Rest of your designs (remove duplicates)
  {
    id: 9,
    thumbnail:
      "https://res.cloudinary.com/dbqg0h1aj/image/upload/v1779475040/horizontal-banner-mockup-nailed-to-a-wooden-wall-a10523_gkh285.png",
  },
  {
    id: 10,
    thumbnail:
      "https://res.cloudinary.com/dbqg0h1aj/image/upload/v1779474784/logo-mockup-featuring-a-postcard-over-a-piece-of-fabric-1673-el_tpbdh7.png",
  },
  {
    id: 11,
    thumbnail:
      "https://res.cloudinary.com/dbqg0h1aj/image/upload/v1779474782/vertical-banner-mockup-outside-a-school-gymnasium-a10573_supn3f.png",
  },
  {
    id: 12,
    thumbnail:
      "https://res.cloudinary.com/dbqg0h1aj/image/upload/v1779455315/2_wa7mpp.jpg",
  },
  {
    id: 13,
    thumbnail:
      "https://res.cloudinary.com/dbqg0h1aj/image/upload/v1779455692/Full_Box_Mockup_V4_cl3ckf.png",
  },
  {
    id: 14,
    thumbnail:
      "https://res.cloudinary.com/dbqg0h1aj/image/upload/v1779455979/The_Sport_Of_Fitness_v1gdxe.png",
  },
  {
    id: 15,
    thumbnail:
      "https://res.cloudinary.com/dbqg0h1aj/image/upload/v1779455418/CERTIFICATE_MOCKUP_4_f1ih06.jpg",
  },
  {
    id: 16,
    thumbnail:
      "https://res.cloudinary.com/dbqg0h1aj/image/upload/v1779455391/CERTIFICATE_MOCKUP_xlir24.jpg",
  },
  {
    id: 17,
    thumbnail:
      "https://res.cloudinary.com/dbqg0h1aj/image/upload/v1779455877/Deadly_XII_s1obye.jpg",
  },
  {
    id: 18,
    thumbnail:
      "https://res.cloudinary.com/dbqg0h1aj/image/upload/v1779456323/CRICKET_TEAM_SQUAD-01_t6zdnx.jpg",
  },
  {
    id: 19,
    thumbnail:
      "https://res.cloudinary.com/dbqg0h1aj/image/upload/v1779455500/Untitled-1_ggqwgq.jpg",
  },
  {
    id: 20,
    thumbnail:
      "https://res.cloudinary.com/dbqg0h1aj/image/upload/v1779454931/Content_15_qolphb.png",
  },
  {
    id: 21,
    thumbnail:
      "https://res.cloudinary.com/dbqg0h1aj/image/upload/v1779454915/International_Tea_Day_vzzugk.png",
  },
  {
    id: 22,
    thumbnail:
      "https://res.cloudinary.com/dbqg0h1aj/image/upload/v1779455874/A4-01_mewtqy.jpg",
  },
  {
    id: 23,
    thumbnail:
      "https://res.cloudinary.com/dbqg0h1aj/image/upload/v1779455920/Track_Design-01_mm6cus.jpg",
  },
  {
    id: 24,
    thumbnail:
      "https://res.cloudinary.com/dbqg0h1aj/image/upload/v1779456133/2_ijrsdi.jpg",
  },
  {
    id: 25,
    thumbnail:
      "https://res.cloudinary.com/dbqg0h1aj/image/upload/v1779474780/laptop-cover-mockup-featuring-a-computer-on-a-table-2289-el1_p7qqxa.png",
  },
  {
    id: 26,
    thumbnail:
      "https://res.cloudinary.com/dbqg0h1aj/image/upload/v1779474780/minimalistic-mockup-featuring-two-business-cards-with-rounded-corners-977-el_qkat8t.png",
  },
  {
    id: 27,
    thumbnail:
      "https://res.cloudinary.com/dbqg0h1aj/image/upload/v1779474780/mockup-of-a-vinyl-with-an-album-release-themed-message-m6034_rwa722.png",
  },
  {
    id: 28,
    thumbnail:
      "https://res.cloudinary.com/dbqg0h1aj/image/upload/v1779474780/business-card-maker-for-architects-with-solid-frames-a316a_x1ravf.png",
  },
  {
    id: 29,
    thumbnail:
      "https://res.cloudinary.com/dbqg0h1aj/image/upload/v1779456671/._p1ivdy.jpg",
  },
  {
    id: 30,
    thumbnail:
      "https://res.cloudinary.com/dbqg0h1aj/image/upload/v1779456440/Content_12_djfrcb.png",
  },
  {
    id: 31,
    thumbnail:
      "https://res.cloudinary.com/dbqg0h1aj/image/upload/v1779456669/..........................._lfm9p3.jpg",
  },
  {
    id: 32,
    thumbnail:
      "https://res.cloudinary.com/dbqg0h1aj/image/upload/v1779456481/Content_13_h3unzm.png",
  },
  {
    id: 33,
    thumbnail:
      "https://res.cloudinary.com/dbqg0h1aj/image/upload/v1779456478/O3_fhygu8.png",
  },
  {
    id: 34,
    thumbnail:
      "https://res.cloudinary.com/dbqg0h1aj/image/upload/v1779455019/Reza_1_uoo5ol.jpg",
  },
  {
    id: 35,
    thumbnail:
      "https://res.cloudinary.com/dbqg0h1aj/image/upload/v1779455181/Basket_Ball_mj8gxl.jpg",
  },
  {
    id: 39,
    thumbnail:
      "https://res.cloudinary.com/dbqg0h1aj/image/upload/v1779456363/Content_01_tefs0t.jpg",
  },
];
