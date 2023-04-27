// Fixing build errors when building app using webpack. See 
// https://www.gatsbyjs.com/docs/debugging-html-builds/#fixing-third-party-modules for more information 

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
    if (stage === "build-html" || stage === "develop-html") {
      actions.setWebpackConfig({
        module: {
          rules: [
            {
              test: /react-leaflet-cluster/,
              use: loaders.null(),
            },
          ],
        },
      })
    }
  }