import React from "react";
import { useAPI } from "../../hooks/useAPI";
import { motion } from "framer-motion";
import SEO from "@/components/SEO/SEO";

export default function BlogsPage() {
  const { data: blogs, loading, error } = useAPI("blogs");

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 text-xl">Error loading blogs</p>
          <p className="text-gray-600 mt-2">{error}</p>
        </div>
      </div>
    );
  }

  // Filter only published blogs
  const publishedBlogs = blogs.filter((blog) => blog.isPublished);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "TechnoVera Blog",
    description: "Insights, tutorials, and updates from our team",
    blogPost: publishedBlogs.slice(0, 10).map((blog) => ({
      "@type": "BlogPosting",
      headline: blog.title,
      description: blog.excerpt || blog.content?.substring(0, 150),
      datePublished: blog.publishedAt,
      image: blog.featuredImage,
      author: {
        "@type": "Organization",
        name: "TechnoVera Solutions",
      },
    })),
  };

  return (
    <>
      <SEO
        title="Blog - Insights & Tutorials"
        description="Insights, tutorials, and updates from our team. Stay updated with the latest trends in web development, software engineering, and digital transformation."
        keywords="blog, tech blog, tutorials, insights, web development blog, software development, IT articles"
        url="https://www.technovera.com/blog"
        structuredData={structuredData}
      />
      <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Blog
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Insights, tutorials, and updates from our team
          </p>
        </div>

        {/* Blogs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {publishedBlogs.map((blog, index) => (
            <motion.article
              key={blog._id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition"
            >
              {blog.featuredImage && (
                <img
                  src={blog.featuredImage}
                  alt={blog.title}
                  className="w-full h-48 object-cover"
                />
              )}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                    {blog.category}
                  </span>
                  {blog.readTime && (
                    <span className="text-sm text-gray-500">
                      {blog.readTime} min read
                    </span>
                  )}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {blog.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {blog.excerpt || blog.content?.substring(0, 150) + "..."}
                </p>
                {blog.publishedAt && (
                  <p className="text-sm text-gray-500">
                    {format(new Date(blog.publishedAt), "MMM dd, yyyy")}
                  </p>
                )}
              </div>
            </motion.article>
          ))}
        </div>

        {publishedBlogs.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">
              No blog posts available at the moment.
            </p>
          </div>
        )}
      </div>
    </>
  );
}
