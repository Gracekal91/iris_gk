import './App.css';
import Tabular from "./components/Tabular";
import {useFetchData} from "./hooks/useFetchData";
import{useEffect, useState} from "react";
import LineChart from "./components/LineChart";
import {Box} from "@mui/material";

function App() {

    const {
        data: columns,
        loading: columnsLoading,
        error: columnsError,
        fetchData: fetchColumns
    } = useFetchData();

    const {
        data: rows,
        loading: rowsLoading,
        error: rowsError,
        fetchData: fetchRows
    } = useFetchData();


    useEffect(() =>{
        fetchColumns('/variables');
        fetchRows('/data')
    }, []);


    if (columnsError) console.log('Error fetching tab headers:', columnsError);
    if (columnsLoading) console.log('Loading tab headers...');
    console.log('Tab headers:', columns);

    if (rowsError) console.log('Error fetching rows:', rowsError);
    if (rowsLoading) console.log('Loading rows...');
    console.log('Rows:', rows);

  return (
    <div className="app">
        <Tabular columns={columns} rows={rows}/>
        <Box height="350px" m="-20px 0 0 0" width='100%'>
            <LineChart/>
        </Box>
    </div>
  );
}

export default App;
