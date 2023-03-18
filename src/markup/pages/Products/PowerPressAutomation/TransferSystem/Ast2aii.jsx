import React, { useEffect } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import DownloadCatalogue from "components/Products/DownloadCatalogue";
import asr2aii_layout from "asserts/machine-pics/asr2aii-layout.png";
import timingDiagram from "asserts/machine-pics/timingAST2AII.png";
import { subProductList } from "data/productsData";
import ProductList from "components/Products/ProductList";
import { RightSection } from "components/Products/RightSection";
import LeftSection from "components/Products/LeftSection";
import FirstRow from "components/Products/FirstRow";
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

const commonCharacteristics = [
  "Each Servo Axis is operated with high accuracy with the help of Precision Servos.",
  "To Protect Tooling and Machine, each system is by-default comes with mis-feed, die-stuckage & Jamming detection feedbacks are taken in each process cycle to provide required safety.",
  "The Position Synchronization is performed with the help of Rotary Encoders which connects to the crankshaft of the press. All the transfer axes are driven by servo motor and run synchronously with the press.",
  "Along with Encoders, Transfer System Controller stays in-continuous communication with press PLC along with the Additional Hard Sensors mounted on output shaft via Rotary cam box to reduce any accidental risk in case of Encoder failure.",
  "Blank Feeders are generally used to feed Blanks via Magazine type feeders but Servo Sheet Feeders or Zig Zag Feeders can also be utilized by customizing to suit Transfer system & its respective press.",
];

const standardFeatures = [
  "Precision Servo driven design for continuous use.",
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
];
const item = subProductList.find((item) => item.code === "ast2aii");

function OverviewTab() {
  return (
    <>
      <h4>Common Characteristics of Two Bar System</h4>
      <ol type='1'>
        {commonCharacteristics.map((item, index) => {
          return (
            <li style={{ textAlign: "left" }} key={index}>
              {item}
            </li>
          );
        })}
      </ol>
    </>
  );
}
function Featurestab() {
  return (
    <>
      {" "}
      <h4>Standard Features of Two Bar System</h4>
      <ol type='1'>
        {standardFeatures.map((item, index) => {
          return (
            <li style={{ textAlign: "left" }} key={index}>
              {item}
            </li>
          );
        })}
      </ol>
    </>
  );
}
function SpecificationTab() {
  return (
    <>
      <h4>Layout</h4>
      <img src={asr2aii_layout} alt='' srcset='' />
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
        <img src={timingDiagram} alt='timing diagram' />
      </div>
    </>
  );
}

const Ast2aii = () => {
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
                  />

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

export default Ast2aii;
