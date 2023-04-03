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
import Table from "components/Products/Table";
import OverviewTab from "components/Products/Tabs/OverviewTab";
import FeaturesTab from "components/Products/Tabs/FeaturesTab";
import BaseTable from "components/Products/BaseTable";
import SpecificationTab from "components/Products/Tabs/SpecificationTab";
const item = subProductList.find((item) => item.code === "acsts");
const { acsts } = transferSystemData;
const { standardFeatures, commonCharacteristics, type } = acsts;

function ST() {
  return (
    <>
      {" "}
      <SpecificationTab image={item.layout}>
        <BaseTable>
          <table
            className='table table-bordered table-striped'
            cellSpacing={0}
            border={0}
          >
            <colgroup width={85} span={5} />
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
                  height={20}
                  align='center'
                >
                  <font size={3} face>
                    Item
                  </font>
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
                  <font size={3} face>
                    Unit
                  </font>
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
                  <font size={3} face>
                    ACSTS-150L
                  </font>
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
                  <font size={3} face>
                    ACSTS-300L
                  </font>
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
                  <font size={3} face>
                    ACSTS-500L
                  </font>
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
                  valign='middle'
                  height={20}
                  align='center'
                >
                  <font size={3} face>
                    X Axis / Transfer pitch
                  </font>
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
                  <font size={3} face>
                    MM
                  </font>
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
                  <font size={3} face>
                    0-150
                  </font>
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
                  <font size={3} face>
                    0-300
                  </font>
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
                  <font size={3} face>
                    0-500
                  </font>
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
                  valign='middle'
                  height={20}
                  align='center'
                >
                  <font size={3} face>
                    Z Axis / Lift Amount
                  </font>
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
                  <font size={3} face>
                    MM
                  </font>
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
                  <font size={3} face>
                    0-30
                  </font>
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
                  <font size={3} face>
                    0-60
                  </font>
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
                  <font size={3} face>
                    0-90
                  </font>
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
                  valign='middle'
                  height={20}
                  align='center'
                >
                  <font size={3} face>
                    Feed Bar Size
                  </font>
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
                  <font size={3} face>
                    MM
                  </font>
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
                  <font size={3} face>
                    65
                  </font>
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
                  <font size={3} face>
                    80
                  </font>
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
                  <font size={3} face>
                    90
                  </font>
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
                  valign='middle'
                  height={20}
                  align='center'
                >
                  <font size={3} face>
                    Weight Capacity
                  </font>
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
                  <font size={3} face>
                    KG
                  </font>
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
                  <font size={3} face>
                    2
                  </font>
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
                  <font size={3} face>
                    3
                  </font>
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
                  <font size={3} face>
                    5
                  </font>
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
                  valign='middle'
                  height={20}
                  align='center'
                >
                  <font size={3} face>
                    Feeding Accuracy
                  </font>
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
                  <font size={3} face>
                    MM
                  </font>
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
                  <font size={3} face>
                    ± 0.1
                  </font>
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
                  <font size={3} face>
                    ± 0.1
                  </font>
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
                  <font size={3} face>
                    ± 0.1
                  </font>
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
                  valign='middle'
                  height={20}
                  align='center'
                >
                  <font size={3} face>
                    Maximum Stroke Feed
                  </font>
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
                  <font size={3} face>
                    SPM
                  </font>
                </td>
                <td
                  style={{
                    borderTop: "1px solid #000000",
                    borderBottom: "1px solid #000000",
                    borderLeft: "1px solid #000000",
                    borderRight: "1px solid #000000",
                  }}
                  sdval={50}
                  sdnum='16393;'
                  valign='middle'
                  align='center'
                >
                  <font size={3} face>
                    50
                  </font>
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
                  <font size={3} face>
                    40
                  </font>
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
                  <font size={3} face>
                    30
                  </font>
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
                  valign='middle'
                  height={20}
                  align='center'
                >
                  <font size={3} face>
                    Main Dimensions
                  </font>
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
                  <font size={3} face>
                    MM
                  </font>
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
                  <font size={3}>Please Contact</font>
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
                  valign='middle'
                  height={20}
                  align='center'
                >
                  <font size={3} face>
                    Supported Bolster Width
                  </font>
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
                  <font size={3} face>
                    MM
                  </font>
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
                  <font size={3}>Please Contact</font>
                </td>
              </tr>
            </tbody>
          </table>
        </BaseTable>
      </SpecificationTab>
    </>
  );
}

const Acsts = () => {
  return (
    <>
      <div className='blue-bg'>
        <div className='midContent'>
          <div className='py-5  section-full'>
            <div className='container'>
              <div className='row'>
                <LeftSection>
                  <FirstRow
                    name={item?.name}
                    // description={item?.description}
                    imageArray={item?.imageCollection}
                  >
                    <div className='product-description'>
                      Mount this system on a general-purpose press machine to
                      achieve automated transfers in 2 Axis with minimal
                      changes. Best suited for C frame type presses.
                      <br /> This{" "}
                      <span>programmable transfer system drives </span>a
                      transfer unit via a set of servo motors{" "}
                      <span>
                        with the help of a Cantilever arrangement single bar
                        mechanism.
                      </span>{" "}
                      <br />
                      <br /> Three variants of ACSTS series are available so
                      that you can select a transfer pitch appropriate for your
                      purpose.
                    </div>
                  </FirstRow>

                  <div className='row'>
                    <Tabs
                      defaultActiveKey='overview'
                      id='noanim-tab-example'
                      className='mb-3  col-md-12 '
                    >
                      <Tab eventKey='overview' title='Overview'>
                        <OverviewTab type={type} data={commonCharacteristics} />
                      </Tab>
                      <Tab eventKey='feature' title='Features'>
                        <FeaturesTab type={type} data={standardFeatures} />
                      </Tab>

                      <Tab eventKey='specification' title='Specification'>
                        <ST />
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
