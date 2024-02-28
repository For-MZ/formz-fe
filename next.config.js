/** @type {import('next').NextConfig} */

module.exports = {
  sassOptions: {
    prependData: `@import "@/styles/variables"; @import "@/styles/mixins";`,
  },
};
