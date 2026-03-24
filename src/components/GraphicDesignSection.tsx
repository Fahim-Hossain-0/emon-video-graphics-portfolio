

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
};

type Category = {
  name: string;
  items: Item[];
};

const categories: Category[] = [
  {
    name: "Brand Identity",
    items: [
      {image:jc_Dark },
      {image: LOGO4 },
      {image: red },
     
      {image: Triply_World },
      {image: Untitled1 },
      {image: Untitled2 },
      {image: Untitled3 },
       {image: Mockup },
    ],
  },
  {
    name: "Social Media",
    items: [
      { image: img2 },
      { image: Cricket },
      
      
      { image: Dress },
      { image: Podcast },
      // { image: test_work },
      { image: Deadly },
      { image: Demo },
    ],
  },

  // 
  {
    name: "Banner & Cover",
    items: [
      
      { image: banner },
        { image: You_Tube_Banner },
        { image: Untitled01 },
      { image: Deadly_Dozen },
      
    
      { image: COVER },
     
      { image: Untitled02 },
      { image: banner1 },
      { image: Linked_In_banner },
    ],
  },
  
  {
    name: "Packaging design ",
    items: [
      { image: imge1 },
      { image: imge2 },
      { image: imge3 },
      { image: Back_Part },
      { image: Mockup0 },
      { image: box_design }
    ],
  },
  {
    name: "Thumbnail design",
    items: [
      { image: img394 },
      { image: img3945 },
      { image: img3948   },
      { image: img3946 },
      { image:  img3947 },
      { image:  Thumbnail },
      { image:  Untitled001 },
      { image:  img39 },
    ],
  },
  {
    name: "Printing design",
    items: [
      { image: imges1 },
      { image: imges2 },
      { image: imges3 },
      { image: imges4 },
      { image:  imges5 },
      { image:  imges6 },
      { image:  imges7}
    ],
  },
];

const GraphicDesignSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [active, setActive] = useState(0);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
const [loadingImages, setLoadingImages] = useState<{ [key: string]: boolean }>({});

  return (
    <section id="GraphicDesignSection" className="pb-32 pt-24 px-4 relative scroll-mt-20">
      
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

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-20"
        >
          {categories.map((cat, i) => (
            <button
              key={cat.name}
              onClick={() => setActive(i)}
              className={`px-6 py-3 rounded-full font-display font-medium text-sm transition-all ${
                active === i
                  ? "gradient-bg text-primary-foreground gradient-glow"
                  : "bg-muted text-muted-foreground hover:text-foreground"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </motion.div>

        {/* Content Grid */}
        <motion.div
          key={active}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-3 gap-4"
        >
          {categories[active].items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="flex items-center justify-center cursor-pointer "
                
  onClick={() => setSelectedImage(item.image)}
            >
              <div className="relative ">
  
  {/* Loader */}
  {loadingImages[item.image] !== false && (
    <div className="absolute inset-0 flex items-center justify-center bg-muted rounded-xl">
      <div className="w-6 h-6 border-2 border-gray-300 border-t-transparent rounded-full animate-spin"></div>
    </div>
  )}

  <img
    src={item.image}
    alt={`Category ${active} Item ${i}`}
    onLoad={() =>
      setLoadingImages((prev) => ({ ...prev, [item.image]: false }))
    }
    className={`w-full h-full object-cover rounded-xl transition-opacity duration-300 ${
      loadingImages[item.image] === false ? "opacity-100" : "opacity-0"
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