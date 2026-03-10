/**
 * Utility helper functions
 */

/**
 * Debounce function to limit function calls
 */
export const debounce = (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
};

/**
 * Throttle function to limit function execution rate
 */
export const throttle = (func, limit) => {
    let inThrottle;
    return function (...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
};

/**
 * Format date to readable string
 */
export const formatDate = (date, options = {}) => {
    const defaultOptions = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        ...options
    };
    return new Date(date).toLocaleDateString('en-US', defaultOptions);
};

/**
 * Truncate text with ellipsis
 */
export const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + '...';
};

/**
 * Generate random ID
 */
export const generateId = () => {
    return Math.random().toString(36).substr(2, 9);
};

/**
 * Check if element is in viewport
 */
export const isInViewport = (element) => {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

/**
 * Smooth scroll to element
 */
export const scrollToElement = (elementId, offset = 0) => {
    const element = document.getElementById(elementId);
    if (element) {
        const top = element.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top, behavior: 'smooth' });
    }
};

/**
 * Copy text to clipboard
 */
export const copyToClipboard = async (text) => {
    try {
        await navigator.clipboard.writeText(text);
        return true;
    } catch (err) {
        console.error('Failed to copy:', err);
        return false;
    }
};

/**
 * Validate email format
 */
export const isValidEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
};

/**
 * Validate phone number
 */
export const isValidPhone = (phone) => {
    const regex = /^[\d\s\-\+\(\)]+$/;
    return regex.test(phone) && phone.replace(/\D/g, '').length >= 10;
};

/**
 * Format number with commas
 */
export const formatNumber = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

/**
 * Get random item from array
 */
export const getRandomItem = (array) => {
    return array[Math.floor(Math.random() * array.length)];
};

/**
 * Shuffle array
 */
export const shuffleArray = (array) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
};
