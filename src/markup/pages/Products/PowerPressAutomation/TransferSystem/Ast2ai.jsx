import React, { useEffect } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import DownloadCatalogue from "components/Products/DownloadCatalogue";
import asr2aii_layout from "asserts/machine-pics/asr2aii-layout.png";
import timingDiagram from "asserts/machine-pics/timingAST2AII.png";
import { subProductList, transferSystemData } from "data/productsData";
import ProductList from "components/Products/ProductList";
import { RightSection } from "components/Products/RightSection";
import LeftSection from "components/Products/LeftSection";
import FirstRow from "components/Products/FirstRow";
import parse from "html-react-parser";
import Table from "components/Products/Table";
import BaseTable from "components/Products/BaseTable";
import { First } from "react-bootstrap/esm/PageItem";
import SpecificationTab from "components/Products/Tabs/SpecificationTab";
import ProductItemBase from 'components/Products/ProductItemBase';

const item = subProductList.find((item) => item.code === "ast2ai");
const { double_bar_system } = transferSystemData;
const { standardFeatures, commonCharacteristics } = double_bar_system;

function OverviewTab() {
  return (
    <>
      <h4>Common Characteristics of Single Bar System</h4>
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
      <h4>Standard Features</h4>

      <div className='px-3'>
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
function ST() {
  return (
    <>
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
                    AST2AI-150L
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
                    AST2AI-300L
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
                    AST2AI-500L
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
                    0-50
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
                    0-80
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
                    60
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
                  sdval={30}
                  sdnum='16393;'
                  valign='middle'
                  align='center'
                >
                  <font size={3} face>
                    30
                  </font>
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
                  <font size={3} face>
                    20
                  </font>
                </td>
                <td
                  style={{
                    borderTop: "1px solid #000000",
                    borderBottom: "1px solid #000000",
                    borderLeft: "1px solid #000000",
                    borderRight: "1px solid #000000",
                  }}
                  sdval={15}
                  sdnum='16393;'
                  valign='middle'
                  align='center'
                >
                  <font size={3} face>
                    15
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

const Ast2ai = () => {
  // console.log(window.location.origin);
  return (
    <>
      <ProductItemBase>
        <LeftSection>
          <FirstRow
            name={item?.name}
            // description={item?.description}
            imageArray={item?.imageCollection}
          >
            <div className='product-description'>
              Mount this system on a general-purpose press machine to achieve
              Speedy transfers in 2 Axis for transfer processing.
              <br />
              This Servo programmable transfer system drives
              <span>
                {" "}
                a transfer unit with the help of a single bar mechanism in 2
                axis and an additional gripper axis.
              </span>{" "}
              <br />
              <br />
              Three variants of the AST2AI series are available so that you can
              select a transfer pitch appropriate for your purpose.
            </div>
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
      </ProductItemBase>
    </>
  );
};

export default Ast2ai;
