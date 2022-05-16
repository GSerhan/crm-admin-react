import './chart.css';
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Chart = ({data, dataKey, title, grid}) => {

  return (
    <div className="chart">
      <h3 className="chart--title mb-4">{title}</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
            <XAxis dataKey="name" stroke='#5550bd' />
            <Line type="monotone" dataKey={dataKey} stroke='#5550bd'/>
            <Tooltip />
            <Legend />
            {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />}
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart;