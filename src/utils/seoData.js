// SEO data for different pages
export const seoData = {
  home: {
    title: "SwapnSave | Buy & Sell Used Campus Essentials Easily",
    description: "SwapnSave is your trusted campus marketplace to buy and sell used books, gadgets, furniture, and more. Save money, reduce waste, and swap essentials with students near you.",
    keywords: "SwapnSave, campus marketplace, buy used books, sell gadgets, student marketplace, used furniture, swap items, save money, eco-friendly shopping, student essentials",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "SwapnSave",
      "url": "https://swapnsave.tech",
      "description": "Campus marketplace for buying and selling used essentials",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://swapnsave.tech/browse?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    }
  },
  
  browse: {
    title: "Browse Products | SwapnSave - Find Campus Essentials",
    description: "Browse thousands of used books, gadgets, furniture, and campus essentials. Find great deals on items you need for college life.",
    keywords: "browse products, used books, gadgets, furniture, campus essentials, student items, college supplies",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "Browse Products",
      "description": "Browse campus essentials and used items",
      "url": "https://swapnsave.tech/browse"
    }
  },

  sell: {
    title: "Sell Your Items | SwapnSave - Easy Campus Selling",
    description: "Sell your used books, gadgets, and campus items quickly and safely. Join thousands of students making money from unused items.",
    keywords: "sell items, sell books, sell gadgets, campus selling, student selling, make money, unused items",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Sell Your Items",
      "description": "Sell your used campus essentials",
      "url": "https://swapnsave.tech/sell"
    }
  },

  sellProject: {
    title: "Sell Your Projects | SwapnSave - Student Project Marketplace",
    description: "Sell your academic projects, coding projects, and student work. Turn your projects into income with SwapnSave.",
    keywords: "sell projects, academic projects, coding projects, student work, project marketplace, tech projects",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Sell Your Projects",
      "description": "Sell your student projects and academic work",
      "url": "https://swapnsave.tech/sell-project"
    }
  },

  about: {
    title: "About SwapnSave | Campus Marketplace for Students",
    description: "Learn about SwapnSave's mission to create a sustainable campus marketplace. Discover how we help students save money and reduce waste.",
    keywords: "about SwapnSave, campus marketplace, student platform, sustainable shopping, eco-friendly, student community",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "name": "About SwapnSave",
      "description": "Learn about our campus marketplace platform",
      "url": "https://swapnsave.tech/about"
    }
  },

  contact: {
    title: "Contact Us | SwapnSave - Get Help & Support",
    description: "Get in touch with SwapnSave support team. We're here to help with any questions about buying, selling, or using our platform.",
    keywords: "contact SwapnSave, support, help, customer service, get in touch",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "name": "Contact SwapnSave",
      "description": "Get help and support from our team",
      "url": "https://swapnsave.tech/contact"
    }
  },

  dashboard: {
    title: "Dashboard | SwapnSave - Manage Your Listings",
    description: "Manage your product listings, track sales, and monitor your SwapnSave activity from your personal dashboard.",
    keywords: "dashboard, manage listings, track sales, personal account, user dashboard",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "User Dashboard",
      "description": "Manage your SwapnSave account and listings",
      "url": "https://swapnsave.tech/dashboard"
    }
  }
};

// Generate structured data for products
export const generateProductStructuredData = (product) => {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "description": product.description,
    "image": product.image,
    "offers": {
      "@type": "Offer",
      "price": product.price,
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock"
    },
    "seller": {
      "@type": "Person",
      "name": product.seller?.name || "Student Seller"
    },
    "category": product.category
  };
};

// Generate structured data for projects
export const generateProjectStructuredData = (project) => {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": project.title,
    "description": project.description,
    "image": project.image,
    "offers": {
      "@type": "Offer",
      "price": project.price,
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock"
    },
    "creator": {
      "@type": "Person",
      "name": project.seller?.name || "Student Creator"
    },
    "category": project.category,
    "keywords": project.technologies?.join(", ")
  };
};

// Generate breadcrumb structured data
export const generateBreadcrumbStructuredData = (breadcrumbs) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.name,
      "item": crumb.url
    }))
  };
};
