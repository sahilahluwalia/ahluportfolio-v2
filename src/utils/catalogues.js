import { Link } from "react-router-dom";

function importAll(r) {
  return r.keys().map(r);
}

const pdfs = importAll(
  require.context("../asserts/Catalogue PDF Files", false, /\.pdf$/)
);
const images = importAll(
  require.context("../asserts/Catalogue PDF Files", false, /\.jpg$/)
);

// console.log(pdfs);

const removeCatalogueFromStr = (str) => {
  const catalogue = "Catalogue";
  // scan the whole string and remove Catelogue or catalogue from the name if it is there
  for (let i = 0; i < str.length; i++) {
    if (str[i] === catalogue[0] || str[i] === catalogue[0].toLowerCase()) {
      if (str.slice(i, i + catalogue.length) === catalogue) {
        return str.slice(0, i);
      }
    }
  }
  return str;
};

// get the name like AST2AII Series catalogue of the pdf file
// [
//   "/static/media/1. AST2AII Series catalogue.d4f38e8f854486f87e1d.pdf",
//   "/static/media/2. AST3AII Series catalogue.96487d90b86cc065b8cd.pdf",
//   "/static/media/3. AMPTS Series catalogue.2d7f4dc02cd2990769eb.pdf",
//   "/static/media/4. ACSTS Series catalogue.e84d12021bea8bdb1b74.pdf",
//   "/static/media/5 .ASRF Series catalogue.f124a43e7986b6fcd4fb.pdf"
// ]
const pdfNames = pdfs.map((pdf) => {
  const pdfName = pdf.split("/").pop();
  const pdfNameWithoutExtension = pdfName.split(".")[1];
  // remove first letter space if it is there
  // console.log("runsss");

  if (pdfNameWithoutExtension[0] === " ") {
    pdfNameWithoutExtension.slice(1);
  }
  // scan the whole string and remove catalogue from the name if it is there
  // console.log("run");

  // remove Series catalogue from the name
  return removeCatalogueFromStr(pdfNameWithoutExtension);
});

const pdfLinks = pdfs.map((pdf) => {
  return pdf;
});
const catalogueListMaker = (pdfNames, pdfLinks, images) => {
  const catalogueList = [];
  for (let i = 0; i < pdfNames.length; i++) {
    catalogueList.push({
      name: pdfNames[i],
      link: pdfLinks[i],
      image: images[i],
    });
    if (catalogueList.length === 8) break;
  }
  return catalogueList;
};

const catalogueList = catalogueListMaker(pdfNames, pdfLinks, images);

const catalogueListItems = catalogueList.map((catalogue) => {
  return (
    <li>
      <a href={catalogue.link} rel='noreferrer' target='_blank'>
        {catalogue.name}
      </a>
    </li>
  );
});

const catalogueListItemsWithSubmenu = (
  <li>
    <Link to={"#"}>
      Catalogues<i className='fa fa-chevron-down'></i>
    </Link>
    <ul className='sub-menu'>{catalogueListItems}</ul>
  </li>
);

export { catalogueListItemsWithSubmenu, catalogueList };
