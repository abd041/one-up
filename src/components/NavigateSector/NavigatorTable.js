import { useState } from "react";
import { Checkbox, Table } from "flowbite-react";

import { BottomArrow, RangeValue } from "../../assests/svgs/password";
import TableComponent from "../Dashboard/TableDropdown";
import BlueArrow from "../../assests/arrow.svg";
import { NavigatorTableData } from "./NavigatorTableData";
import Input from "../../assests/Input.png";
import eclipse20 from "../../assests/Ellipse 20.svg";

function NavigatorTable({ loadMore }) {
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
    setDisplayedRows(NavigatorTableData.length);
  };
  return (
    <div className="overflow-x-auto">
      <Table className="w-full">
        <Table.Head>
          <Table.HeadCell style={{ width: "5.64%" }} className="p-4">
            <div className="investor-table-head-heading">
              <h1>Sr no</h1>
            </div>
          </Table.HeadCell>
          <Table.HeadCell style={{ width: "20.86%" }} className="p-4">
            <div className="investor-table-head-heading">
              <h1>TRANSACTION</h1>
            </div>
          </Table.HeadCell>
          <Table.HeadCell style={{ width: "20.86%" }} className="p-4">
            <div className="investor-table-head-heading">
              <h1>Ticker</h1>
            </div>
          </Table.HeadCell>
          <Table.HeadCell style={{ width: "20.86%" }} className="p-4">
            <div className="flex justify-between investor-table-head-heading">
              <h1>Sector</h1> <a href="#">{RangeValue()}</a>
            </div>
          </Table.HeadCell>
          <Table.HeadCell style={{ width: "20.86%" }} className="p-4">
            <div className="flex justify-between investor-table-head-heading">
              <h1>Returns (3Y)</h1> <a href="#">{RangeValue()}</a>
            </div>
          </Table.HeadCell>
          <Table.HeadCell style={{ width: "9.17%" }} className="p-4">
            <div className="investor-table-head-heading">
              <h1>Select</h1>
            </div>
          </Table.HeadCell>
        </Table.Head>

        <Table.Body className="divide-y">
          {NavigatorTableData.slice(0, displayedRows).map((item) => (
            <Table.Row
              key={item.id}
              className={
                selectedRows.includes(item.id)
                  ? 'investor-row-selected-background-color'
                  : 'bg-white'
              }
            >
              <Table.Cell className="p-4">{item.id}</Table.Cell>
              <Table.Cell className="p-4 investor-table-head-heading-transaction">
                {item.name}
              </Table.Cell>
              <Table.Cell className="p-4 investor-table-head-heading-euity-cap">
                {item.capta}
              </Table.Cell>
              <Table.Cell className="p-4 investor-table-head-heading-euity-cap">
                {item.smallCap}
              </Table.Cell>
              <Table.Cell className="p-4 investor-table-head-heading-euity-percentage">
                {item.percentage}
              </Table.Cell>
              <Table.Cell
                className="p-4"
              >
                <input
                  type="checkbox"
                  checked={selectedRows.includes(item.id)}
                  onChange={() => handleRowSelect(item.id)}
                />
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

export default NavigatorTable;
