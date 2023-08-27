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
import FeaturesComponent from "../../../../components/Products/FeaturesComponent";
const item = subElectricalPanelsList.find((item) => item.code === "mcc");
const featureList=[
    {
        title:`Our MCC involves following features:`,
        list:[
           'Remote control operation facility',
	'MCCB for protection',
    	'Change over switch for circuit change from mains to DG and vice-versa',
	'Direct on-line starters that include MCB, contactor, thermal overload relay and connectors.',
	'Bus Bars of proper rating duly covered with acrylic sheet for safety.',
        	'Aluminium strip for earthing',
        	'Panel light and fan for ventilation.',
        	'Many more features that solve many practical problems.']
},{
    title:`These MCC units comprise:`,
    list:[
        	'Full voltage non-reversing and full voltage reversing starters',
	'AC variable frequency drives',
	'PLC I/O chassis',
	'Solid-state motor controllers',
	'Lighting panels',
	'Transformers',
	'Analog or digital metering',
	'Feeder circuit breakers',
	'Feeder fusible disconnects',
]},
    {
        title:`Technical Specifications of Motor Control Centre Panel:`,
    list:[
        	'Operational Current: 32A to 1600A',
	'Ambient Temperature: 40.50 degree Celsius in single and double front',
	'Withstand Capacity: 16KA to 100 KA',
	'Degree of Protection: As per IS Standards',
	'Types of Starters Include: Automatic Star Delta, Direct On-line, Soft Starters, Varied Frequency Drives, Stator Rotor Starters and Auto Transformer Starters']
}
]

function ST() {
    return (
        <>
            <h4>Specifications</h4>
            <BaseTable>
                <table className="table table-bordered table-striped" cellSpacing={0} border={0}>
                    <colgroup width={192} />
                    <colgroup width={285} />
                    <tbody><tr>
                        <td style={{borderTop: '1px solid #000000', borderBottom: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000'}} valign="middle" height={32} align="center"><font face="Liberation Serif">Protection Level</font></td>
                        <td style={{borderTop: '1px solid #000000', borderBottom: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000'}} valign="middle" align="center"><font face="Liberation Serif">IP42, IP54, IP65, etc</font></td>
                    </tr>
                    <tr>
                        <td style={{borderTop: '1px solid #000000', borderBottom: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000'}} valign="middle" height={17} align="center"><font face="Liberation Serif">Standard</font></td>
                        <td style={{borderTop: '1px solid #000000', borderBottom: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000'}} valign="middle" align="center"><font face="Liberation Serif">RAL7032</font></td>
                    </tr>
                    <tr>
                        <td style={{borderTop: '1px solid #000000', borderBottom: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000'}} valign="middle" height={32} align="center"><font face="Liberation Serif">Thickness</font></td>
                        <td style={{borderTop: '1px solid #000000', borderBottom: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000'}} valign="middle" align="center"><font face="Liberation Serif">1.6mm- 3mm Meter</font></td>
                    </tr>
                    <tr>
                        <td style={{borderTop: '1px solid #000000', borderBottom: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000'}} valign="middle" height={32} align="center"><font face="Liberation Serif">Ambient Temperature</font></td>
                        <td style={{borderTop: '1px solid #000000', borderBottom: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000'}} valign="middle" align="center"><font face="Liberation Serif">40-50 degree Celsius</font></td>
                    </tr>
                    <tr>
                        <td style={{borderTop: '1px solid #000000', borderBottom: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000'}} valign="middle" height={17} align="center"><font face="Liberation Serif">Phase</font></td>
                        <td style={{borderTop: '1px solid #000000', borderBottom: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000'}} valign="middle" align="center"><font face="Liberation Serif">Three Phase</font></td>
                    </tr>
                    <tr>
                        <td style={{borderTop: '1px solid #000000', borderBottom: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000'}} valign="middle" height={32} align="center"><font face="Liberation Serif">Material</font></td>
                        <td style={{borderTop: '1px solid #000000', borderBottom: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000'}} valign="middle" align="center"><font face="Liberation Serif">Aluminium, Copper Etc</font></td>
                    </tr>
                    <tr>
                        <td style={{borderTop: '1px solid #000000', borderBottom: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000'}} valign="middle" height={32} align="center"><font face="Liberation Serif">Operating Voltage</font></td>
                        <td style={{borderTop: '1px solid #000000', borderBottom: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000'}} valign="middle" align="center"><font face="Liberation Serif">240/415 Volt</font></td>
                    </tr>
                    <tr>
                        <td style={{borderTop: '1px solid #000000', borderBottom: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000'}} valign="middle" height={32} align="center"><font face="Liberation Serif">Coating</font></td>
                        <td style={{borderTop: '1px solid #000000', borderBottom: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000'}} valign="middle" align="center"><font face="Liberation Serif">Powder Coated</font></td>
                    </tr>
                    <tr>
                        <td style={{borderTop: '1px solid #000000', borderBottom: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000'}} valign="middle" height={32} align="center"><font face="Liberation Serif">Capacity</font></td>
                        <td style={{borderTop: '1px solid #000000', borderBottom: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000'}} valign="middle" align="center"><font face="Liberation Serif">16KA to 100 KA</font></td>
                    </tr>
                    <tr>
                        <td style={{borderTop: '1px solid #000000', borderBottom: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000'}} valign="middle" height={17} align="center"><font face="Liberation Serif">Frequency</font></td>
                        <td style={{borderTop: '1px solid #000000', borderBottom: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000'}} valign="middle" align="center"><font face="Liberation Serif">50HZ-60Hz</font></td>
                    </tr>
                    <tr>
                        <td style={{borderTop: '1px solid #000000', borderBottom: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000'}} valign="middle" height={62} align="center"><font face="Liberation Serif">Brand</font></td>
                        <td style={{borderTop: '1px solid #000000', borderBottom: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000'}} valign="middle" align="center"><font face="Liberation Serif">Siemens/Schneider/L&amp;T/ABB/Omron.</font></td>
                    </tr>
                    <tr>
                        <td style={{borderTop: '1px solid #000000', borderBottom: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000'}} valign="middle" height={32} align="center"><font face="Liberation Serif">Current</font></td>
                        <td style={{borderTop: '1px solid #000000', borderBottom: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000'}} valign="middle" align="center"><font face="Liberation Serif">32 A to 1600 A</font></td>
                    </tr>
                    </tbody></table>
            </BaseTable>
        </>
    );
}

function MccPanel(props) {
    return (
        <ProductItemBase>
            <LeftSection>
                <FirstRow
                    name={item?.name}
                    // description={item?.description}
                    imageArray={item?.imageCollection}
                >
                    <div className='product-description'>
                        The <span>Motor Control Canter (MCC) Panel</span> is a panel consisting of one or more 'enclosed sections'. <br/> All of these sections have a communal power bus. Also, these are mainly composed of motor control units. We offer these MCCs with the option of number of latest technology starters such as AC/DC drive starter (covariant frequency drive), direct-on-line starter, soft starter, star delta starter, submersible starter, etc. Their main function is related to induction motors, which inrush starting current is minimized.<br/> In addition, there are a number of motor protection equipment in the <span>Motor Control canter (MCC) Panel</span>, such as overload protection, short circuit protection, and single phasing protection, that are useful in safeguarding the motor.
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

export default MccPanel;