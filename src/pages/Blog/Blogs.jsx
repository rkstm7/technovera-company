import React from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  Clock,
  ArrowRight,
  TrendingUp,
  Sparkles,
} from "lucide-react";
import SEO from "@/components/SEO/SEO";
import "./Blogs.css";
import insta from "../../assets/images/blogs/insta.webp";
import fb from "../../assets/images/blogs/fb.webp";
import x from "../../assets/images/blogs/x.png";
import linkedin from "../../assets/images/blogs/linkedin.png";

import blog1 from "../../assets/images/blogs/blog1.webp";
import blog2 from "../../assets/images/blogs/blog2.webp";
import blog3 from "../../assets/images/blogs/blog3.jpg";
import blog4 from "../../assets/images/blogs/blog4.png";
import blog5 from "../../assets/images/blogs/blog5.jpg";
import blog6 from "../../assets/images/blogs/blog6.jpg";
import blog7 from "../../assets/images/blogs/blog7.png";
import blog8 from "../../assets/images/blogs/blog8.webp";

export default function Blogs() {
  // ============================
  // UPDATED CONTENT
  // ============================

  const topPosts = [
    "How AI is Reshaping Digital Marketing Strategies in 2025",
    "Understanding DevOps: A Complete Guide for Modern Businesses",
    "Top Web Development Mistakes That Destroy Your SEO Rankings",
    "Major UX/UI Design Errors That Reduce Conversions & Trust",
  ];

  const socialLinks = [
    {
      name: "Instagram",
      url: "#",
      icon: insta,
    },
    {
      name: "LinkedIn",
      url: "#",
      icon: linkedin,
    },
    {
      name: "Twitter",
      url: "#",
      icon: x,
    },
    {
      name: "Facebook",
      url: "#",
      icon: fb,
    },
  ];

  const heroBlogs = [
    {
      title: "How AI Elevates Digital Marketing & Customer Experience",
      img: blog1,
      date: "12 Jan 2025",
      desc: "AI is transforming content creation, targeting, and customer engagement. Discover how brands use AI to gain a competitive edge...",
    },
    {
      title: "DevOps Essentials: Improving Delivery Speed & Reliability",
      img: blog2,
      date: "18 Jan 2025",
      desc: "Businesses adopting DevOps have seen dramatic improvements in development cycles, automation, and team collaboration...",
    },
    {
      title: "The Future of Software Engineering with AI Automation",
      img: blog3,
      date: "22 Jan 2025",
      desc: "AI-driven development tools are reshaping the software lifecycle. From automated code generation to intelligent debugging, discover how AI is redefining productivity and reducing human error in engineering teams...",
    },
    {
      title: "Cloud Transformation Strategies for Modern Businesses",
      img: blog4,
      date: "27 Jan 2025",
      desc: "Scalable infrastructure, reduced operational costs, and global accessibility make cloud adoption essential. Learn how companies migrate smoothly using structured cloud strategies and security-focused deployments...",
    },
  ];

  const secondRowBlogs = [
    {
      title: "Why Your Website Fails to Rank — Hidden SEO & UX Issues",
      img: blog5,
      date: "08 Feb 2025",
      desc: "Ranking depends on speed, structure, keywords, and mobile experience. Here’s what most websites are missing...",
    },
    {
      title: "The Most Common UX/UI Flaws That Hurt Conversions",
      img: blog6,
      date: "10 Feb 2025",
      desc: "Poor spacing, confusing navigation, and weak CTAs can drastically reduce conversions. Learn how to fix them...",
    },
    {
      title:
        "How Slow Websites Kill Sales — Fix Performance Before It Hurts Revenue",
      img: blog7,
      date: "14 Feb 2025",
      desc: "Website speed directly affects sales, bounce rate, and customer trust. Learn how optimizing load time, caching, and media can instantly boost conversions...",
    },
    {
      title:
        "Design Psychology: How Colors, Layout & Micro-Interactions Influence Users",
      img: blog8,
      date: "16 Feb 2025",
      desc: "Great UI is more than visuals. It’s psychology. Discover how color theory, contrast, spacing, and animation guide user decisions and improve engagement...",
    },
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "TechnoVera Blog",
    description:
      "Insights & Strategies Powering the Future of Digital Transformation",
    url: "https://www.technoveraservices.com/blogs",
    blogPost: [...heroBlogs, ...secondRowBlogs].map((blog) => ({
      "@type": "BlogPosting",
      headline: blog.title,
      description: blog.desc,
      datePublished: blog.date,
      image: blog.img,
      author: {
        "@type": "Organization",
        name: "TechnoVera Solutions",
      },
    })),
  };

  return (
    <>
      <SEO
        title="Blogs - Insights & Digital Transformation Strategies"
        description="Explore expert insights on AI, DevOps, web development, SEO, UX/UI design, and digital transformation strategies from TechnoVera Solutions."
        keywords="technology blog, AI marketing, DevOps, web development, SEO tips, UX design, digital transformation, software engineering"
        url="https://www.technoveraservices.com/blogs"
        structuredData={structuredData}
      />
      <main className="blogs-section">
        {/* Hero Section */}
        <motion.div
          className="blogs-hero"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="absolute -top-6 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Sparkles className="w-8 h-8 text-primary opacity-60" />
          </motion.div>
          <h1 className="blogs-title">
            <span className="text-gradient">Our Blogs</span>
          </h1>
          <p className="blogs-subtitle">
            Insights & Strategies Powering the Future of Digital Transformation
          </p>
        </motion.div>

        <div className="blogs-layout">
          {/* LEFT SIDEBAR */}
          <motion.aside
            className="blogs-sidebar"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            {/* TOP POSTS */}
            <div className="sidebar-card">
              <div className="sidebar-header">
                <TrendingUp className="w-5 h-5" />
                <h3>Top Posts</h3>
              </div>
              <div className="top-posts-list">
                {topPosts.map((post, i) => (
                  <motion.div
                    className="top-post-item"
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    whileHover={{ x: 5 }}
                  >
                    <div className="post-number">{i + 1}</div>
                    <p className="post-title">{post}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* SOCIAL LINKS */}
            <div className="sidebar-card">
              <div className="sidebar-header">
                <Sparkles className="w-5 h-5" />
                <h3>Connect With Us</h3>
              </div>
              <div className="social-list">
                {socialLinks.map((item, i) => (
                  <motion.a
                    href={item.url}
                    key={i}
                    className="social-item"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, x: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <img src={item.icon} alt={item.name} />
                    <span>{item.name}</span>
                    <ArrowRight className="social-arrow" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.aside>

          {/* BLOG GRID */}
          <section className="blogs-grid">
            {/* Featured Blogs */}
            <div className="blogs-row">
              {heroBlogs.map((blog, i) => (
                <motion.article
                  className="blog-card featured"
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -8 }}
                >
                  <div className="blog-image-wrapper">
                    <img src={blog.img} alt={blog.title} />
                    <div className="blog-overlay">
                      <motion.button
                        className="read-more-btn"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Read More <ArrowRight className="w-4 h-4" />
                      </motion.button>
                    </div>
                  </div>
                  <div className="blog-content">
                    <div className="blog-meta">
                      <span className="blog-date">
                        <Calendar className="w-4 h-4" />
                        {blog.date}
                      </span>
                      <span className="blog-read-time">
                        <Clock className="w-4 h-4" />5 min read
                      </span>
                    </div>
                    <h3 className="blog-title">{blog.title}</h3>
                    <p className="blog-desc">{blog.desc}</p>
                  </div>
                </motion.article>
              ))}
            </div>

            {/* Regular Blogs */}
            <div className="blogs-row">
              {secondRowBlogs.map((blog, i) => (
                <motion.article
                  className="blog-card"
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -8 }}
                >
                  <div className="blog-image-wrapper">
                    <img src={blog.img} alt={blog.title} />
                    <div className="blog-overlay">
                      <motion.button
                        className="read-more-btn"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Read More <ArrowRight className="w-4 h-4" />
                      </motion.button>
                    </div>
                  </div>
                  <div className="blog-content">
                    <div className="blog-meta">
                      <span className="blog-date">
                        <Calendar className="w-4 h-4" />
                        {blog.date}
                      </span>
                      <span className="blog-read-time">
                        <Clock className="w-4 h-4" />4 min read
                      </span>
                    </div>
                    <h3 className="blog-title">{blog.title}</h3>
                    <p className="blog-desc">{blog.desc}</p>
                  </div>
                </motion.article>
              ))}
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
