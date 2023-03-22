import { Link } from "react-router-dom";
import { catalogueList as cl } from "../utils/catalogues";
import ast2aii from "asserts/machine-pics/ast2aii.png";
import ast3aii from "asserts/machine-pics/ast3aii.png";
import ampts from "asserts/machine-pics/ampts.png";
import asrf from "asserts/machine-pics/asrf.png";
import acsts from "asserts/machine-pics/acsts.png";
import ampf from "asserts/machine-pics/ampf.png";
import asr2aii_layout from "asserts/machine-pics/asr2aii-layout.png";
import asr3aii_layout from "asserts/machine-pics/asr3aii-layout.png";
import acsts_layout from "asserts/machine-pics/acsts-layout.png";
import ampts_layout from "asserts/machine-pics/ampts-layout.png";
const catalogueList = cl;
const masterProductLink = [
  {
    name: "Power Press Automation",
    link: "power-press-automation",
    fullLink: "/products/power-press-automation",
    image:
      "https://www.bansalpresses.com/wp-content/uploads/2022/11/Power_Press_bNX250.jpg",
  },
  {
    name: "Special Purpose Machines",
    link: "special-purpose-machines",
    fullLink: "/products/special-purpose-machines",
    image:
      "https://www.bansalpresses.com/wp-content/uploads/2022/11/3-in-1-decoiler-straightener-feeder.jpg",
  },
  {
    name: "Vision Inspection System",
    link: "vision-inspection-system",
    fullLink: "/products/vision-inspection-system",

    image:
      "https://www.bansalpresses.com/wp-content/uploads/2022/11/accessories.jpg",
  },
];
const masterProductListItems = masterProductLink.map((item) => {
  return (
    <li>
      {/* <a href={item.fullLink} rel="noreferrer" target="_blank">
        {item.name}
      </a>{" "} */}
      <Link to={item.fullLink}>{item.name}</Link>
    </li>
  );
});
const masterProductsListItemsWithSubmenu = (
  <li>
    <Link to={"#"}>
      Products<i className='fa fa-chevron-down'></i>
    </Link>
    <ul className='sub-menu'>{masterProductListItems}</ul>
  </li>
);
const addCatalogueFromListByItsName = (name) => {
  //clean all white spaces from the from catalogue.name in catalogueList
  const catalogue = catalogueList.find((catalogue) => {
    return catalogue.name.trim() === name.trim();
  });
  if (catalogue) return catalogue.link;
};
const addCatalogueImageFromListByItsName = (name) => {
  const catalogue = catalogueList.find((catalogue) => {
    return catalogue.name.trim() === name.trim();
  });
  if (catalogue) return catalogue.image;
};

const universalPath = (str) => {
  return window.location.origin + "/" + str;
};

const subProductList = [
  {
    code: "ast2aii",
    name: "Ahlu Servo Transfer 2 Axis Double Bar type- AST2SAII",
    description: "description of the item",
    link: universalPath(
      "products/power-press-automation/transfer-system/ast2aii"
    ),
    catalogueLink: addCatalogueFromListByItsName("AST2AII Series"),
    image: ast2aii,
    layout: asr2aii_layout,
    catalogueImage: addCatalogueImageFromListByItsName("AST2AII Series"),
  },
  {
    code: "ampf",
    name: "Ahlu Mechanical Press Flap Series- AMPF ",
    catalogueLink: addCatalogueFromListByItsName("AMPF Series"),
    image: ampf,
    catalogueImage: addCatalogueImageFromListByItsName("AMPF Series"),
  },

  {
    name: "Ahlu Servo Transfer 3 Axis Double Bar type- AST3SAII",
    image: ast3aii,
    code: "ast3aii",
    layout: asr3aii_layout,
    catalogueLink: addCatalogueFromListByItsName("AST3AII Series"),

    link: universalPath(
      "products/power-press-automation/transfer-system/ast3aii"
    ),
    catalogueImage: addCatalogueImageFromListByItsName("AST3AII Series"),
  },
  {
    name: "Ahlu Cantilever Servo Transfer System- ACSTS Series",
    link: universalPath(
      "products/power-press-automation/transfer-system/acsts"
    ),
    code: "acsts",
    image: acsts,
    layout: acsts_layout,

    catalogueImage: addCatalogueImageFromListByItsName("ACSTS Series"),
  },
  {
    name: "Ahlu Multi Press Transfer System- AMPTS Series",
    code: "ampts",
    image: ampts,
    layout: ampts_layout,
    link: universalPath(
      "products/power-press-automation/transfer-system/ampts"
    ),
    catalogueImage: addCatalogueImageFromListByItsName("AMPTS Series"),
  },
  {
    name: "Ahlu Servo Roll Feeder type- ASRF Series",
    code: "asrf",
    image: asrf,
    catalogueLink: addCatalogueFromListByItsName("ASRF Series"),
    link: universalPath("products/power-press-automation/press-feeders/asrf"),
    catalogueImage: addCatalogueImageFromListByItsName("ASRF Series"),
  },
  {
    name: "AST3AII / AST2AII Series Ahlu Servo Transfer Double Bar type",
  },
];

const powerPressAutomationProductList = [
  {
    name: "Transfer System ",
    link: "transfer-system",
    image:
      "https://www.bansalpresses.com/wp-content/uploads/2022/11/Power_Press_bNX250.jpg",
  },
  {
    name: "Sheet Metal Dies",
    link: "sheet-metal-dies",
    image:
      "https://www.bansalpresses.com/wp-content/uploads/2022/11/3-in-1-decoiler-straightener-feeder.jpg",
  },
  {
    name: "Press Feeders",
    link: "press-feeders",
    image:
      "https://www.bansalpresses.com/wp-content/uploads/2022/11/3-in-1-decoiler-straightener-feeder.jpg",
  },
];

