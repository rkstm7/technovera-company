import { useAPI } from "../../hooks/useAPI";
import { motion } from "framer-motion";
import SEO from "@/components/SEO/SEO";

export default function ServicesPage() {
  const { data: services, loading, error } = useAPI("services");

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
          <p className="text-red-600 text-xl">Error loading services</p>
          <p className="text-gray-600 mt-2">{error}</p>
        </div>
      </div>
    );
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Our Services",
    description: "Comprehensive IT solutions tailored to your business needs",
    itemListElement: services.map((service, index) => ({
      "@type": "Service",
      position: index + 1,
      name: service.title,
      description: service.shortDescription || service.description,
    })),
  };

  return (
    <>
      <SEO
        title="Services - IT Solutions & Services"
        description="Comprehensive IT solutions tailored to your business needs. Explore our web development, software development, mobile apps, CRM systems, and digital transformation services."
        keywords="IT services, web development services, software development, mobile app development, CRM solutions, digital transformation, enterprise solutions"
        url="https://www.technovera.com/services"
        structuredData={structuredData}
      />
      <div className="min-h-screen bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive IT solutions tailored to your business needs
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {service.shortDescription || service.description}
                </p>
                {service.features && service.features.length > 0 && (
                  <ul className="space-y-2">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center text-sm text-gray-700"
                      >
                        <span className="text-primary-600 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                )}
                {service.isFeatured && (
                  <span className="inline-block mt-4 px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                    Featured
                  </span>
                )}
              </motion.div>
            ))}
          </div>

          {services.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">
                No services available at the moment.
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
