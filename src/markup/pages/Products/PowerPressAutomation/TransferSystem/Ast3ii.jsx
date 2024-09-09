import React, { useEffect } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import DownloadCatalogue from "components/Products/DownloadCatalogue";
import { subProductList, transferSystemData } from "data/productsData";
import ProductList from "components/Products/ProductList";
import { RightSection } from "components/Products/RightSection";
import LeftSection from "components/Products/LeftSection";
import FirstRow from "components/Products/FirstRow";
import parse from "html-react-parser";
import BaseTable from "components/Products/BaseTable";
import ProductItemBase from "components/Products/ProductItemBase";

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
      <h4>Standard Features </h4>

      <div className='px-3'>
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
      <h4>Topview layout</h4>
      <img src={item.layout} alt='' srcset='' />
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
                60
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
      <p>
        *The contents are subject to change by the manufacturer without prior
        notice.
      </p>
    </>
  );
}

const Ast3aii = () => {
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
              <span>
                {" "}
                Customized system designed only to achieve Speedy transfers in 3
                Servo Axis for Z Axis draw/ Guided insertion based components.
              </span>{" "}
              <br /> This Servo programmable transfer system drives a transfer
              unit with the help of a Double bar mechanism.
              <br />
              <br />
              Three variants of AST3AII series are available so that you can
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
              code={item?.code}
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

export default Ast3aii;
