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

const item = subProductList.find((item) => item.code === "ampf");
const { acsts } = transferSystemData;
const { standardFeatures, commonCharacteristics } = acsts;
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
      <h6>Servo Roll Feeder Heavy series (HS)</h6>

      <div className='table-responsive text-center'>
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
                rowSpan={2}
                valign='middle'
                height={37}
                align='center'
              >
                <font color='#000000'>Model</font>
              </td>
              <td
                style={{
                  borderTop: "1px solid #000000",
                  borderBottom: "1px solid #000000",
                  borderLeft: "1px solid #000000",
                  borderRight: "1px solid #000000",
                }}
                rowSpan={2}
                valign='middle'
                align='center'
              >
                <font color='#000000'>Max width in mm</font>
              </td>
              <td
                style={{
                  borderTop: "1px solid #000000",
                  borderBottom: "1px solid #000000",
                  borderLeft: "1px solid #000000",
                  borderRight: "1px solid #000000",
                }}
                colSpan={2}
                valign='middle'
                align='center'
              >
                <font color='#000000'>Thickness Range in MM</font>
              </td>
              <td
                style={{
                  borderTop: "1px solid #000000",
                  borderBottom: "1px solid #000000",
                  borderLeft: "1px solid #000000",
                  borderRight: "1px solid #000000",
                }}
                rowSpan={2}
                valign='middle'
                align='center'
              >
                <font color='#000000'>Max thickness with max width</font>
              </td>
              <td
                style={{
                  borderTop: "1px solid #000000",
                  borderBottom: "1px solid #000000",
                  borderLeft: "1px solid #000000",
                  borderRight: "1px solid #000000",
                }}
                rowSpan={2}
                valign='middle'
                align='center'
              >
                <font color='#000000'>Max Velocity in MPM</font>
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
                align='center'
              >
                <font color='#000000'>Mini</font>
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
                <font color='#000000'>Max</font>
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
                height={18}
                align='center'
              >
                <font color='#000000'>ASRF-200-HS</font>
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
                <font color='#000000'>200</font>
              </td>
              <td
                style={{
                  borderTop: "1px solid #000000",
                  borderBottom: "1px solid #000000",
                  borderLeft: "1px solid #000000",
                  borderRight: "1px solid #000000",
                }}
                rowSpan={7}
                sdval={1}
                sdnum='16393;'
                valign='middle'
                align='center'
              >
                <font color='#000000'>1</font>
              </td>
              <td
                style={{
                  borderTop: "1px solid #000000",
                  borderBottom: "1px solid #000000",
                  borderLeft: "1px solid #000000",
                  borderRight: "1px solid #000000",
                }}
                rowSpan={7}
                sdval={6}
                sdnum='16393;'
                valign='middle'
                align='center'
              >
                <font
                  style={{
                    marginTop: "auto",
                    marginBottom: "auto",
                  }}
                  color='#000000'
                >
                  6
                </font>
              </td>
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
                align='center'
              >
                <font color='#000000'>6</font>
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
                <font color='#000000'>40</font>
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
                height={18}
                align='center'
              >
                <font color='#000000'>ASRF-300-HS</font>
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
                <font color='#000000'>300</font>
              </td>
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
                align='center'
              >
                <font color='#000000'>6</font>
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
                <font color='#000000'>40</font>
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
                height={18}
                align='center'
              >
                <font color='#000000'>ASRF-400-HS</font>
              </td>
              <td
                style={{
                  borderTop: "1px solid #000000",
                  borderBottom: "1px solid #000000",
                  borderLeft: "1px solid #000000",
                  borderRight: "1px solid #000000",
                }}
                sdval={400}
                sdnum='16393;'
                valign='middle'
                align='center'
              >
                <font color='#000000'>400</font>
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
                <font color='#000000'>5</font>
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
                <font color='#000000'>40</font>
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
                height={18}
                align='center'
              >
                <font color='#000000'>ASRF-500-HS</font>
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
                <font color='#000000'>500</font>
              </td>
              <td
                style={{
                  borderTop: "1px solid #000000",
                  borderBottom: "1px solid #000000",
                  borderLeft: "1px solid #000000",
                  borderRight: "1px solid #000000",
                }}
                sdval='4.8'
                sdnum='16393;'
                valign='middle'
                align='center'
              >
                <font color='#000000'>4.8</font>
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
                <font color='#000000'>40</font>
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
                height={18}
                align='center'
              >
                <font color='#000000'>ASRF-600-HS</font>
              </td>
              <td
                style={{
                  borderTop: "1px solid #000000",
                  borderBottom: "1px solid #000000",
                  borderLeft: "1px solid #000000",
                  borderRight: "1px solid #000000",
                }}
                sdval={600}
                sdnum='16393;'
                valign='middle'
                align='center'
              >
                <font color='#000000'>600</font>
              </td>
              <td
                style={{
                  borderTop: "1px solid #000000",
                  borderBottom: "1px solid #000000",
                  borderLeft: "1px solid #000000",
                  borderRight: "1px solid #000000",
                }}
                sdval='4.5'
                sdnum='16393;'
                valign='middle'
                align='center'
              >
                <font color='#000000'>4.5</font>
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
                <font color='#000000'>40</font>
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
                height={18}
                align='center'
              >
                <font color='#000000'>ASRF-800-HS</font>
              </td>
              <td
                style={{
                  borderTop: "1px solid #000000",
                  borderBottom: "1px solid #000000",
                  borderLeft: "1px solid #000000",
                  borderRight: "1px solid #000000",
                }}
                sdval={800}
                sdnum='16393;'
                valign='middle'
                align='center'
              >
                <font color='#000000'>800</font>
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
                <font color='#000000'>3</font>
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
                <font color='#000000'>40</font>
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
                height={18}
                align='center'
              >
                <font color='#000000'>ASRF-1000-HS</font>
              </td>
              <td
                style={{
                  borderTop: "1px solid #000000",
                  borderBottom: "1px solid #000000",
                  borderLeft: "1px solid #000000",
                  borderRight: "1px solid #000000",
                }}
                sdval={1000}
                sdnum='16393;'
                valign='middle'
                align='center'
              >
                <font color='#000000'>1000</font>
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
                <font color='#000000'>2</font>
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
                <font color='#000000'>40</font>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <h6>Servo Roll Feeder Medium series (MS)</h6>
      <div className='table-responsive text-center'>
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
                rowSpan={2}
                valign='middle'
                height={46}
                align='center'
              >
                <font size={4} face>
                  Model
                </font>
              </td>
              <td
                style={{
                  borderTop: "1px solid #000000",
                  borderBottom: "1px solid #000000",
                  borderLeft: "1px solid #000000",
                  borderRight: "1px solid #000000",
                }}
                rowSpan={2}
                valign='middle'
                align='center'
              >
                <font size={4} face>
                  Max width in mm
                </font>
              </td>
              <td
                style={{
                  borderTop: "1px solid #000000",
                  borderBottom: "1px solid #000000",
                  borderLeft: "1px solid #000000",
                  borderRight: "1px solid #000000",
                }}
                colSpan={2}
                valign='middle'
                align='center'
              >
                <font size={4}>Thickness Range in MM</font>
              </td>
              <td
                style={{
                  borderTop: "1px solid #000000",
                  borderBottom: "1px solid #000000",
                  borderLeft: "1px solid #000000",
                  borderRight: "1px solid #000000",
                }}
                rowSpan={2}
                valign='middle'
                align='center'
              >
                <font size={4} face>
                  Max thickness with max width
                </font>
              </td>
              <td
                style={{
                  borderTop: "1px solid #000000",
                  borderBottom: "1px solid #000000",
                  borderLeft: "1px solid #000000",
                  borderRight: "1px solid #000000",
                }}
                rowSpan={2}
                valign='middle'
                align='center'
              >
                <font size={4} face>
                  Max Velocity in MPM
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
                align='center'
              >
                <font size={4} face>
                  Mini
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
                <font size={4}>Max</font>
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
                height={23}
                align='center'
              >
                <font size={4} face>
                  ASRF-200-MS
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
                <font size={4} face>
                  200
                </font>
              </td>
              <td
                style={{
                  borderTop: "1px solid #000000",
                  borderBottom: "1px solid #000000",
                  borderLeft: "1px solid #000000",
                  borderRight: "1px solid #000000",
                }}
                rowSpan={4}
                sdval='0.3'
                sdnum='16393;'
                valign='middle'
                align='center'
              >
                <font size={4} face>
                  0.3
                </font>
              </td>
              <td
                style={{
                  borderTop: "1px solid #000000",
                  borderBottom: "1px solid #000000",
                  borderLeft: "1px solid #000000",
                  borderRight: "1px solid #000000",
                }}
                rowSpan={4}
                sdval='3.5'
                sdnum='16393;'
                valign='middle'
                align='center'
              >
                <font size={4} face>
                  3.5
                </font>
              </td>
              <td
                style={{
                  borderTop: "1px solid #000000",
                  borderBottom: "1px solid #000000",
                  borderLeft: "1px solid #000000",
                  borderRight: "1px solid #000000",
                }}
                sdval='3.5'
                sdnum='16393;'
                valign='middle'
                align='center'
              >
                <font size={4} face>
                  3.5
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
                <font size={4} face>
                  40
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
                height={23}
                align='center'
              >
                <font size={4} face>
                  ASRF-300-MS
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
                <font size={4}>300</font>
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
                <font size={4} face>
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
                sdval={40}
                sdnum='16393;'
                valign='middle'
                align='center'
              >
                <font size={4} face>
                  40
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
                height={23}
                align='center'
              >
                <font size={4} face>
                  ASRF-400-MS
                </font>
              </td>
              <td
                style={{
                  borderTop: "1px solid #000000",
                  borderBottom: "1px solid #000000",
                  borderLeft: "1px solid #000000",
                  borderRight: "1px solid #000000",
                }}
                sdval={400}
                sdnum='16393;'
                valign='middle'
                align='center'
              >
                <font size={4}>400</font>
              </td>
              <td
                style={{
                  borderTop: "1px solid #000000",
                  borderBottom: "1px solid #000000",
                  borderLeft: "1px solid #000000",
                  borderRight: "1px solid #000000",
                }}
                sdval='2.5'
                sdnum='16393;'
                valign='middle'
                align='center'
              >
                <font size={4} face>
                  2.5
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
                <font size={4} face>
                  40
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
                height={23}
                align='center'
              >
                <font size={4} face>
                  ASRF-500-MS
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
                <font size={4}>500</font>
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
                <font size={4} face>
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
                sdval={40}
                sdnum='16393;'
                valign='middle'
                align='center'
              >
                <font size={4} face>
                  40
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
                height={23}
                align='center'
              >
                <font size={4} face>
                  ASRF-600-MS
                </font>
              </td>
              <td
                style={{
                  borderTop: "1px solid #000000",
                  borderBottom: "1px solid #000000",
                  borderLeft: "1px solid #000000",
                  borderRight: "1px solid #000000",
                }}
                sdval={600}
                sdnum='16393;'
                valign='middle'
                align='center'
              >
                <font size={4} face>
                  600
                </font>
              </td>
              <td
                style={{
                  borderTop: "1px solid #000000",
                  borderBottom: "1px solid #000000",
                  borderLeft: "1px solid #000000",
                  borderRight: "1px solid #000000",
                }}
                rowSpan={3}
                sdval='0.3'
                sdnum='16393;'
                valign='middle'
                align='center'
              >
                <font size={4} face>
                  0.3
                </font>
              </td>
              <td
                style={{
                  borderTop: "1px solid #000000",
                  borderBottom: "1px solid #000000",
                  borderLeft: "1px solid #000000",
                  borderRight: "1px solid #000000",
                }}
                rowSpan={3}
                sdval='2.5'
                sdnum='16393;'
                valign='middle'
                align='center'
              >
                <font size={4} face>
                  2.5
                </font>
              </td>
              <td
                style={{
                  borderTop: "1px solid #000000",
                  borderBottom: "1px solid #000000",
                  borderLeft: "1px solid #000000",
                  borderRight: "1px solid #000000",
                }}
                sdval='2.5'
                sdnum='16393;'
                valign='middle'
                align='center'
              >
                <font size={4} face>
                  2.5
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
                <font size={4} face>
                  40
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
                height={23}
                align='center'
              >
                <font size={4} face>
                  ASRF-800-MS
                </font>
              </td>
              <td
                style={{
                  borderTop: "1px solid #000000",
                  borderBottom: "1px solid #000000",
                  borderLeft: "1px solid #000000",
                  borderRight: "1px solid #000000",
                }}
                sdval={800}
                sdnum='16393;'
                valign='middle'
                align='center'
              >
                <font size={4}>800</font>
              </td>
              <td
                style={{
                  borderTop: "1px solid #000000",
                  borderBottom: "1px solid #000000",
                  borderLeft: "1px solid #000000",
                  borderRight: "1px solid #000000",
                }}
                sdval='1.6'
                sdnum='16393;'
                valign='middle'
                align='center'
              >
                <font size={4} face>
                  1.6
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
                <font size={4} face>
                  40
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
                height={23}
                align='center'
              >
                <font size={4} face>
                  ASRF-1000-MS
                </font>
              </td>
              <td
                style={{
                  borderTop: "1px solid #000000",
                  borderBottom: "1px solid #000000",
                  borderLeft: "1px solid #000000",
                  borderRight: "1px solid #000000",
                }}
                sdval={1000}
                sdnum='16393;'
                valign='middle'
                align='center'
              >
                <font size={4}>1000</font>
              </td>
              <td
                style={{
                  borderTop: "1px solid #000000",
                  borderBottom: "1px solid #000000",
                  borderLeft: "1px solid #000000",
                  borderRight: "1px solid #000000",
                }}
                sdval='1.5'
                sdnum='16393;'
                valign='middle'
                align='center'
              >
                <font size={4} face>
                  1.5
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
                <font size={4} face>
                  40
                </font>
              </td>
            </tr>
          </tbody>
        </table>
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
                  ></FirstRow>

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

export default Ampf;