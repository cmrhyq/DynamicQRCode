import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model';
import { AgGridReact } from 'ag-grid-react';
import { ColDef, ModuleRegistry } from '@ag-grid-community/core';
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import {useMemo} from "react";

ModuleRegistry.registerModules([ClientSideRowModelModule]);

function GridTable({rowData, colDefs}){
    const defaultColDef: ColDef = {
        flex: 1,
    };
    const selection = useMemo(() => {
        return {
            mode: 'multiRow',
        };
    }, []);
    return (
        <div
            className="ag-theme-quartz"
            style={{ height: 600 }}>
            <AgGridReact
                rowData={rowData}
                columnDefs={colDefs}
                selection={selection}
                defaultColDef={defaultColDef}
            />
        </div>
    )
}

export default GridTable;
