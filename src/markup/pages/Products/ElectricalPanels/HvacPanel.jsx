import React from 'react';
import BaseTable from "../../../../components/Products/BaseTable";
import ProductItemBase from "../../../../components/Products/ProductItemBase";
import LeftSection from "../../../../components/Products/LeftSection";
import FirstRow from "../../../../components/Products/FirstRow";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import {RightSection} from "../../../../components/Products/RightSection";
import ProductList from "../../../../components/Products/ProductList";
import {subElectricalPanelsList} from "../../../../data/productsData";
import parse from "html-react-parser";
const item = subElectricalPanelsList.find((item) => item.code === "hvac");

function ST() {
    return (
        <>
            <h4>Product details</h4>
            <BaseTable>   <table className="table table-bordered table-striped"   cellSpacing={0} border={0}>
                <colgroup width={192} />
                <colgroup width={285} />
                <tbody><tr>
                    <td style={{borderTop: '1px solid #000000', borderBottom: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000'}} valign="middle" height={17} align="center"><font face="Liberation Serif">Degree of Protection</font></td>
                    <td style={{borderTop: '1px solid #000000', borderBottom: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000'}} valign="middle" align="center"><font face="Liberation Serif">IP65</font></td>
                </tr>
                <tr>
                    <td style={{borderTop: '1px solid #000000', borderBottom: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000'}} valign="middle" height={17} align="center"><font face="Liberation Serif">Phase</font></td>
                    <td style={{borderTop: '1px solid #000000', borderBottom: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000'}} valign="middle" align="center"><font face="Liberation Serif">Three Phase</font></td>
                </tr>
                <tr>
                    <td style={{borderTop: '1px solid #000000', borderBottom: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000'}} valign="middle" height={17} align="center"><font face="Liberation Serif">Frequency</font></td>
                    <td style={{borderTop: '1px solid #000000', borderBottom: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000'}} valign="middle" align="center"><font face="Liberation Serif">50 to 60 Hz</font></td>
                </tr>
                <tr>
                    <td style={{borderTop: '1px solid #000000', borderBottom: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000'}} valign="middle" height={17} align="center"><font face="Liberation Serif">Coating</font></td>
                    <td style={{borderTop: '1px solid #000000', borderBottom: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000'}} valign="middle" align="center"><font face="Liberation Serif">Powder Coated</font></td>
                </tr>
                <tr>
                    <td style={{borderTop: '1px solid #000000', borderBottom: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000'}} valign="middle" height={17} align="center"><font face="Liberation Serif">Voltage</font></td>
                    <td style={{borderTop: '1px solid #000000', borderBottom: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000'}} valign="middle" align="center"><font face="Liberation Serif">220 to 440 V</font></td>
                </tr>
                <tr>
                    <td style={{borderTop: '1px solid #000000', borderBottom: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000'}} valign="middle" height={17} align="center"><font face="Liberation Serif">Material</font></td>
                    <td style={{borderTop: '1px solid #000000', borderBottom: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000'}} valign="middle" align="center"><font face="Liberation Serif">CRCA Sheets</font></td>
                </tr>
                <tr>
                    <td style={{borderTop: '1px solid #000000', borderBottom: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000'}} valign="middle" height={17} align="center"><font face="Liberation Serif">Brand</font></td>
                    <td style={{borderTop: '1px solid #000000', borderBottom: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000'}} valign="middle" align="center"><font face="Liberation Serif">SSP</font></td>
                </tr>
                </tbody></table>

            </BaseTable>
        </>
    );
}

const featureList=[
    {
        title:`Key Points:`,
        list:[ 	'Automatic temperature, moisture and ventilation control',
 	'High electrical load bearing capacity',
 	'Fully digital control',
 	'Easy to operate'
]},{
            title:'Specifications:',
                list:[
                     	'Automatic temperature, moisture and ventilation control',
 	'High electrical load bearing capacity',
 	'Fully digital control'

]
}

]

function HvacPanel(props) {
    return (
        <ProductItemBase>
            <LeftSection>
                <FirstRow
                    name={item?.name}
                    // description={item?.description}
                    // imageArray={item?.imageCollection}
                >
                    <div className='product-description'>
                        With our two decades of experience, we are fulfilling the wide demands of clients by offering supreme grade collection of <span>HVAC Panels</span>. The provided panels are well-suited for protecting centralized heating, ventilating and air conditioning systems from electrical hazards at different places. Manufactured using optimum quality components and progressive techniques, the offered panels are also tested on several parameters by our inspectors. Available in various technical specifications, these <span>HVAC Control Panels</span> can be purchased from us at affordable prices.

                    </div>
                </FirstRow>

                <div className='row'>
                    <Tabs
                        defaultActiveKey='specification'
                        id='noanim-tab-example'
                        className='mb-3  col-md-12 '
                    >
                        <Tab eventKey='feature' title='Features'>
                            <div className='px-3'>
                                <ol type='1'>
                                    {featureList.map((item, index) => {
                                        return (
                                            <li
                                                style={{
                                                    textAlign: "left",
                                                }}
                                                key={index}
                                            >
                                                <h4> {item.title}</h4>
                                                <ol type='a'>
                                                    {item.list.map((item, index) => {
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

                                                        }
                                                    )}
                                                </ol>
                                            </li>
                                        );
                                    })}
                                </ol>
                            </div>
                        </Tab>
                        <Tab eventKey='specification' title='Product Details'>
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

export default HvacPanel;