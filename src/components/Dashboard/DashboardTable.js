import { Table } from "flowbite-react";
import "./DashboardTable.css";
import { RangeValue } from "../../assests/svgs/password";
import TableComponent from "./TableDropdown";
import BlueArrow from "../../assests/arrow.svg"
function DashboardTable({ loadMore }) {
    return (
        <div className="overflow-x-auto dash-table-wrap">
            <div className="col-12 p-4"><button className="dashboard-table-holding-warp">All Holdings <img src={BlueArrow} alt="..." /> </button></div>
            <Table striped>

                <Table.Head>
                    <Table.HeadCell className="p-4 col-5 mutual-funds-table-heading">
                        MUTUAL FUNDS
                    </Table.HeadCell>
                    <Table.HeadCell className="col-5 p-4 mutual-funds-table-heading">
                        Current (Invested)
                    </Table.HeadCell>
                    <Table.HeadCell className="col-2 mutual-funds-table-heading">
                        <span className="flex items-center">  <a href="#" className="mr-8">{RangeValue()}</a>Actions</span>
                    </Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800 items-center">
                        <Table.Cell className="dashboard-table-person-detail p-4 flex items-center">
                            <div className="dashboard-table-person-detail-image mr-2"></div>
                            <div className="dashboard-table-person-detail-wrapper">
                                <div className="dashboard-table-person-detail-name"><h3>GS alpha Value</h3></div>
                                <div className="dashboard-table-person-detail-value"><h4>US5874596311</h4></div>
                            </div>
                        </Table.Cell>
                        <Table.Cell className="p-4"><div className="dashboard-table-dollars-detail-main"><h4>$48,185.23</h4></div>
                            <div className="dashboard-table-dollars-detail-secondry"><h5>($42,125.36)</h5></div></Table.Cell>
                        <Table.Cell className="dashboard-table-dollars-detail-dropdown"><TableComponent /></Table.Cell>
                    </Table.Row>
                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800 items-center">
                        <Table.Cell className="dashboard-table-person-detail p-4 flex items-center">
                            <div className="dashboard-table-person-detail-image mr-2"></div>
                            <div className="dashboard-table-person-detail-wrapper">
                                <div className="dashboard-table-person-detail-name"><h3>GS alpha Value</h3></div>
                                <div className="dashboard-table-person-detail-value"><h4>US5874596311</h4></div>
                            </div>
                        </Table.Cell>
                        <Table.Cell className="p-4"><div className="dashboard-table-dollars-detail-main"><h4>$48,185.23</h4></div>
                            <div className="dashboard-table-dollars-detail-secondry"><h5>($42,125.36)</h5></div></Table.Cell>
                        <Table.Cell className="dashboard-table-dollars-detail-dropdown"><TableComponent /></Table.Cell>
                    </Table.Row>
                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800 items-center">
                        <Table.Cell className="dashboard-table-person-detail p-4 flex items-center">
                            <div className="dashboard-table-person-detail-image mr-2"></div>
                            <div className="dashboard-table-person-detail-wrapper">
                                <div className="dashboard-table-person-detail-name"><h3>GS alpha Value</h3></div>
                                <div className="dashboard-table-person-detail-value"><h4>US5874596311</h4></div>
                            </div>
                        </Table.Cell>
                        <Table.Cell className="p-4"><div className="dashboard-table-dollars-detail-main"><h4>$48,185.23</h4></div>
                            <div className="dashboard-table-dollars-detail-secondry"><h5>($42,125.36)</h5></div></Table.Cell>
                        <Table.Cell className="dashboard-table-dollars-detail-dropdown"><TableComponent /></Table.Cell>
                    </Table.Row>
    

                    {loadMore && <> <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800 items-center">
                        <Table.Cell className="dashboard-table-person-detail p-4 flex items-center">
                            <div className="dashboard-table-person-detail-image mr-2"></div>
                            <div className="dashboard-table-person-detail-wrapper">
                                <div className="dashboard-table-person-detail-name"><h3>GS alpha Value</h3></div>
                                <div className="dashboard-table-person-detail-value"><h4>US5874596311</h4></div>
                            </div>
                        </Table.Cell>
                        <Table.Cell className="p-4"><div className="dashboard-table-dollars-detail-main"><h4>$48,185.23</h4></div>
                            <div className="dashboard-table-dollars-detail-secondry"><h5>($42,125.36)</h5></div></Table.Cell>
                        <Table.Cell className="dashboard-table-dollars-detail-dropdown"><TableComponent /></Table.Cell>
                    </Table.Row>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800 items-center">
                            <Table.Cell className="dashboard-table-person-detail p-4 flex items-center">
                                <div className="dashboard-table-person-detail-image mr-2"></div>
                                <div className="dashboard-table-person-detail-wrapper">
                                    <div className="dashboard-table-person-detail-name"><h3>GS alpha Value</h3></div>
                                    <div className="dashboard-table-person-detail-value"><h4>US5874596311</h4></div>
                                </div>
                            </Table.Cell>
                            <Table.Cell className="p-4"><div className="dashboard-table-dollars-detail-main"><h4>$48,185.23</h4></div>
                                <div className="dashboard-table-dollars-detail-secondry"><h5>($42,125.36)</h5></div></Table.Cell>
                            <Table.Cell className="dashboard-table-dollars-detail-dropdown"><TableComponent /></Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800 items-center">
                            <Table.Cell className="dashboard-table-person-detail p-4 flex items-center">
                                <div className="dashboard-table-person-detail-image mr-2"></div>
                                <div className="dashboard-table-person-detail-wrapper">
                                    <div className="dashboard-table-person-detail-name"><h3>GS alpha Value</h3></div>
                                    <div className="dashboard-table-person-detail-value"><h4>US5874596311</h4></div>
                                </div>
                            </Table.Cell>
                            <Table.Cell className="p-4"><div className="dashboard-table-dollars-detail-main"><h4>$48,185.23</h4></div>
                                <div className="dashboard-table-dollars-detail-secondry"><h5>($42,125.36)</h5></div></Table.Cell>
                            <Table.Cell className="dashboard-table-dollars-detail-dropdown"><TableComponent /></Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800 items-center">
                            <Table.Cell className="dashboard-table-person-detail p-4 flex items-center">
                                <div className="dashboard-table-person-detail-image mr-2"></div>
                                <div className="dashboard-table-person-detail-wrapper">
                                    <div className="dashboard-table-person-detail-name"><h3>GS alpha Value</h3></div>
                                    <div className="dashboard-table-person-detail-value"><h4>US5874596311</h4></div>
                                </div>
                            </Table.Cell>
                            <Table.Cell className="p-4"><div className="dashboard-table-dollars-detail-main"><h4>$48,185.23</h4></div>
                                <div className="dashboard-table-dollars-detail-secondry"><h5>($42,125.36)</h5></div></Table.Cell>
                            <Table.Cell className="dashboard-table-dollars-detail-dropdown"><TableComponent /></Table.Cell>
                        </Table.Row></>}

                </Table.Body>
            </Table>
        </div>
    );
}

export default DashboardTable;
