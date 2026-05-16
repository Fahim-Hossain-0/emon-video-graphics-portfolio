

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
// import logo from "../assets/39.jpg";

// brand Identity
import jc_Dark from "../assets/graphic/brand_identity/JC_Dark-01.png";
import LOGO4 from "../assets/graphic/brand_identity/LOGO4-01.png";
import red from "../assets/graphic/brand_identity/Red-01-01.png";
import Mockup from "../assets/graphic/brand_identity/Silver-Foil-Logo-Mockup.jpg";
import Triply_World from "../assets/graphic/brand_identity/Triply_World.jpg";
import Untitled1 from "../assets/graphic/brand_identity/Untitled-1-01-01.jpg";
import Untitled2 from "../assets/graphic/brand_identity/Untitled-3-01.jpg";
import Untitled3 from "../assets/graphic/brand_identity/Untitled-4-01.jpg";

// social media design

import img2 from "../assets/graphic/social_media_design/2.jpg"
import Cricket from "../assets/graphic/social_media_design/Cricket.jpg"
import Deadly from "../assets/graphic/social_media_design/Deadly_XII.jpg"
import Demo from "../assets/graphic/social_media_design/Demo.jpg"
import Dress from "../assets/graphic/social_media_design/Dress.jpg"
import Podcast from "../assets/graphic/social_media_design/Podcast.jpg"
import test_work from "../assets/graphic/social_media_design/Test_Work.jpg"

// Banner & Cover

import banner1 from "../assets/graphic/banner_&_cover/Banner-01.jpg"
import banner from "../assets/graphic/banner_&_cover/Banner.jpg"
import COVER from "../assets/graphic/banner_&_cover/COVER.jpg"
import Deadly_Dozen from "../assets/graphic/banner_&_cover/Deadly_Dozen.jpg"
import Linked_In_banner from "../assets/graphic/banner_&_cover/Linked_In_banner.jpg"
import Untitled01 from "../assets/graphic/banner_&_cover/Untitled-1.jpg"
import Untitled02 from "../assets/graphic/banner_&_cover/Untitled-2.jpg"
import You_Tube_Banner from "../assets/graphic/banner_&_cover/You_Tube_Banner.jpg"

// thumbnail design

import img39 from "../assets/graphic/thumbnail_design/39.jpg"
import img394 from "../assets/graphic/thumbnail_design/394.jpg"
import img3945 from "../assets/graphic/thumbnail_design/3945.jpg"
import img3946 from "../assets/graphic/thumbnail_design/3946.jpg"
import img3947 from "../assets/graphic/thumbnail_design/3947.jpg"
import img3948 from "../assets/graphic/thumbnail_design/3948.jpg"
import Thumbnail from "../assets/graphic/thumbnail_design/Thumbnail.jpg"
import Untitled001 from "../assets/graphic/thumbnail_design/Untitled-1.jpg"


// Packaging design 

import imge1 from "../assets/graphic/packaging_design/1.jpg"
import imge2 from "../assets/graphic/packaging_design/2.jpg"
import imge3 from "../assets/graphic/packaging_design/358548402_1430298134449709_4468602132098281399_n.jpg"
import Back_Part from "../assets/graphic/packaging_design/Back+Part.jpg"
import Mockup0 from "../assets/graphic/packaging_design/Mockup.jpg"
import box_design from "../assets/graphic/packaging_design/box_design.jpg"


// printing design

import imges1 from "../assets/graphic/printing_design/8.5x11 (5).jpg"
import imges2 from "../assets/graphic/printing_design/8.5x11 (6).jpg"
import imges3 from "../assets/graphic/printing_design/8.5x11 - Less than 1MB.jpg"
import imges4 from "../assets/graphic/printing_design/CERTIFICATE MOCKUP.jpg"
import imges5 from "../assets/graphic/printing_design/CV.jpg"
import imges6 from "../assets/graphic/printing_design/DEADLY DOZEN BADGES-02-01.png"
import imges7 from "../assets/graphic/printing_design/I need You Now (3000px).jpg"

type Item = {
  image: string;
  tags: string[];
};

const tagsList = [
  "brand-identity",
  "social-media",
  "banner-cover",
  "packaging-design",
  "thumbnail-design",
  "printing-design",
];

