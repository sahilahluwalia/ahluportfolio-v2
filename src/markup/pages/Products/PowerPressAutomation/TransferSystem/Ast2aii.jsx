import React from "react";
import ast2aii from "../../../../../asserts/machine-pics/ast2aii.png";
import catalogImage from "../../../../../asserts/Catalogue PDF Files/1. AST2AII Series Catalogue-1.jpg";
import asr2aii_layout from "../../../../../asserts/machine-pics/asr2aii-layout.png";
import timingDiagram from "../../../../../asserts/machine-pics/timingAST2AII.png";
import { Link } from "react-router-dom";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import DownloadCatalogue from "../../../../../components/Products/DownloadCatalogue";
import { catalogueList } from "../../../../../utils/catalogues";
import { subProductList } from "../../../../../data/productsData";
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
const Ast2aii = () => {
  console.log(subProductList);
  // const getProductByNameFromSubProductList =
  return (
    <>
      {" "}
      <div className="bg-white ">
        <div className="midContent">
          {/* make a section where you can download the Products on desktop it would show 4 images on one row in flex position and in mobile it would go in columne direction use bootstrap css classes */}
          <div className="py-5 bg-white section-full">
            <div className="container">
              <div className="row">
                <div className="col-xl-9 col-lg-8 col-md-7 m-b30">
                  <div className="row">
                    <div className="col-xl-5">
                      <img src={ast2aii} alt="astall" />
                    </div>
                    <div className="col-xl-7">
                      <h2 className=" box-title m-tb0">
                        Ahlu Servo Transfer 2 Axis Double Bar type- AST2SALL
                        <span className="bg-primary"></span>
                      </h2>
                      <p>We have a wide range of AST2ALL.</p>
                    </div>
                  </div>
                  <div className="text-center section-head">
                    <div className="container">
                      <div className="row">
                        <div className="col-md-12">
                          <div></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    {/* add styling in bootstrap tabs */}
                    <Tabs
                      defaultActiveKey="overview"
                      id="noanim-tab-example"
                      className="mb-3  col-md-12 "
                    >
                      <Tab eventKey="overview" title="Overview">
                        <h4>Common Characteristics of Two Bar System</h4>
                        <ol type="1">
                          {commonCharacteristics.map((item, index) => {
                            return (
                              <li style={{ textAlign: "left" }} key={index}>
                                {item}
                              </li>
                            );
                          })}
                        </ol>
                      </Tab>
                      <Tab eventKey="feature" title="Features">
                        <h4>Standard Features of Two Bar System</h4>
                        <ol type="1">
                          {standardFeatures.map((item, index) => {
                            return (
                              <li style={{ textAlign: "left" }} key={index}>
                                {item}
                              </li>
                            );
                          })}
                        </ol>
                      </Tab>

                      <Tab eventKey="specification" title="Specification">
                        <h4>Layout</h4>
                        <img src={asr2aii_layout} alt="" srcset="" />

                        <h4>Specifications</h4>
                        <div className="table-responsive">
                          <table className="table table-bordered table-striped">
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
                            *The contents are subject to change by manufacturer
                            without prior notice.
                          </p>
                          <h4>Timing Diagram</h4>
                          <img src={timingDiagram} alt="timing diagram" />
                        </div>
                      </Tab>
                    </Tabs>

                    <div className="row gx-5"></div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-5">
                  <div className="widget">
                    <DownloadCatalogue image={catalogImage} />
                  </div>
                  <div className="widget sidebar-widget ext-sidebar-menu widget_nav_menu">
                    <div>nice</div>><div>nice</div>><div>nice</div>>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ast2aii;
