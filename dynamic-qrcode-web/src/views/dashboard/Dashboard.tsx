import GridTable from "../../components/gridTable";
import {useState} from "react";
import {ColDef} from "@ag-grid-community/core";

function Dashboard() {
    interface IRow {
        make: string;
        model: string;
        price: number;
        electric: boolean;
    }

    const [rowData, setRowData] = useState<IRow[]>([
        { make: 'Tesla', model: 'Model Y', price: 64950, electric: true },
        { make: 'Ford', model: 'F-Series', price: 33850, electric: false },
        { make: 'Toyota', model: 'Corolla', price: 29600, electric: false },
    ]);

    const [colDefs] = useState<ColDef<IRow>[]>([
        { field: 'make', filter: true, editable: true },
        { field: 'model', filter: true, editable: true },
        { field: 'price', filter: true, editable: true },
        { field: 'electric', filter: true, editable: true },
    ]);

    return (
        <div>
            <h1>Dashboard</h1>
            <GridTable rowData={rowData} colDefs={colDefs}/>
        </div>
    )
}

export default Dashboard;
