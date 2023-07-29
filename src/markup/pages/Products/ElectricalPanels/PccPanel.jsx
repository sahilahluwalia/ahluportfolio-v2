import React from 'react';
import {subElectricalPanelsList} from "../../../../data/productsData";
import BaseTable from "../../../../components/Products/BaseTable";
import LeftSection from "../../../../components/Products/LeftSection";
import FirstRow from "../../../../components/Products/FirstRow";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import FeaturesComponent from "../../../../components/Products/FeaturesComponent";
import {RightSection} from "../../../../components/Products/RightSection";
import ProductList from "../../../../components/Products/ProductList";
import ProductItemBase from "../../../../components/Products/ProductItemBase";
const item = subElectricalPanelsList.find((item) => item.code === "pcc");

function ST() {
    return (
        <>
            <h4>Specification</h4>
            <BaseTable>
                <table className="table table-bordered table-striped" cellSpacing={0} border={0}>
                    <colgroup width={85} span={2} />
                    <tbody><tr>
                        <td style={{borderTop: '1px solid #000000', borderBottom: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000'}} valign="middle" height={17} align="center"><font face="Liberation Serif">Material</font></td>
                        <td style={{borderTop: '1px solid #000000', borderBottom: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000'}} valign="middle" align="center"><font face="Liberation Serif">Mild steel</font></td>
                    </tr>
                    <tr>
                        <td style={{borderTop: '1px solid #000000', borderBottom: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000'}} valign="middle" height={17} align="center"><font face="Liberation Serif">IP Rating</font></td>
                        <td style={{borderTop: '1px solid #000000', borderBottom: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000'}} valign="middle" align="center"><font face="Liberation Serif">IP55</font></td>
                    </tr>
                    <tr>
                        <td style={{borderTop: '1px solid #000000', borderBottom: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000'}} valign="middle" height={47} align="center"><font face="Liberation Serif">Usage/Application</font></td>
                        <td style={{borderTop: '1px solid #000000', borderBottom: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000'}} valign="middle" align="center"><font face="Liberation Serif">Industries, Utility Distribution</font></td>
                    </tr>
                    <tr>
                        <td style={{borderTop: '1px solid #000000', borderBottom: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000'}} valign="middle" height={47} align="center"><font face="Liberation Serif">Brands</font></td>
                        <td style={{borderTop: '1px solid #000000', borderBottom: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000'}} valign="middle" align="center"><font face="Liberation Serif">Siemens/Schneider/L&amp;T/ABB.</font></td>
                    </tr>
                    <tr>
                        <td style={{borderTop: '1px solid #000000', borderBottom: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000'}} valign="middle" height={32} align="center"><font face="Liberation Serif">Frequency Range</font></td>
                        <td style={{borderTop: '1px solid #000000', borderBottom: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000'}} valign="middle" align="center"><font face="Liberation Serif">50-60 Hz</font></td>
                    </tr>
                    <tr>
                        <td style={{borderTop: '1px solid #000000', borderBottom: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000'}} valign="middle" height={32} align="center"><font face="Liberation Serif">Surface Treatment</font></td>
                        <td style={{borderTop: '1px solid #000000', borderBottom: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000'}} valign="middle" align="center"><font face="Liberation Serif">Polished</font></td>
                    </tr>
                    <tr>
                        <td style={{borderTop: '1px solid #000000', borderBottom: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000'}} valign="middle" height={32} align="center"><font face="Liberation Serif">Operating Voltage</font></td>
                        <td style={{borderTop: '1px solid #000000', borderBottom: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000'}} valign="middle" align="center"><font face="Liberation Serif">400-415 V</font></td>
                    </tr>
                    <tr>
                        <td style={{borderTop: '1px solid #000000', borderBottom: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000'}} valign="middle" height={32} align="center"><font face="Liberation Serif">Operating Current</font></td>
                        <td style={{borderTop: '1px solid #000000', borderBottom: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000'}} valign="middle" align="center"><font face="Liberation Serif">6300 A</font></td>
                    </tr>
                    </tbody></table>

            </BaseTable>
        </>
    );
}

const featureList=[
    {
        title:`Features:`,
        list:[ 	'Compact design',
             	'Trouble free functionality',
 	'Durability',
 	'Negligible maintenance'
        ]
           }
]
function PccPanel(props) {
    return (
        <ProductItemBase>
            <LeftSection>
                <FirstRow
                    name={item?.name}
                    // description={item?.description}
                    imageArray={item?.imageCollection}
                >
                    <div className='product-description'>
                        Clients can avail from us an excellent quality range of <span>PCC Panels</span>. The offered panels are manufactured using optimum grade components with the help of cutting-edge technology by our deft team of professionals.<br/> These panels are considered to be the heart of an electrical system in any industry and used as a source of power backup. To meet the extensive requirements of our precious clients, we offer these <span>PCC Panels</span> in diverse specifications at market leading price.

                    </div>
                </FirstRow>

                <div className='row'>
                    <Tabs
                        defaultActiveKey='feature'
                        id='noanim-tab-example'
                        className='mb-3  col-md-12 '
                    >
                        <Tab eventKey='feature' title='Features'>
                            <FeaturesComponent featureList={featureList}/>

                            <h4>Other Info:</h4>
                            The heart of any electrical system in varied industries is its Power Control Centre. <br/> It assures the users utmost safety, long term reliability, less maintenance cost and testing time. The company manufactures and supplies PCC panels, widely used for various industrial applications. The panels are developed with the use of quality-tested raw materials and applauded for their extremely sturdy construction.<br/> Diverse designs/ specifications are provided in PCC such as Top/ Middle/ Horizontal/ Bottom bus chambers, Panel with copper/aluminium bus bars, Top/ Bottom/ Front/ Rear cable termination and Panels with ABB, L&T, Siemens, and Schneider make Switchgear.<br/> Our PCC Panels also come with ABB, Siemens, etc. protection Relays.

                        </Tab>
                        <Tab eventKey='specification' title='Specification'>
                            <ST />
                        </Tab>
                    </Tabs>
                </div>
            </LeftSection>
            <RightSection>
                {/*<div className='widget'>*/}
                {/*    <DownloadCatalogue*/}
                {/*        image={item?.catalogueImage}*/}
                {/*        link={item?.catalogueLink}*/}
                {/*    />*/}
                {/*</div>*/}
                <div className='widget sidebar-widget ext-sidebar-menu widget_nav_menu'>
                    <ProductList />
                </div>
            </RightSection>
        </ProductItemBase>
    );
}

export default PccPanel;