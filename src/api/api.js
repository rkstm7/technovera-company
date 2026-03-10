import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

console.log('🔗 Frontend API URL:', API_URL);

const api = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Add request interceptor for debugging
api.interceptors.request.use(
    (config) => {
        console.log('📤 Frontend Request:', config.method.toUpperCase(), config.url);
        return config;
    },
    (error) => {
        console.error('❌ Frontend Request Error:', error);
        return Promise.reject(error);
    }
);

// Add response interceptor for debugging
api.interceptors.response.use(
    (response) => {
        console.log('✅ Frontend Response:', response.config.url, response.status, 'Data:', response.data);
        return response;
    },
    (error) => {
        console.error('❌ Frontend Response Error:', error.response?.status, error.response?.data);
        return Promise.reject(error);
    }
);

// API functions for frontend
export const apiService = {
    // Services
    getServices: () => api.get('/services'),
    getServiceById: (id) => api.get(`/services/${id}`),

    // Projects
    getProjects: () => api.get('/projects'),
    getProjectById: (id) => api.get(`/projects/${id}`),

    // Blogs
    getBlogs: () => api.get('/blogs'),
    getBlogById: (id) => api.get(`/blogs/${id}`),

    // Testimonials
    getTestimonials: () => api.get('/testimonials'),

    // Careers
    getCareers: () => api.get('/careers'),
    getCareerById: (id) => api.get(`/careers/${id}`),

    // Technologies
    getTechnologies: () => api.get('/technologies'),

    // Team
    getTeam: () => api.get('/team'),

    // Gallery
    getGallery: () => api.get('/gallery'),

    // Hero Sections
    getHeroSections: () => api.get('/hero-sections'),

    // Business Solutions
    getBusinessSolutions: () => api.get('/business-solutions'),

    // About Page
    getAboutPage: () => api.get('/about-page'),

    // How We Work
    getHowWeWork: () => api.get('/how-we-work'),

    // Founders
    getFounders: () => api.get('/founders'),

    // Why Choose Us
    getWhyChooseUs: () => api.get('/why-choose-us'),

    // Business Development
    getBusinessDevelopment: () => api.get('/business-development'),

    // Vision Mission
    getVisionMission: () => api.get('/vision-mission'),

    // IT Solutions
    getITSolutions: () => api.get('/it-solutions'),

    // Inquiries (Public - Create only)
    createInquiry: (data) => api.post('/inquiries', data),
};

export default api;
