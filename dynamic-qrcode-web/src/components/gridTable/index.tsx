import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model';
import { AgGridReact } from '@ag-grid-community/react';
import {ColDef, ModuleRegistry, SelectionOptions} from '@ag-grid-community/core';
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import {useState} from "react";
import { AG_GRID_LOCALE_CN } from '@ag-grid-community/locale';

ModuleRegistry.registerModules([ClientSideRowModelModule]);

function GridTable(){
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

    const [pagination] = useState<boolean>(true);

    const defaultColDef: ColDef = {
        flex: 1,
        filter: true,
        editable: true
    };

    const selection: SelectionOptions = {
        mode: 'multiRow',
        headerCheckbox: false,
    };

    return (
        <div
            className="ag-theme-quartz"
            style={{ height: 600 }}>
            <AgGridReact
                localeText={AG_GRID_LOCALE_CN}
                rowData={rowData}
                columnDefs={colDefs}
                selection={selection}
                defaultColDef={defaultColDef}
                pagination={pagination}
            />
        </div>
    )
}

export default GridTable;
