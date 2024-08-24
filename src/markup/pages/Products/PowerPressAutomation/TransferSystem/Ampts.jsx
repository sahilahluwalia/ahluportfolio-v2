import React, { useEffect } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import DownloadCatalogue from "../../../../../components/Products/DownloadCatalogue";
import { subProductList, transferSystemData } from "../../../../../data/productsData";
import ProductList from "../../../../../components/Products/ProductList";
import { RightSection } from "../../../../../components/Products/RightSection";
import LeftSection from "../../../../../components/Products/LeftSection";
import FirstRow from "../../../../../components/Products/FirstRow";
import OverviewTab from "../../../../../components/Products/Tabs/OverviewTab";
import FeaturesTab from "../../../../../components/Products/Tabs/FeaturesTab";
import BaseTable from "../../../../../components/Products/BaseTable";
import SpecificationTab from "../../../../../components/Products/Tabs/SpecificationTab";
import ProductItemBase from "../../../../../components/Products/ProductItemBase";
import YoutubeVideoComponent from "../../../../../components/Video/YoutubeVideoComponent";

const item = subProductList.find((item) => item.code === "ampts");

const { double_bar_system } = transferSystemData;
const { standardFeatures, commonCharacteristics, type } = double_bar_system;

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
                    AMPTS-500L
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
                    AMPTS-1000L
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
                    AMPTS-2000L
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
                    0-500
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
                    0-1000
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
                    0-2000
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
                    ± 0.2
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
                    ± 0.2
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
                    ± 0.2
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
                    Suported Bolster Width
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

const Ampts = () => {
  return (
    <>
      <ProductItemBase>
        <LeftSection>
          <FirstRow
            name={item?.name}
            // description={item?.description}
            image={item?.image}
          >
            <div className='product-description'>
              Customized system{" "}
              <span>
                designed to achieve transfers between individual presses in 2
                Axis with additional Gripper axis involved.
              </span>{" "}
              <br />
              This Servo programmable transfer system drives a transfer unit
              with the help of a Single bar mechanism. <br />
              <br />
              Three variants of the AMPTS series are available so that you can
              select a transfer pitch appropriate for your purpose.
              <br /> This system is designed to function in batches of 3 Presses
              i.e, Multiple of 3 Presses will decide the number of Individual
              systems required to do the job.
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
            <YoutubeVideoComponent
                embedId={"HCHshvl9gUs"}
            />
           <YoutubeVideoComponent
           embedId={item?.embedId}
           />
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

export default Ampts;
