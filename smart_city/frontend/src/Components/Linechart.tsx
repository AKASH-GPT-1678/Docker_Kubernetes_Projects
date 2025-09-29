// import React from 'react'
// import {LineChart , ResponsiveContainer ,   Legend,
//     Tooltip,
//     Line,
    
//     XAxis,
//     YAxis,
//     CartesianGrid,} from 'recharts'
// const Linechart = () => {
//   const Data = [
//         { "month": "January", "sales": 400 },
//         { "month": "February", "sales": 600 },
//         { "month": "March", "sales": 700 },
//         { "month": "April", "sales": 500 },
//         { "month": "May", "sales": 800 },
//         { "month": "June", "sales": 900 },
//         { "month": "July", "sales": 750 },
//         { "month": "August", "sales": 650 },
//         { "month": "September", "sales": 700 },
//         { "month": "October", "sales": 850 },
//         { "month": "November", "sales": 950 },
//         { "month": "December", "sales": 1100 }
//       ]
      
//   return (
//     <div>
//         <ResponsiveContainer width="400px" height="400px">
//             <LineChart data={Data}>
//             <XAxis dataKey="month" />
//             <YAxis />
//             <Line type="monotone" dataKey="sales" stroke="#8884d8" />
//           </LineChart>

        
//         </ResponsiveContainer>
      
//     </div>
//   )
// }

// export default Linechart
import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
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

const SalesLineChart = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="sales" stroke="#8884d8" strokeWidth={2} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default SalesLineChart;


