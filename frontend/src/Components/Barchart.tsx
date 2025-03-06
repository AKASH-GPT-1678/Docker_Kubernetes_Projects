import React from 'react'
import { BarChart , Bar , XAxis , YAxis , CartesianGrid , Tooltip , Legend , ResponsiveContainer , Rectangle






 } from 'recharts'
const Barchart = () => {
    
const Data = [
    { month: "January", sales: 400 },
    { month: "February", sales: 600 },
    { month: "March", sales: 700 },
    { month: "April", sales: 500 },
    { month: "May", sales: 800 },
    { month: "June", sales: 900 },
    { month: "July", sales: 750 },
    { month: "August", sales: 650 },
    { month: "September", sales: 700 },
    { month: "October", sales: 850 },
    { month: "November", sales: 950 },
    { month: "December", sales: 1100 }
  ];
  return (
    <div>
        <BarChart width={300} height={300} data={Data}>
            <Bar dataKey="sales"fill='green' />
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="name" />
            <YAxis />

        </BarChart>
     
      
    </div>
  )
}

export default Barchart
