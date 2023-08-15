import {DataGrid} from '@mui/x-data-grid';
import {styled, TableCell, tableCellClasses, TableRow} from "@mui/material";

const StyledTableCell = styled(TableCell)(({theme}) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({theme}) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));


const Tabular = ({rows}) => {
    if (!rows) return 'loading ...'

    const columns = [
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
            <div style={{height: 450, width: '100%'}}>
                <DataGrid
                    columns={columns}
                    rows={newRows}
                    initialState={{
                        pagination: {
                            paginationModel: {page: 0, pageSize: 8},
                        },
                    }}
                    pageSizeOptions={[8, 16]}
                />
            </div>
        </>
    )
}

export default Tabular