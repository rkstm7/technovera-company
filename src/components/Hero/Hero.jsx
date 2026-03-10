import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from "framer-motion";
import { useAPI } from "../../hooks/useAPI";
import "./Hero.css";

// Import carousel images
import carousel1 from "../../assets/images/home/carousel1.png";
import carousel2 from "../../assets/images/home/carousel2.jpg";
import carousel3 from "../../assets/images/home/carousel3.jpg";

// Image mapping
const imageMap = {
  "/src/assets/images/home/carousel1.jpg": carousel1,
  "/src/assets/images/home/carousel2.jpg": carousel2,
  "/src/assets/images/home/carousel3.jpg": carousel3,
};

export default function Hero() {
  const { data: heroData, loading } = useAPI("hero-sections");
  const [currentImage, setCurrentImage] = useState(0);
  const [currentQuote, setCurrentQuote] = useState(0);

  // Use first active hero section
  const hero = heroData.find((h) => h.isActive);

  // Parse and process images
  const processImages = (imgs) => {
    try {
      // If imgs is a string, parse it
      const parsedImgs = typeof imgs === "string" ? JSON.parse(imgs) : imgs;

      if (
        !parsedImgs ||
        !Array.isArray(parsedImgs) ||
        parsedImgs.length === 0
      ) {
        return [];
      }

      return parsedImgs.map((img) => {
        // Map to imported images
        if (imageMap[img]) {
          return imageMap[img];
        }
        // Fallback for other formats
        if (typeof img === "string") {
          return img.startsWith("http") || img.startsWith("/assets")
            ? img
            : `${import.meta.env.VITE_BACKEND_URL}${img}`;
        }
        return img;
      });
    } catch (error) {
      console.error("Error parsing images:", error);
      return [];
    }
  };

  // Parse quotes
  const parseQuotes = (quotesData) => {
    try {
      // If quotesData is a string, parse it
      const parsedQuotes =
        typeof quotesData === "string" ? JSON.parse(quotesData) : quotesData;
      
      if (!Array.isArray(parsedQuotes)) {
        return [];
      }
      
      // Handle both string and object formats
      return parsedQuotes.map((quote) => {
        if (typeof quote === "string") {
          return { title: quote, subtitle: "" };
        }
        return quote;
      });
    } catch (error) {
      console.error("Error parsing quotes:", error);
      return [];
    }
  };

  const images = hero ? processImages(hero.images) : [];
  const quotes = hero ? parseQuotes(hero.quotes) : [];

  useEffect(() => {
    if (images.length > 0) {
      const imageTimer = setInterval(
        () => setCurrentImage((prev) => (prev + 1) % images.length),
        5000
      );
      return () => clearInterval(imageTimer);
    }
  }, [images.length]);

  useEffect(() => {
    if (quotes.length > 0) {
      const quoteTimer = setInterval(
        () => setCurrentQuote((prev) => (prev + 1) % quotes.length),
        6000
      );
      return () => clearInterval(quoteTimer);
    }
  }, [quotes.length]);

  if (loading) {
    return (
      <section className="hero-root">
        <div className="flex justify-center items-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
        </div>
      </section>
    );
  }

  // Don't render if no hero data
  if (!hero || images.length === 0 || quotes.length === 0) {
    return null;
  }

  return (
    <section className="hero-root">
      {/* Background Carousel */}
      <div className="hero-bg-container">
        <AnimatePresence mode="wait">
          <img
            src={images[currentImage]}
            alt={`Hero Slide ${currentImage + 1}`}
            className="hero-bg-image"
            onError={() => {
              console.log("Background image load error:", images[currentImage]);
            }}
          />
        </AnimatePresence>
        <div className="hero-overlay"></div>
      </div>

      {/* Content */}
      <div className="hero-content">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="hero-left"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuote}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="hero-title">
                {quotes[currentQuote]?.title || quotes[currentQuote]}
              </h2>
              <div className="hero-line"></div>
              <p className="hero-subtitle">
                {quotes[currentQuote]?.subtitle || ""}
              </p>
            </motion.div>
          </AnimatePresence>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Link to={hero.ctaLink || "/contact"} className="hero-btn">
              {hero.ctaText || "Get Started"}
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="hero-right"
        >
          <img
            src={images[currentImage]}
            alt="Hero Visual"
            className="hero-image"
            onError={() => {
              console.log("Hero image load error:", images[currentImage]);
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}
