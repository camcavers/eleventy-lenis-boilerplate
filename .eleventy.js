module.exports = function (eleventyConfig) {
    // Passthrough copy for images and scripts (they don't need to be processed)
    eleventyConfig.addPassthroughCopy("src/images");
    eleventyConfig.addPassthroughCopy("src/scripts");
  
    // Customize input/output directories
    return {
      dir: {
        input: "src",         // Source directory for templates and files
        includes: "_includes", // Where your layouts and includes live
        output: "_site",       // Output directory for the generated site
      },
    };
  };
  