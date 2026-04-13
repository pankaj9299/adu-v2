// prerender.js
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Define meta tags per route
const routes = [
  {
    path: "/",
    title: "ADU | Home",
    description:
      "Build your dream ADU with us. Explore models, configurator, financing and more.",
    ogImage: "https://yoursite.com/og-home.png",
  },
  {
    path: "/models",
    title: "ADU Models | Browse Our Collection",
    description:
      "Browse our collection of ADU models and find the perfect fit for your property.",
    ogImage: "https://yoursite.com/og-models.png",
  },
  {
    path: "/gallery",
    title: "Gallery | ADU",
    description: "View our gallery of completed ADU projects.",
    ogImage: "https://yoursite.com/og-gallery.png",
  },
  {
    path: "/appliances",
    title: "Appliances | ADU",
    description: "Explore our appliance options for your ADU.",
    ogImage: "https://yoursite.com/og-appliances.png",
  },
  {
    path: "/financing",
    title: "Financing | ADU",
    description: "Flexible financing options to help you build your ADU.",
    ogImage: "https://yoursite.com/og-financing.png",
  },
  {
    path: "/how-it-works",
    title: "How It Works | ADU",
    description:
      "Learn how our ADU building process works from start to finish.",
    ogImage: "https://yoursite.com/og-how-it-works.png",
  },
  {
    path: "/contact-us",
    title: "Contact Us | ADU",
    description: "Get in touch with our team to start your ADU project.",
    ogImage: "https://yoursite.com/og-contact.png",
  },
  {
    path: "/about-us",
    title: "About Us | ADU",
    description:
      "Learn about our company and our mission to build quality ADUs.",
    ogImage: "https://yoursite.com/og-about.png",
  },
  {
    path: "/terms-and-condition",
    title: "Terms and Conditions | ADU",
    description: "Read our terms and conditions.",
    ogImage: "https://yoursite.com/og.png",
  },
  {
    path: "/privacy-policy",
    title: "Privacy Policy | ADU",
    description: "Read our privacy policy.",
    ogImage: "https://yoursite.com/og.png",
  },
];

function buildMetaTags(route) {
  const url = `https://yoursite.com${route.path}`;
  return `
    <title>${route.title}</title>
    <meta name="description" content="${route.description}" />
    <meta name="robots" content="index, follow" />
    <link rel="canonical" href="${url}" />

    <meta property="og:title" content="${route.title}" />
    <meta property="og:description" content="${route.description}" />
    <meta property="og:url" content="${url}" />
    <meta property="og:type" content="website" />
    <meta property="og:image" content="${route.ogImage}" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${route.title}" />
    <meta name="twitter:description" content="${route.description}" />
    <meta name="twitter:image" content="${route.ogImage}" />
  `.trim();
}

async function prerender() {
  const templatePath = path.resolve(__dirname, "dist/index.html");
  const template = fs.readFileSync(templatePath, "utf-8");

  for (const route of routes) {
    const metaTags = buildMetaTags(route);

    // Inject meta tags just before </head>
    const html = template.replace("</head>", `${metaTags}\n</head>`);

    const routePath =
      route.path === "/" ? "index.html" : `${route.path.slice(1)}/index.html`;

    const filePath = path.resolve(__dirname, "dist", routePath);
    fs.mkdirSync(path.dirname(filePath), { recursive: true });
    fs.writeFileSync(filePath, html);

    console.log(`✅ Prerendered: ${route.path}`);
  }
}

prerender();
