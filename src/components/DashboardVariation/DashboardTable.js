import { Table } from "flowbite-react";
import { RangeValue } from "../../assests/svgs/password";
import BlueArrow from "../../assests/arrow.svg";
import TableComponent from "../Dashboard/TableDropdown";
import EmptyState from "../../assests/EmptyState.png";
function DashboardTable({ loadMore }) {
  return (
    <div className="overflow-x-auto dash-table-wrap ">
      <div className="col-12 p-4">
        <button className="dashboard-table-holding-warp">
          All Holdings <img src={BlueArrow} alt="..." />{" "}
        </button>
      </div>
      <Table striped className="block" style={{width :"100%"}}>
        <Table.Head className="col-12">
          <Table.HeadCell className="p-4 col-6 mutual-funds-table-heading">
            MUTUAL FUNDS
          </Table.HeadCell>
          <Table.HeadCell className="col-6 p-4 mutual-funds-table-heading">
            Current (Invested)
          </Table.HeadCell>
          <Table.HeadCell className="col-2 mutual-funds-table-heading">
            <span className="flex items-center">
              {" "}
              <a href="#" className="mr-8">
                {RangeValue()}
              </a>
              Actions
            </span>
          </Table.HeadCell>
        </Table.Head>
        <div className="flex flex-col justify-center items-center">
        <div>
          <img src={EmptyState} alt="Empty State" />
        </div>
        <div className="dahsboard-table-nostrategy">
          <h4>You have no Strategies</h4>
        </div>
        <div className="dahsboard-table-nostrategy-desc">
          <p>All incoming strategies data will be listed in this table</p>
        </div>
      </div>
        <Table.Body className="divide-y col-12">
  <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800 items-center" style={{ width: "100%" }}>
    <Table.Cell className="p-4 flex items-center justify-center" style={{ width: "100%" }}>
    
    </Table.Cell>
  </Table.Row>
</Table.Body>

      
    
      </Table>
    </div>
  );
}

export default DashboardTable;
