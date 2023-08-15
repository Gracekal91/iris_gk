import {DataGrid} from '@mui/x-data-grid';
import {useHeadersMutation} from "../queries/HeadersQuery";


const Tabular = ({columns, rows}) => {
    if ( !columns || !rows) return 'loading ...'

    const newColumns = [
        {field: 'bps_in', headerName: 'BPS IN', width: 170},
        {field: 'bps_out', headerName: 'BPS OUT', width: 170},
        {field: 'packets_in', headerName: 'PACKETS IN', width: 170},
        {field: 'packets_out', headerName: 'PACKETS OUT', width: 170},
        {field: 'speed', headerName: 'SPEED', width: 130},
    ];

    const newRows = rows.map((row, index) => ({
        id: index,
        bps_in: row[0],
        bps_out: row[1],
        packets_in: row[2],
        packets_out: row[3],
        speed: row[4]
    }))

    return (
        <>
            <div style={{height: 400, width: '100%'}}>
                <DataGrid
                    columns={newColumns}
                    rows={newRows}>
                    pagination
                    pageSize={6}
                    autoHeight
                </DataGrid>
            </div>
        </>
    )
}

export default Tabular