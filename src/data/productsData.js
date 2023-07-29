import { Link } from "react-router-dom";
import { catalogueList as cl } from "../utils/catalogues";
import ast2aii from "asserts/machine-pics/ast2aii.png";
import ast2ai from "asserts/machine-pics/ast2ai.png";
import ast2ai_layout from "asserts/machine-pics/ast2ai-layout.png";
import ast3aii from "asserts/machine-pics/ast3aii.png";
import ast3aii_frontside from "asserts/machine-pics/Double Var Front View.png";
import ampts from "asserts/machine-pics/ampts.png";
import asrf from "asserts/machine-pics/asrf.png";
import acsts from "asserts/machine-pics/acsts.png";
import ampf from "asserts/machine-pics/ampf.png";
import flap from "asserts/machine-pics/flap.png";
import otherAccessories from "asserts/machine-pics/otheraccessories.png";
import asr2aii_layout from "asserts/machine-pics/asr2aii-layout.png";
import asr3aii_layout from "asserts/machine-pics/asr3aii-layout.png";
import acsts_layout from "asserts/machine-pics/acsts-layout.png";
import ampts_layout from "asserts/machine-pics/ampts-layout.png";
import visionSPMImage from "asserts/Vision SPM.jpg";
import assemblySPMImage from "asserts/Assembly SPM.jpg";
import operationalSPMImage from "asserts/Operational SPM.jpg";
import progesssiveDieImage from "asserts/machine-pics/SheetMetal/Progressive.jpg";
import compoundDieImage from "asserts/machine-pics/SheetMetal/Compound Die.jpg";
import transferImage from "asserts/machine-pics/SheetMetal/Transfer 1.jpg";
// import ast2aii1 from "asserts/machine-pics/Design Image Data/2axis db";
import ampf_top from "asserts/machine-pics/topFlap.png";
function importAll(r) {
  return r.keys().map(r);
}
const ast2aiiCollection = importAll(
  require.context("../asserts/machine-pics/Design Image Data/2axisDB")
);

const ast3aiiCollection = importAll(
  require.context("asserts/machine-pics/Design Image Data/3 axis double bar")
);
const acstsCollection = importAll(
  require.context("asserts/machine-pics/Design Image Data/acsts")
);
const asrfCollection = importAll(
  require.context("asserts/machine-pics/Design Image Data/Feeder")
);
const ampfCollection = importAll(
  require.context("asserts/machine-pics/Design Image Data/Flap")
);
const transferSystemCollection = importAll(
  require.context("asserts/machine-pics/transferSystem")
);
const sheetMetalCollection = importAll(
  require.context("asserts/machine-pics/SheetMetal")
);
const a2iCollection = importAll(
  require.context("asserts/machine-pics/Design Image Data/2aii")
);
const  electricalPanelCollection =importAll(  require.context( "asserts/machine-pics/electrical-panels"))
const randomizeArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return [...array];
}
// console.log(ast2aiiCollection);

const allPicCollections = [
  ...ampfCollection,
  ...asrfCollection,
  ...acstsCollection,
  ...ast3aiiCollection,
  ...ast2aiiCollection,
];

const getRandomItemFromArray = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
};

const catalogueList = cl;
const masterProductLink = [
  {
    name: "Power Press Automation",
    nameHTML:
      "<span className='highlight-serial'>Power Press</span> Automation",
    link: "power-press-automation",
    fullLink: "/products/power-press-automation",
    image: getRandomItemFromArray(
      transferSystemCollection,
      otherAccessories,
      sheetMetalCollection
    ),
  },
  {
    name: "Special Purpose Machines",
    nameHTML:
      "<span className='highlight-serial'>Special Purpose</span> Machines",
    link: "special-purpose-machines",
    fullLink: "/products/special-purpose-machines",
    image: getRandomItemFromArray([
      operationalSPMImage,
      visionSPMImage,
      assemblySPMImage,
    ]),
  },
  {
    name: "Electrical Panels",
    nameHTML:   "<span className='highlight-serial'>Electrical</span> Panels",
    link: "electrical-panels",
    fullLink: "/products/electrical-panels",
    image: getRandomItemFromArray(electricalPanelCollection),
  },
];

