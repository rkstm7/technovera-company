// Static data for frontend - No backend required
export const staticData = {
  services: [
    {
      id: 1,
      title: "Website Development",
      description: "Custom web applications built with modern technologies for your business needs",
      icon: "Code",
      image: "/src/assets/images/home/websitedevelopment1.avif",
      isActive: true,
      order: 1
    },
    {
      id: 2,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android",
      icon: "Smartphone",
      image: "/src/assets/images/home/mobileapp1.png",
      isActive: true,
      order: 2
    },
    {
      id: 3,
      title: "UI/UX Design",
      description: "Beautiful and intuitive user interfaces that enhance user experience",
      icon: "Palette",
      image: "/src/assets/images/home/uiux2.jpg",
      isActive: true,
      order: 3
    },
    {
      id: 4,
      title: "Software Development",
      description: "Custom software solutions tailored to your business requirements",
      icon: "Code",
      image: "/src/assets/images/home/softwaredevelop.jpg",
      isActive: true,
      order: 4
    },
    {
      id: 5,
      title: "Digital Marketing",
      description: "SEO, social media, and content marketing to grow your business",
      icon: "TrendingUp",
      image: "/src/assets/images/home/digitalmarketing1.webp",
      isActive: true,
      order: 5
    }
  ],

  projects: [
    // Website Development Projects
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-featured online shopping platform with payment integration, inventory management, and customer analytics",
      shortDescription: "Modern e-commerce solution with seamless checkout and inventory management",
      image: "/src/assets/images/it_solutions/ecommerce1.webp",
      category: "Web Development",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "#",
      githubUrl: "#",
      isActive: true,
      order: 1
    },
    {
      id: 2,
      title: "Corporate Website",
      description: "Professional corporate website with modern design, responsive layout, and SEO optimization",
      shortDescription: "Elegant corporate website with responsive design and SEO-ready structure",
      image: "/src/assets/images/it_solutions/web1.jpg",
      category: "Web Development",
      technologies: ["React", "Tailwind CSS", "Vite", "Framer Motion"],
      liveUrl: "#",
      githubUrl: "#",
      isActive: true,
      order: 2
    },
    {
      id: 3,
      title: "Business Portfolio Website",
      description: "Modern portfolio website showcasing business services with interactive animations and smooth transitions",
      shortDescription: "Interactive portfolio with stunning animations and modern UI/UX",
      image: "/src/assets/images/it_solutions/web2.png",
      category: "Web Development",
      technologies: ["Next.js", "TypeScript", "GSAP", "Three.js"],
      liveUrl: "#",
      githubUrl: "#",
      isActive: true,
      order: 3
    },
    {
      id: 4,
      title: "SaaS Landing Page",
      description: "High-converting SaaS landing page with modern design, clear CTAs, and optimized performance",
      shortDescription: "Conversion-focused landing page with modern design and fast loading",
      image: "/src/assets/images/it_solutions/web3.jpg",
      category: "Web Development",
      technologies: ["React", "Tailwind CSS", "React Router", "AOS"],
      liveUrl: "#",
      githubUrl: "#",
      isActive: true,
      order: 4
    },
    {
      id: 5,
      title: "Digital Marketing Dashboard",
      description: "Comprehensive analytics dashboard for tracking digital marketing campaigns with real-time insights",
      shortDescription: "Real-time marketing analytics with interactive charts and reports",
      image: "/src/assets/images/it_solutions/digital1.jpg",
      category: "Web Development",
      technologies: ["React", "D3.js", "Chart.js", "Firebase"],
      liveUrl: "#",
      githubUrl: "#",
      isActive: true,
      order: 5
    },
    {
      id: 6,
      title: "UI/UX Design Portfolio",
      description: "Creative portfolio website showcasing UI/UX design projects with case studies and interactive prototypes",
      shortDescription: "Designer portfolio with interactive case studies and prototypes",
      image: "/src/assets/images/it_solutions/uiux1.jpg",
      category: "Web Development",
      technologies: ["React", "Framer Motion", "GSAP", "Figma"],
      liveUrl: "#",
      githubUrl: "#",
      isActive: true,
      order: 6
    },

    // Mobile App Projects
    {
      id: 7,
      title: "Food Delivery App",
      description: "Cross-platform mobile app for food ordering with real-time tracking, payment integration, and user reviews",
      shortDescription: "Seamless food ordering app with live tracking and secure payments",
      image: "/src/assets/images/it_solutions/app1.jpg",
      category: "Mobile Development",
      technologies: ["React Native", "Firebase", "Stripe", "Google Maps API"],
      liveUrl: "#",
      githubUrl: "#",
      isActive: true,
      order: 7
    },
    {
      id: 8,
      title: "Fitness Tracking App",
      description: "Mobile fitness app with workout tracking, nutrition planning, and progress analytics",
      shortDescription: "Complete fitness solution with workout plans and progress tracking",
      image: "/src/assets/images/it_solutions/app2.webp",
      category: "Mobile Development",
      technologies: ["React Native", "Redux", "HealthKit", "Firebase"],
      liveUrl: "#",
      githubUrl: "#",
      isActive: true,
      order: 8
    },
    {
      id: 9,
      title: "E-Learning Mobile App",
      description: "Educational mobile app with video courses, quizzes, progress tracking, and certificates",
      shortDescription: "Interactive learning platform with courses, quizzes, and certifications",
      image: "/src/assets/images/it_solutions/app3.webp",
      category: "Mobile Development",
      technologies: ["Flutter", "Dart", "Firebase", "Video SDK"],
      liveUrl: "#",
      githubUrl: "#",
      isActive: true,
      order: 9
    },

    // Additional Projects
    {
      id: 10,
      title: "Business Analytics Dashboard",
      description: "Comprehensive analytics solution for data-driven business decisions with real-time insights and reporting",
      shortDescription: "Data-driven insights with real-time analytics and custom reports",
      image: "/src/assets/images/it_solutions/ba1.jpg",
      category: "Web Development",
      technologies: ["React", "Python", "PostgreSQL", "D3.js"],
      liveUrl: "#",
      githubUrl: "#",
      isActive: true,
      order: 10
    },
    {
      id: 11,
      title: "Enterprise Software Solution",
      description: "Custom enterprise software with scalable architecture, role-based access, and comprehensive reporting",
      shortDescription: "Scalable enterprise solution with advanced security and reporting",
      image: "/src/assets/images/it_solutions/sd1.jpg",
      category: "Web Development",
      technologies: ["Java", "Spring Boot", "MySQL", "Docker"],
      liveUrl: "#",
      githubUrl: "#",
      isActive: true,
      order: 11
    },
    {
      id: 12,
      title: "Brand Identity Website",
      description: "Creative brand showcase website with stunning visuals, brand storytelling, and interactive elements",
      shortDescription: "Stunning brand showcase with interactive storytelling and visuals",
      image: "/src/assets/images/it_solutions/ba2.png",
      category: "Web Development",
      technologies: ["Next.js", "GSAP", "Three.js", "Contentful"],
      liveUrl: "#",
      githubUrl: "#",
      isActive: true,
      order: 12
    },
    {
      id: 13,
      title: "Graphic Design Portfolio",
      description: "Creative portfolio showcasing graphic design work with high-quality images and project case studies",
      shortDescription: "Designer portfolio with stunning visuals and detailed case studies",
      image: "/src/assets/images/it_solutions/gd1.jpg",
      category: "Web Development",
      technologies: ["React", "Framer Motion", "Lightbox", "Masonry"],
      liveUrl: "#",
      githubUrl: "#",
      isActive: true,
      order: 13
    },
    {
      id: 14,
      title: "Digital Marketing Campaign Site",
      description: "Campaign website with lead generation forms, analytics tracking, and conversion optimization",
      shortDescription: "High-converting campaign site with lead generation and analytics",
      image: "/src/assets/images/it_solutions/digital2.webp",
      category: "Web Development",
      technologies: ["React", "Google Analytics", "Mailchimp", "Hotjar"],
      liveUrl: "#",
      githubUrl: "#",
      isActive: true,
      order: 14
    },
    {
      id: 15,
      title: "UI/UX Design System",
      description: "Comprehensive design system with reusable components, style guide, and documentation",
      shortDescription: "Complete design system with components and documentation",
      image: "/src/assets/images/it_solutions/uiux2.jpg",
      category: "Web Development",
      technologies: ["Storybook", "React", "Styled Components", "TypeScript"],
      liveUrl: "#",
      githubUrl: "#",
      isActive: true,
      order: 15
    }
  ],

  blogs: [
    {
      id: 1,
      title: "The Future of Web Development in 2025",
      content: "Exploring upcoming trends in web development including AI integration, WebAssembly, and progressive web apps...",
      excerpt: "Discover the latest trends shaping the future of web development including AI, WebAssembly, and modern frameworks",
      image: "/images/blogs/blog1.webp",
      category: "Web Development",
      author: "TechnoVera Team",
      slug: "future-of-web-development-2025",
      isPublished: true,
      createdAt: "2024-12-15T00:00:00.000Z"
    },
    {
      id: 2,
      title: "Cloud Computing Best Practices for Startups",
      content: "Essential practices for cloud deployment including cost optimization, security, and scalability strategies...",
      excerpt: "Learn the best practices for deploying applications to the cloud with focus on security and cost optimization",
      image: "/images/blogs/blog2.webp",
      category: "Cloud Computing",
      author: "TechnoVera Team",
      slug: "cloud-computing-best-practices",
      isPublished: true,
      createdAt: "2024-12-10T00:00:00.000Z"
    },
    {
      id: 3,
      title: "Mobile App Development: Native vs Cross-Platform",
      content: "Comprehensive comparison of native and cross-platform mobile development approaches...",
      excerpt: "Understanding the pros and cons of native vs cross-platform mobile app development",
      image: "/images/blogs/blog3.jpg",
      category: "Mobile Development",
      author: "TechnoVera Team",
      slug: "native-vs-cross-platform",
      isPublished: true,
      createdAt: "2024-12-05T00:00:00.000Z"
    },
    {
      id: 4,
      title: "UI/UX Design Trends That Will Dominate 2025",
      content: "Latest design trends including neumorphism, glassmorphism, and AI-powered design tools...",
      excerpt: "Explore the cutting-edge UI/UX design trends that are reshaping digital experiences",
      image: "/images/blogs/blog4.png",
      category: "Design",
      author: "TechnoVera Team",
      slug: "uiux-design-trends-2025",
      isPublished: true,
      createdAt: "2024-11-28T00:00:00.000Z"
    },
    {
      id: 5,
      title: "Digital Marketing Strategies for Tech Companies",
      content: "Effective digital marketing strategies including SEO, content marketing, and social media...",
      excerpt: "Master digital marketing strategies specifically tailored for technology companies",
      image: "/images/blogs/blog5.jpg",
      category: "Digital Marketing",
      author: "TechnoVera Team",
      slug: "digital-marketing-strategies",
      isPublished: true,
      createdAt: "2024-11-20T00:00:00.000Z"
    },
    {
      id: 6,
      title: "Building Scalable Software Architecture",
      content: "Best practices for designing and implementing scalable software systems...",
      excerpt: "Learn how to build robust and scalable software architecture for enterprise applications",
      image: "/images/blogs/blog6.jpg",
      category: "Software Engineering",
      author: "TechnoVera Team",
      slug: "scalable-software-architecture",
      isPublished: true,
      createdAt: "2024-11-15T00:00:00.000Z"
    }
  ],

  testimonials: [
    {
      id: 1,
      name: "Rajesh Kumar",
      position: "CEO",
      company: "TechStart Solutions",
      content: "TechnoVera delivered an exceptional e-commerce platform that exceeded our expectations. Their attention to detail and technical expertise is unmatched.",
      image: "",
      rating: 5,
      isActive: true
    },
    {
      id: 2,
      name: "Priya Sharma",
      position: "CTO",
      company: "Innovation Labs India",
      content: "Professional team with excellent technical expertise and communication. They transformed our legacy system into a modern, scalable solution.",
      image: "",
      rating: 5,
      isActive: true
    },
    {
      id: 3,
      name: "Amit Patel",
      position: "Product Manager",
      company: "StartupXYZ",
      content: "They transformed our ideas into reality with great attention to detail. The mobile app they developed has received outstanding user feedback.",
      image: "",
      rating: 5,
      isActive: true
    },
    {
      id: 4,
      name: "Sneha Reddy",
      position: "Founder",
      company: "Digital Ventures",
      content: "TechnoVera's UI/UX design expertise helped us create a beautiful and intuitive product. Our user engagement increased by 60% after the redesign.",
      image: "",
      rating: 5,
      isActive: true
    },
    {
      id: 5,
      name: "Vikram Singh",
      position: "Director",
      company: "Enterprise Solutions Ltd",
      content: "Outstanding software development services! They delivered our enterprise solution on time and within budget. Highly recommended for complex projects.",
      image: "",
      rating: 5,
      isActive: true
    },
    {
      id: 6,
      name: "Ananya Desai",
      position: "Marketing Head",
      company: "GrowthHub",
      content: "Their digital marketing strategies helped us achieve 3x growth in just 6 months. The team is knowledgeable, responsive, and results-driven.",
      image: "",
      rating: 5,
      isActive: true
    },
    {
      id: 7,
      name: "Karthik Menon",
      position: "Co-Founder",
      company: "FinTech Innovations",
      content: "TechnoVera built our fintech platform with top-notch security and performance. Their expertise in handling sensitive data is commendable.",
      image: "",
      rating: 5,
      isActive: true
    },
    {
      id: 8,
      name: "Neha Gupta",
      position: "Operations Manager",
      company: "LogiTech Systems",
      content: "The custom software solution they developed streamlined our operations significantly. We've seen a 40% improvement in efficiency.",
      image: "",
      rating: 5,
      isActive: true
    },
    {
      id: 9,
      name: "Arjun Mehta",
      position: "Tech Lead",
      company: "CloudScale Inc",
      content: "Excellent cloud migration services! TechnoVera helped us transition smoothly to AWS with zero downtime. Their technical knowledge is impressive.",
      image: "",
      rating: 5,
      isActive: true
    },
    {
      id: 10,
      name: "Divya Iyer",
      position: "Business Owner",
      company: "Retail Pro",
      content: "From concept to deployment, TechnoVera was with us every step. Their e-commerce solution boosted our online sales by 150%. Fantastic work!",
      image: "",
      rating: 5,
      isActive: true
    }
  ],

  careers: [
    {
      id: 1,
      title: "Full Stack Developer",
      description: "We are looking for an experienced Full Stack Developer",
      requirements: "3+ years experience with React and Node.js",
      location: "Remote",
      type: "Full-time",
      isActive: true
    },
    {
      id: 2,
      title: "UI/UX Designer",
      description: "Creative designer to join our team",
      requirements: "2+ years experience with Figma and design systems",
      location: "Hybrid",
      type: "Full-time",
      isActive: true
    }
  ],

  technologies: [
    {
      id: 1,
      name: "React",
      category: "frontend",
      icon: "/images/tech/react.png",
      isActive: true
    },
    {
      id: 2,
      name: "Node.js",
      category: "backend",
      icon: "/images/tech/nodejs.png",
      isActive: true
    },
    {
      id: 3,
      name: "MongoDB",
      category: "database",
      icon: "/images/tech/mongodb.png",
      isActive: true
    },
    {
      id: 4,
      name: "AWS",
      category: "cloud",
      icon: "/images/tech/aws.png",
      isActive: true
    },
    {
      id: 5,
      name: "React Native",
      category: "mobile",
      icon: "/images/tech/react-native.png",
      isActive: true
    },
    {
      id: 6,
      name: "Docker",
      category: "devops",
      icon: "/images/tech/docker.png",
      isActive: true
    }
  ],

  team: [
    {
      id: 1,
      name: "Rajesh Kumar",
      position: "Senior Full Stack Developer",
      image: "",
      linkedin: "https://www.linkedin.com/in/rajeshkumar",
      bio: "Expert in MERN stack with 8+ years of experience",
      isActive: true
    },
    {
      id: 2,
      name: "Priya Sharma",
      position: "UI/UX Designer",
      image: "",
      linkedin: "https://www.linkedin.com/in/priyasharma",
      bio: "Creative designer specializing in user-centered design",
      isActive: true
    },
    {
      id: 3,
      name: "Amit Patel",
      position: "Backend Developer",
      image: "",
      linkedin: "https://www.linkedin.com/in/amitpatel",
      bio: "Node.js and Python expert with cloud expertise",
      isActive: true
    },
    {
      id: 4,
      name: "Sneha Reddy",
      position: "Frontend Developer",
      image: "",
      linkedin: "https://www.linkedin.com/in/snehareddy",
      bio: "React and Vue.js specialist",
      isActive: true
    },
    {
      id: 5,
      name: "Vikram Singh",
      position: "DevOps Engineer",
      image: "",
      linkedin: "https://www.linkedin.com/in/vikramsingh",
      bio: "AWS and Docker expert with CI/CD expertise",
      isActive: true
    },
    {
      id: 6,
      name: "Ananya Gupta",
      position: "QA Engineer",
      image: "",
      linkedin: "https://www.linkedin.com/in/ananyagupta",
      bio: "Automation testing specialist",
      isActive: true
    },
    {
      id: 7,
      name: "Rahul Verma",
      position: "Mobile App Developer",
      image: "",
      linkedin: "https://www.linkedin.com/in/rahulverma",
      bio: "React Native and Flutter developer",
      isActive: true
    },
    {
      id: 8,
      name: "Kavya Iyer",
      position: "Business Analyst",
      image: "",
      linkedin: "https://www.linkedin.com/in/kavyaiyer",
      bio: "Requirements gathering and analysis expert",
      isActive: true
    },
    {
      id: 9,
      name: "Arjun Mehta",
      position: "Data Scientist",
      image: "",
      linkedin: "https://www.linkedin.com/in/arjunmehta",
      bio: "Machine learning and AI specialist",
      isActive: true
    },
    {
      id: 10,
      name: "Pooja Desai",
      position: "Project Manager",
      image: "",
      linkedin: "https://www.linkedin.com/in/poojadesai",
      bio: "Agile and Scrum certified PM",
      isActive: true
    },
    {
      id: 11,
      name: "Karthik Rao",
      position: "Database Administrator",
      image: "",
      linkedin: "https://www.linkedin.com/in/karthikrao",
      bio: "MySQL and MongoDB expert",
      isActive: true
    },
    {
      id: 12,
      name: "Divya Nair",
      position: "Content Writer",
      image: "",
      linkedin: "https://www.linkedin.com/in/divyanair",
      bio: "Technical content and documentation specialist",
      isActive: true
    },
    {
      id: 13,
      name: "Sanjay Joshi",
      position: "Security Analyst",
      image: "",
      linkedin: "https://www.linkedin.com/in/sanjayjoshi",
      bio: "Cybersecurity and penetration testing expert",
      isActive: true
    },
    {
      id: 14,
      name: "Meera Krishnan",
      position: "Digital Marketing Manager",
      image: "",
      linkedin: "https://www.linkedin.com/in/meerakrishnan",
      bio: "SEO and social media marketing expert",
      isActive: true
    },
    {
      id: 15,
      name: "Aditya Chopra",
      position: "Cloud Architect",
      image: "",
      linkedin: "https://www.linkedin.com/in/adityachopra",
      bio: "AWS and Azure certified architect",
      isActive: true
    },
    {
      id: 16,
      name: "Ritu Malhotra",
      position: "HR Manager",
      image: "",
      linkedin: "https://www.linkedin.com/in/ritumalhotra",
      bio: "Talent acquisition and employee engagement",
      isActive: true
    },
    {
      id: 17,
      name: "Nikhil Agarwal",
      position: "Blockchain Developer",
      image: "",
      linkedin: "https://www.linkedin.com/in/nikhilagarwal",
      bio: "Smart contracts and DApp development",
      isActive: true
    },
    {
      id: 18,
      name: "Swati Bansal",
      position: "Graphic Designer",
      image: "",
      linkedin: "https://www.linkedin.com/in/swatibansal",
      bio: "Brand identity and visual design expert",
      isActive: true
    },
    {
      id: 19,
      name: "Manish Tiwari",
      position: "System Administrator",
      image: "",
      linkedin: "https://www.linkedin.com/in/manishtiwari",
      bio: "Linux and Windows server management",
      isActive: true
    },
    {
      id: 20,
      name: "Neha Kapoor",
      position: "Product Manager",
      image: "",
      linkedin: "https://www.linkedin.com/in/nehakapoor",
      bio: "Product strategy and roadmap planning",
      isActive: true
    },
    {
      id: 21,
      name: "Rohit Saxena",
      position: "AI/ML Engineer",
      image: "",
      linkedin: "https://www.linkedin.com/in/rohitsaxena",
      bio: "Deep learning and neural networks specialist",
      isActive: true
    },
    {
      id: 22,
      name: "Anjali Bhatt",
      position: "Customer Success Manager",
      image: "",
      linkedin: "https://www.linkedin.com/in/anjalibhatt",
      bio: "Client relationship and support expert",
      isActive: true
    }
  ],

  gallery: [
    {
      id: 1,
      title: "Office Space 1",
      image: "/src/assets/images/gallery/office1.webp",
      isActive: true
    },
    {
      id: 2,
      title: "Office Space 2",
      image: "/src/assets/images/gallery/office2.jpg",
      isActive: true
    },
    {
      id: 3,
      title: "Office Space 3",
      image: "/src/assets/images/gallery/office3.avif",
      isActive: true
    },
    {
      id: 4,
      title: "Office Space 4",
      image: "/src/assets/images/gallery/office4.jpg",
      isActive: true
    },
    {
      id: 5,
      title: "Office Space 5",
      image: "/src/assets/images/gallery/office5.jpg",
      isActive: true
    },
    {
      id: 6,
      title: "Office Space 6",
      image: "/src/assets/images/gallery/office6.jpg",
      isActive: true
    },
    {
      id: 7,
      title: "Office Space 7",
      image: "/src/assets/images/gallery/office7.jpg",
      isActive: true
    },
    {
      id: 8,
      title: "Office Space 8",
      image: "/src/assets/images/gallery/office8.jpg",
      isActive: true
    },
    {
      id: 9,
      title: "Office Space 9",
      image: "/src/assets/images/gallery/office9.jpg",
      isActive: true
    }
  ],

  heroSections: [
    {
      id: 1,
      title: "Transform Your Business with Technology",
      subtitle: "Innovative Solutions for Modern Challenges",
      description: "We deliver cutting-edge software solutions that drive growth and efficiency",
      images: [
        "/src/assets/images/home/carousel1.jpg",
        "/src/assets/images/home/carousel2.jpg",
        "/src/assets/images/home/carousel3.jpg"
      ],
      quotes: [
        {
          title: "Innovation is Our Passion",
          subtitle: "Building tomorrow's technology today with cutting-edge solutions"
        },
        {
          title: "Excellence in Every Project",
          subtitle: "Delivering quality software that exceeds expectations"
        },
        {
          title: "Your Success is Our Mission",
          subtitle: "Partnering with you to achieve your business goals"
        }
      ],
      ctaText: "Get Started",
      ctaLink: "/contact",
      isActive: true
    }
  ],

  businessSolutions: [
    {
      id: 1,
      title: "Enterprise Solutions",
      description: "Comprehensive business management systems",
      icon: "Building",
      isActive: true,
      order: 1
    },
    {
      id: 2,
      title: "Process Automation",
      description: "Streamline your business processes",
      icon: "Zap",
      isActive: true,
      order: 2
    }
  ],

  aboutPage: [
    {
      id: 1,
      title: "About TechnoVera",
      content: "We are a leading technology company dedicated to delivering innovative solutions.",
      mission: "To empower businesses through technology",
      vision: "To be the most trusted technology partner",
      isActive: true
    }
  ],

  howWeWork: [
    {
      id: 1,
      step: 1,
      title: "Discovery",
      description: "Understanding your requirements",
      icon: "Search",
      isActive: true
    },
    {
      id: 2,
      step: 2,
      title: "Planning",
      description: "Creating a detailed roadmap",
      icon: "Map",
      isActive: true
    },
    {
      id: 3,
      step: 3,
      title: "Development",
      description: "Building your solution",
      icon: "Code",
      isActive: true
    },
    {
      id: 4,
      step: 4,
      title: "Delivery",
      description: "Launching and supporting",
      icon: "Rocket",
      isActive: true
    }
  ],

  founders: [
    {
      id: 1,
      name: "Mr. Vishal Nair",
      position: "CEO & Founder",
      bio: "Mr. Vishal Nair is the Founder and CEO with a strong entrepreneurial vision and deep expertise in both traditional and technology-driven businesses. He has successfully built and scaled a printing solutions business that specializes in product branding and customized printing for corporate vendors. His company works closely with multiple vendors and brands to deliver high-quality printing on products such as bags, T-shirts, and various promotional and stationery items. By maintaining strong vendor partnerships and focusing on quality, speed, and cost efficiency, he ensures that every order is delivered on time while maintaining the highest standards. Vishal strongly believes in building efficient teams by hiring the right talent, optimizing resources, and training them effectively to achieve operational excellence. His strategic thinking and ability to manage resources efficiently allow the business to provide competitive pricing while maintaining premium quality. Through dedication to reliability and customer satisfaction, he has positioned the company as a trusted partner for branding and printing solutions. Alongside his success in the printing industry, Vishal has also established a growing presence in the IT sector. His technology venture focuses on delivering modern digital solutions including software development, website development, and CRM-based platforms for businesses. With a creative mindset and a strong belief in innovation, he encourages experimentation and continuous learning within his teams. Vishal's leadership style is defined by clarity in decision-making, adaptability, and a commitment to building scalable solutions for clients. His ability to bridge traditional business expertise with modern technology enables the organization to grow across multiple industries while consistently delivering value to its customers.",
      image: "/src/assets/images/pages/founder.png",
      linkedin: "https://www.linkedin.com/in/vishalnair",
      twitter: "https://twitter.com/vishalnair",
      instagram: "https://www.instagram.com/vishalnair",
      email: "vishal@technovera.com",
      isActive: true
    },
    {
      id: 2,
      name: "Mr. Rohit Singh",
      position: "CTO & Co-Founder",
      bio: "Mr. Rohit Singh is the Co-Founder and Chief Technology Officer (CTO) of TechnoVera Services, where he leads the company's technology vision and innovation strategy. As a young and passionate entrepreneur, Rohit is deeply dedicated to building scalable digital solutions and driving technological advancement within the organization. With a strong academic background in Information Technology engineering, he developed a keen interest in programming, web technologies, and artificial intelligence during his college years. His early projects and initiatives laid the foundation for his expertise in developing intelligent systems, websites, and innovative technology solutions. Rohit is known for his ability to handle complex technical challenges with confidence and creativity. He believes in continuous innovation and enjoys working in fast-paced environments where problem-solving and quick decision-making are essential. His technical expertise spans across modern web development, AI-driven solutions, and advanced software architecture. Rohit has also been actively involved in developing AI-based tools, intelligent agents, and modern digital platforms that help businesses operate more efficiently. At TechnoVera Services, Rohit plays a crucial role in shaping the company's technology direction and expanding its capabilities in the IT sector. He focuses on mentoring and training technical teams, ensuring that the organization stays aligned with the latest industry trends and emerging technologies. Known for his calm personality, positive attitude, and strong leadership qualities, Rohit builds strong relationships with both team members and clients. His dedication, innovative mindset, and commitment to delivering high-quality solutions continue to drive the company's growth and success in the technology space.",
      image: "/src/assets/images/co_founder.jpeg",
      linkedin: "https://www.linkedin.com/in/rohitsingh",
      twitter: "https://twitter.com/rohitsingh",
      instagram: "https://www.instagram.com/rohitsingh",
      email: "rohit@technovera.com",
      isActive: true
    }
  ],

  whyChooseUs: [
    {
      id: 1,
      title: "Expert Team",
      description: "Highly skilled professionals",
      icon: "Users",
      isActive: true,
      order: 1
    },
    {
      id: 2,
      title: "Quality Assurance",
      description: "Rigorous testing processes",
      icon: "CheckCircle",
      isActive: true,
      order: 2
    },
    {
      id: 3,
      title: "On-Time Delivery",
      description: "Meeting deadlines consistently",
      icon: "Clock",
      isActive: true,
      order: 3
    }
  ],

  businessDevelopment: [
    {
      id: 1,
      title: "Market Analysis",
      description: "In-depth market research and analysis",
      icon: "TrendingUp",
      isActive: true,
      order: 1
    },
    {
      id: 2,
      title: "Strategy Planning",
      description: "Comprehensive business strategies",
      icon: "Target",
      isActive: true,
      order: 2
    }
  ],

  visionMission: [
    {
      id: 1,
      title: "Our Vision & Mission",
      subtitle: "Driving Innovation, Delivering Excellence",
      description: "At TechnoVera, we are committed to transforming businesses through innovative technology solutions. Our vision is to be the leading technology partner globally, while our mission is to deliver cutting-edge solutions that drive growth and success.",
      vision: "To be the leading technology solutions provider globally, empowering businesses with innovative and scalable digital solutions.",
      mission: "Delivering innovative solutions that transform businesses, enhance efficiency, and create lasting value for our clients worldwide.",
      values: "Innovation, Excellence, Integrity, Customer Focus, Collaboration",
      ctaText: "Learn More About Us",
      ctaLink: "/about",
      circleImage1: "/src/assets/images/solutions/main.jpg",
      circleImage2: "/src/assets/images/solutions/small.jpg",
      isActive: true
    }
  ],

  itSolutions: [
    {
      id: 1,
      title: "Website Development",
      description: "We build modern, responsive, SEO-ready websites designed for performance, conversions, and branding.",
      images: [
        "/src/assets/images/it_solutions/web1.jpg",
        "/src/assets/images/it_solutions/web2.png",
        "/src/assets/images/it_solutions/web3.jpg"
      ],
      color: "from-blue-500 to-cyan-500",
      isActive: true,
      order: 1
    },
    {
      id: 2,
      title: "App Development",
      description: "Native & hybrid apps for iOS and Android — optimized for speed, UI/UX, and business workflows.",
      images: [
        "/src/assets/images/it_solutions/app1.jpg",
        "/src/assets/images/it_solutions/app2.webp",
        "/src/assets/images/it_solutions/app3.webp"
      ],
      color: "from-purple-500 to-pink-500",
      isActive: true,
      order: 2
    },
    {
      id: 3,
      title: "Digital Marketing",
      description: "Grow your business visibility with SEO, social ads, branding, content marketing, and analytics.",
      images: [
        "/src/assets/images/it_solutions/digital1.jpg",
        "/src/assets/images/it_solutions/digital2.webp",
        "/src/assets/images/it_solutions/digital3.jpg"
      ],
      color: "from-green-500 to-emerald-500",
      isActive: true,
      order: 3
    },
    {
      id: 4,
      title: "UI/UX Design",
      description: "Exceptional UI/UX crafted using modern design principles, user flows, and interaction psychology.",
      images: [
        "/src/assets/images/it_solutions/uiux1.jpg",
        "/src/assets/images/it_solutions/uiux2.jpg",
        "/src/assets/images/it_solutions/uiux3.jpg"
      ],
      color: "from-orange-500 to-red-500",
      isActive: true,
      order: 4
    },
    {
      id: 5,
      title: "Software Development",
      description: "Custom software tailored for automation, scaling, and high-performance enterprise operations.",
      images: [
        "/src/assets/images/it_solutions/sd1.jpg",
        "/src/assets/images/it_solutions/sd2.jpg",
        "/src/assets/images/it_solutions/sd3.jpg"
      ],
      color: "from-indigo-500 to-blue-500",
      isActive: true,
      order: 5
    },
    {
      id: 6,
      title: "Brand Awareness",
      description: "Promote your brand identity across social, digital, and offline channels with effective strategies.",
      images: [
        "/src/assets/images/it_solutions/ba1.jpg",
        "/src/assets/images/it_solutions/ba2.png",
        "/src/assets/images/it_solutions/ba3.webp"
      ],
      color: "from-pink-500 to-rose-500",
      isActive: true,
      order: 6
    },
    {
      id: 7,
      title: "Graphics Designing",
      description: "High-quality creatives — posters, logos, social media posts, banners, and marketing designs.",
      images: [
        "/src/assets/images/it_solutions/gd1.jpg",
        "/src/assets/images/it_solutions/gd2.jpg",
        "/src/assets/images/it_solutions/gd3.jpg"
      ],
      color: "from-yellow-500 to-orange-500",
      isActive: true,
      order: 7
    },
    {
      id: 8,
      title: "E-commerce Development",
      description: "Modern, secure, product-focused eCommerce stores with admin dashboards and payment systems.",
      images: [
        "/src/assets/images/it_solutions/ecommerce1.webp",
        "/src/assets/images/it_solutions/ecommerce2.webp",
        "/src/assets/images/it_solutions/ecommerce3.jpg"
      ],
      color: "from-teal-500 to-cyan-500",
      isActive: true,
      order: 8
    }
  ]
};
