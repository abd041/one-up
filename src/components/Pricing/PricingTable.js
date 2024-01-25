import { useState } from "react";
import { Checkbox, Table } from "flowbite-react";

import { BottomArrow, RangeValue } from "../../assests/svgs/password";
import TableComponent from "../Dashboard/TableDropdown";
import BlueArrow from "../../assests/arrow.svg";
import { PricingTableData } from "./PricingTableData";
import Input from "../../assests/Input.png";
import eclipse20 from "../../assests/Ellipse 20.svg";

function PricingTable({ loadMore }) {
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
    setDisplayedRows(PricingTableData.length);
  };
  return (
    <div className="overflow-x-auto">
      <Table className="w-full">
        <Table.Head className="bg-blue-50">
          <Table.HeadCell style={{ width: "5.64%" }} className="p-4 bg-blue-50">
            <div className="investor-table-head-heading">
              <h1>Sr no</h1>
            </div>
          </Table.HeadCell>
          <Table.HeadCell style={{ width: "20.86%" }} className="p-4 bg-blue-50">
            <div className="investor-table-head-heading">
              <h1>Invoice ID</h1>
            </div>
          </Table.HeadCell>
          <Table.HeadCell style={{ width: "20.86%" }} className="p-4 bg-blue-50">
            <div className="investor-table-head-heading">
              <h1>Billing Date</h1>
            </div>
          </Table.HeadCell>
          <Table.HeadCell style={{ width: "20.86%" }} className="p-4 bg-blue-50">
            <div className="flex justify-between investor-table-head-heading">
              <h1>Status</h1>
            </div>
          </Table.HeadCell>
        </Table.Head>

        <Table.Body className="divide-y">
          {PricingTableData.map((item) => (
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
              <Table.Cell className={item.smallCap === "Pending" ? "p-4 pricing-table-head-heading-euity-cap" : "pricing-table-head-heading-euity-completed p-4"} >
                {item.smallCap}
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      
      </Table>
    </div>
  );
}

export default PricingTable;
