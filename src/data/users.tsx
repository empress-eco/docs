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
  | "sustainablecitiesandcommunities"
  | "responsibleconsumptionandproduction"
  | "climateaction"
  | "lifebelowwater"
  | "lifeonland"
  | "peacejusticeandstronginstitutions"
  | "partnershipsforthegoals"
  | "goals";

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
      message: "Popular organizations for you to check out.",
      id: "showcase.tag.popular.description",
    }),
    color: "#e9669e",
  },
  goals: {
    label: translate({ message: "Goals" }),
    description: translate({
      message:
        "List of sustainable development goals supported by the United Nations.",
      id: "showcase.tag.partnershipsforthegoals.description",
    }),
    color: "#fafafa",
  },
  // For open-source sites, a link to the source code is required
  // The source should be your *website's* source, not your project's source!
  nopoverty: {
    label: translate({ message: "No Poverty" }),
    description: translate({
      message: "End poverty in all its forms everywhere.",
      id: "showcase.tag.nopoverty.description",
    }),
    color: "#E5233D",
  },

  zerohunger: {
    label: translate({ message: "Zero Hunger" }),
    description: translate({
      message:
        "End hunger, achieve food security and improved nutrition and promote sustainable agriculture.",
      id: "showcase.tag.zerohunnger.description",
    }),
    color: "#DDA73A",
  },

  goodhealthandwellbeing: {
    label: translate({ message: "Good Health and Well Being" }),
    description: translate({
      message: "",
      id: "showcase.tag.goodhealthandwellbeing.description",
    }),
    color: "#4CA146",
  },

  qualityeducation: {
    label: translate({ message: "Quality Education" }),
    description: translate({
      message:
        "Ensure healthy lives and promote well-being for all at all ages.",
      id: "showcase.tag.qualityeducation.description",
    }),
    color: "#EF402D",
  },

  genderequality: {
    label: translate({ message: "Gender Equality" }),
    description: translate({
      message:
        "Ensure inclusive and equitable quality education and promote lifelong learning opportunities for all",
      id: "showcase.tag.qualityeducation.description",
    }),
    color: "#EF402D",
  },

  cleanwaterandsanitation: {
    label: translate({ message: "Clean Water and Sanitation" }),
    description: translate({
      message:
        "Ensure availability and sustainable management of water and sanitation for all.",
      id: "showcase.tag.cleanwaterandsanitation.description",
    }),
    color: "#27BFE5",
  },

  affordableandcleanenergy: {
    label: translate({ message: "Affordable and Clean Energy" }),
    description: translate({
      message:
        "Ensure access to affordable, reliable, sustainable and modern energy for all.",
      id: "showcase.tag.affordableandcleanenergy.description",
    }),
    color: "#FBC412",
  },

  decentworkandeconomicgrowth: {
    label: translate({ message: "Decent Work and Economic Growth" }),
    description: translate({
      message:
        "Promote sustained, inclusive and sustainable economic growth, full and productive employment and decent work for all.",
      id: "showcase.tag.decentworkandeconomicgrowth.description",
    }),
    color: "#A31C44",
  },

  industryinnovationandinfrastructure: {
    label: translate({ message: "Industry, Innovation and Infrastructure" }),
    description: translate({
      message:
        "Build resilient infrastructure, promote inclusive and sustainable industrialization and foster innovation.",
      id: "showcase.tag.industryinnovationandinfrastructure.description",
    }),
    color: "#F26A2E",
  },

  reducedinequalities: {
    label: translate({ message: "Reduced Inequalities" }),
    description: translate({
      message: "Reduce inequality within and among countries.",
      id: "showcase.tag.reducedinequalities.description",
    }),
    color: "#E01483",
  },

  sustainablecitiesandcommunities: {
    label: translate({ message: "Sustainable Cities and Communities" }),
    description: translate({
      message:
        "Make cities and human settlements inclusive, safe, resilient and sustainable.",
      id: "showcase.tag.sustainablecitiesandcommiunities.description",
    }),
    color: "#F89D2B",
  },

  responsibleconsumptionandproduction: {
    label: translate({ message: "Responsible Consumption and Production" }),
    description: translate({
      message: "Ensure sustainable consumption and production patterns.",
      id: "showcase.tag.responsibleconsumptionandproduction.description",
    }),
    color: "#BF8D2C",
  },

  climateaction: {
    label: translate({ message: "Climate Action" }),
    description: translate({
      message: "Take urgent action to combat climate change and its impacts.",
      id: "showcase.tag.climateaction.description",
    }),
    color: "#417F46",
  },

  lifebelowwater: {
    label: translate({ message: "Life Below Water" }),
    description: translate({
      message:
        "Conserve and sustainably use the oceans, seas and marine resources for sustainable development.",
      id: "showcase.tag.lifebelowwater.description",
    }),
    color: "#1F97D4",
  },

  lifeonland: {
    label: translate({ message: "Life on Land" }),
    description: translate({
      message:
        "Protect, restore and promote sustainable use of terrestrial ecosystems, sustainably manage forests, combat desertification, and halt and reverse land degradation and halt biodiversity loss.",
      id: "showcase.tag.lifeonland.description",
    }),
    color: "#59BA47",
  },

  peacejusticeandstronginstitutions: {
    label: translate({ message: "Peace, Justice and Strong Institutions" }),
    description: translate({
      message:
        "Promote peaceful and inclusive societies for sustainable development, provide access to justice for all and build effective, accountable and inclusive institutions at all levels.",
      id: "showcase.tag.peacejusticeandstronginstitutions.description",
    }),
    color: "#59BA47",
  },
  partnershipsforthegoals: {
    label: translate({ message: "Partnerships for the Goals" }),
    description: translate({
      message:
        "Strengthen the means of implementation and revitalize the Global Partnership for Sustainable Development.",
      id: "showcase.tag.partnershipsforthegoals.description",
    }),
    color: "#59BA47",
  },
};

