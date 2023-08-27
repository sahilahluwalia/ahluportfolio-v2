import React from 'react';
import ProductItemBase from "../../../../components/Products/ProductItemBase";
import LeftSection from "../../../../components/Products/LeftSection";
import FirstRow from "../../../../components/Products/FirstRow";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import {RightSection} from "../../../../components/Products/RightSection";
import ProductList from "../../../../components/Products/ProductList";
import {subElectricalPanelsList, electricalPanelsProducts} from "../../../../data/productsData";
import BaseTable from "../../../../components/Products/BaseTable";
import FeaturesComponent from "../../../../components/Products/FeaturesComponent";
const item = subElectricalPanelsList.find((item) => item.code === "apfc");
const {apfc}=electricalPanelsProducts
const { standardFeatures, description } = apfc
function ST() {
    return (
        <>
            <h4>Product details</h4>
                <BaseTable>
                    <table className="table table-bordered table-striped"  cellSpacing={0} border={0}>
                        <colgroup width={192} />
                        <colgroup width={285} />
                        <tbody><tr>
                            <td style={{borderTop: '1px solid #000000', borderBottom: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000'}} valign="middle" height={17} align="center"><font face="Liberation Serif">Power Factor</font></td>
                            <td style={{borderTop: '1px solid #000000', borderBottom: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000'}} sdval={1} sdnum="16393;" valign="middle" align="center"><font face="Liberation Serif">1</font></td>
                        </tr>
                        <tr>
                            <td style={{borderTop: '1px solid #000000', borderBottom: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000'}} valign="middle" height={17} align="center"><font face="Liberation Serif">Frequency</font></td>
                            <td style={{borderTop: '1px solid #000000', borderBottom: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000'}} valign="middle" align="center"><font face="Liberation Serif">50-60 Hz</font></td>
                        </tr>
                        <tr>
                            <td style={{borderTop: '1px solid #000000', borderBottom: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000'}} valign="middle" height={17} align="center"><font face="Liberation Serif">Operating Voltage</font></td>
                            <td style={{borderTop: '1px solid #000000', borderBottom: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000'}} valign="middle" align="center"><font face="Liberation Serif">220-440V</font></td>
                        </tr>
                        <tr>
                            <td style={{borderTop: '1px solid #000000', borderBottom: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000'}} valign="middle" height={17} align="center"><font face="Liberation Serif">Material</font></td>
                            <td style={{borderTop: '1px solid #000000', borderBottom: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000'}} valign="middle" align="center"><font face="Liberation Serif">MS sheets</font></td>
                        </tr>
                        <tr>
                            <td style={{borderTop: '1px solid #000000', borderBottom: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000'}} valign="middle" height={17} align="center"><font face="Liberation Serif">IP Rating</font></td>
                            <td style={{borderTop: '1px solid #000000', borderBottom: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000'}} valign="middle" align="center"><font face="Liberation Serif">IP65</font></td>
                        </tr>
                        <tr>
                            <td style={{borderTop: '1px solid #000000', borderBottom: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000'}} valign="middle" height={17} align="center"><font face="Liberation Serif">Coating</font></td>
                            <td style={{borderTop: '1px solid #000000', borderBottom: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000'}} valign="middle" align="center"><font face="Liberation Serif">Powder Coated</font></td>
                        </tr>
                        <tr>
                            <td style={{borderTop: '1px solid #000000', borderBottom: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000'}} valign="middle" height={17} align="center"><font face="Liberation Serif">Capacity</font></td>
                            <td style={{borderTop: '1px solid #000000', borderBottom: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000'}} valign="middle" align="center"><font face="Liberation Serif">50 kvar to 1000 kvar</font></td>
                        </tr>
                        <tr>
                            <td style={{borderTop: '1px solid #000000', borderBottom: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000'}} valign="middle" height={17} align="center"><font face="Liberation Serif">Phase</font></td>
                            <td style={{borderTop: '1px solid #000000', borderBottom: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000'}} valign="middle" align="center"><font face="Liberation Serif">Three Phase</font></td>
                        </tr>
                        </tbody></table>
                </BaseTable>
        </>
    );
}

const featureList=[{
    title:
        'Construction/Specification:',
    list: [
        'Draw-out / Fixed Type',
        'Box Type for panels less than 50 KVAR',
        'Fully compartmentalized type construction for panels within 50KVAR to 1000KVAR.',
        'It consists of Capacitor, Contactor, Mains Bus Bars, Mains MCCB, MCB, and Relay, of suitable rating']
},{
    title:'Features:',
    list:[
     	'Dimensional accuracy',
                             	'Long life',
                             	'High tensile strength',
                             	'Minimum maintenance']
}]


function ApfcPanel(props) {
    return (
        <ProductItemBase>
            <LeftSection>
                <FirstRow
                    name={item?.name}
                    // description={item?.description}
                    imageArray={item?.imageCollection}
                >
                    <div className='product-description'>

                        We provide the finest quality <span>Automatic Power Factor Correction Panel (APFC Panel)</span>, whose unique designs helps in saving power. Its application is to sustain the power factor at 1.00. It includes several capacitors banks, which range from 1kvar to 50kvar. These intelligent controllers help in maintaining the unity power factor. We manufacture these APFC Panels using latest technology and precision instruments, at our production unit. The capacitor bank of the  <span>Automatic Power Factor Correction  (APFC)  Panel</span>  includes capacitor duty contactor and heavy-duty capacitors, which are oil-filled. Used in offices and buildings, these panels are provided with manual and auto options to maintain the unity power factor.
                    </div>
                </FirstRow>

                <div className='row'>
                    <Tabs
                        defaultActiveKey='overview'
                        id='noanim-tab-example'
                        className='mb-3  col-md-12 '
                    >
                        <Tab eventKey='overview' title='Overview'>
                            {/*<DescriptionTab  data={description} />*/}

                            <FeaturesComponent featureList={featureList}/>
                            <h4>3. Power Factor Concept:</h4>
                            Inductive loads are the result of maximum motors, which enhances the rate of power loss.<br/>
                            <h6>Watt = Voltage x Current x Power Factor</h6>
                            <h6>Power Factor = cos ø , where ø is the angle between current wave and voltage wave. </h6>The least value of phase angle (current wave) will result in least power losses.
                            For the improvement of power factor, parallel construction of capacitors is preferred with the mains supply which results in leading power factor. Consequently, the effect of lagging power factor is neutralized due to inductive loads.

                        </Tab>
                        {/*<Tab eventKey='feature' title='Features'>*/}
                        {/*    <FeaturesTab  data={standardFeatures} />*/}
                        {/*</Tab>*/}

                        <Tab eventKey='specification' title='Product details'>
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

export default ApfcPanel;