import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEOHead = ({
  title = "SwapnSave | Buy & Sell Used Campus Essentials Easily",
  description = "SwapnSave is your trusted campus marketplace to buy and sell used books, gadgets, furniture, and more. Save money, reduce waste, and swap essentials with students near you.",
  keywords = "SwapnSave, campus marketplace, buy used books, sell gadgets, student marketplace, used furniture, swap items, save money, eco-friendly shopping",
  image = "/logo.png",
  url = "https://swapnsave.tech",
  type = "website",
  structuredData = null
}) => {
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="SwapnSave Team" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="SwapnSave" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:site" content="@SwapnSave" />
      <meta name="twitter:creator" content="@SwapnSave" />

      {/* Additional SEO Meta Tags */}
      <meta name="theme-color" content="#000000" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-title" content="SwapnSave" />

      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEOHead;
