const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
    providerImportSource: "@mdx-js/react",
  },
});

module.exports = withMDX({
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  experimental: {
    appDir: true,
    mdxRs: true,
  },
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "pbs.twimg.com",
      "abs.twimg.com",
      "m.media-amazon.com",
      "images-na.ssl-images-amazon.com",
    ],
  },
  headers() {
    return [
      {
        source: "/atom/:nested*",
        headers: [
          {
            key: "content-type",
            value: "text/xml",
          },
        ],
      },
      {
        source: "/images/rauchg-3d4cecf.jpg",
        headers: [
          {
            key: "cache-control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
  redirects() {
    return [
      {
        source: "/essays/:nested*",
        destination: "/",
        permanent: true,
      },
      {
        source: "/slackin/:nested*",
        destination: "https://github.com/rauchg/slackin",
        permanent: true,
      },
    ];
  },
});
