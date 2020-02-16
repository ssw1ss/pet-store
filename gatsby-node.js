const path = require("path")

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        assets: path.resolve(__dirname, "src/assets"),
        ui: path.resolve(__dirname, "src/ui"),
      },
    },
  })
}
