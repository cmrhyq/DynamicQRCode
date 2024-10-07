import { AgGridReact } from '@ag-grid-community/react';
import {ColDef, ModuleRegistry, SelectionOptions} from '@ag-grid-community/core';
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import {useState} from "react";
import { AG_GRID_LOCALE_CN } from '@ag-grid-community/locale';
import {LicenseManager} from "ag-grid-enterprise";
import {ClientSideRowModelModule} from "@ag-grid-community/client-side-row-model";

LicenseManager.setLicenseKey("[v2]QDExMTExMQ==_MTc5MTk5MzU5OTAwMA==5f7361c74ba39c2f16b36c5b822f83be");

ModuleRegistry.registerModules([
    ClientSideRowModelModule
]);

/**
 * @doc https://www.ag-grid.com/react-data-grid/deep-dive/
 * @constructor
 */
function GridTable({rowData, colDefs}: {rowData: any, colDefs: any}) {

    const [pagination] = useState<boolean>(true);

    const defaultColDef: ColDef = {
        flex: 1,
        filter: true,
        editable: true,
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
