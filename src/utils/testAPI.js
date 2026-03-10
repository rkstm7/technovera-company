/**
 * API Test Utility
 * Run this to test all API endpoints
 */

import { apiService } from '../api/api';

export const testAllEndpoints = async () => {
    const endpoints = [
        { name: 'Services', fn: apiService.getServices },
        { name: 'Projects', fn: apiService.getProjects },
        { name: 'Blogs', fn: apiService.getBlogs },
        { name: 'Testimonials', fn: apiService.getTestimonials },
        { name: 'Careers', fn: apiService.getCareers },
        { name: 'Technologies', fn: apiService.getTechnologies },
        { name: 'Team', fn: apiService.getTeam },
        { name: 'Gallery', fn: apiService.getGallery },
        { name: 'Hero Sections', fn: apiService.getHeroSections },
        { name: 'Business Solutions', fn: apiService.getBusinessSolutions },
        { name: 'About Page', fn: apiService.getAboutPage },
        { name: 'How We Work', fn: apiService.getHowWeWork },
        { name: 'Founders', fn: apiService.getFounders },
        { name: 'Why Choose Us', fn: apiService.getWhyChooseUs },
        { name: 'Business Development', fn: apiService.getBusinessDevelopment },
        { name: 'Vision Mission', fn: apiService.getVisionMission },
        { name: 'IT Solutions', fn: apiService.getITSolutions },
    ];

    console.log('🧪 Testing all API endpoints...\n');

    const results = [];

    for (const endpoint of endpoints) {
        try {
            const response = await endpoint.fn();
            const count = response.data.data?.length || 0;
            console.log(`✅ ${endpoint.name}: ${count} items`);
            results.push({ name: endpoint.name, status: 'success', count });
        } catch (error) {
            console.error(`❌ ${endpoint.name}: ${error.message}`);
            results.push({ name: endpoint.name, status: 'error', error: error.message });
        }
    }

    console.log('\n📊 Summary:');
    console.log(`Total: ${results.length}`);
    console.log(`Success: ${results.filter(r => r.status === 'success').length}`);
    console.log(`Failed: ${results.filter(r => r.status === 'error').length}`);

    return results;
};

// Run test if called directly
if (import.meta.env.DEV) {
    console.log('💡 To test all endpoints, run: testAllEndpoints()');
}
