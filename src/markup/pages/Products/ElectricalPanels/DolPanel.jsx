import React from 'react';
import ProductItemBase from "../../../../components/Products/ProductItemBase";
import LeftSection from "../../../../components/Products/LeftSection";
import FirstRow from "../../../../components/Products/FirstRow";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import {RightSection} from "../../../../components/Products/RightSection";
import ProductList from "../../../../components/Products/ProductList";
import BaseTable from "../../../../components/Products/BaseTable";
import {subElectricalPanelsList} from "../../../../data/productsData";
const item = subElectricalPanelsList.find((item) => item.code === "dol");

function ST() {
    return (
        <>
            <h4>Product details</h4>
            <BaseTable>
                    <table className="table table-bordered table-striped"   cellSpacing={0} border={0}>
                        <colgroup width={192} />
                        <colgroup width={285} />
                        <tbody><tr>
                            <td style={{borderTop: '1px solid #000000', borderBottom: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000'}} valign="middle" height={17} align="center"><font face="Liberation Serif">Pole</font></td>
                            <td style={{borderTop: '1px solid #000000', borderBottom: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000'}} sdval={4} sdnum="16393;" valign="middle" align="center"><font face="Liberation Serif">4</font></td>
                        </tr>
                        <tr>
                            <td style={{borderTop: '1px solid #000000', borderBottom: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000'}} valign="middle" height={17} align="center"><font face="Liberation Serif">Phase</font></td>
                            <td style={{borderTop: '1px solid #000000', borderBottom: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000'}} valign="middle" align="center"><font face="Liberation Serif">Three Phase</font></td>
                        </tr>
                        <tr>
                            <td style={{borderTop: '1px solid #000000', borderBottom: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000'}} valign="middle" height={17} align="center"><font face="Liberation Serif">Humidity</font></td>
                            <td style={{borderTop: '1px solid #000000', borderBottom: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000'}} valign="middle" align="center"><font face="Liberation Serif">Up to 90%</font></td>
                        </tr>
                        <tr>
                            <td style={{borderTop: '1px solid #000000', borderBottom: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000'}} valign="middle" height={17} align="center"><font face="Liberation Serif">Ambient Temperature</font></td>
                            <td style={{borderTop: '1px solid #000000', borderBottom: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000'}} valign="middle" align="center"><font face="Liberation Serif">5-50 Deg C</font></td>
                        </tr>
                        <tr>
                            <td style={{borderTop: '1px solid #000000', borderBottom: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000'}} valign="middle" height={17} align="center"><font face="Liberation Serif">Material</font></td>
                            <td style={{borderTop: '1px solid #000000', borderBottom: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000'}} valign="middle" align="center"><font face="Liberation Serif">MS, CRCA Sheets</font></td>
                        </tr>
                        <tr>
                            <td style={{borderTop: '1px solid #000000', borderBottom: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000'}} valign="middle" height={17} align="center"><font face="Liberation Serif">Brand</font></td>
                            <td style={{borderTop: '1px solid #000000', borderBottom: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000'}} valign="middle" align="center"><font face="Liberation Serif">Siemens/Schneider/L&amp;T/ABB.</font></td>
                        </tr>
                        <tr>
                            <td style={{borderTop: '1px solid #000000', borderBottom: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000'}} valign="middle" height={17} align="center"><font face="Liberation Serif">Finishing</font></td>
                            <td style={{borderTop: '1px solid #000000', borderBottom: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000'}} valign="middle" align="center"><font face="Liberation Serif">Powder Coated</font></td>
                        </tr>
                        <tr>
                            <td style={{borderTop: '1px solid #000000', borderBottom: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000'}} valign="middle" height={17} align="center"><font face="Liberation Serif">Frequency</font></td>
                            <td style={{borderTop: '1px solid #000000', borderBottom: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000'}} valign="middle" align="center"><font face="Liberation Serif">50-60Hz</font></td>
                        </tr>
                        <tr>
                            <td style={{borderTop: '1px solid #000000', borderBottom: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000'}} valign="middle" height={17} align="center"><font face="Liberation Serif">Power</font></td>
                            <td style={{borderTop: '1px solid #000000', borderBottom: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000'}} valign="middle" align="center"><font face="Liberation Serif">0.25HP to 10HP</font></td>
                        </tr>
                        <tr>
                            <td style={{borderTop: '1px solid #000000', borderBottom: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000'}} valign="middle" height={32} align="center"><font face="Liberation Serif">Usage/Application</font></td>
                            <td style={{borderTop: '1px solid #000000', borderBottom: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000'}} valign="middle" align="center"><font face="Liberation Serif">Agricultural machines like Gravity Separators, Destoners, Polishers, etc.</font></td>
                        </tr>
                        </tbody></table>
            </BaseTable>
        </>
    );
}
function DolPanel(props) {
    return (
        <ProductItemBase>
            <LeftSection>
                <FirstRow
                    name={item?.name}
                    // description={item?.description}
                    imageArray={item?.imageCollection}
                >
                    <div className='product-description'>
                        The <span>Direct-On-Line Starter Panel</span> is manufactured in Standard Design as well as customized design. The standard model consists of two nos. <span>DOL Starter Panel</span> of ratings ranging from 0.25HP to 10HP as per customer requirement along with Ampere Meter, Volt Meter, Starter Start/Stop Push Buttons, On/Off LEDs, Three Phase R,Y,B LEDs, Incoming 4Pole MCB, and Outgoing Terminal Blocks. The customized design is also manufactured as per customer requirement. The main application of these panels are Agricultural machines like Gravity Separators, Destoners, Polishers, etc.

                    </div>
                </FirstRow>

                <div className='row'>
                    <Tabs
                        defaultActiveKey='specification'
                        id='noanim-tab-example'
                        className='mb-3  col-md-12 '
                    >
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

export default DolPanel;