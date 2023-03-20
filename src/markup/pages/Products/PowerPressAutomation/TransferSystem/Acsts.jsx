import React, { useEffect } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import DownloadCatalogue from "components/Products/DownloadCatalogue";
// import asr2aii_layout from "asserts/machine-pics/asr2aii-layout.png";
import asr3aii_layout from "asserts/machine-pics/asr3aii-layout.png";
import timingDiagram from "asserts/machine-pics/timingAST2AII.png";
import { subProductList, transferSystemData } from "data/productsData";
import ProductList from "components/Products/ProductList";
import { RightSection } from "components/Products/RightSection";
import LeftSection from "components/Products/LeftSection";
import FirstRow from "components/Products/FirstRow";
import parse from "html-react-parser";
const tableContentInJSON = [
  {
    Item: "X Axis / Transfer pitch",
    Unit: "mm",
    "AST2ALL-125L": "0-125",
    "AST2ALL-250L": "0-250",
    "AST2ALL-500L": "0-500",
  },
  {
    Item: "Y Axis / Clamping Stroke",
    Unit: "mm",
    "AST2ALL-125L": "0-40",
    "AST2ALL-250L": "0-65",
    "AST2ALL-500L": "0-125",
  },
  {
    Item: "Feed Bar Size",
    Unit: "mm",
    "AST2ALL-125L": "65",
    "AST2ALL-250L": "80",
    "AST2ALL-500L": "90",
  },
  {
    Item: "Weight Capacity",
    Unit: "kg",
    "AST2ALL-125L": "2",
    "AST2ALL-250L": "3",
    "AST2ALL-500L": "5",
  },
  {
    Item: "Feeding Accuracy",
    Unit: "mm",
    "AST2ALL-125L": "± 0.1",
    "AST2ALL-250L": "± 0.1",
    "AST2ALL-500L": "± 0.1",
  },
  {
    Item: "Maximum Stroke Feed",
    Unit: "spm",
    "AST2ALL-125L": "40",
    "AST2ALL-250L": "30",
    "AST2ALL-500L": "20",
  },
  {
    Item: "Main Dimensions",
    Unit: "mm",
    "AST2ALL-125L": "Please Contact",
    "AST2ALL-250L": "",
    "AST2ALL-500L": "",
  },
  {
    Item: "Supported Bolster Width",
    Unit: "mm",
    "AST2ALL-125L": "Please Contact",
    "AST2ALL-250L": "",
    "AST2ALL-500L": "",
  },
];

const item = subProductList.find((item) => item.code === "acsts");
const { acsts } = transferSystemData;
const { standardFeatures, commonCharacteristics } = acsts;
function OverviewTab() {
  return (
    <>
      <h4>Common Characteristics of Two Bar System</h4>
      <div className='px-3'>
        <ol type='1'>
          {commonCharacteristics.map((item, index) => {
            return (
              <li style={{ textAlign: "left" }} key={index}>
                {item}
              </li>
            );
          })}
        </ol>
      </div>
    </>
  );
}
function Featurestab() {
  return (
    <>
      <div className='px-3'>
        <h4>Standard Features of Two Bar System</h4>
        <ol type='1'>
          {standardFeatures.map((item, index) => {
            return (
              <li
                // add css for a span inside this li

                style={{
                  textAlign: "left",
                }}
                key={index}
              >
                {parse(item)}
              </li>
            );
          })}
        </ol>
      </div>
    </>
  );
}
function SpecificationTab() {
  return (
    <>
      <h4>Layout</h4>
      <img src={item.layout} alt='' srcset='' />
      <h4>Specifications</h4>
      <div className='table-responsive'>
        <table className='table table-bordered table-striped'>
          <thead>
            <tr>
              {/* <th>Sr. No.</th> */}
              <th>Item</th>
              <th>Unit</th>
              <th>AST2SALL-125L</th>
              <th>AST2SALL-250L</th>
              <th>AST2SALL-500L</th>
            </tr>
          </thead>
          <tbody>
            {tableContentInJSON.map((item, index) => {
              return (
                <tr key={index}>
                  {/* <td>{index+1}</td> */}
                  <td>{item.Item}</td>
                  <td>{item.Unit}</td>
                  <td>{item["AST2ALL-125L"]}</td>
                  <td>{item["AST2ALL-250L"]}</td>
                  <td>{item["AST2ALL-500L"]}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <p>
          *The contents are subject to change by manufacturer without prior
          notice.
        </p>
        <h4>Timing Diagram</h4>
        {/* <img src={timingDiagram} alt='timing diagram' /> */}
      </div>
    </>
  );
}

const Acsts = () => {
  return (
    <>
      <div className='bg-white '>
        <div className='midContent'>
          <div className='py-5 bg-white section-full'>
            <div className='container'>
              <div className='row'>
                <LeftSection>
                  <FirstRow
                    name={item?.name}
                    description={item?.description}
                    image={item?.image}
                  >
                   
                  </FirstRow>

                  <div className='row'>
                    <Tabs
                      defaultActiveKey='overview'
                      id='noanim-tab-example'
                      className='mb-3  col-md-12 '
                    >
                      <Tab eventKey='overview' title='Overview'>
                        <OverviewTab />
                      </Tab>
                      <Tab eventKey='feature' title='Features'>
                        <Featurestab />
                      </Tab>

                      <Tab eventKey='specification' title='Specification'>
                        <SpecificationTab />
                      </Tab>
                    </Tabs>
                  </div>
                </LeftSection>
                <RightSection>
                  <div className='widget'>
                    <DownloadCatalogue
                      image={item?.catalogueImage}
                      link={item?.catalogueLink}
                    />
                  </div>
                  <div className='widget sidebar-widget ext-sidebar-menu widget_nav_menu'>
                    <ProductList />
                  </div>
                </RightSection>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Acsts;
