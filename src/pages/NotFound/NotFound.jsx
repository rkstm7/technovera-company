import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Home } from "lucide-react";
import SEO from "@/components/SEO/SEO";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <>
      <SEO
        title="404 - Page Not Found"
        description="The page you're looking for doesn't exist. Return to TechnoVera Solutions homepage."
        url="https://www.technovera.com/404"
      />
      <div className="flex flex-col items-center justify-center min-h-[80vh] text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-4 font-extrabold text-blue-700 text-8xl"
        >
          404
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-2 text-2xl font-semibold text-gray-800"
        >
          Page Not Found
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="max-w-md mb-6 text-gray-500"
        >
          The page you’re looking for doesn’t exist or may have been moved.
          Please check the URL or return to the homepage.
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => navigate("/")}
          className="flex items-center gap-2 px-6 py-3 font-medium text-white transition bg-blue-700 rounded-full hover:bg-blue-800"
        >
          <Home size={18} />
          Go Back Home
        </motion.button>
      </div>
    </>
  );
}