const transferSystemProducts = [
  {
    name: "AST2AII Series",
    link: "ast2aii",
    image: ast2aii,
  },
  {
    name: "AST3AII Series",
    link: "ast3aii",
    image: ast3aii,
  },
  {
    name: "ACSTS Series",
    link: "acsts",
    image: acsts,
  },
  {
    name: "AMPTS Series",
    link: "ampts",
    image: ampts,
  },
];

const pressFeederProducts = [
  {
    name: "Rolling Servo Feeders",
    link: "asrf",
    image: asrf,
  },
  {
    name: "flap",
    link: "flap",
    image: "",
  },
];

const transferSystemData = {
  double_bar_system: {
    standardFeatures: [
      "<span>Precision Servo driven</span> design for continuous use.",
      "Ethernet IP based Automation controller.",
      "Hi-speed Ethercat based slave communication.",
      "Easy Finger changeover.",
      "Easy On-site Remote Support available.",
      "IIOT enabled machine.",
      "Remote Monitoring System for Real time data tracking.",
      "Future Ready towards Industry 4.0.",
      "User friendly system with Operator manual over display.",
      "Battery less Absolute Encoder design for easy maintenance.",
      "Electrically protected safety operated against Voltage levels.",
      "Energy Monitoring system facilitates Asset management.",
      "Completely programmable system. ",
      "Large sized Operator display(HMI) for ease.",
    ],
    commonCharacteristics: [
      "Each Servo Axis is operated with high accuracy with the help of Precision Servos.",
      "To Protect Tooling and Machine, each system is by-default comes with mis-feed, die-stuckage & Jamming detection feedbacks are taken in each process cycle to provide required safety.",
      "The Position Synchronization is performed with the help of Rotary Encoders which connects to the crankshaft of the press. All the transfer axes are driven by servo motor and run synchronously with the press.",
      "Along with Encoders, Transfer System Controller stays in-continuous communication with press PLC along with the Additional Hard Sensors mounted on output shaft via Rotary cam box to reduce any accidental risk in case of Encoder failure.",
      "Blank Feeders are generally used to feed Blanks via Magazine type feeders but Servo Sheet Feeders or Zig Zag Feeders can also be utilized by customizing to suit Transfer system & its respective press.",
    ],
  },

  acsts: {
    commonCharacteristics: [
      `Each Servo Axis is operated with high accuracy with the help of
Precision Servos.`,
      `To Protect Tooling and Machine, each system is by-default comes with"
mis-feed, die-stuckage & Jamming detection feedbacks are taken in
each process cycle to provide required safety.`,
      `The Position Synchronization is performed with the help of Rotary
Encoders which connects to the crankshaft of the press. All the
transfer axes are driven by servo motor and run synchronously with
the press.`,
      `Along with Encoders, Transfer System Controller stays in-continuous
communication with press PLC along with the Additional Hard
Sensors mounted on output shaft via Rotary cam box to reduce any
accidental risk in case of Encoder failure.`,
      `Blank Feeders are generally used to feed Blanks via Magazine type
feeders but Servo Sheet Feeders or Zig Zag Feeders can also be
utilized by customizing to suit Transfer system & its respective press.`,
    ],
    standardFeatures: [
      `Precision Servo driven design for continuous use.`,
      `Ethernet IP based Automation controller.`,
      `Hi-speed Ethercat based slave communication.`,
      `Easy Finger changeover.`,
      `Easy On-site Remote Support available.`,
      `IIOT enabled machine.`,
      `Remote Monitoring System for Real time data tracking.`,
      `Future Ready towards Industry 4.0.`,
      `User friendly system with Operator manual over display.`,
      `Battery less Absolute Encoder design for easy maintenance.`,
      `Electrically protected safety operated against Voltage levels.`,
      `Energy Monitoring system facilitates Asset management.`,
      `Completely programmable system.`,
      `Large sized Operator display (HMI) for ease.`,
    ],
  },
  ampts: {
    commonCharacteristics: [
      `Each Servo Axis is operated with high accuracy with the help of Precision Servos.`,
      `To Protect Tooling and Machine, each system is by-default comes with mis-feed, die-stuckage & Jamming detection feedbacks are taken in each process cycle to provide required safety.`,
      `The Position Synchronization is performed with the help of Rotary Encoders which connects to the crankshaft of the press. All the transfer axes are driven by servo motor and run synchronously with the press.`,
      `Along with Encoders, Transfer System Controller stays in-continuous communication with press PLC along with the Additional Hard Sensors mounted on output shaft via Rotary cam box to reduce any accidental risk in case of Encoder failure.`,
    ],
    standardFeatures: [
      `Precision Servo driven design for continuous use.`,
      `Ethernet IP based Automation controller.`,
      `Hi-speed Ethercat based slave communication.`,
      `Easy Finger changeover.`,
      `Easy On-site Remote Support available.`,
      `IIOT enabled machine.`,
      `Remote Monitoring System for Real time data tracking.`,
      `Future Ready towards Industry 4.0.`,
      `User friendly system with Operator manual over display.`,
      `Battery less Absolute Encoder design for easy maintenance.`,
      `Electrically protected safety operated against Voltage levels.`,
      `Energy Monitoring system facilitates Asset management.`,
      `Completely programmable system.`,
      `Large sized Operator display (HMI) for ease.`,
    ],
  },
};
export {
  masterProductLink,
  masterProductsListItemsWithSubmenu,
  subProductList,
  powerPressAutomationProductList,
  transferSystemData,
  transferSystemProducts,
  pressFeederProducts,
};