const productIDMaker = (str, index) => {
  if (index == 0) {
    return str + "#powerpress";
  } else return str + "#specialpurpose";
};

const masterProductListItems = masterProductLink.map((item, index) => {
  return (
    <li>
      {/* <a href={item.fullLink} rel="noreferrer" target="_blank">
        {item.name}
      </a>{" "} */}
      <Link to={productIDMaker(item.fullLink, index)}>{item.name}</Link>
    </li>
  );
});
const masterProductsListItemsWithSubmenu = (
  <li>
    <Link to={"#"}>
      Products<i className="fa fa-chevron-down"></i>
    </Link>
    <ul className="sub-menu">{masterProductListItems}</ul>
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
    name: "Ahlu Servo Transfer 2 Axis Double Bar type- AST2AII",
    description: "description of the item",
    link: universalPath(
      "products/power-press-automation/transfer-system/ast2aii"
    ),
    tableContentInJSON: [
      {
        Item: "X Axis / Transfer pitch",
        Unit: "mm",
        "AST2AII-125L": "0-125",
        "AST2AII-250L": "0-250",
        "AST2AII-500L": "0-500",
      },
      {
        Item: "Y Axis / Clamping Stroke",
        Unit: "mm",
        "AST2AII-125L": "0-40",
        "AST2AII-250L": "0-65",
        "AST2AII-500L": "0-125",
      },
      {
        Item: "Feed Bar Size",
        Unit: "mm",
        "AST2AII-125L": "65",
        "AST2AII-250L": "80",
        "AST2AII-500L": "90",
      },
      {
        Item: "Weight Capacity",
        Unit: "kg",
        "AST2AII-125L": "2",
        "AST2AII-250L": "3",
        "AST2AII-500L": "5",
      },
      {
        Item: "Feeding Accuracy",
        Unit: "mm",
        "AST2AII-125L": "± 0.1",
        "AST2AII-250L": "± 0.1",
        "AST2AII-500L": "± 0.1",
      },
      {
        Item: "Maximum Stroke Feed",
        Unit: "spm",
        "AST2AII-125L": "40",
        "AST2AII-250L": "30",
        "AST2AII-500L": "20",
      },
      {
        Item: "Main Dimensions",
        Unit: "mm",
        "AST2AII-125L": "Please Contact",
        "AST2AII-250L": "",
        "AST2AII-500L": "",
      },
      {
        Item: "Supported Bolster Width",
        Unit: "mm",
        "AST2AII-125L": "Please Contact",
        "AST2AII-250L": "",
        "AST2AII-500L": "",
      },
    ],
    imageCollection: ast2aiiCollection,
    catalogueLink: addCatalogueFromListByItsName("AST2AII Series"),
    image: ast2aii,
    layout: asr2aii_layout,
    catalogueImage: addCatalogueImageFromListByItsName("AST2AII Series"),
  },
  {
    code: "ast2ai",
    name: "Ahlu Servo Transfer 2 Axis Single Bar type- AST2AI",
    description: "description of the item",
    link: universalPath(
      "products/power-press-automation/transfer-system/ast2ai"
    ),
    tableContentInJSON: [
      {
        Item: "X Axis / Transfer pitch",
        Unit: "mm",
        "AST2AII-125L": "0-125",
        "AST2AII-250L": "0-250",
        "AST2AII-500L": "0-500",
      },
      {
        Item: "Y Axis / Clamping Stroke",
        Unit: "mm",
        "AST2AII-125L": "0-40",
        "AST2AII-250L": "0-65",
        "AST2AII-500L": "0-125",
      },
      {
        Item: "Feed Bar Size",
        Unit: "mm",
        "AST2AII-125L": "60",
        "AST2AII-250L": "80",
        "AST2AII-500L": "90",
      },
      {
        Item: "Weight Capacity",
        Unit: "kg",
        "AST2AII-125L": "2",
        "AST2AII-250L": "3",
        "AST2AII-500L": "5",
      },
      {
        Item: "Feeding Accuracy",
        Unit: "mm",
        "AST2AII-125L": "± 0.1",
        "AST2AII-250L": "± 0.1",
        "AST2AII-500L": "± 0.1",
      },
      {
        Item: "Maximum Stroke Feed",
        Unit: "spm",
        "AST2AII-125L": "40",
        "AST2AII-250L": "30",
        "AST2AII-500L": "20",
      },
      {
        Item: "Main Dimensions",
        Unit: "mm",
        "AST2AII-125L": "Please Contact",
        "AST2AII-250L": "",
        "AST2AII-500L": "",
      },
      {
        Item: "Supported Bolster Width",
        Unit: "mm",
        "AST2AII-125L": "Please Contact",
        "AST2AII-250L": "",
        "AST2AII-500L": "",
      },
    ],
    imageCollection: a2iCollection,
    catalogueLink: addCatalogueFromListByItsName("AST2AI Series"),
    image: ast2ai,
    layout: ast2ai_layout,
    catalogueImage: addCatalogueImageFromListByItsName("AST2AI Series"),
  },
  {
    code: "ampf",
    name: "Ahlu Mechanical Press Flap Series- AMPF",
    catalogueLink: addCatalogueFromListByItsName("AMPF Series"),
    image: ampf,
    imageCollection: ampfCollection,
    link: universalPath("products/power-press-automation/press-feeders/ampf"),
    catalogueImage: addCatalogueImageFromListByItsName("AMPF Series"),
    isoView: flap,
    topView: ampf_top,
  },

  {
    name: "Ahlu Servo Transfer 3 Axis Double Bar type- AST3AII",
    image: ast3aii,
    code: "ast3aii",
    tableContentInJSON: [
      {
        "Sr. No.": 1,
        Item: "X Axis / Transfer pitch",
        Unit: "MM",
        "AST3AII-125L": "0-125",
        "AST3AII-250L": "0-250",
        "AST3AII-500L": "0-500",
      },
      {
        "Sr. No.": 2,
        Item: "Y Axis / Clamping Stroke",
        Unit: "MM",
        "AST3AII-125L": "0-40",
        "AST3AII-250L": "0-65",
        "AST3AII-500L": "0-90",
      },
      {
        "Sr. No.": 3,
        Item: "Z Axis / Lift Amount",
        Unit: "MM",
        "AST3AII-125L": "0-30",
        "AST3AII-250L": "0-50",
        "AST3AII-500L": "0-80",
      },
      {
        "Sr. No.": 4,
        Item: "Feed Bar Size",
        Unit: "MM",
        "AST3AII-125L": "60",
        "AST3AII-250L": "80",
        "AST3AII-500L": "90",
      },
      {
        "Sr. No.": 5,
        Item: "Feeding Accuracy",
        Unit: "MM",
        "AST3AII-125L": "± 0.1",
        "AST3AII-250L": "± 0.1",
        "AST3AII-500L": "± 0.1",
      },
      {
        "Sr. No.": 6,
        Item: "Weight Capacity",
        Unit: "KG",
        "AST3AII-125L": "2",
        "AST3AII-250L": "3",
        "AST3AII-500L": "5",
      },
      {
        "Sr. No.": 7,
        Item: "Maximum Stroke Feed",
        Unit: "SPM",
        "AST3AII-125L": "40",
        "AST3AII-250L": "30",
        "AST3AII-500L": "20",
      },
      {
        "Sr. No.": 8,
        Item: "Main Dimensions",
        Unit: "MM",
        "AST3AII-125L": "Please Contact",
        "AST3AII-250L": "",
        "AST3AII-500L": "",
      },
      {
        "Sr. No.": 9,
        Item: "Supported Bolster Width",
        Unit: "MM",
        "AST3AII-125L": "Please Contact",
        "AST3AII-250L": "",
        "AST3AII-500L": "",
      },
    ],
    imageCollection: ast3aiiCollection,
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
    tableContentInJSON: [
      {
        "Sr. No.": 1,
        Item: "X Axis / Transfer pitch",
        Unit: "MM",
        "ACSTS-150L": "0-150",
        "ACSTS-300L": "0-300",
        "ACSTS-500L": "0-500",
      },
      {
        "Sr. No.": 2,
        Item: "Z Axis / Lift Amount",
        Unit: "MM",
        "ACSTS-150L": "0-30",
        "ACSTS-300L": "0-60",
        "ACSTS-500L": "0-90",
      },
      {
        "Sr. No.": 3,
        Item: "Feed Bar Size",
        Unit: "MM",
        "ACSTS-150L": "60",
        "ACSTS-300L": "80",
        "ACSTS-500L": "90",
      },
      {
        "Sr. No.": 4,
        Item: "Weight Capacity",
        Unit: "KG",
        "ACSTS-150L": "2",
        "ACSTS-300L": "3",
        "ACSTS-500L": "5",
      },
      {
        "Sr. No.": 5,
        Item: "Feeding Accuracy",
        Unit: "MM",
        "ACSTS-150L": "± 0.1",
        "ACSTS-300L": "± 0.1",
        "ACSTS-500L": "± 0.1",
      },
      {
        "Sr. No.": 6,
        Item: "Maximum Stroke Feed",
        Unit: "SPM",
        "ACSTS-150L": "50",
        "ACSTS-300L": "40",
        "ACSTS-500L": "30",
      },
      {
        "Sr. No.": 7,
        Item: "Main Dimensions",
        Unit: "MM",
        "ACSTS-150L": "Please Contact",
        "ACSTS-300L": "",
        "ACSTS-500L": "",
      },
      {
        "Sr. No.": 8,
        Item: "Supported Bolster Width",
        Unit: "MM",
        "ACSTS-150L": "Please Contact",
        "ACSTS-300L": "",
        "ACSTS-500L": "",
      },
      {
        "Sr. No.": 9,
        Item: "Supported Bolster Width",
        Unit: "MM",
        "ACSTS-150L": "Please Contact",
        "ACSTS-300L": "",
        "ACSTS-500L": "",
      },
    ],
    imageCollection: acstsCollection,
    catalogueImage: addCatalogueImageFromListByItsName("ACSTS Series"),
    catalogueLink: addCatalogueFromListByItsName("ACSTS Series"),
  },
  {
    name: "Ahlu Multi Press Transfer System- AMPTS Series",
    code: "ampts",
    image: ampts,
    tableContentInJSON: [
      {
        "Sr. No.": 1,
        Item: "X Axis / Transfer pitch",
        Unit: "MM",
        "AMPTS-500L": "0-500",
        "AMPTS-1000L": "0-1000",
        "AMPTS-2000L": "0-2000",
      },
      {
        "Sr. No.": 2,
        Item: "Z Axis / Lift Amount",
        Unit: "MM",
        "AMPTS-500L": "0-40",
        "AMPTS-1000L": "0-65",
        "AMPTS-2000L": "0-90",
      },
      {
        "Sr. No.": 3,
        Item: "Feed Bar Size",
        Unit: "MM",
        "AMPTS-500L": "60",
        "AMPTS-1000L": "80",
        "AMPTS-2000L": "90",
      },
      {
        "Sr. No.": 4,
        Item: "Weight Capacity",
        Unit: "KG",
        "AMPTS-500L": "2",
        "AMPTS-1000L": "3",
        "AMPTS-2000L": "5",
      },
      {
        "Sr. No.": 5,
        Item: "Feeding Accuracy",
        Unit: "MM",
        "AMPTS-500L": "± 0.2",
        "AMPTS-1000L": "± 0.2",
        "AMPTS-2000L": "± 0.2",
      },
      {
        "Sr. No.": 6,
        Item: "Maximum Stroke Feed",
        Unit: "SPM",
        "AMPTS-500L": "30",
        "AMPTS-1000L": "20",
        "AMPTS-2000L": "15",
      },
      {
        "Sr. No.": 7,
        Item: "Main Dimensions",
        Unit: "MM",
        "AMPTS-500L": "Please Contact",
        "AMPTS-1000L": "",
        "AMPTS-2000L": "",
      },
      {
        "Sr. No.": 8,
        Item: "Suported Bolster Width",
        Unit: "MM",
        "AMPTS-500L": "Please Contact",
        "AMPTS-1000L": "",
        "AMPTS-2000L": "",
      },
      {
        "Sr. No.": 9,
        Item: "Supported Bolster Width",
        Unit: "MM",
        "AMPTS-500L": "Please Contact",
        "AMPTS-1000L": "",
        "AMPTS-2000L": "",
      },
    ],
    layout: ampts_layout,
    link: universalPath(
      "products/power-press-automation/transfer-system/ampts"
    ),
    catalogueImage: addCatalogueImageFromListByItsName("AMPTS Series"),
    catalogueLink: addCatalogueFromListByItsName("AMPTS Series"),
  },
  {
    name: "Ahlu Servo Roll Feeder type- ASRF Series",
    code: "asrf",
    image: asrf,
    imageCollection: asrfCollection,
    catalogueLink: addCatalogueFromListByItsName("ASRF Series"),
    link: universalPath("products/power-press-automation/press-feeders/asrf"),
    catalogueImage: addCatalogueImageFromListByItsName("ASRF Series"),
  },
];

