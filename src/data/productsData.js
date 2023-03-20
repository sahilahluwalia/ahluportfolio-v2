import { Link } from "react-router-dom";
import { catalogueList as cl } from "../utils/catalogues";
import ast2aii from "asserts/machine-pics/ast2aii.png";
import ast3aii from "asserts/machine-pics/ast3aii.png";
import ampts from "asserts/machine-pics/ampts.png";
import asrf from "asserts/machine-pics/asrf.png";
import acsts from "asserts/machine-pics/acsts.png";
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

const subProductList = [
  {
    code: "ast2aii",
    name: "Ahlu Servo Transfer 2 Axis Double Bar type- AST2SAII",
    description: "description of the item",
    link: "/ast2ii",
    catalogueLink: addCatalogueFromListByItsName("AST2AII Series"),
    image: ast2aii,
    catalogueImage: addCatalogueImageFromListByItsName("AST2AII Series"),
  },
  {
    name: "Ahlu Mechanical Press Flap Series- AMPF ",
  },

  {
    name: "Ahlu Servo Transfer 3 Axis Double Bar type- AST3SAII",
    image: ast3aii,
    code: "ast3aii",
    link: "",
    catalogueImage: addCatalogueImageFromListByItsName("AST3AII Series"),
  },
  {
    name: "Ahlu Cantilever Servo Transfer System- ACSTS Series",
    link: "",
    code: "acsts",
    image: acsts,
    catalogueImage: addCatalogueImageFromListByItsName("ACSTS Series"),
  },
  {
    name: "Ahlu Multi Press Transfer System- AMPTS Series",
    link: "",
    code: "ampts",
    image: ampts,
    catalogueImage: addCatalogueImageFromListByItsName("AMPTS Series"),
  },
  {
    name: "Ahlu Servo Roll Feeder type- ASRF Series",
    code: "asrf",
    image: asrf,
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
export {
  masterProductLink,
  masterProductsListItemsWithSubmenu,
  subProductList,
  powerPressAutomationProductList,
};
