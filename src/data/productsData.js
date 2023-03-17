import { Link } from "react-router-dom";
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

const productListMaker = (masterProductLink) => {
  const List = [];
  for (let i = 0; i < masterProductLink.length; i++) {
    List.push({
      name: masterProductLink[i],
      link: masterProductLink[i],
    });
  }
  return List;
};

const masterProductList = productListMaker(masterProductLink);

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
      Products<i className="fa fa-chevron-down"></i>
    </Link>
    <ul className="sub-menu">{masterProductListItems}</ul>
  </li>
);

export { masterProductLink, masterProductsListItemsWithSubmenu };
