import powerpress from "asserts/Blog/power-press.png";
import powerpress_automation from "asserts/Blog/power-press-automation.png";
export const blogLists = [
  {
    code: 1,
    uploadedBy: "satyam",
    date: 1679899541899,
    image: powerpress,
    title: "Power Press & its Introduction",
    shortDescription: "sbgdfsbdfbdfbdfb fdbdfbdfb dfb  dfb df  df bn dfnb",
    link: "power-press-and-its-introduction",
    tags: ["power press"],
    category: "",
  },
  {
    code: 2,
    uploadedBy: "satyam",
    date: 1679529600,
    image: powerpress_automation,
    title: "Power Press Automation & its Introduction",
    shortDescription: "",
    link: "power-press-automation-and-its-introduction",
    tags: ["power press", "power press automation"],
    category: "",
  },
  {
    uploadedBy: "satyam",
    date: 1679899571899,
    image: powerpress,
    title: "Transfer Systems / Feeding & Transfer Dies",
    shortDescription: "",
    link: "transfer-sytems",
    tags: ["transfer sytem", "transfer dies", "feeding"],
    category: "",
  },
];

export const LatestBlogs = blogLists.sort(
  (a, b) => new Date(b.date) - new Date(a.date)
);
