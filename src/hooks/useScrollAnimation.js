import { useEffect, useRef, useState } from 'react';

/**
 * Custom hook for scroll-based animations
 * @param {Object} options - Configuration options
 * @param {number} options.threshold - Intersection threshold (0-1)
 * @param {string} options.rootMargin - Root margin for intersection observer
 * @returns {Object} - { ref, isVisible }
 */
export const useScrollAnimation = (options = {}) => {
    const { threshold = 0.1, rootMargin = '0px' } = options;
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold, rootMargin }
        );

        const currentRef = ref.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [threshold, rootMargin]);

    return { ref, isVisible };
};

/**
 * Custom hook for parallax scroll effect
 * @param {number} speed - Parallax speed multiplier
 * @returns {Object} - { ref, offset }
 */
export const useParallax = (speed = 0.5) => {
    const ref = useRef(null);
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (ref.current) {
                const rect = ref.current.getBoundingClientRect();
                const scrolled = window.pageYOffset;
                const rate = scrolled * speed;
                setOffset(rate);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [speed]);

    return { ref, offset };
};
