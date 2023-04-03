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
import BaseTable from "components/Products/BaseTable";
import ProductItemBase from "components/Products/ProductItemBase";

const item = subProductList.find((item) => item.code === "ampf");
const { ampf } = transferSystemData;
const { standardFeatures, commonCharacteristics } = ampf;
function OverviewTab() {
  return (
    <>
      <h4>Common Characteristics of Mechanical Flap</h4>
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
      <h4>Topview layout</h4>
      <img src={item.topView} alt='' srcset='' />
      <h4>Isometric layout</h4>
      <img src={item.isoView} alt='' srcset='' />
      <p>
        *Shown only for easy reference purposes and may vary based on the actual
        component.
      </p>
      <h4>Specifications</h4>

      <div className='table-responsive text-center'>
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
                    Parameters
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
                    AMPF-100
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
                    AMPF-150
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
                    AMPF-200
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
                    Press Stroke.
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
                  sdval={100}
                  sdnum='16393;'
                  valign='middle'
                  align='center'
                >
                  <font size={3} face>
                    100
                  </font>
                </td>
                <td
                  style={{
                    borderTop: "1px solid #000000",
                    borderBottom: "1px solid #000000",
                    borderLeft: "1px solid #000000",
                    borderRight: "1px solid #000000",
                  }}
                  sdval={150}
                  sdnum='16393;'
                  valign='middle'
                  align='center'
                >
                  <font size={3} face>
                    150
                  </font>
                </td>
                <td
                  style={{
                    borderTop: "1px solid #000000",
                    borderBottom: "1px solid #000000",
                    borderLeft: "1px solid #000000",
                    borderRight: "1px solid #000000",
                  }}
                  sdval={200}
                  sdnum='16393;'
                  valign='middle'
                  align='center'
                >
                  <font size={3} face>
                    200
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
                    Press Speed Max.
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
                  sdval={100}
                  sdnum='16393;'
                  valign='middle'
                  align='center'
                >
                  <font size={3} face>
                    100
                  </font>
                </td>
                <td
                  style={{
                    borderTop: "1px solid #000000",
                    borderBottom: "1px solid #000000",
                    borderLeft: "1px solid #000000",
                    borderRight: "1px solid #000000",
                  }}
                  sdval={75}
                  sdnum='16393;'
                  valign='middle'
                  align='center'
                >
                  <font size={3} face>
                    75
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
                    Flap Stroke Max.
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
                  sdval={150}
                  sdnum='16393;'
                  valign='middle'
                  align='center'
                >
                  <font size={3} face>
                    150
                  </font>
                </td>
                <td
                  style={{
                    borderTop: "1px solid #000000",
                    borderBottom: "1px solid #000000",
                    borderLeft: "1px solid #000000",
                    borderRight: "1px solid #000000",
                  }}
                  sdval={300}
                  sdnum='16393;'
                  valign='middle'
                  align='center'
                >
                  <font size={3} face>
                    300
                  </font>
                </td>
                <td
                  style={{
                    borderTop: "1px solid #000000",
                    borderBottom: "1px solid #000000",
                    borderLeft: "1px solid #000000",
                    borderRight: "1px solid #000000",
                  }}
                  sdval={500}
                  sdnum='16393;'
                  valign='middle'
                  align='center'
                >
                  <font size={3} face>
                    500
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
                    Flap Width.
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
                  sdval={100}
                  sdnum='16393;'
                  valign='middle'
                  align='center'
                >
                  <font size={3} face>
                    100
                  </font>
                </td>
                <td
                  style={{
                    borderTop: "1px solid #000000",
                    borderBottom: "1px solid #000000",
                    borderLeft: "1px solid #000000",
                    borderRight: "1px solid #000000",
                  }}
                  sdval={150}
                  sdnum='16393;'
                  valign='middle'
                  align='center'
                >
                  <font size={3} face>
                    150
                  </font>
                </td>
                <td
                  style={{
                    borderTop: "1px solid #000000",
                    borderBottom: "1px solid #000000",
                    borderLeft: "1px solid #000000",
                    borderRight: "1px solid #000000",
                  }}
                  sdval={200}
                  sdnum='16393;'
                  valign='middle'
                  align='center'
                >
                  <font size={3} face>
                    200
                  </font>
                </td>
              </tr>
            </tbody>
          </table>
        </BaseTable>
      </div>

      <p>
        *The contents are subject to change by manufacturer without prior
        notice.
      </p>
    </>
  );
}

const Ampf = () => {
  return (
    <>
      <ProductItemBase>
        <LeftSection>
          <FirstRow
            name={item?.name}
            description={item?.description}
            imageArray={item?.imageCollection}
          >
            <div className='product-description'>
              AMPF series facilitate to eliminate the strain of scrap / pierced
              part removal from the die in each operation by synchronizing with
              power presses.
              <br />
              This not only reduces the Operator fatigue strain of unloading
              separately but also can help in automizing the operation if the
              loading of components is performed via separate feeders. Thus
              increasing efficiency and running the Power press at its peak
              efficient cycle/speed.
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
              {/* <Tab eventKey='feature' title='Features'>
                        <Featurestab />
                      </Tab> */}

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

export default Ampf;
