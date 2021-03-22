const path = require("path");

const githubOrg = "torusresearch";
const githubRepo = "torus-documentation";
const githubOrgUrl = `https://github.com/${githubOrg}`;
const githubRepoUrl = `${githubOrgUrl}/${githubRepo}`;
const githubEditUrl = `${githubRepoUrl}/edit/master`;
const contactUrl = "https://tor.us/contact-us.html"; // TODO: Confirm with content team
const mediumUrl = "https://medium.com/@TorusLabs";

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Documentation",
  tagline: "Flexible, Universal Key Management", // TODO: Confirm with content team
  url: "https://tor.us",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "throw",
  favicon: "images/favicon.ico",
  organizationName: githubOrg,
  projectName: githubRepo,
  themeConfig: {
    colorMode: {
      defaultMode: "light", // "light" | "dark"
      disableSwitch: true, // Set to "true" when Dark mode is ready
      respectPrefersColorScheme: false, // Set to "true" when Dark mode is ready
    },
    navbar: {
      title: "Documentation",
      logo: {
        alt: "Torus's Logo",
        src: "images/logo.svg",
      },
      items: [
        {
          label: "Dashboard",
          href: "https://register.directauth.io", // TODO: DirectAuth or OpenLogin?
          target: "_self",
          position: "right",
          className: "navbar__button",
        },
        {
          label: "Integration Builder",
          to: "/integration-builder",
          position: "left",
          className: "navbar__button",
        },
        {
          label: "GitHub",
          href: githubRepoUrl,
          position: "left",
        },
        {
          label: "Contact us",
          href: contactUrl,
          position: "right",
        },
      ],
    },
    footer: {
      style: "light",
      links: [
        {
          title: "Users",
          items: [
            {
              label: "Torus Wallet",
              href: "https://app.tor.us",
            },
            {
              label: "OpenLogin",
              href: "https://openlogin.com", // TODO: beta.openlogin.com?
            },
            {
              label: "Torus Extension (coming soon)",
              href: "#", // TODO: Update later
            },
          ],
        },
        {
          title: "Developers",
          items: [
            {
              label: "Torus Embed",
              href: "https://docs.tor.us/wallet/quick-start", // TODO: Update later
            },
            {
              label: "DirectAuth",
              href: "https://directauth.io",
            },
            {
              label: "OpenLogin",
              href: "https://openlogin.com", // TODO: beta.openlogin.com?
            },
            {
              label: "tKey",
              href: "https://hackmd.io/keVuRfrwSxygfyCfzsrQfw", // TODO: Confirm with content team
            },
            {
              label: "Status",
              href: "https://status.torusnode.com",
            },
            {
              label: "Support",
              href: "https://t.me/torusdev",
            },
          ],
        },
        {
          // TODO: Confirm with content team
          title: "Community",
          items: [
            {
              label: "Telegram",
              href: "https://t.me/TorusLabs",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/TorusLabs",
            },
            {
              label: "Medium",
              href: mediumUrl,
            },
            {
              label: "Github",
              href: githubOrgUrl,
            },
            {
              label: "Reddit",
              href: "https://www.reddit.com/r/toruslabs",
            },
            {
              label: "LinkedIn",
              href: "https://www.linkedin.com/company/toruslabs",
            },
            {
              label: "YouTube",
              href: "https://www.youtube.com/c/toruslabs",
            },
          ],
        },
        {
          // TODO: Confirm with content team
          title: "Company",
          items: [
            {
              label: "About us",
              to: "https://tor.us/about-us.html",
            },
            {
              label: "Partners",
              href: "https://tor.us/partners.html",
            },
            {
              label: "Career",
              href: "https://angel.co/company/torus-2",
            },
            {
              label: "Media kit",
              href: "https://tor.us/media-kit.html",
            },
            {
              label: "Blog",
              href: mediumUrl,
            },
            {
              label: "Contact us",
              href: contactUrl,
            },
          ],
        },
      ],
      logo: {
        alt: "Torus's Logo",
        src: "images/logo.svg",
      },
      copyright: `© ${new Date().getFullYear()} Torus Labs Private Limited`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          routeBasePath: "/",
          editUrl: githubEditUrl,
          sidebarPath: require.resolve("./sidebars.js"),
        },
        /** Uncomment to enable Blog features, see https://v2.docusaurus.io/docs/blog
        blog: {
          showReadingTime: true,
          editUrl: githubEditUrl,
        },
        */
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
  plugins: [
    path.resolve(__dirname, "plugins", "docusaurus-plugin-mdx-components"),
    [
      path.resolve(__dirname, "plugins", "docusaurus-plugin-virtual-files"),
      { rootDir: "files" },
    ],
  ],
};
