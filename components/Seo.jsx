import { Helmet } from "react-helmet-async";

export default function Seo({
  title,
  description,
  path,
  image = "https://adu-container.com/image/homepage/banner.png",
}) {
  const url = `https://adu-container.com${path}`;

  return (
    <Helmet>
      <title>{title}</title>

      {description && (
        <meta name="description" content={description} />
      )}

      <link rel="canonical" href={url} />
      <meta name="robots" content="index, follow" />

      {/* Open Graph (Facebook, LinkedIn etc) */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      {description && (
        <meta property="og:description" content={description} />
      )}
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      {description && (
        <meta name="twitter:description" content={description} />
      )}
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}