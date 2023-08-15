import {ResponsiveLine} from "@nivo/line";
import {useTheme} from "@mui/material";

import {useFetchData} from "../hooks/useFetchData";
import {useEffect} from "react";


const LineChart = ({elements}) => {

    const {
        data: plotsData, loading, error, fetchData
    } = useFetchData();

    useEffect(() => {
        fetchData('/plots')
    }, []);

    if(loading) return 'Loading'
    if(error) return 'error'
    if(!plotsData) return 'Error'
    const transformData = plotsData
        .filter((item) => item['legendItems']?.length > 0)
        .map((item) =>{
            console.log(item)
            return {
                id: item.name,
                color: item.colour,
                data: item?.legendItems?.map((legendItem) => ({
                    x: legendItem?.['val_graph']?.split(" ")[0],
                    y: Number(legendItem?.['val_graph']?.split(" ")[1]) + 'Mbps'
                }))
            }
    })

    return (
        <>
            <ResponsiveLine
                data={transformData}
                theme={{
                    axis: {
                        domain: {
                            line: {
                                stroke: 'red',
                            },
                        },
                        legend: {
                            text: {
                                fill: 'red',
                            },
                        },
                        ticks: {
                            line: {
                                stroke: 'red',
                                strokeWidth: 1,
                            },
                            text: {
                                fill: 'red',
                            },
                        },
                    },
                    legends: {
                        text: {
                            fill: 'red',
                        },
                    },
                    tooltip: {
                        container: {
                            color: 'red',
                        },
                    },
                }}

                margin={{top: 50, right: 90, bottom: 50, left: 70}}
                xScale={{type: "point"}}
                yScale={{
                    type: "linear",
                    min: "auto",
                    max: "auto",
                    stacked: true,
                    reverse: false,
                }}
                yFormat=" >-.2f"
                curve="catmullRom"
                axisTop={null}
                axisRight={null}
                axisBottom={{
                    tickSize: 0,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: "data speed", // added
                    legendOffset: 36,
                    legendPosition: "middle",
                }}
                axisLeft={{
                    tickValues: 5, // added
                    tickSize: 3,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: "Speed", // added
                    legendOffset: -40,
                    legendPosition: "middle",
                }}
                enableGridX={false}
                enableGridY={false}
                pointSize={8}
                pointColor={{theme: "background"}}
                pointBorderWidth={2}
                pointBorderColor={{from: "serieColor"}}
                pointLabelYOffset={-12}
                useMesh={true}
                legends={[
                    {
                        anchor: "bottom-right",
                        direction: "column",
                        justify: false,
                        translateX: 100,
                        translateY: 0,
                        itemsSpacing: 0,
                        itemDirection: "left-to-right",
                        itemWidth: 80,
                        itemHeight: 20,
                        itemOpacity: 0.75,
                        symbolSize: 12,
                        symbolShape: "circle",
                        symbolBorderColor: "rgba(0, 0, 0, .5)",
                        effects: [
                            {
                                on: "hover",
                                style: {
                                    itemBackground: "rgba(0, 0, 0, .03)",
                                    itemOpacity: 1,
                                },
                            },
                        ],
                    },
                ]}
            />
        </>
    );
};

export default LineChart;
