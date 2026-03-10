import { Calendar, ArrowRight, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { staticData } from "../../data/staticData";
import "./Blog.css";
import { motion } from "framer-motion";

// Import blog images
import blog1 from "../../assets/images/blogs/blog1.webp";
import blog2 from "../../assets/images/blogs/blog2.webp";
import blog3 from "../../assets/images/blogs/blog3.jpg";
import blog4 from "../../assets/images/blogs/blog4.png";
import blog5 from "../../assets/images/blogs/blog5.jpg";
import blog6 from "../../assets/images/blogs/blog6.jpg";

// Image mapping
const imageMap = {
  "/images/blogs/blog1.webp": blog1,
  "/images/blogs/blog2.webp": blog2,
  "/images/blogs/blog3.jpg": blog3,
  "/images/blogs/blog4.png": blog4,
  "/images/blogs/blog5.jpg": blog5,
  "/images/blogs/blog6.jpg": blog6,
};

export default function BlogSection() {
  const navigate = useNavigate();

  // Use static data and map images
  const publishedBlogs = staticData.blogs
    .filter((blog) => blog.isPublished)
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .slice(0, 6)
    .map(blog => ({
      ...blog,
      image: imageMap[blog.image] || blog.image
    }));

  // Get blog image URL
  const getBlogImage = (blog) => {
    return blog.image || `https://ui-avatars.com/api/?name=${encodeURIComponent(
      blog.title
    )}&background=6366f1&color=fff&size=600`;
  };

  // Format date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  // Handle blog click
  const handleBlogClick = (blog) => {
    navigate(`/blogs/${blog.slug}`);
  };

  return (
    <section className="blog-root">
      {/* HEADER */}
      <motion.div
        className="blog-header"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center justify-center gap-2 mb-2">
          <Sparkles className="w-6 h-6 text-primary" />
          <h2 className="blog-title">Latest Insights</h2>
        </div>
        <h3 className="blog-subtitle">
          Explore the Latest in Tech, Software & Digital Transformation
        </h3>
      </motion.div>

      {/* LOADING STATE */}
      {publishedBlogs.length === 0 ? (
        <motion.div
          className="text-center py-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <p className="text-gray-600 text-lg">
            No blog posts available at the moment.
          </p>
        </motion.div>
      ) : (
        /* BLOG GRID */
        <div className="blog-grid">
          {publishedBlogs.map((blog, index) => (
            <motion.article
              key={blog.id}
              className="blog-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              onClick={() => handleBlogClick(blog)}
              style={{ cursor: "pointer" }}
            >
              <div className="blog-img-wrapper">
                <img
                  src={getBlogImage(blog)}
                  alt={blog.title}
                  className="blog-img"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
                      blog.title
                    )}&background=6366f1&color=fff&size=600`;
                  }}
                />
                <div className="blog-overlay">
                  <motion.button
                    className="blog-overlay-btn"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Read Article <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>

              <div className="blog-info">
                <div className="flex items-center gap-3 mb-3">
                  <span className="blog-category">{blog.category}</span>
                  <span className="blog-date">
                    <Calendar className="w-3.5 h-3.5" />
                    {formatDate(blog.createdAt)}
                  </span>
                </div>
                <h4 className="blog-text">{blog.title}</h4>
                {blog.excerpt && <p className="blog-excerpt">{blog.excerpt}</p>}
                <div className="blog-read-more">
                  <span>Read More</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      )}

      {/* VIEW ALL BUTTON */}
      {publishedBlogs.length > 0 && (
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <motion.button
            onClick={() => navigate("/blogs")}
            className="view-all-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Blogs
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      )}
    </section>
  );
}
