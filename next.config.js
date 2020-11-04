// next.config.js
const withSass = require("@zeit/next-sass");
const withMDX = require("@next/mdx")();
module.exports = withMDX(
    withSass({
        sassLoaderOptions: {
            sassOptions: {
                includePaths: ["./styles"],
            },
        },
        // cssModules: true,
        // cssLoaderOptions: {
        //     importLoaders: 2,
        //     localIdentName: "[local]___[hash:base64:5]",
        // },
        // webpack: (config, { isServer }) => {
        //     // if (isServer) {
        //     //     require("./lib/buildUtils/sitemap");
        //     // }

        //     return config;
        // },
    }),
);
