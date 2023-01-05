module.exports = eleventyConfig => {
  eleventyConfig.addPassthroughCopy("favicon");
  eleventyConfig.addPassthroughCopy("./css");
  eleventyConfig.addPassthroughCopy("./image");
  eleventyConfig.addPassthroughCopy("./script");
};