const sheetMetalProductList = [
  {
    name: "<span className='highlight-serial'>Transfer </span> Dies",
    // link: "transfer-dies",
    // cover: true,
    hideButton: true,
    image: transferImage,
  },
  {
    name: "<span className='highlight-serial'>Progressive </span> Dies",
    // link: "progressive-dies",
    // cover: true,
    hideButton: true,
    image: progesssiveDieImage,
  },

  {
    name: "<span className='highlight-serial'>Compound </span> Dies",
    // link: "compound-dies",
    // cover: true,
    hideButton: true,
    image: compoundDieImage,
  },
];

const specialPurposeProductList = [
  {
    name: "<span className='highlight-serial'>Operational</span> SPMs",
    link: "",
    image: operationalSPMImage,
    hideButton: true,
    cover: true,
  },
  {
    name: "<span className='highlight-serial'>Assembly</span> SPMs",
    link: "",
    image: assemblySPMImage,
    hideButton: true,
    cover: true,
  },
  {
    name: "<span className='highlight-serial'>Vision Inspection</span> SPMs",
    link: "",
    image: visionSPMImage,
    hideButton: true,
    cover: true,
  },
];
const electricalPanelProductList=[
    {
  name: "<span className='highlight-serial'>PCC</span> Panel ",
  link: "pcc-panel",
  image: getRandomItemFromArray(electricalPanelCollection),
},{
  name: "<span className='highlight-serial'>MCC </span> Panel ",
  link: "mcc-panel",
  image: getRandomItemFromArray(electricalPanelCollection),
},{
  name: "<span className='highlight-serial'>APFC  </span> Panel ",
  link: "apfc-panel",
  image: getRandomItemFromArray(electricalPanelCollection),
},{
  name: "<span className='highlight-serial'>DOL  </span> Panel ",
  link: "dol-panel",
  image: getRandomItemFromArray(electricalPanelCollection),
},{
  name: "<span className='highlight-serial'>HVAC   </span> Panel ",
  link: "hvac-panel",
  image: getRandomItemFromArray(electricalPanelCollection),
}]
const powerPressAutomationProductList = [
  {
    name: "<span className='highlight-serial'>Transfer</span> System ",
    link: "transfer-system",

    image: getRandomItemFromArray(transferSystemCollection),
    // "https://www.bansalpresses.com/wp-content/uploads/2022/11/Power_Press_bNX250.jpg",
  },
  {
    name: "<span className='highlight-serial'>Sheet Metal </span> Dies",
    link: "sheet-metal-dies",
    image: getRandomItemFromArray(sheetMetalCollection),
    // "https://www.bansalpresses.com/wp-content/uploads/2022/11/3-in-1-decoiler-straightener-feeder.jpg",
  },
  {
    name: "<span className='highlight-serial'>Other Press Automation</span> Accessories",
    link: "press-feeders",
    image: otherAccessories,
  },
];

