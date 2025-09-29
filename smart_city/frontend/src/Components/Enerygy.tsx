import React from "react";
import { LineChart, Line, PieChart, Pie, BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, CartesianGrid } from "recharts";

const consumptionProductionData = [
  { name: "00:00", Consumption: 5, Production: 4 },
  { name: "06:00", Consumption: 8, Production: 6 },
  { name: "12:00", Consumption: 12, Production: 15 },
  { name: "18:00", Consumption: 14, Production: 10 },
  { name: "24:00", Consumption: 9, Production: 7 },
];

const energyProfileData = [
  { name: "00:00", Consumption: 4, Production: 3 },
  { name: "06:00", Consumption: 6, Production: 5 },
  { name: "12:00", Consumption: 10, Production: 12 },
  { name: "18:00", Consumption: 13, Production: 9 },
  { name: "24:00", Consumption: 8, Production: 6 },
];

const energySourcesData = [
  { name: "Solar", value: 40 },
  { name: "Wind", value: 30 },
  { name: "Hydro", value: 20 },
  { name: "Fossil", value: 10 },
];

const energyConsumptionData = [
  { name: "Residential", kWh: 500 },
  { name: "Commercial", kWh: 700 },
  { name: "Industrial", kWh: 900 },
  { name: "Agriculture", kWh: 400 },
];
export const ConsumptionProductionChart = () => (
  <ResponsiveContainer width="100%" height={300}>
    <LineChart data={consumptionProductionData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="Consumption" stroke="#ff7300" />
      <Line type="monotone" dataKey="Production" stroke="#387908" />
    </LineChart>
  </ResponsiveContainer>
);

export const EnergyProfileChart = () => (
  <ResponsiveContainer width="100%" height={300}>
    <LineChart data={energyProfileData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="Consumption" stroke="#ff7300" />
      <Line type="monotone" dataKey="Production" stroke="#387908" />
    </LineChart>
  </ResponsiveContainer>
);

export const EnergySourcesChart = () => (
  <ResponsiveContainer width="100%" height={300}>
    <PieChart>
      <Pie data={energySourcesData} dataKey="value" nameKey="name" outerRadius={80} fill="#8884d8" label />
      <Tooltip />
    </PieChart>
  </ResponsiveContainer>
);

export const EnergyConsumptionChart = () => (
  <ResponsiveContainer width="100%" height={300}>
    <BarChart data={energyConsumptionData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="kWh" fill="#82ca9d" />
    </BarChart>
  </ResponsiveContainer>
);

// const EnergyDashboard = () => {
//   return (
//     <div className="grid grid-cols-2 gap-4 p-4">
//       <ConsumptionProductionChart />
//       <EnergyProfileChart />
//       <EnergySourcesChart />
//       <EnergyConsumptionChart />
//     </div>
//   );
// };

// export default EnergyDashboard;
