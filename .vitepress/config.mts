import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Fabric Error Reporting",
  description: "Documentation for the Fabric Error Reporting System",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    // nav: [
    //   { text: "Home", link: "/" },
    //   { text: "Examples", link: "/markdown-examples" },
    // ],

    sidebar: [
      {
        text: "Contents",
        items: [
          { text: "How it works", link: "/how-it-works" },
          { text: "All errors", link: "/all-errors" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
