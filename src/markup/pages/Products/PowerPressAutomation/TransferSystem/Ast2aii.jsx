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
import ProductItemBase from "components/Products/ProductItemBase";

const item = subProductList.find((item) => item.code === "ast2aii");
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
function SpecificationTab() {
  return (
    <>
      <h4>Topview layout</h4>

      <img src={asr2aii_layout} alt='' srcset='' />
      <p>
        *Shown only for easy reference purposes and may vary based on the actual
        component.
      </p>
      <h4>Specifications</h4>
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
                  AST2AII-125L
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
                  AST2AII-250L
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
                  AST2AII-500L
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
                  mm
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
                  0-125
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
                  0-250
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
                  Y Axis / Clamping Stroke
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
                  mm
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
                  0-40
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
                  0-65
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
                  0-125
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
                  mm
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
                  kg
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
                  mm
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
                  spm
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
                  mm
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
                  mm
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
      <p>
        *The contents are subject to change by the manufacturer without prior
        notice.
      </p>
    </>
  );
}

const Ast2aii = () => {
  console.log(window.location.origin);
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
              <span>
                {" "}
                high-speed transfers in 2 Axis for high-speed transfer
              </span>{" "}
              processing. <br />
              The high-speed programmable transfer system drives a transfer unit
              via a set of servo motors with the help of a double bar mechanism.
              <br />
              Three variants of AST2AII series are available so that you can
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
      </ProductItemBase>
    </>
  );
};

export default Ast2aii;
