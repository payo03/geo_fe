const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: true,

  // npm run build target directory (backend dr)
  outputDir: "../geo_be/src/main/resources/static",

  indexPath: "index.html",

  // npm run serve 개발 진행시 포트가 다르기 때문에 프록시 설정 필요
  // target : backend port
  devServer: {
    proxy: {
      '/': {
        target: "http://localhost:8080",
        changeOrigin: true
      }
    }
  }

});
