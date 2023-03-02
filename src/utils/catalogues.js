import { Link } from "react-router-dom";

function importAll(r) {
  return r.keys().map(r);
}

const pdfs = importAll(
  require.context("../asserts/Catlogue PDF Files", false, /\.pdf$/)
);
const images = importAll(
  require.context("../asserts/Catlogue PDF Files", false, /\.jpg$/)
);

console.log(pdfs);

// get the name like AST2AII Series Catlogue of the pdf file
// [
//   "/static/media/1. AST2AII Series Catlogue.d4f38e8f854486f87e1d.pdf",
//   "/static/media/2. AST3AII Series Catlogue.96487d90b86cc065b8cd.pdf",
//   "/static/media/3. AMPTS Series Catlogue.2d7f4dc02cd2990769eb.pdf",
//   "/static/media/4. ACSTS Series Catlogue.e84d12021bea8bdb1b74.pdf",
//   "/static/media/5 .ASRF Series Catlogue.f124a43e7986b6fcd4fb.pdf"
// ]
const pdfNames = pdfs.map((pdf) => {
  const pdfName = pdf.split("/").pop();
  const pdfNameWithoutExtension = pdfName.split(".")[1];
  // remove first letter space if it is there
  if (pdfNameWithoutExtension[0] === " ") {
    return pdfNameWithoutExtension.slice(1);
  }
  // remove Series catlogue from the name
  return pdfNameWithoutExtension;
});

const pdfLinks = pdfs.map((pdf) => {
  return pdf;
});
const catlogueListMaker = (pdfNames, pdfLinks, images) => {
  const catlogueList = [];
  for (let i = 0; i < pdfNames.length; i++) {
    catlogueList.push({
      name: pdfNames[i],
      link: pdfLinks[i],
      image: images[i],
    });
  }
  return catlogueList;
};

const catlogueList = catlogueListMaker(pdfNames, pdfLinks, images);

const catlogueListItems = catlogueList.map((catlogue) => {
  return (
    <li>
      <a href={catlogue.link} rel="noreferrer" target="_blank">
        {catlogue.name}
      </a>
    </li>
  );
});

const catlogueListItemsWithSubmenu = (
  <li>
    <Link to={"#"}>
      Catlogues<i className="fa fa-chevron-down"></i>
    </Link>
    <ul className="sub-menu">{catlogueListItems}</ul>
  </li>
);

export { catlogueListItemsWithSubmenu, catlogueList };
