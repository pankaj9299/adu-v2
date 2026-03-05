import React from "react";
import { Helmet } from "react-helmet-async";

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>404 - Page Not Found</title>
        <meta name="robots" content="noindex,nofollow" />
      </Helmet>

      <div style={{ padding: 40 }}>
        <h1>404 - Page Not Found</h1>
        <p>The page you’re looking for doesn’t exist.</p>
      </div>
    </>
  );
}