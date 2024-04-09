import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "My Site",
  tagline: "Dinosaurs are cool 1111",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://sirayatech.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "sirayatech", // Usually your GitHub org/user name.
  projectName: "sirayatech.github.io", // Usually your repo name.

  deploymentBranch: "deploy",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      logo: {
        alt: "My Site Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "right",
          label: "Tutorial",
        },
      ],
    },
    footer: {
      style: "dark",
      logo: {
        alt: "My Site Logo",
        src: "img/logo.svg",
      },

      links: [
        {
          title: "Product Service",
          items: [
            {
              label: "Web Performance",
              to: "/",
            },
            {
              label: "Web Security",
              to: "/",
            },
            {
              label: "Data Intelligence",
              to: "/",
            },
            {
              label: "Partner Network",
              to: "/",
            },
          ],
        },
        {
          title: "Service for All",
          items: [
            {
              label: "Service for All",
              href: "/",
            },
            {
              label: "Partner Network",
              href: "/",
            },
          ],
        },
        {
          title: "About Siraya",
          items: [
            {
              label: "Mission & Vision",
              to: "/",
            },
            {
              label: "Contact Sales",
              href: "/",
            },
          ],
        },
      ],
      copyright: `© Copyright 2021 Siraya All Rights Reserved.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
