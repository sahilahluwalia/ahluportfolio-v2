import React, { useEffect } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import DownloadCatalogue from "../../../../../components/Products/DownloadCatalogue";
// import asr2aii_layout from "asserts/machine-pics/asr2aii-layout.png";
import { subProductList, transferSystemData } from "../../../../../data/productsData";
import ProductList from "../../../../../components/Products/ProductList";
import { RightSection } from "../../../../../components/Products/RightSection";
import LeftSection from "../../../../../components/Products/LeftSection";
import FirstRow from "../../../../../components/Products/FirstRow";
import ProductItemBase from "../../../../../components/Products/ProductItemBase";
const tableContentInJSON = [
  {
    Model: "",
    "Max width in mm": null,
    "Thick ness Range in MM": "Mini",
    FIELD4: "Max",
    "Max thickness with max width": null,
    "Max Velocity in MPM": null,
  },
  {
    Model: "ASRF-200-HS",
    "Max width in mm": 200,
    "Thick ness Range in MM": "1",
    FIELD4: "6",
    "Max thickness with max width": 6,
    "Max Velocity in MPM": 40,
  },
  {
    Model: "ASRF-300-HS",
    "Max width in mm": 300,
    "Thick ness Range in MM": "",
    FIELD4: "",
    "Max thickness with max width": 6,
    "Max Velocity in MPM": 40,
  },
  {
    Model: "ASRF-400-HS",
    "Max width in mm": 400,
    "Thick ness Range in MM": "",
    FIELD4: "",
    "Max thickness with max width": 5,
    "Max Velocity in MPM": 40,
  },
  {
    Model: "ASRF-500-HS",
    "Max width in mm": 500,
    "Thick ness Range in MM": "",
    FIELD4: "",
    "Max thickness with max width": 4.8,
    "Max Velocity in MPM": 40,
  },
  {
    Model: "ASRF-600-HS",
    "Max width in mm": 600,
    "Thick ness Range in MM": "",
    FIELD4: "",
    "Max thickness with max width": 4.5,
    "Max Velocity in MPM": 40,
  },
  {
    Model: "ASRF-800-HS",
    "Max width in mm": 800,
    "Thick ness Range in MM": "",
    FIELD4: "",
    "Max thickness with max width": 3,
    "Max Velocity in MPM": 40,
  },
  {
    Model: "ASRF-1000-HS",
    "Max width in mm": 1000,
    "Thick ness Range in MM": "",
    FIELD4: "",
    "Max thickness with max width": 2,
    "Max Velocity in MPM": 40,
  },
];

const item = subProductList.find((item) => item.code === "asrf");
const { asrf } = transferSystemData;
const { introduction } = asrf;
function OverviewTab() {
  return (
    <>
      <h4>Introduction</h4>
      <div className='px-3'>
        <ol type='1'>
          {introduction.map((item, index) => {
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
// function Featurestab() {
//   return (
//     <>
//       <h4>Standard Features</h4>

//       <div className='px-3'>
//         <ol type='1'>
//           {standardFeatures?.map((item, index) => {
//             return (
//               <li
//                 // add css for a span inside this li

//                 style={{
//                   textAlign: "left",
//                 }}
//                 key={index}
//               >
//                 {parse(item)}
//               </li>
//             );
//           })}
//         </ol>
//       </div>
//     </>
//   );
// }
function SpecificationTab() {
  return (
    <>
      {/* <h4>Topview layout</h4>
      <img src={item.layout} alt='' srcset='' /> */}
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

const Asrf = () => {
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
              ASRF is dedicatedly developed to facilitate easy feeding of sheet
              length feeding where coil feeding is not possible.
              <br />
              Generally, Thicker sheets lie in this criteria but smaller
              thickness options provide better suitability of the product. The
              best part is "It is synchronized with Power Press. Automatically
              each stroke is accountable with only sheet feeding/insertion via
              (existing) Manpower.
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

export default Asrf;