const transferSystemProducts = [
  {
    name: "<span className='highlight-serial'> AST2AII  </span>Series",
    link: "ast2aii",
    image: ast2aii,
  },
  {
    name: "<span className='highlight-serial'> AST2AI </span> Series",
    link: "ast2ai",
    image: ast2ai,
  },
  {
    name: "<span className='highlight-serial'> AST3AII</span> Series",
    link: "ast3aii",
    image: ast3aii_frontside,
  },
  {
    name: "<span className='highlight-serial'>ACSTS</span> Series",
    link: "acsts",
    image: acsts,
  },
  {
    name: "<span className='highlight-serial'>AMPTS</span> Series",
    link: "ampts",
    image: ampts,
  },
];

const pressFeederProducts = [
  {
    name: "Rolling Servo Feeders",
    subheading: "<span className='highlight-serial'>ASRF</span> Series",
    link: "asrf",
    image: asrf,
  },
  {
    name: "Mechanical Press Flap",
    subheading: "<span className='highlight-serial'>AMPF</span> Series",
    series: "ampfs",
    link: "ampf",
    image: flap,
  },
];

const electricalPanelsProducts = {
  apfc: {
    name: "APFC Panel",
    features: [ 	'Dimensional accuracy',
 'Long life',
 	'High tensile strength',
 	'Minimum maintenance'
],
    standardFeatures: [	"Compact design",
	"Trouble free functionality",
	"Durability",
	"Negligible maintenance"
],
    description: ["The heart of any electrical system in varied industries is its Power Control Centre. It assures the users utmost safety, long term reliability, less maintenance cost and testing time. The company manufactures and supplies PCC panels, widely used for various industrial applications. The panels are developed with the use of quality-tested raw materials and applauded for their extremely sturdy construction. Diverse designs/ specifications are provided in PCC such as Top/ Middle/ Horizontal/ Bottom bus chambers, Panel with copper/aluminium bus bars, Top/ Bottom/ Front/ Rear cable termination and Panels with ABB, L&T, Siemens, and Schneider make Switchgear. Our PCC Panels also come with ABB, Siemens, etc. protection Relays.\n"],
  },
  pcc: {
    name: "PCC Panel",
    features: []

  }
}
const subElectricalPanelsList=[
  {
    code: "pcc",
    name: "PCC Panel",
    description: "description of the item",
    link: universalPath(
        "products/power-press-automation/transfer-system/ast2aii"
    ),
    tableContentInJSON: [
      {
        Item: "X Axis / Transfer pitch",
        Unit: "mm",
        "AST2AII-125L": "0-125",
        "AST2AII-250L": "0-250",
        "AST2AII-500L": "0-500",
      },
      {
        Item: "Y Axis / Clamping Stroke",
        Unit: "mm",
        "AST2AII-125L": "0-40",
        "AST2AII-250L": "0-65",
        "AST2AII-500L": "0-125",
      },
      {
        Item: "Feed Bar Size",
        Unit: "mm",
        "AST2AII-125L": "65",
        "AST2AII-250L": "80",
        "AST2AII-500L": "90",
      },
      {
        Item: "Weight Capacity",
        Unit: "kg",
        "AST2AII-125L": "2",
        "AST2AII-250L": "3",
        "AST2AII-500L": "5",
      },
      {
        Item: "Feeding Accuracy",
        Unit: "mm",
        "AST2AII-125L": "± 0.1",
        "AST2AII-250L": "± 0.1",
        "AST2AII-500L": "± 0.1",
      },
      {
        Item: "Maximum Stroke Feed",
        Unit: "spm",
        "AST2AII-125L": "40",
        "AST2AII-250L": "30",
        "AST2AII-500L": "20",
      },
      {
        Item: "Main Dimensions",
        Unit: "mm",
        "AST2AII-125L": "Please Contact",
        "AST2AII-250L": "",
        "AST2AII-500L": "",
      },
      {
        Item: "Supported Bolster Width",
        Unit: "mm",
        "AST2AII-125L": "Please Contact",
        "AST2AII-250L": "",
        "AST2AII-500L": "",
      },
    ],
    imageCollection: randomizeArray(electricalPanelCollection),
    catalogueLink: addCatalogueFromListByItsName("AST2AII Series"),
    image: ast2aii,
    layout: asr2aii_layout,
    catalogueImage: addCatalogueImageFromListByItsName("AST2AII Series"),
  },{
  code:'dol',
    name:'Direct-On-Line Starter Panel',
    imageCollection: randomizeArray(electricalPanelCollection),
  },
  {
    code:'hvac',
    name:'HVAC Panel',
    imageCollection: randomizeArray(electricalPanelCollection),
  },
  {
    code:'mcc',
    imageCollection: randomizeArray(electricalPanelCollection),
    name: 'Motor Control Canter (MCC) Panel'
  },
  {
    code: "apfc",
    name: "APFC Panel",
    imageCollection: randomizeArray(electricalPanelCollection),
    description: "description of the item",
    link: universalPath(
        "products/power-press-automation/transfer-system/ast2aii"
    ),
    tableContentInJSON: [
      {
        Item: "X Axis / Transfer pitch",
        Unit: "mm",
        "AST2AII-125L": "0-125",
        "AST2AII-250L": "0-250",
        "AST2AII-500L": "0-500",
      },
      {
        Item: "Y Axis / Clamping Stroke",
        Unit: "mm",
        "AST2AII-125L": "0-40",
        "AST2AII-250L": "0-65",
        "AST2AII-500L": "0-125",
      },
      {
        Item: "Feed Bar Size",
        Unit: "mm",
        "AST2AII-125L": "65",
        "AST2AII-250L": "80",
        "AST2AII-500L": "90",
      },
      {
        Item: "Weight Capacity",
        Unit: "kg",
        "AST2AII-125L": "2",
        "AST2AII-250L": "3",
        "AST2AII-500L": "5",
      },
      {
        Item: "Feeding Accuracy",
        Unit: "mm",
        "AST2AII-125L": "± 0.1",
        "AST2AII-250L": "± 0.1",
        "AST2AII-500L": "± 0.1",
      },
      {
        Item: "Maximum Stroke Feed",
        Unit: "spm",
        "AST2AII-125L": "40",
        "AST2AII-250L": "30",
        "AST2AII-500L": "20",
      },
      {
        Item: "Main Dimensions",
        Unit: "mm",
        "AST2AII-125L": "Please Contact",
        "AST2AII-250L": "",
        "AST2AII-500L": "",
      },
      {
        Item: "Supported Bolster Width",
        Unit: "mm",
        "AST2AII-125L": "Please Contact",
        "AST2AII-250L": "",
        "AST2AII-500L": "",
      },
    ],
    catalogueLink: addCatalogueFromListByItsName("AST2AII Series"),
    image: ast2aii,
    layout: asr2aii_layout,
    catalogueImage: addCatalogueImageFromListByItsName("AST2AII Series"),
  },
]

