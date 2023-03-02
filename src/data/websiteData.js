import ahluLogoWithName from "../asserts/ahluLogoWithName.png";
import indiaMartImage from "../asserts/socialIcons/indiaMart.png";
import tradeIndiaImage from "../asserts/socialIcons/tradeIndia.png";
import youtubeImage from "../asserts/socialIcons/youtube.png";
import linkedinImage from "../asserts/socialIcons/linkedin.png";
const headerDetails = {
  phoneNumber: "(+91) 8295 150 210",
  phoneNumberTo: "tel:+918295150210",
  addressTitle: "Opp. Dombivali MIDC",
  address: "Thane, Maharashtra",
  officeHoursTitle: "10:00 AM - 07:00 PM",
  officeHours: "Sunday close",
};

const socialMediaLinks = [
  // {
  //   name: "facebook",
  //   link: "https://www.facebook.com/ahluindia",
  //   icon: "fa fa-facebook",
  // },
  // {
  //   name: "twitter",
  //   link: "https://twitter.com/ahluindia",
  //   icon: "fa fa-twitter",
  // },
  // {
  //   name: "instagram",
  //   link: "https://www.instagram.com/ahluindia/",
  //   icon: "fa fa-instagram",
  // },
  {
    name: "linkedin",
    link: "https://www.linkedin.com/company/ahlu-engineers/",
    // icon: "fa fa-linkedin",
    image: linkedinImage,
  },
  {
    name: "youtube",
    link: "https://www.youtube.com/channel/UCPhDoFi0nlojklbst-BT-LA",
    // icon: "fa fa-youtube",
    image: youtubeImage,
  },
  {
    name: "indiamart",
    link: "https://www.indiamart.com/ahluengineers/",
    // icon: "fa fa-industry",
    image: indiaMartImage,
  },
  {
    name: "tradeindia",
    link: "https://g.page/ahluengineers?share",
    // icon: "fa fa-google",
    image: tradeIndiaImage,
  },
];

const companyDetails = {
  map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15072.384014845775!2d73.09079196993316!3d19.191008742350565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be795334c8fb9c5%3A0xa1579e0d1dd2f6ac!2sAhlu%20Engineers%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1676702264533!5m2!1sen!2sin",
  googleMapLink: "https://maps.app.goo.gl/kDomKU9HhLp5Nzmd7",
  address: `Opposite Dombivali MIDC, Near Shiv Sena Office, Phase 2, Sonarpada, Kalyan Shil Rd, Dombivali (East) 421204, Thane, Maharashtra, India`,
  aboutAhluDescription:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  email: "sales@ahluengineers.com",
  secondaryEmail: "ahluengineers@gmail.com",
  secondaryEmailTo: "mailto:ahluengineers@gmail.com",
  phone: headerDetails.phoneNumber,
  phoneTo: headerDetails.phoneNumberTo,
};

export { headerDetails, ahluLogoWithName, socialMediaLinks, companyDetails };

// footer font size 20 of email and phone and clean the alignment on screen change
