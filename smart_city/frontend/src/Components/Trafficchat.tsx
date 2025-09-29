import React from 'react'
import { ResponsiveContainer , LineChart, CartesianGrid  , Legend , Tooltip , XAxis , YAxis , Line } from 'recharts'


const weekly = [
    {day: 1, traffic_level: 1200},
    {day: 2, traffic_level: 1350},
    {day: 3, traffic_level: 1100},
    {day: 4, traffic_level: 1450},
    {day: 5, traffic_level: 1600},
    {day: 6, traffic_level: 2000},
    {day: 7, traffic_level: 1800}
  ]
  




const Hours = [
        {time: 0, traffic_level: 45},
        {time: 3, traffic_level: 35},
        {time: 6, traffic_level: 60},
        {time: 9, traffic_level: 100},
        {time: 12, traffic_level: 120},
        {time: 15, traffic_level: 130},
        {time: 18, traffic_level: 150},
        {time: 21, traffic_level: 110}
      
]
export const Weekly = () => {
    return(
        // <div>
            <ResponsiveContainer width={"100%"} height={"100%"} aspect={3}>
                <LineChart data={weekly}>
                    <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
                    <XAxis dataKey={"day"} interval={'preserveStartEnd'}></XAxis>
                    <YAxis></YAxis>
                    <Legend/>
                    <Tooltip/>
                    <Line 
                    dataKey={"traffic_level"}
                    stroke="black"
                    activeDot={{ r: 8 }}
                    
                    
                    >

                    </Line>

                </LineChart>

            </ResponsiveContainer>

        // </div>
    )

}

export const Daily = () => {
    return(
        <div>
            <ResponsiveContainer width={"100%"} height={"100%"} aspect={3}>
                <LineChart data={Hours}>
                <CartesianGrid strokeDasharray={"3 3"} />
                <XAxis dataKey={"time"}/>
                <YAxis/>
                <Legend/>
                <Tooltip/>
                <Line type="monotone" dataKey="traffic_level" stroke="#8884d8"  strokeWidth={2}/>
                </LineChart>

            </ResponsiveContainer>

        </div>
    )
}