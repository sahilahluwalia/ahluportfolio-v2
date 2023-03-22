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
import Table from "components/Products/Table";
import BaseTable from "components/Products/BaseTable";
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
      <h4>Layout Diagram</h4>
      <img src={item.layout} alt='' srcset='' />
      <h4>Specifications</h4>
      <BaseTable>
        <table
          className='table table-bordered table-striped'
          cellSpacing={0}
          border={0}
        >
          <colgroup width={85} span={6} />
          <tbody>
            <tr>
              <td
                style={{
                  borderTop: "1px solid #000000",
                  borderBottom: "1px solid #000000",
                  borderLeft: "1px solid #000000",
                  borderRight: "1px solid #000000",
                }}
                valign='middle'
                height={17}
                align='center'
              >
                Sr. No.
              </td>
              <td
                style={{
                  borderTop: "1px solid #000000",
                  borderBottom: "1px solid #000000",
                  borderLeft: "1px solid #000000",
                  borderRight: "1px solid #000000",
                }}
                valign='middle'
                align='center'
              >
                Item
              </td>
              <td
                style={{
                  borderTop: "1px solid #000000",
                  borderBottom: "1px solid #000000",
                  borderLeft: "1px solid #000000",
                  borderRight: "1px solid #000000",
                }}
                valign='middle'
                align='center'
              >
                Unit
              </td>
              <td
                style={{
                  borderTop: "1px solid #000000",
                  borderBottom: "1px solid #000000",
                  borderLeft: "1px solid #000000",
                  borderRight: "1px solid #000000",
                }}
                valign='middle'
                align='center'
              >
                AST3AII-125L
              </td>
              <td
                style={{
                  borderTop: "1px solid #000000",
                  borderBottom: "1px solid #000000",
                  borderLeft: "1px solid #000000",
                  borderRight: "1px solid #000000",
                }}
                valign='middle'
                align='center'
              >
                AST3AII-250L
              </td>
              <td
                style={{
                  borderTop: "1px solid #000000",
                  borderBottom: "1px solid #000000",
                  borderLeft: "1px solid #000000",
                  borderRight: "1px solid #000000",
                }}
                valign='middle'
                align='center'
              >
                AST3AII-500L
              </td>
            </tr>
            <tr>
              <td
                style={{
                  borderTop: "1px solid #000000",
                  borderBottom: "1px solid #000000",
                  borderLeft: "1px solid #000000",
                  borderRight: "1px solid #000000",
                }}
                sdval={1}
                sdnum='16393;'
                valign='middle'
                height={17}
                align='center'
              >
                1
              </td>
              <td
                style={{
                  borderTop: "1px solid #000000",
                  borderBottom: "1px solid #000000",
                  borderLeft: "1px solid #000000",
                  borderRight: "1px solid #000000",
                }}
                valign='middle'
                align='center'
              >
                X Axis / Transfer pitch
              </td>
              <td
                style={{
                  borderTop: "1px solid #000000",
                  borderBottom: "1px solid #000000",
                  borderLeft: "1px solid #000000",
                  borderRight: "1px solid #000000",
                }}
                valign='middle'
                align='center'
              >
                MM
              </td>
              <td
                style={{
                  borderTop: "1px solid #000000",
                  borderBottom: "1px solid #000000",
                  borderLeft: "1px solid #000000",
                  borderRight: "1px solid #000000",
                }}
                valign='middle'
                align='center'
              >
                0-125
              </td>
              <td
                style={{
                  borderTop: "1px solid #000000",
                  borderBottom: "1px solid #000000",
                  borderLeft: "1px solid #000000",
                  borderRight: "1px solid #000000",
                }}
                valign='middle'
                align='center'
              >
                0-250
              </td>
              <td
                style={{
                  borderTop: "1px solid #000000",
                  borderBottom: "1px solid #000000",
                  borderLeft: "1px solid #000000",
                  borderRight: "1px solid #000000",
                }}
                valign='middle'
                align='center'
              >
                0-500
              </td>
            </tr>
            <tr>
              <td
                style={{
                  borderTop: "1px solid #000000",
                  borderBottom: "1px solid #000000",
                  borderLeft: "1px solid #000000",
                  borderRight: "1px solid #000000",
                }}
                sdval={2}
                sdnum='16393;'
                valign='middle'
                height={17}
                align='center'
              >
                2
              </td>
              <td
                style={{
                  borderTop: "1px solid #000000",
                  borderBottom: "1px solid #000000",
                  borderLeft: "1px solid #000000",
                  borderRight: "1px solid #000000",
                }}
                valign='middle'
                align='center'
              >
                Y Axis / Clamping Stroke
              </td>
              <td
                style={{
                  borderTop: "1px solid #000000",
                  borderBottom: "1px solid #000000",
                  borderLeft: "1px solid #000000",
                  borderRight: "1px solid #000000",
                }}
                valign='middle'
                align='center'
              >
                MM
              </td>
              <td
                style={{
                  borderTop: "1px solid #000000",
                  borderBottom: "1px solid #000000",
                  borderLeft: "1px solid #000000",
                  borderRight: "1px solid #000000",
                }}
                valign='middle'
                align='center'
              >
                0-40
              </td>
              <td
                style={{
                  borderTop: "1px solid #000000",
                  borderBottom: "1px solid #000000",
                  borderLeft: "1px solid #000000",
                  borderRight: "1px solid #000000",
                }}
                valign='middle'
                align='center'
              >
                0-65
              </td>
              <td
                style={{
                  borderTop: "1px solid #000000",
                  borderBottom: "1px solid #000000",
                  borderLeft: "1px solid #000000",
                  borderRight: "1px solid #000000",
                }}
                valign='middle'
                align='center'
              >
                0-90
              </td>
            </tr>
            <tr>
              <td
                style={{
                  borderTop: "1px solid #000000",
                  borderBottom: "1px solid #000000",
                  borderLeft: "1px solid #000000",
                  borderRight: "1px solid #000000",
                }}
                sdval={3}
                sdnum='16393;'
                valign='middle'
                height={17}
                align='center'
              >
                3
              </td>
              <td
                style={{
                  borderTop: "1px solid #000000",
                  borderBottom: "1px solid #000000",
                  borderLeft: "1px solid #000000",
                  borderRight: "1px solid #000000",
                }}
                valign='middle'
                align='center'
              >
                Z Axis / Lift Amount
              </td>
              <td
                style={{
                  borderTop: "1px solid #000000",
                  borderBottom: "1px solid #000000",
                  borderLeft: "1px solid #000000",
                  borderRight: "1px solid #000000",
                }}
                valign='middle'
                align='center'
              >
                MM
              </td>
              <td
                style={{
                  borderTop: "1px solid #000000",
                  borderBottom: "1px solid #000000",
                  borderLeft: "1px solid #000000",
                  borderRight: "1px solid #000000",
                }}
                valign='middle'
                align='center'
              >
                0-30
              </td>
              <td
                style={{
                  borderTop: "1px solid #000000",
                  borderBottom: "1px solid #000000",
                  borderLeft: "1px solid #000000",
                  borderRight: "1px solid #000000",
                }}
                valign='middle'
                align='center'
              >
                0-50
              </td>
              <td
                style={{
                  borderTop: "1px solid #000000",
                  borderBottom: "1px solid #000000",
                  borderLeft: "1px solid #000000",
                  borderRight: "1px solid #000000",
                }}
                valign='middle'
                align='center'
              >
                0-80
              </td>
            </tr>
            <tr>
              <td
                style={{
                  borderTop: "1px solid #000000",
                  borderBottom: "1px solid #000000",
                  borderLeft: "1px solid #000000",
                  borderRight: "1px solid #000000",
                }}
                sdval={4}
                sdnum='16393;'
                valign='middle'
                height={17}
                align='center'
              >
                4
              </td>
              <td
                style={{
                  borderTop: "1px solid #000000",
                  borderBottom: "1px solid #000000",
                  borderLeft: "1px solid #000000",
                  borderRight: "1px solid #000000",
                }}
                valign='middle'
                align='center'
              >
                Feed Bar Size
              </td>
              <td
                style={{
                  borderTop: "1px solid #000000",
                  borderBottom: "1px solid #000000",
                  borderLeft: "1px solid #000000",
                  borderRight: "1px solid #000000",
                }}
                valign='middle'
                align='center'
              >
                MM
              </td>
              <td
                style={{
                  borderTop: "1px solid #000000",
                  borderBottom: "1px solid #000000",
                  borderLeft: "1px solid #000000",
                  borderRight: "1px solid #000000",
                }}
                sdval={65}
                sdnum='16393;'
                valign='middle'
                align='center'
              >
                65
              </td>
              <td
                style={{
                  borderTop: "1px solid #000000",
                  borderBottom: "1px solid #000000",
                  borderLeft: "1px solid #000000",
                  borderRight: "1px solid #000000",
                }}
                sdval={80}
                sdnum='16393;'
                valign='middle'
                align='center'
              >
                80
              </td>
              <td
                style={{
                  borderTop: "1px solid #000000",
                  borderBottom: "1px solid #000000",
                  borderLeft: "1px solid #000000",
                  borderRight: "1px solid #000000",
                }}
                sdval={90}
                sdnum='16393;'
                valign='middle'
                align='center'
              >
                90
              </td>
            </tr>
            <tr>
              <td
                style={{
                  borderTop: "1px solid #000000",
                  borderBottom: "1px solid #000000",
                  borderLeft: "1px solid #000000",
                  borderRight: "1px solid #000000",
                }}
                sdval={5}
                sdnum='16393;'
                valign='middle'
                height={17}
                align='center'
              >
                5
              </td>
              <td
                style={{
                  borderTop: "1px solid #000000",
                  borderBottom: "1px solid #000000",
                  borderLeft: "1px solid #000000",
                  borderRight: "1px solid #000000",
                }}
                valign='middle'
                align='center'
              >
                Feeding Accuracy
              </td>
              <td
                style={{
                  borderTop: "1px solid #000000",
                  borderBottom: "1px solid #000000",
                  borderLeft: "1px solid #000000",
                  borderRight: "1px solid #000000",
                }}
                valign='middle'
                align='center'
              >
                MM
              </td>
              <td
                style={{
                  borderTop: "1px solid #000000",
                  borderBottom: "1px solid #000000",
                  borderLeft: "1px solid #000000",
                  borderRight: "1px solid #000000",
                }}
                valign='middle'
                align='center'
              >
                ± 0.1
              </td>
              <td
                style={{
                  borderTop: "1px solid #000000",
                  borderBottom: "1px solid #000000",
                  borderLeft: "1px solid #000000",
                  borderRight: "1px solid #000000",
                }}
                valign='middle'
                align='center'
              >
                ± 0.1
              </td>
              <td
                style={{
                  borderTop: "1px solid #000000",
                  borderBottom: "1px solid #000000",
                  borderLeft: "1px solid #000000",
                  borderRight: "1px solid #000000",
                }}
                valign='middle'
                align='center'
              >
                ± 0.1
              </td>
            </tr>
            <tr>
              <td
                style={{
                  borderTop: "1px solid #000000",
                  borderBottom: "1px solid #000000",
                  borderLeft: "1px solid #000000",
                  borderRight: "1px solid #000000",
                }}
                sdval={6}
                sdnum='16393;'
                valign='middle'
                height={17}
                align='center'
              >
                6
              </td>
              <td
                style={{
                  borderTop: "1px solid #000000",
                  borderBottom: "1px solid #000000",
                  borderLeft: "1px solid #000000",
                  borderRight: "1px solid #000000",
                }}
                valign='middle'
                align='center'
              >
                Weight Capacity
              </td>
              <td
                style={{
                  borderTop: "1px solid #000000",
                  borderBottom: "1px solid #000000",
                  borderLeft: "1px solid #000000",
                  borderRight: "1px solid #000000",
                }}
                valign='middle'
                align='center'
              >
                KG
              </td>
              <td
                style={{
                  borderTop: "1px solid #000000",
                  borderBottom: "1px solid #000000",
                  borderLeft: "1px solid #000000",
                  borderRight: "1px solid #000000",
                }}
                sdval={2}
                sdnum='16393;'
                valign='middle'
                align='center'
              >
                2
              </td>
              <td
                style={{
                  borderTop: "1px solid #000000",
                  borderBottom: "1px solid #000000",
                  borderLeft: "1px solid #000000",
                  borderRight: "1px solid #000000",
                }}
                sdval={3}
                sdnum='16393;'
                valign='middle'
                align='center'
              >
                3
              </td>
              <td
                style={{
                  borderTop: "1px solid #000000",
                  borderBottom: "1px solid #000000",
                  borderLeft: "1px solid #000000",
                  borderRight: "1px solid #000000",
                }}
                sdval={5}
                sdnum='16393;'
                valign='middle'
                align='center'
              >
                5
              </td>
            </tr>
            <tr>
              <td
                style={{
                  borderTop: "1px solid #000000",
                  borderBottom: "1px solid #000000",
                  borderLeft: "1px solid #000000",
                  borderRight: "1px solid #000000",
                }}
                sdval={7}
                sdnum='16393;'
                valign='middle'
                height={17}
                align='center'
              >
                7
              </td>
              <td
                style={{
                  borderTop: "1px solid #000000",
                  borderBottom: "1px solid #000000",
                  borderLeft: "1px solid #000000",
                  borderRight: "1px solid #000000",
                }}
                valign='middle'
                align='center'
              >
                Maximum Stroke Feed
              </td>
              <td
                style={{
                  borderTop: "1px solid #000000",
                  borderBottom: "1px solid #000000",
                  borderLeft: "1px solid #000000",
                  borderRight: "1px solid #000000",
                }}
                valign='middle'
                align='center'
              >
                SPM
              </td>
              <td
                style={{
                  borderTop: "1px solid #000000",
                  borderBottom: "1px solid #000000",
                  borderLeft: "1px solid #000000",
                  borderRight: "1px solid #000000",
                }}
                sdval={40}
                sdnum='16393;'
                valign='middle'
                align='center'
              >
                40
              </td>
              <td
                style={{
                  borderTop: "1px solid #000000",
                  borderBottom: "1px solid #000000",
                  borderLeft: "1px solid #000000",
                  borderRight: "1px solid #000000",
                }}
                sdval={30}
                sdnum='16393;'
                valign='middle'
                align='center'
              >
                30
              </td>
              <td
                style={{
                  borderTop: "1px solid #000000",
                  borderBottom: "1px solid #000000",
                  borderLeft: "1px solid #000000",
                  borderRight: "1px solid #000000",
                }}
                sdval={20}
                sdnum='16393;'
                valign='middle'
                align='center'
              >
                20
              </td>
            </tr>
            <tr>
              <td
                style={{
                  borderTop: "1px solid #000000",
                  borderBottom: "1px solid #000000",
                  borderLeft: "1px solid #000000",
                  borderRight: "1px solid #000000",
                }}
                sdval={8}
                sdnum='16393;'
                valign='middle'
                height={17}
                align='center'
              >
                8
              </td>
              <td
                style={{
                  borderTop: "1px solid #000000",
                  borderBottom: "1px solid #000000",
                  borderLeft: "1px solid #000000",
                  borderRight: "1px solid #000000",
                }}
                valign='middle'
                align='center'
              >
                Main Dimensions
              </td>
              <td
                style={{
                  borderTop: "1px solid #000000",
                  borderBottom: "1px solid #000000",
                  borderLeft: "1px solid #000000",
                  borderRight: "1px solid #000000",
                }}
                valign='middle'
                align='center'
              >
                MM
              </td>
              <td
                style={{
                  borderTop: "1px solid #000000",
                  borderBottom: "1px solid #000000",
                  borderLeft: "1px solid #000000",
                  borderRight: "1px solid #000000",
                }}
                colSpan={3}
                valign='middle'
                align='center'
              >
                Please Contact
              </td>
            </tr>
            <tr>
              <td
                style={{
                  borderTop: "1px solid #000000",
                  borderBottom: "1px solid #000000",
                  borderLeft: "1px solid #000000",
                  borderRight: "1px solid #000000",
                }}
                sdval={9}
                sdnum='16393;'
                valign='middle'
                height={17}
                align='center'
              >
                9
              </td>
              <td
                style={{
                  borderTop: "1px solid #000000",
                  borderBottom: "1px solid #000000",
                  borderLeft: "1px solid #000000",
                  borderRight: "1px solid #000000",
                }}
                valign='middle'
                align='center'
              >
                Supported Bolster Width
              </td>
              <td
                style={{
                  borderTop: "1px solid #000000",
                  borderBottom: "1px solid #000000",
                  borderLeft: "1px solid #000000",
                  borderRight: "1px solid #000000",
                }}
                valign='middle'
                align='center'
              >
                MM
              </td>
              <td
                style={{
                  borderTop: "1px solid #000000",
                  borderBottom: "1px solid #000000",
                  borderLeft: "1px solid #000000",
                  borderRight: "1px solid #000000",
                }}
                colSpan={3}
                valign='middle'
                align='center'
              >
                Please Contact
              </td>
            </tr>
          </tbody>
        </table>
      </BaseTable>
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
                    imageArray={item?.imageCollection}
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
