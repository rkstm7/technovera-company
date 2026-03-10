import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn, Image as ImageIcon, Sparkles } from "lucide-react";
import SEO from "@/components/SEO/SEO";
import { useAPI } from "../../hooks/useAPI";
import "./Gallery.css";

// Import gallery images
import office1 from "../../assets/images/gallery/office1.webp";
import office2 from "../../assets/images/gallery/office2.jpg";
import office3 from "../../assets/images/gallery/office3.avif";
import office4 from "../../assets/images/gallery/office4.jpg";
import office5 from "../../assets/images/gallery/office5.jpg";
import office6 from "../../assets/images/gallery/office6.jpg";
import office7 from "../../assets/images/gallery/office7.jpg";
import office8 from "../../assets/images/gallery/office8.jpg";
import office9 from "../../assets/images/gallery/office9.jpg";

// Image mapping
const imageMap = {
  "/src/assets/images/gallery/office1.webp": office1,
  "/src/assets/images/gallery/office2.jpg": office2,
  "/src/assets/images/gallery/office3.avif": office3,
  "/src/assets/images/gallery/office4.jpg": office4,
  "/src/assets/images/gallery/office5.jpg": office5,
  "/src/assets/images/gallery/office6.jpg": office6,
  "/src/assets/images/gallery/office7.jpg": office7,
  "/src/assets/images/gallery/office8.jpg": office8,
  "/src/assets/images/gallery/office9.jpg": office9,
};

export default function Gallery() {
  const [popup, setPopup] = useState(null);

  const { data: galleryItems, loading } = useAPI("gallery");

  // Filter active items and map images
  const images = galleryItems
    .filter((item) => item.isActive)
    .map((item) => ({
      ...item,
      image: imageMap[item.image] || item.image,
    }));

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-xl opacity-50 animate-pulse"></div>
          <div className="relative animate-spin rounded-full h-16 w-16 border-4 border-gray-200 border-t-primary"></div>
        </div>
      </div>
    );
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    name: "TechnoVera Gallery",
    description:
      "Captured moments and visual stories from TechnoVera Solutions",
    url: "https://www.technoveraservices.com/gallery",
  };

  return (
    <>
      <SEO
        title="Gallery - Our Visual Stories"
        description="Explore our gallery showcasing captured moments, project highlights, team events, and visual stories from TechnoVera Solutions."
        keywords="gallery, photos, images, company events, team photos, project showcase, visual portfolio"
        url="https://www.technoveraservices.com/gallery"
        structuredData={structuredData}
      />
      <main
        className="gallery-section"
        onContextMenu={(e) => e.preventDefault()}
      >
        {/* Hero Section */}
        <motion.div
          className="gallery-hero"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative">
            <motion.div
              className="absolute -top-6 left-1/2 transform -translate-x-1/2"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Sparkles className="w-8 h-8 text-primary opacity-60" />
            </motion.div>
            <h1 className="gallery-title">
              <span className="text-gradient">Our Gallery</span>
            </h1>
            <p className="gallery-sub">Captured Moments, Endless Stories</p>
          </div>

          {/* Stats */}
          <motion.div
            className="flex justify-center gap-8 mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">
                {images.length}+
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Images
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary">100%</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Quality
              </div>
            </div>
          </motion.div>
        </motion.div>

        {images.length === 0 ? (
          <motion.div
            className="text-center py-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <ImageIcon className="w-20 h-20 mx-auto text-gray-300 mb-4" />
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              No gallery images available at the moment.
            </p>
          </motion.div>
        ) : (
          <div className="gallery-grid">
            {images.map((item, index) => (
              <motion.div
                key={item.id || item._id}
                className="gallery-card group"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -8 }}
              >
                {/* Hover Overlay */}
                <div className="gallery-overlay">
                  <motion.button
                    className="gallery-zoom-btn"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setPopup(item)}
                  >
                    <ZoomIn className="w-6 h-6" />
                  </motion.button>
                </div>

                <img
                  src={item.image}
                  alt={item.title}
                  draggable="false"
                  loading="lazy"
                  className="gallery-img"
                  onError={(e) => {
                    e.target.src =
                      "https://via.placeholder.com/400x300?text=Image+Not+Found";
                  }}
                />

                {item.title && (
                  <div className="gallery-title-overlay">
                    <p className="text-white font-semibold text-sm">
                      {item.title}
                    </p>
                  </div>
                )}

                {/* Decorative corner */}
                <div className="gallery-corner"></div>
              </motion.div>
            ))}
          </div>
        )}
      </main>

      {/* LIGHTBOX POPUP */}
      <AnimatePresence>
        {popup && (
          <motion.div
            className="popup-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setPopup(null)}
          >
            {/* Close Button */}
            <motion.button
              className="popup-close"
              onClick={() => setPopup(null)}
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
            >
              <X className="w-6 h-6" />
            </motion.button>

            <motion.div
              className="popup-content"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            >
              {/* Image Container */}
              <div className="popup-img-container">
                <img
                  src={popup.image}
                  className="popup-img"
                  draggable="false"
                  alt={popup.title}
                />
              </div>

              {/* Info Section */}
              {(popup.title || popup.description) && (
                <motion.div
                  className="popup-info"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  {popup.title && (
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {popup.title}
                    </h3>
                  )}
                  {popup.description && (
                    <p className="text-gray-300">{popup.description}</p>
                  )}
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