const items: Item[] = [
  { image: jc_Dark, tags: ["brand-identity"] },
  { image: LOGO4, tags: ["brand-identity"] },
  { image: red, tags: ["brand-identity"] },
  { image: Triply_World, tags: ["brand-identity"] },
  { image: Untitled1, tags: ["brand-identity"] },
  { image: Untitled2, tags: ["brand-identity"] },
  { image: Untitled3, tags: ["brand-identity"] },
  { image: Mockup, tags: ["brand-identity"] },

  { image: img2, tags: ["social-media"] },
  { image: Cricket, tags: ["social-media"] },
  { image: Dress, tags: ["social-media"] },
  { image: Podcast, tags: ["social-media"] },
  { image: Deadly, tags: ["social-media"] },
  { image: Demo, tags: ["social-media"] },

  { image: banner, tags: ["banner-cover"] },
  { image: You_Tube_Banner, tags: ["banner-cover"] },
  { image: Untitled01, tags: ["banner-cover"] },
  { image: Deadly_Dozen, tags: ["banner-cover"] },
  { image: COVER, tags: ["banner-cover"] },
  { image: Untitled02, tags: ["banner-cover"] },
  { image: banner1, tags: ["banner-cover"] },
  { image: Linked_In_banner, tags: ["banner-cover"] },

  { image: imge1, tags: ["packaging-design"] },
  { image: imge2, tags: ["packaging-design"] },
  { image: imge3, tags: ["packaging-design"] },
  { image: Back_Part, tags: ["packaging-design"] },
  { image: Mockup0, tags: ["packaging-design"] },
  { image: box_design, tags: ["packaging-design"] },

  { image: img394, tags: ["thumbnail-design"] },
  { image: img3945, tags: ["thumbnail-design"] },
  { image: img3948, tags: ["thumbnail-design"] },
  { image: img3946, tags: ["thumbnail-design"] },
  { image: img3947, tags: ["thumbnail-design"] },
  { image: Thumbnail, tags: ["thumbnail-design"] },
  { image: Untitled001, tags: ["thumbnail-design"] },
  { image: img39, tags: ["thumbnail-design"] },

  { image: imges1, tags: ["printing-design"] },
  { image: imges2, tags: ["printing-design"] },
  { image: imges3, tags: ["printing-design"] },
  { image: imges4, tags: ["printing-design"] },
  { image: imges5, tags: ["printing-design"] },
  { image: imges6, tags: ["printing-design"] },
  { image: imges7, tags: ["printing-design"] },
];

const GraphicDesignSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [loadingImages, setLoadingImages] = useState<{ [key: string]: boolean }>({});
  const [selectedTags, setSelectedTags] = useState<string[]>(["all"]);

const tagLabels: Record<string, string> = {
  "all": "All",
  "brand-identity": "Brand Identity",
  "social-media": "Social Media",
  "banner-cover": "Banner & Cover",
  "packaging-design": "Packaging Design",
  "thumbnail-design": "Thumbnail Design",
  "printing-design": "Printing Design",
};

const handleTagChange = (tag: string) => {
  if (tag === "all") {
    setSelectedTags(["all"]);
  } else {
    let newTags = selectedTags.filter(t => t !== "all");
    if (newTags.includes(tag)) {
      newTags = newTags.filter(t => t !== tag);
      setSelectedTags(newTags.length > 0 ? newTags : ["all"]);
    } else {
      newTags.push(tag);
      setSelectedTags(newTags);
    }
  }
};

const filteredItems = items.filter(item => {
  if (selectedTags.includes("all")) return true;
  return item.tags.some(tag => selectedTags.includes(tag));
});

  return (
    <section id="GraphicDesignSection" className="pb-32 pt-24 px-4 relative scroll-mt-4">
      
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
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
             <span className="gradient-text">Graphic's Design </span>
          </h2>

          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-body">
            Explore the different areas of my creative expertise
          </p>
        </motion.div>

        {/* Filter Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-20"
        >
          <label className="tag-button relative cursor-pointer">
            <input
              type="checkbox"
              id="all"
              checked={selectedTags.includes("all")}
              onChange={() => handleTagChange("all")}
            />
            <span className="checked">{tagLabels["all"]}</span>
            <span>{tagLabels["all"]}</span>
          </label>
          {tagsList.map(tag => (
            <label key={tag} className="tag-button relative cursor-pointer">
              <input
                type="checkbox"
                id={tag}
                checked={selectedTags.includes(tag)}
                onChange={() => handleTagChange(tag)}
              />
              <span className="checked">{tagLabels[tag]}</span>
              <span>{tagLabels[tag]}</span>
            </label>
          ))}
        </motion.div>

        {/* Content Grid */}
        <motion.div
          key={selectedTags.join("-")}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-3 gap-4"
        >
          {filteredItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ scale: 1.05 }}
              className="flex items-center justify-center cursor-pointer"
              onClick={() => setSelectedImage(item.image)}
            >
              <div className="relative w-full h-full">

                {/* Loader */}
                {loadingImages[item.image] !== false && (
                  <div className="absolute inset-0 flex items-center justify-center bg-muted rounded-xl">
                    <div className="w-6 h-6 border-2 border-gray-300 border-t-transparent rounded-full animate-spin"></div>
                  </div>
                )}

                {/* Image */}
                <img
                  src={item.image}
                  alt={`item-${i}`}
                  onLoad={() =>
                    setLoadingImages((prev) => ({
                      ...prev,
                      [item.image]: false,
                    }))
                  }
                  className={`w-full h-full object-cover rounded-xl transition-opacity duration-300 ${
                    loadingImages[item.image] === false
                      ? "opacity-100"
                      : "opacity-0"
                  }`}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>


      </div>




     {selectedImage && (
  <div
    className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50"
    onClick={() => setSelectedImage(null)}
  >
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.8, opacity: 0 }}
      className="relative max-w-4xl w-full p-4"
      onClick={(e) => e.stopPropagation()}
    >
      {/* Close Button */}
      <button
        onClick={() => setSelectedImage(null)}
        className="absolute top-1 right-4 md:top-4 md:right-4 bg-black/60 hover:bg-black text-white rounded-full w-10 h-10 flex items-center justify-center text-xl transition"
      >
        ✕
      </button>

      {/* Image */}
      <img
        src={selectedImage}
        className="w-full h-auto max-h-[80vh] object-contain rounded-xl"
      />
    </motion.div>
  </div>
)}  
    </section>
  );
};

export default GraphicDesignSection;