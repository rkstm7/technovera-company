import { useState, useEffect } from 'react';
import { staticData } from '../data/staticData';

/**
 * Custom hook to fetch data from static data (no backend required)
 * @param {string} endpoint - API endpoint name (e.g., 'services', 'projects')
 * @param {boolean} fetchOnMount - Whether to fetch data on component mount
 */
export const useAPI = (endpoint, fetchOnMount = true) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        try {
            setLoading(true);
            setError(null);

            // Simulate API delay for smooth UX
            await new Promise(resolve => setTimeout(resolve, 300));

            let result;
            switch (endpoint) {
                case 'services':
                    result = staticData.services;
                    break;
                case 'projects':
                    result = staticData.projects;
                    break;
                case 'blogs':
                    result = staticData.blogs;
                    break;
                case 'testimonials':
                    result = staticData.testimonials;
                    break;
                case 'careers':
                    result = staticData.careers;
                    break;
                case 'technologies':
                    result = staticData.technologies;
                    break;
                case 'team':
                    result = staticData.team;
                    break;
                case 'gallery':
                    result = staticData.gallery;
                    break;
                case 'hero-sections':
                    result = staticData.heroSections;
                    break;
                case 'business-solutions':
                    result = staticData.businessSolutions;
                    break;
                case 'about-page':
                    result = staticData.aboutPage;
                    break;
                case 'how-we-work':
                    result = staticData.howWeWork;
                    break;
                case 'founders':
                    result = staticData.founders;
                    break;
                case 'why-choose-us':
                    result = staticData.whyChooseUs;
                    break;
                case 'business-development':
                    result = staticData.businessDevelopment;
                    break;
                case 'vision-mission':
                    result = staticData.visionMission;
                    break;
                case 'it-solutions':
                    result = staticData.itSolutions;
                    break;
                default:
                    throw new Error(`Unknown endpoint: ${endpoint}`);
            }

            setData(result || []);
        } catch (err) {
            console.error(`Error fetching ${endpoint}:`, err);
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (fetchOnMount) {
            fetchData();
        }
    }, [endpoint, fetchOnMount]);

    return { data, loading, error, refetch: fetchData };
};

/**
 * Hook to fetch single item by ID from static data
 */
export const useAPIItem = (endpoint, id) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchItem = async () => {
            if (!id) return;

            try {
                setLoading(true);
                setError(null);

                // Simulate API delay
                await new Promise(resolve => setTimeout(resolve, 300));

                let result;
                switch (endpoint) {
                    case 'services':
                        result = staticData.services.find(item => item.id === parseInt(id));
                        break;
                    case 'projects':
                        result = staticData.projects.find(item => item.id === parseInt(id));
                        break;
                    case 'blogs':
                        result = staticData.blogs.find(item => item.id === parseInt(id));
                        break;
                    case 'careers':
                        result = staticData.careers.find(item => item.id === parseInt(id));
                        break;
                    default:
                        throw new Error(`Unknown endpoint: ${endpoint}`);
                }

                setData(result || null);
            } catch (err) {
                console.error(`Error fetching ${endpoint} item:`, err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchItem();
    }, [endpoint, id]);

    return { data, loading, error };
};
