import lume from "lume/mod.ts";

const site = lume({
    src: "./src",
    server: {
        page404: "/404.html",
    },
});

site.copy("/assets");

export default site;
