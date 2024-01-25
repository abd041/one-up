import { Dropdown } from "flowbite-react";

function TableComponent() {
    return (
        <Dropdown label="View Details" inline className="table-dropdown-main-wrapper">
            <Dropdown.Item className="table-detaila-dropdown-values-wrapper p-4">
                <div className="table-detaila-dropdown-first-value">
                    <h4>Manager</h4>
                </div>
                <div className="table-detaila-dropdown-second-value">
                    <h5>Fidelity</h5>
                </div>
            </Dropdown.Item>
            <Dropdown.Item className="table-detaila-dropdown-values-wrapper p-4">
                <div className="table-detaila-dropdown-first-value">
                    <h4>Ticker</h4>
                </div>
                <div className="table-detaila-dropdown-second-value">
                    <h5>12.3%</h5>
                </div>
            </Dropdown.Item>
            <Dropdown.Item className="table-detaila-dropdown-values-wrapper p-4">
                <div className="table-detaila-dropdown-first-value">
                    <h4>1-year performance</h4>
                </div>
                <div className="table-detaila-dropdown-second-value">
                    <h5>US1257849651</h5>
                </div>
            </Dropdown.Item>
            <Dropdown.Item className="table-detaila-dropdown-values-wrapper p-4">
                <div className="table-detaila-dropdown-first-value">
                    <h4>Risk</h4>
                </div>
                <div className="table-detaila-dropdown-second-value">
                    <h5>Concentrated</h5>
                </div>
            </Dropdown.Item>

            <Dropdown.Item className="table-detaila-dropdown-values-wrapper p-4">
                <div className="table-detaila-dropdown-first-value">
                    <h4>Style</h4>
                </div>
                <div className="table-detaila-dropdown-second-value">
                    <h5>Value</h5>
                </div>
            </Dropdown.Item>
        </Dropdown>
    );
}

export default TableComponent;
