module.exports = {
    css: {
        loaderOptions: {
            // pass options to sass-loader
            // @/ is an alias to src/
            // Note: this option is named as "prependData" in sass-loader v8
            sass: {
                additionalData: `@import "@/assets/scss/main.scss";`
            }
        }
    }
}