import React from 'react';
import ProductItemBase from "../../../../components/Products/ProductItemBase";
import LeftSection from "../../../../components/Products/LeftSection";
import FirstRow from "../../../../components/Products/FirstRow";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import OverviewTab from "../../../../components/Products/Tabs/OverviewTab";
import FeaturesTab from "../../../../components/Products/Tabs/FeaturesTab";
import {RightSection} from "../../../../components/Products/RightSection";
import DownloadCatalogue from "../../../../components/Products/DownloadCatalogue";
import ProductList from "../../../../components/Products/ProductList";
import {subElectricalPanelsList, electricalPanelsProducts} from "../../../../data/productsData";
import SpecificationTab from "../../../../components/Products/Tabs/SpecificationTab";
import BaseTable from "../../../../components/Products/BaseTable";
const item = subElectricalPanelsList.find((item) => item.code === "apfc");
const {apfc}=electricalPanelsProducts
const { standardFeatures, commonCharacteristics, type } = apfc
function ST() {
    return (
        <>
            <h4>Specifications</h4>
                <BaseTable>

                    <table className="table table-bordered table-striped" cellSpacing={0} border={0}>
                    <colgroup width={183} />
                    <colgroup width={245} />
                    <tbody><tr>
                        <td style={{borderTop: '1px solid #000000', borderBottom: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000'}} height={20} align="center"><font size={3} color="#1C1C1C">Material</font></td>
                        <td style={{borderTop: '1px solid #000000', borderBottom: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000'}} align="center"><font size={3} color="#1C1C1C">Mild steel</font></td>
                    </tr>
                    <tr>
                        <td style={{borderTop: '1px solid #000000', borderBottom: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000'}} height={20} align="center"><font size={3} color="#1C1C1C">IP Rating</font></td>
                        <td style={{borderTop: '1px solid #000000', borderBottom: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000'}} align="center"><font size={3} color="#1C1C1C">IP55</font></td>
                    </tr>
                    <tr>
                        <td style={{borderTop: '1px solid #000000', borderBottom: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000'}} height={20} align="center"><font size={3} color="#1C1C1C">Usage/Application</font></td>
                        <td style={{borderTop: '1px solid #000000', borderBottom: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000'}} align="center"><font size={3} color="#1C1C1C">Industries, Utility Distribution</font></td>
                    </tr>
                    <tr>
                        <td style={{borderTop: '1px solid #000000', borderBottom: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000'}} height={20} align="center"><font size={3} color="#1C1C1C">Brands</font></td>
                        <td style={{borderTop: '1px solid #000000', borderBottom: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000'}} align="center"><font size={3} color="#1C1C1C">Siemens/Schneider/L&amp;T/ABB.</font></td>
                    </tr>
                    <tr>
                        <td style={{borderTop: '1px solid #000000', borderBottom: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000'}} height={20} align="center"><font size={3} color="#1C1C1C">Frequency Range</font></td>
                        <td style={{borderTop: '1px solid #000000', borderBottom: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000'}} align="center"><font size={3} color="#1C1C1C">50-60 Hz</font></td>
                    </tr>
                    <tr>
                        <td style={{borderTop: '1px solid #000000', borderBottom: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000'}} height={20} align="center"><font size={3} color="#1C1C1C">Surface Treatment</font></td>
                        <td style={{borderTop: '1px solid #000000', borderBottom: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000'}} align="center"><font size={3} color="#1C1C1C">Polished</font></td>
                    </tr>
                    <tr>
                        <td style={{borderTop: '1px solid #000000', borderBottom: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000'}} height={20} align="center"><font size={3} color="#1C1C1C">Operating Voltage</font></td>
                        <td style={{borderTop: '1px solid #000000', borderBottom: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000'}} align="center"><font size={3} color="#1C1C1C">400-415 V</font></td>
                    </tr>
                    <tr>
                        <td style={{borderTop: '1px solid #000000', borderBottom: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000'}} height={20} align="center"><font size={3} color="#1C1C1C">Operating Current</font></td>
                        <td style={{borderTop: '1px solid #000000', borderBottom: '1px solid #000000', borderLeft: '1px solid #000000', borderRight: '1px solid #000000'}} align="center"><font size={3} color="#1C1C1C">6300 A</font></td>
                    </tr>
                    </tbody></table>


                </BaseTable>

        </>
    );
}

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
                        Clients can avail from us an excellent quality range of PCC Panels. The offered panels are manufactured using optimum grade components with the help of cutting-edge technology by our deft team of professionals. These panels are considered to be the heart of an electrical system in any industry and used as a source of power backup. To meet the extensive requirements of our precious clients, we offer these PCC Panels in diverse specifications at market leading price.

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
    );
}

export default ApfcPanel;