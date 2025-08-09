import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const colorMap = {
  'Fiction': '#0088FE',
  'Non-Fiction': '#00C49F',
  'Fantasy': '#FFBB28'
};

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx, cy, midAngle, innerRadius, outerRadius, percent,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? 'start' : 'end'}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const MyPieChart = ({ filteredDataFiction, filteredDataNonFiction, filteredDataFantasy }) => {
  const data = [
    { name: 'Fiction', value: filteredDataFiction?.length || 0 },
    { name: 'Non-Fiction', value: filteredDataNonFiction?.length || 0 },
    { name: 'Fantasy', value: filteredDataFantasy?.length || 0 },
  ].filter(item => item.value > 0);

  if (data.length === 0) {
    return <p className="text-center text-gray-500">No books to display.</p>;
  }

  return (
    <ResponsiveContainer width="100%" height={400}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={120}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry) => (
            <Cell key={`cell-${entry.name}`} fill={colorMap[entry.name]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default MyPieChart;