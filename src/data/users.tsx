/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* eslint-disable global-require */

import { translate } from "@docusaurus/Translate";
import { sortBy } from "@site/src/utils/jsUtils";

/*
 * ADD YOUR SITE TO THE DOCUSAURUS SHOWCASE:
 *
 * Requirements for adding your site to our showcase:
 * - It is a production-ready site with real content and decent customizations
 * (different from the init templates)
 * - It is NOT a work-in-progress with empty pages
 * - It has a stable domain (a Netlify/Vercel deploy preview is not allowed)
 *
 * Instructions:
 * - Add your site in the json array below
 * - `title` is your project's name (no need for the "Docs" suffix)
 * - A short (≤120 characters) description of your project
 * - Use relevant tags to categorize your site (read the tag descriptions below)
 * - Add a local image preview (decent screenshot of your Docusaurus site)
 * - The image MUST be added to the GitHub repository, and use `require("img")`
 * - The image has to have minimum width 640 and an aspect of no wider than 2:1
 * - If your website is open-source, add your source link. The link should open
 *   to a directory containing the `docusaurus.config.js` file
 * - Open a PR and check for reported CI errors
 *
 * Example PR: https://github.com/facebook/docusaurus/pull/3976
 *
 * If you edit this file through the GitHub interface, you can:
 * - Submit first your users.tsx edit PR
 * - This will create a branch on your Docusaurus fork (usually "patch-1")
 * - Go to https://github.com/<username>/docusaurus/tree/<branch>/website/src/data/showcase
 * - Drag-and-drop an image here to add it to your existing PR
 *
 * Please help us maintain this showcase page data:
 * - Update sites with wrong data
 * - Ensure site tags remain correct over time
 * - Remove sites not using Docusaurus anymore
 * - Add missing Docusaurus sites (if the site owner agreed)
 */

export type Tag = {
  label: string;
  description: string;
  color: string;
};

export type TagType =
  | "popular"
  | "nopoverty"
  | "zerohunger"
  | "goodhealthandwellbeing"
  | "qualityeducation"
  | "genderequality"
  | "cleanwaterandsanitation"
  | "affordableandcleanenergy"
  | "decentworkandeconomicgrowth"
  | "industryinnovationandinfrastructure"
  | "reducedinequalities"
  | "sustainablecitiesandcommiunities"
  | "responsibleconsumptionandproduction"
  | "climateaction"
  | "lifebelowwater"
  | "lifeonland"
  | "peacejusticeandstronginstitutions"
  | "partnershipsforthegoals";

export type User = {
  title: string;
  description: string;
  preview: string;
  website: string;
  source: string | null;
  tags: TagType[];
};

