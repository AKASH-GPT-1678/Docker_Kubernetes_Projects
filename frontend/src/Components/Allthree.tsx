import { ResponsiveContainer, BarChart, LineChart, Line, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'

const Incidents = [
  { month: "January", incidents: 145 },
  { month: "February", incidents: 135 },
  { month: "March", incidents: 150 },
  { month: "April", incidents: 160 },
  { month: "May", incidents: 175 },
  { month: "June", incidents: 180 },
  { month: "July", incidents: 190 },
  { month: "August", incidents: 185 },
  { month: "September", incidents: 170 },
  { month: "October", incidents: 160 },
  { month: "November", incidents: 150 },
  { month: "December", incidents: 140 }
]



const Catwise = [
  { category: "Cyber Theft", incidents: 500 },
  { category: "Fraud", incidents: 400 },
  { category: "System Failure", incidents: 350 },
  { category: "Data Breach", incidents: 300 },
  { category: "Compliance Violation", incidents: 250 },
  { category: "Physical Security Breach", incidents: 200 },
  { category: "Vandalism", incidents: 180 },
  { category: "Unauthorized Access", incidents: 220 }
]



// const Weekly = [
//   { day: 1, incidents: 35 },
//   { day: 2, incidents: 40 },
//   { day: 3, incidents: 38 },
//   { day: 4, incidents: 45 },
//   { day: 5, incidents: 50 },
//   { day: 6, incidents: 55 },
//   { day: 0, incidents: 48 }
// ]

export const Lanechart = () => {
  return (
    <div style={{ width: "90%", height: "400px" }} className='cursor-pointer'> {/* Parent container with height */}
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={Incidents} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="incidents" stroke="#8884d8" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};



// import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

export const Barchartt = () => {
  return (
    <div style={{ width: "90%", height: "350px" }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={Catwise} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
          <CartesianGrid /> {/* ✅ Fixed self-closing tag */}
          <XAxis dataKey="category" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="incidents" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};


export const Barchat = () => {


}