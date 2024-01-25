import { useState } from "react";
import { Checkbox, Table } from "flowbite-react";

import { BottomArrow, RangeValue } from "../../assests/svgs/password";
import TableComponent from "../Dashboard/TableDropdown";
import BlueArrow from "../../assests/arrow.svg";
import { NavigatorTableData } from "../NavigateSector/NavigatorTableData";
import Input from "../../assests/Input.png";
import eclipse20 from "../../assests/Ellipse 20.svg";
import { TableData } from "./TableData";

function StrategyTable({ loadMore }) {
  const [selectedRows, setSelectedRows] = useState([]);
  const [displayedRows, setDisplayedRows] = useState(5);

  const handleRowSelect = (rowId) => {
    setSelectedRows((prevSelectedRows) => {
      if (prevSelectedRows.includes(rowId)) {
        // If the row is already selected, remove it
        return prevSelectedRows.filter((id) => id !== rowId);
      } else {
        // If the row is not selected, add it
        return [...prevSelectedRows, rowId];
      }
    });
  };
  const handleShowMore = () => {
    setDisplayedRows(TableData.length);
  };
  return (
    <div className="overflow-x-auto">
      <Table className="w-full">
        <Table.Head>
          <Table.HeadCell style={{ width: "5.64%" }} className="p-4 bg-blue-50">
            <div className="investor-table-head-heading">
              <h1>Sr no</h1>
            </div>
          </Table.HeadCell>
          <Table.HeadCell
            style={{ width: "47.18%" }}
            className="p-4 bg-blue-50"
          >
            <div className="investor-table-head-heading">
              <h1>TRANSACTION</h1>
            </div>
          </Table.HeadCell>
          <Table.HeadCell
            style={{ width: "47.18%" }}
            className="p-4 bg-blue-50"
          >
            <div className="investor-table-head-heading">
              <h1>Ticker</h1>
            </div>
          </Table.HeadCell>
        </Table.Head>

        <Table.Body className="divide-y">
          {TableData.slice(0, displayedRows).map((item) => (
            <Table.Row
              key={item.id}
              className={
                selectedRows.includes(item.id)
                  ? "investor-row-selected-background-color"
                  : "bg-white"
              }
            >
              <Table.Cell className="p-4">{item.id}</Table.Cell>
              <Table.Cell className="dashboard-table-person-detail p-4 flex items-center">
                <div className="dashboard-table-person-detail-image mr-2"></div>
                <div className="dashboard-table-person-detail-wrapper">
                  <div className="portfoli-dashboard-table-person-detail-name">
                    <h3>{item.user}</h3>
                  </div>
                  <div className="portfoli-dashboard-table-person-detail-value">
                    <h4>{item.userId}</h4>
                  </div>
                </div>
              </Table.Cell>
              <Table.Cell className="p-4 investor-table-head-heading-euity-cap">
                {item.capta}
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
      {NavigatorTableData.length > 5 &&
        displayedRows < NavigatorTableData.length && (
          <div className="col-12 flex justify-center">
            <button
              className="dashboard-page-button-main"
              onClick={handleShowMore}
            >
              Load More {BottomArrow()}
            </button>
          </div>
        )}
    </div>
  );
}

export default StrategyTable;