const transferSystemData = {
  double_bar_system: {
    type: "Double Bar System",
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
    type: "Single Bar System",
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
  ampf: {
    commonCharacteristics: [
      `This Mechanical Flap design is synchronised with Press Ram
      movement proving To-Fro motion for Scrap / Component extraction.`,
      `As Mechanical interlinking is done with respect to Flap functionality,
      change in speed of Power Press gets auto reflected into Flap
      movement.`,
      `This design is easily suited with change in inclination angle based on
      requirement as per design standard`,
      `Eliminates the need of Scrap / Component manual (human involved)
      removal in each stroke saving operation time cycle and provides
      capability for the operator to run the operation uninterrupted in a
      continuous manner.`,
    ],
  },
  asrf: {
    introduction: [
      `Out of available two variants in same series ASRF, MS series
      is used for lower thickness range sheet feeding which lies
      between 0.3 – 3.5 mm.`,
      `MS Series is the economical variant developed to automate
      the sheet feeding operation where Sheet coils can not be
      directly used and sheared Sheets are the only option.`,
      `HS Series is the Heavy duty variant for thicker sheet feeding
      till 6mm Thickness.`,
      `Also, Servo Roll Feeder comes with Two Stationed system
      based on application to synchronize with each other to form
      a unified arrangement such that sheet remains in contact
      with any one station always throughout operation cycle.`,
      `Press synchronization along with Feeder is must to make
      sure operation stays smooth and uninterrupted for efficient
      results.`,
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
  allPicCollections,
  specialPurposeProductList,
  sheetMetalProductList,
  electricalPanelProductList,
  subElectricalPanelsList,
  electricalPanelsProducts
};
