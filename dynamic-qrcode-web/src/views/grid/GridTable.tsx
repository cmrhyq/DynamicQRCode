import AgGridTable from "../../components/agGridTable";
import {useState} from "react";
import {ColDef} from "@ag-grid-community/core";

function GridTable() {
    interface IRow {
        make: string;
        model: string;
        price: number;
        electric: boolean;
    }

    const [rowData] = useState<IRow[]>([
        { make: 'Tesla', model: 'Model Y', price: 64950, electric: true },
        { make: 'Ford', model: 'F-Series', price: 33850, electric: false },
        { make: 'Toyota', model: 'Corolla', price: 29600, electric: false },
    ]);

    const [colDefs] = useState<ColDef<IRow>[]>([
        { field: 'make' },
        { field: 'model' },
        { field: 'price' },
        { field: 'electric' },
    ]);

    return (
        <div>
            <h1>Dashboard</h1>
            <AgGridTable rowData={rowData} colDefs={colDefs}/>
        </div>
    )
}

export default GridTable;