// LIST OF AVAILABLE TAGS
// Available tags to assign to your site
// Please choose all tags that you think might apply.
// We'll remove inappropriate tags, but it's less likely that we add tags.
export const Tags: { [type in TagType]: Tag } = {
  // DO NOT USE THIS TAG: we choose sites to add to appss
  popular: {
    label: translate({ message: "Popular" }),
    description: translate({
      message: "Popular Celo dApps for you to check out!",
      id: "showcase.tag.popular.description",
    }),
    color: "#e9669e",
  },

  // For open-source sites, a link to the source code is required
  // The source should be your *website's* source, not your project's source!
  nopoverty: {
    label: translate({ message: "1. No Poverty" }),
    description: translate({
      message: "",
      id: "showcase.tag.nopoverty.description",
    }),
    color: "#E5233D",
  },

  zerohunger: {
    label: translate({ message: "2. Zero Hunger" }),
    description: translate({
      message: "",
      id: "showcase.tag.zerohunnger.description",
    }),
    color: "#DDA73A",
  },

  goodHealthandwellbeing: {
    label: translate({ message: "3. Good Health and Well Being" }),
    description: translate({
      message: "",
      id: "showcase.tag.goodhealthandwellbeing.description",
    }),
    color: "#4CA146",
  },

  qualityeducation: {
    label: translate({ message: "4. Quality Education" }),
    description: translate({
      message: "",
      id: "showcase.tag.qualityeducation.description",
    }),
    color: "#EF402D",
  },

  genderequality: {
    label: translate({ message: "5. Gender Equality" }),
    description: translate({
      message: "",
      id: "showcase.tag.qualityeducation.description",
    }),
    color: "#EF402D",
  },

  cleanWaterandsanitation: {
    label: translate({ message: "6. Clean Water and Sanitation" }),
    description: translate({
      message: "",
      id: "showcase.tag.cleanwaterandsanitation.description",
    }),
    color: "#27BFE5",
  },

  affordableandcleanenergy: {
    label: translate({ message: "7. Affordable and Clean Energy" }),
    description: translate({
      message: "",
      id: "showcase.tag.affordableandcleanenergy.description",
    }),
    color: "#FBC412",
  },

  decentworkandeconomicgrowth: {
    label: translate({ message: "8. Decent Work and Economic Growth" }),
    description: translate({
      message: "",
      id: "showcase.tag.decentworkandeconomicgrowth.description",
    }),
    color: "#A31C44",
  },

  industryinnovationAndinfrastructure: {
    label: translate({ message: "9. Industry, Innovation and Infrastructure" }),
    description: translate({
      message: "",
      id: "showcase.tag.industryinnovationandinfrastructure.description",
    }),
    color: "#F26A2E",
  },

  reducedinequalities: {
    label: translate({ message: "10. Reduced Inequalities" }),
    description: translate({
      message: "",
      id: "showcase.tag.reducedinequalities.description",
    }),
    color: "#E01483",
  },

  sustainablecitiesandcommiunities: {
    label: translate({ message: "11. Sustainable Cities and Communities" }),
    description: translate({
      message: "",
      id: "showcase.tag.sustainablecitiesandcommiunities.description",
    }),
    color: "#F89D2B",
  },

  responsibleconsumptionandproduction: {
    label: translate({ message: "12. Responsible Consumption and Production" }),
    description: translate({
      message: "",
      id: "showcase.tag.responsibleconsumptionandproduction.description",
    }),
    color: "#BF8D2C",
  },

  climateaction: {
    label: translate({ message: "13. Climate Action" }),
    description: translate({
      message: "",
      id: "showcase.tag.climateaction.description",
    }),
    color: "#417F46",
  },

  lifebelowwater: {
    label: translate({ message: "14. Life Below Water" }),
    description: translate({
      message: "",
      id: "showcase.tag.lifebelowwater.description",
    }),
    color: "#1F97D4",
  },

  lifeonland: {
    label: translate({ message: "15. Life on Land" }),
    description: translate({
      message: "",
      id: "showcase.tag.lifeonland.description",
    }),
    color: "#59BA47",
  },

  peacejusticeAndstronginstitutions: {
    label: translate({ message: "16. Peace, Justice and Strong Institutions" }),
    description: translate({
      message: "",
      id: "showcase.tag.peacejusticeandstronginstitutions.description",
    }),
    color: "#59BA47",
  },
  partnershipsforthegoals: {
    label: translate({ message: "17. Partnerships for the Goals" }),
    description: translate({
      message: "",
      id: "showcase.tag.partnershipsforthegoals.description",
    }),
    color: "#59BA47",
  },
};
// Add your site to this list
// prettier-ignore
const Users: User[] = [
  {
    title: 'United Nations',
    description: '',
    preview: require('./showcase/unitednations.png'),
    website: 'https://sdgs.un.org/',
    source: 'https://twitter.com/UN',
    tags: ['partnershipsforthegoals'],
  },
  /*
  Pro Tip: add your site in alphabetical order.
  Appending your site here (at the end) is more likely to produce Git conflicts.
   */
];

export const TagList = Object.keys(Tags) as TagType[];
function sortUsers() {
  let result = Users;
  // Sort by site name
  result = sortBy(result, (user) => user.title.toLowerCase());
  // Sort by apps tag, appss first
  result = sortBy(result, (user) => !user.tags.includes("apps"));
  return result;
}

export const sortedUsers = sortUsers();
