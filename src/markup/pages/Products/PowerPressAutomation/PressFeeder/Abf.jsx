import React, { useEffect } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import DownloadCatalogue from "components/Products/DownloadCatalogue";
// import asr2aii_layout from "asserts/machine-pics/asr2aii-layout.png";
import asr3aii_layout from "asserts/machine-pics/asr3aii-layout.png";
import timingDiagram from "asserts/machine-pics/timingAST2AII.png";
import { subProductList, powerpressAutomation } from "data/productsData";
import ProductList from "components/Products/ProductList";
import { RightSection } from "components/Products/RightSection";
import LeftSection from "components/Products/LeftSection";
import FirstRow from "components/Products/FirstRow";
import parse from "html-react-parser";
import Table from "components/Products/Table";
import BaseTable from "components/Products/BaseTable";
import ProductItemBase from "components/Products/ProductItemBase";

const item = subProductList.find((item) => item.code === "abf");
const { abf } = powerpressAutomation;
const { standardFeatures, commonCharacteristics } = abf;
function OverviewTab() {
    return (
        <>
            <h4>Characteristics of Ahlu Blank Feeder</h4>
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
            <h4>Specifications</h4>
            <div className='table-responsive text-center pt-0'>
                <BaseTable>
                    <table
                        className='table table-bordered table-striped'
                        cellSpacing={0}
                        border={0}>
                        <colgroup width={85} span={6} />
                        <tbody><tr>
                            <td style={{borderTop: '1px solid #000000', borderBottom: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000'}} valign="middle" height={20} align="center"><font size={3} face>Sr. No.</font></td>
                            <td style={{borderTop: '1px solid #000000', borderBottom: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000'}} valign="middle" align="center"><font size={3} face>MODEL NO.</font></td>
                            <td style={{borderTop: '1px solid #000000', borderBottom: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000'}} valign="middle" align="center"><font size={3} face>Unit</font></td>
                            <td style={{borderTop: '1px solid #000000', borderBottom: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000'}} valign="middle" align="center"><font size={3} face>BLANK SIZE</font></td>
                            <td style={{borderTop: '1px solid #000000', borderBottom: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000'}} valign="middle" align="center"><font size={3} face>FEED DISTANCE</font></td>
                            <td style={{borderTop: '1px solid #000000', borderBottom: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000'}} valign="middle" align="center"><font size={3} face>THICKNESS</font></td>
                        </tr>
                        <tr>
                            <td style={{borderTop: '1px solid #000000', borderBottom: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000'}} sdval={1} sdnum="16393;" valign="middle" height={20} align="center"><font size={3} face>1</font></td>
                            <td style={{borderTop: '1px solid #000000', borderBottom: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000'}} valign="middle" align="center"><font size={3} face>ABF-02-05-160</font></td>
                            <td style={{borderTop: '1px solid #000000', borderBottom: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000'}} valign="middle" align="center"><font size={3} face>MM</font></td>
                            <td style={{borderTop: '1px solid #000000', borderBottom: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000'}} valign="middle" align="center"><font size={3} face>∅21-50</font></td>
                            <td style={{borderTop: '1px solid #000000', borderBottom: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000'}} sdval={160} sdnum="16393;" valign="middle" align="center"><font size={3} face>160</font></td>
                            <td style={{borderTop: '1px solid #000000', borderBottom: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000'}} valign="middle" align="center"><font size={3} face>0.9 to 3</font></td>
                        </tr>
                        <tr>
                            <td style={{borderTop: '1px solid #000000', borderBottom: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000'}} sdval={2} sdnum="16393;" valign="middle" height={20} align="center"><font size={3} face>2</font></td>
                            <td style={{borderTop: '1px solid #000000', borderBottom: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000'}} valign="middle" align="center"><font size={3} face>ABF-05-10-160</font></td>
                            <td style={{borderTop: '1px solid #000000', borderBottom: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000'}} valign="middle" align="center"><font size={3} face>MM</font></td>
                            <td style={{borderTop: '1px solid #000000', borderBottom: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000'}} valign="middle" align="center"><font size={3} face>∅51-100</font></td>
                            <td style={{borderTop: '1px solid #000000', borderBottom: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000'}} sdval={320} sdnum="16393;" valign="middle" align="center"><font size={3} face>320</font></td>
                            <td style={{borderTop: '1px solid #000000', borderBottom: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000'}} valign="middle" align="center"><font size={3} face>1 to 4</font></td>
                        </tr>
                        <tr>
                            <td style={{borderTop: '1px solid #000000', borderBottom: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000'}} sdval={3} sdnum="16393;" valign="middle" height={20} align="center"><font size={3} face>3</font></td>
                            <td style={{borderTop: '1px solid #000000', borderBottom: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000'}} valign="middle" align="center"><font size={3} face>ABF-10-15-200</font></td>
                            <td style={{borderTop: '1px solid #000000', borderBottom: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000'}} valign="middle" align="center"><font size={3} face>MM</font></td>
                            <td style={{borderTop: '1px solid #000000', borderBottom: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000'}} valign="middle" align="center"><font size={3} face>∅101-150</font></td>
                            <td style={{borderTop: '1px solid #000000', borderBottom: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000'}} sdval={400} sdnum="16393;" valign="middle" align="center"><font size={3} face>400</font></td>
                            <td style={{borderTop: '1px solid #000000', borderBottom: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000'}} valign="middle" align="center"><font size={3} face>1 to 5</font></td>
                        </tr>
                        <tr>
                            <td style={{borderTop: '1px solid #000000', borderBottom: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000'}} sdval={4} sdnum="16393;" valign="middle" height={20} align="center"><font size={3} face>4</font></td>
                            <td style={{borderTop: '1px solid #000000', borderBottom: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000'}} valign="middle" align="center"><font size={3} face>ABF-15-19-250</font></td>
                            <td style={{borderTop: '1px solid #000000', borderBottom: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000'}} valign="middle" align="center"><font size={3} face>MM</font></td>
                            <td style={{borderTop: '1px solid #000000', borderBottom: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000'}} valign="middle" align="center"><font size={3} face>∅151-190</font></td>
                            <td style={{borderTop: '1px solid #000000', borderBottom: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000'}} sdval={500} sdnum="16393;" valign="middle" align="center"><font size={3} face>500</font></td>
                            <td style={{borderTop: '1px solid #000000', borderBottom: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000'}} valign="middle" align="center"><font size={3} face>2 to 6</font></td>
                        </tr>
                        </tbody></table>

                </BaseTable>
            </div>

            <p>
                *The contents are subject to change by manufacturer without prior
                notice.
            </p>
        </>
    );
}

const Abf = () => {
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
                            1. Ahlu Blank Feeder series is powered by the use of a suitable sized Pneumatic cylinder for its To and Fro operation cycles. <br/>
                            2. Its sturdy and heavy design not only provides strength while its M.O.C being Tool steel also gives low wear and tear resistance which eventually provides higher life expectancy.<br/>
                            3. Our design utilizes Linear Bearings with Linear Guide rails for proper alignment of its linear movement. Its Low clearance & accurate design provides smoother working cycles.<br/>
                            4. It’s double decker design reduces the operation cycle time and increases the overall time productivity ratio.<br/>
                            5. Magazine based design inculcates no Operator’s direct involvement in press operations and its easily accessible irrespective of operation state. Hence, provides Operator safety & reduces Human interference requirement.<br/>
                            6. Press Synchronization increases Press utilization factor along with Human Safety & better productivity rate.
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

export default Abf;
