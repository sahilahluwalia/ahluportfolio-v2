import React, { useEffect } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import DownloadCatalogue from "components/Products/DownloadCatalogue";
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

const item = subProductList.find((item) => item.code === "ast3aii");

const { double_bar_system } = transferSystemData;
const { standardFeatures, commonCharacteristics } = double_bar_system;
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
      </div>
    </>
  );
}

const Ast3aii = () => {
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
                    <p>
                      In this system variant, All Three Axis are Servo based
                      which not only adds precision accuracy and repeatability
                      but also its programmable feature adds feasibility to
                      produce multiple variants on same transfer system with
                      ease against changeover of Fingers and Recipe. The axis
                      includes Pick Axis derived as Y Axis, Pitch Axis derived
                      as X Axis & Lifting movement denoted as Z Axis. Based on
                      Product variant and Load capacity required, customized
                      system can be designed to suit the desired press to
                      function with synchronization with this system.
                      Specifically all drawn components which require lifting
                      from its base passing line comes under applicational
                      feasibility of 3 Axis Servo Transfer system.
                    </p>
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

export default Ast3aii;
