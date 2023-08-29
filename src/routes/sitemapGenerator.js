require("babel-register")({
  presets: ["es2015", "react"]
});
require.extensions['.css'] = () => {};

const router = require("./sitemapRoutes").default;
const Sitemap = require("react-router-sitemap").default;

function generateSitemap() {
      return (
          new Sitemap(router)
                  .build("https://lckd.or.kr")
                  .save("./public/sitemap.xml")
      );
}

generateSitemap();