// Add your site to this list
// prettier-ignore
const Users: User[] = [
  // {
  //   title: 'United Nations',
  //   description: '',
  //   preview: require('./showcase/unitednations.png'),
  //   website: 'https://sdgs.un.org/',
  //   source: 'https://twitter.com/UN',
  //   tags: ['partnershipsforthegoals'],
  // },
  {
    title: 'No Poverty',
    description: 'End poverty in all its forms everywhere.',
    preview: require('./showcase/flow.png'),
    website: '/sdg/no-poverty',
    source: 'https://sdgs.un.org/goals/goal1',
    tags: ['nopoverty','goals'],
  },
  {
    title: 'Zero Hunger',
    description: 'End hunger, achieve food security and improved nutrition and promote sustainable agriculture.',
    preview: require('./showcase/flow.png'),
    website: '/sdg/zero-hunger',
    source: 'https://sdgs.un.org/goals/goal2',
    tags: ['zerohunger','goals'],
  },
  {
    title: 'Good Health and Well Being',
    description: 'Ensure healthy lives and promote well-being for all at all ages.',
    preview: require('./showcase/flow.png'),
    website: '/sdg/good-health-and-well-being',
    source: 'https://sdgs.un.org/goals/goal3',
    tags: ['goodhealthandwellbeing', 'goals'],
  },
  {
    title: 'Quality Education',
    description: 'Ensure inclusive and equitable quality education and promote lifelong learning opportunities for all.',
    preview: require('./showcase/flow.png'),
    website: '/sdg/quality-education',
    source: 'https://sdgs.un.org/goals/goal4',
    tags: ['qualityeducation', 'goals'],
  },
  {
    title: 'Gender Equality',
    description: 'Achieve gender equality and empower all women and girls.',
    preview: require('./showcase/flow.png'),
    website: '/sdg/gender-equality',
    source: 'https://sdgs.un.org/goals/goal5',
    tags: ['genderequality', 'goals'],
  },
  {
    title: 'Clean Water and Sanitation',
    description: 'Ensure availability and sustainable management of water and sanitation for all.',
    preview: require('./showcase/flow.png'),
    website: '/sdg/clean-water-and-sanitation',
    source: 'https://sdgs.un.org/goals/goal6',
    tags: ['cleanwaterandsanitation', 'goals'],
  },
  {
    title: 'Affordable and Clean Energy',
    description: 'Ensure access to affordable, reliable, sustainable and modern energy for all.',
    preview: require('./showcase/flow.png'),
    website: '/sdg/affordable-and-clean-energy',
    source: 'https://sdgs.un.org/goals/goal7',
    tags: ['affordableandcleanenergy', 'goals'],
  },
  {
    title: 'Decent Work and Economic Growth',
    description: 'Promote sustained, inclusive and sustainable economic growth, full and productive employment and decent work for all.',
    preview: require('./showcase/flow.png'),
    website: '/sdg/decent-work-and-economic-growth',
    source: 'https://sdgs.un.org/goals/goal8',
    tags: ['decentworkandeconomicgrowth', 'goals'],
  },
  {
    title: 'Industry, Innovation and Infrastructure',
    description: 'Build resilient infrastructure, promote inclusive and sustainable industrialization and foster innovation.',
    preview: require('./showcase/flow.png'),
    website: '/sdg/industry-innovation-and-infrastructure',
    source: 'https://sdgs.un.org/goals/goal9',
    tags: ['industryinnovationandinfrastructure', 'goals'],
  },
  {
    title: 'Reduced Inequalities',
    description: 'Reduce inequality within and among countries.',
    preview: require('./showcase/flow.png'),
    website: '/sdg/reduced-inequalities',
    source: 'https://sdgs.un.org/goals/goal10',
    tags: ['reducedinequalities', 'goals'],
  },
  {
    title: 'Sustainable Cities and Communities',
    description: 'Make cities and human settlements inclusive, safe, resilient and sustainable.',
    preview: require('./showcase/flow.png'),
    website: '/sdg/sustainable-cities-and-communities',
    source: 'https://sdgs.un.org/goals/goal11',
    tags: ['sustainablecitiesandcommunities', 'goals'],
  },
  {
    title: 'Responsible Consumption and Production',
    description: 'Ensure sustainable consumption and production patterns.',
    preview: require('./showcase/flow.png'),
    website: '/sdg/responsible-consumption-and-production',
    source: 'https://sdgs.un.org/goals/goal12',
    tags: ['responsibleconsumptionandproduction', 'goals'],
  },
  {
    title: 'Climate Action',
    description: 'Take urgent action to combat climate change and its impacts.',
    preview: require('./showcase/flow.png'),
    website: '/sdg/climate-action',
    source: 'https://sdgs.un.org/goals/goal13',
    tags: ['climateaction', 'goals'],
  },
  {
    title: 'Life Below Water',
    description: 'Conserve and sustainably use the oceans, seas and marine resources for sustainable development.',
    preview: require('./showcase/flow.png'),
    website: '/sdg/life-below-water',
    source: 'https://sdgs.un.org/goals/goal14',
    tags: ['lifebelowwater', 'goals'],
  },
  {
    title: 'Life on Land',
    description: 'Protect, restore and promote sustainable use of terrestrial ecosystems, sustainably manage forests, combat desertification, and halt and reverse land degradation and halt biodiversity loss.',
    preview: require('./showcase/flow.png'),
    website: '/sdg/life-on-land',
    source: 'https://sdgs.un.org/goals/goal15',
    tags: ['lifeonland', 'goals'],
  },
  {
    title: 'Peace, Justice and Strong Institutions',
    description: 'Promote peaceful and inclusive societies for sustainable development, provide access to justice for all and build effective, accountable and inclusive institutions at all levels.',
    preview: require('./showcase/flow.png'),
    website: '/sdg/peace-justice-and-strong-institutions',
    source: 'https://sdgs.un.org/goals/goal16',
    tags: ['peacejusticeandstronginstitutions', 'goals'],
  },
  {
    title: 'Partnerships for the Goals',
    description: 'Strengthen the means of implementation and revitalize the Global Partnership for Sustainable Development.',
    preview: require('./showcase/flow.png'),
    website: '/sdg/partnerships-for-the-goals',
    source: 'https://sdgs.un.org/goals/goal17',
    tags: ['partnershipsforthegoals', 'goals'],
  },
  {
    title: 'Flow',
    description: 'Ensuring availability and sustainable management of water and sanitation for all.',
    preview: require('./showcase/flow.png'),
    website: 'https://sdgs.un.org/',
    source: 'https://sdgs.un.org/goals/goal17',
    tags: ['cleanwaterandsanitation'],
  },
  {
    title: 'Happy Fish',
    description: 'Conserve and sustainably use the oceans, seas and marine resources for sustainable development.',
    preview: require('./showcase/flow.png'),
    website: 'https://sdgs.un.org/',
    source: 'https://twitter.com/UN',
    tags: ['lifebelowwater'],
  },
  {
    title: 'Marcellus',
    description: 'Ensure access to affordable, reliable, sustainable and modern energy for all.',
    preview: require('./showcase/marcellus.png'),
    website: 'https://sdgs.un.org/',
    source: 'https://twitter.com/UN',
    tags: ['affordableandcleanenergy'],
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
