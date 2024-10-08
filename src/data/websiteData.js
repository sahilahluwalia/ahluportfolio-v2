import ahluLogoWithName from "../asserts/ahluLogoWithName.png";
import indiaMartImage from "../asserts/socialIcons/indiaMart.png";
import tradeIndiaImage from "../asserts/socialIcons/tradeIndia.png";
import youtubeImage from "../asserts/socialIcons/youtube.png";
import linkedinImage from "../asserts/socialIcons/linkedin.png";
import whatsappImage from "../asserts/socialIcons/whatsapp.png";
import tataNexcImage from "../asserts/socialIcons/tata.png";
import googleMyBusinessImage from "../asserts/socialIcons/googleMyBusiness.png";
const headerDetails = {
  phoneNumber: "(+91) 8295 150 210",
  phoneNumberTo: "tel:+918295150210",
  addressTitle: "Factory Unit 1",
  address: "Rajkot, Gujarat, India",
  officeHoursTitle: "9:00 AM - 7:00 PM",
  officeHours: "Wednesday close",
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
    link: "https://www.indiamart.com/ahlu-engineers-private-limited-kalyan",
    // icon: "fa fa-industry",
    image: indiaMartImage,
  },
  {
    name: "tradeindia",
    link: "https://g.page/ahluengineers?share",
    // icon: "fa fa-google",
    image: tradeIndiaImage,
  },
  {
    name: "whatsapp",
    link: "https://wa.me/c/918295150210",
    image: whatsappImage,
  },
  {
    name: "tatanexc",
    link: "https://www.tatanexarc.com/company/ahlu-engineers-private-utn9590ahl63ija/",
    image: tataNexcImage,
  },
  {
    name: "googleMyBusiness",
    link: "https://www.google.com/search?q=Ahlu+Engineers+Pvt+Ltd&stick=H4sIAAAAAAAA_-NgU1I1qDBOSjW3NDU2Nkm2SEuyTDa1MqhINDQ1t0w1SDFMSTFKM0tMXsQq5piRU6rgmpeemZeaWlSsEFBWouBTkgIA6NxU1UIAAAA&hl=en&mat=CUwytyU0qK4TElcB8pgkaG5HhNejivEnLl_v3d2qdQ4ft_mNK2WenVnlHwV8OzrAWca_0_EGkIIH5gxp-hwuWJx2ei_RN5FiT6bILuEswPv3PYel3XBgRQwPDQzgcNIdG2o&authuser=0#lpc=lpc&scso=_NQcQZKjRI5OC4-EPgNCGsAU_54:113.91999816894531",
    image: googleMyBusinessImage,
  },
];

const companyDetails = {
  map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15072.384014845775!2d73.09079196993316!3d19.191008742350565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be795334c8fb9c5%3A0xa1579e0d1dd2f6ac!2sAhlu%20Engineers%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1676702264533!5m2!1sen!2sin",
  map2:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3695.530381563233!2d70.7205918!3d22.1438742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395835002a72b215%3A0x6221c83241993219!2sAhlu%20Engineers%20Pvt.%20Ltd.%20-%20Manufacturing%20Unit%201!5e0!3m2!1sen!2sin!4v1725702057653!5m2!1sen!2sin",
  googleMapLink: "https://maps.app.goo.gl/kDomKU9HhLp5Nzmd7",
  address: `Opposite Dombivali MIDC, Near Shiv Sena Office, Phase 2, Sonarpada, Kalyan Shil Rd, Dombivali (East) 421204, Thane, Maharashtra, India`,
  address2:`Golden Green Industrial Park, Plot no 439, Deva Tecnocast Street, Near Makhwad Chokdi, Khambha 360311, Lodhika, Rajkot, Gujarat, India`,
  googleMapLink2: "https://maps.app.goo.gl/bbqZw4okQh5i7VGR6",
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
