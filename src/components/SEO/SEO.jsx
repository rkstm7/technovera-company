import { Helmet } from "react-helmet-async";

/**
 * SEO Component - Dynamic Meta Tags for Each Page
 * Usage: <SEO title="Page Title" description="..." />
 *
 * @param {Object} props - SEO properties
 * @param {string} props.title - Page title
 * @param {string} props.description - Page description
 * @param {string} props.keywords - SEO keywords
 * @param {string} props.author - Content author
 * @param {string} props.image - OG image URL
 * @param {string} props.url - Canonical URL
 * @param {string} props.type - OG type
 * @param {Object} props.structuredData - JSON-LD structured data
 */
export default function SEO({
  title = "TechnoVera Solutions",
  description = "TechnoVera Solutions provides modern website development, custom software, CRM systems, mobile apps, and IT solutions for businesses.",
  keywords = "web development, software development, CRM solutions, mobile apps, IT services",
  author = "TechnoVera Solutions",
  image = "https://www.technovera.com/og-image.jpg",
  url = "https://www.technovera.com",
  type = "website",
  structuredData = null,
}) {
  const fullTitle = title.includes("TechnoVera")
    ? title
    : `${title} | TechnoVera Solutions`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="TechnoVera Solutions" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Structured Data (JSON-LD) */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
}
