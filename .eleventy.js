const markdownIt = require('markdown-it'),
markdownItAttrs = require('markdown-it-attrs');
module.exports = eleventyConfig => {
  eleventyConfig.addPassthroughCopy("favicon");
  eleventyConfig.addPassthroughCopy("./css");
 const markdownItOptions = {
    html: true,
    breaks: true,
    linkify: true
  }

const markdownLib = markdownIt(markdownItOptions).use(markdownItAttrs)
eleventyConfig.setLibrary('md', markdownLib);
  eleventyConfig.addPassthroughCopy("./image");
  eleventyConfig.addPassthroughCopy("./js");
  return {
    dir: {
      output: "_site",
      data: "_data"
    }
  };
};