import { Table } from "flowbite-react";
import "./DashboardTable.css";
import { RangeValue } from "../../assests/svgs/password";
import TableComponent from "./TableDropdown";
import BlueArrow from "../../assests/arrow.svg"
function ShowStat({ loadMore }) {
    return (
    <div className="stratgy-table-main">
        <div className="row strategy-table-main-row-wrapper mx-0">
            <div className="strategy-table-heading-main col-6 md:px-4  md:py-4  px-2 py-3 "><h4>Sector(s)</h4></div>
            <div className="strategy-table-desc-main col-6 md:px-4  md:py-4  px-2 py-3 "><h4>Information</h4></div>
        </div>
        <div className="row strategy-table-main-row-wrapper mx-0">
            <div className="strategy-table-heading-main col-6 md:px-4  md:py-4  px-2 py-3 "><h4>Industry</h4></div>
            <div className="strategy-table-desc-main col-6 md:px-4  md:py-4  px-2 py-3 "><h4 style={{ whiteSpace: 'normal' }}>Telecommunications Resellers</h4></div>
        </div>
        <div className="row strategy-table-main-row-wrapper mx-0">
            <div className="strategy-table-heading-main col-6 md:px-4  md:py-4  px-2 py-3 "><h4>P/E ratio</h4></div>
            <div className="strategy-table-desc-main col-6 md:px-4  md:py-4  px-2 py-3 "><h4>-10.3</h4></div>
        </div>
        <div className="row strategy-table-main-row-wrapper mx-0">
            <div className="strategy-table-heading-main col-6 md:px-4  md:py-4  px-2 py-3 "><h4>Market Cap</h4></div>
            <div className="strategy-table-desc-main col-6 md:px-4  md:py-4  px-2 py-3 "><h4>$118.1 Bn</h4></div>
        </div>
        <div className="row strategy-table-main-row-wrapper mx-0">
            <div className="strategy-table-heading-main col-6 md:px-4  md:py-4  px-2 py-3 "><h4>Dividend Yield</h4></div>
            <div className="strategy-table-desc-main col-6 md:px-4  md:py-4  px-2 py-3 "><h4>8.1%</h4></div>
        </div>
        <div className="row strategy-table-main-row-wrapper mx-0">
            <div className="strategy-table-heading-main col-6 md:px-4  md:py-4  px-2 py-3 "><h4>Expert Shareholders</h4></div>
            <div className="strategy-table-desc-main col-6 p-1">
                <div className="flex mb-1"><button className="strategy-spec-bottom-btn mr-1">Vanguard</button>
                <button className="strategy-spec-bottom-btn mr-1">Tesla</button>
                </div>
                <div className="flex"><button className="strategy-spec-bottom-btn mr-1">Fidelity Index US Fund</button>
                <button className="strategy-spec-bottom-blue-btn mr-1">+9 Others</button>
                </div>
            </div>
        </div>
    </div>
    );
}

export default ShowStat;
