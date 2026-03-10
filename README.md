# TechnoVera Frontend

Modern, responsive website for TechnoVera Solutions built with React, Vite, and Tailwind CSS.

## 🚀 Quick Start

### Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:5173
```

### Production Build

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## 📦 Deployment

### Deploy to Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Configure:
   - Framework: Vite
   - Root Directory: frontend
   - Build Command: `npm run build`
   - Output Directory: `dist`

See [VERCEL_DEPLOYMENT_GUIDE.md](../VERCEL_DEPLOYMENT_GUIDE.md) for detailed instructions.

### Quick Deploy

```bash
npm install -g vercel
cd frontend
vercel --prod
```

## 🛠️ Tech Stack

- **Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS + Custom CSS
- **Routing**: React Router v6
- **Animations**: Framer Motion
- **Icons**: Lucide React, React Icons
- **Forms**: EmailJS
- **HTTP Client**: Axios

## 📁 Project Structure

```
frontend/
├── public/              # Static assets
│   ├── robots.txt
│   ├── sitemap.xml
│   └── images/
├── src/
│   ├── assets/         # Images, fonts
│   ├── components/     # Reusable components
│   ├── pages/          # Page components
│   ├── data/           # Static data
│   ├── hooks/          # Custom hooks
│   ├── utils/          # Utility functions
│   ├── router.jsx      # Route configuration
│   └── main.jsx        # Entry point
├── .env.production     # Production environment variables
├── vercel.json         # Vercel configuration
└── vite.config.js      # Vite configuration
```

## 🔧 Configuration

### Environment Variables

Create `.env.production`:

```env
VITE_BACKEND_URL=https://api.technovera.com
VITE_APP_NAME=TechnoVera Solutions
VITE_CONTACT_EMAIL=info@technovera.com
```

### Build Optimization

- Code splitting for vendors
- Terser minification
- Console.log removal in production
- Asset optimization

## 🎨 Features

- ✅ Fully responsive design
- ✅ Dark mode support
- ✅ SEO optimized
- ✅ Fast page loads
- ✅ Smooth animations
- ✅ Accessible (WCAG compliant)
- ✅ Progressive Web App ready
- ✅ Static data fallback (no backend required)

## 📱 Pages

- Home
- About Us
- Services
- Portfolio
- Technologies
- Gallery
- Blogs
- Careers
- Contact Us

## 🔒 Security

- Security headers configured
- HTTPS enforced (on Vercel)
- XSS protection
- CSRF protection
- Content Security Policy

## 🧪 Testing

```bash
# Run linter
npm run lint

# Build test
npm run build
```

## 📊 Performance

- Lighthouse Score: 95+
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3s
- Total Bundle Size: < 500KB

## 🤝 Contributing

1. Create feature branch
2. Make changes
3. Test locally
4. Submit pull request

## 📄 License

Proprietary - TechnoVera Solutions

## 📞 Support

- Email: info@technovera.com
- Phone: +91-8208385551
- Website: https://www.technovera.com

---

Built with ❤️ by TechnoVera Team
