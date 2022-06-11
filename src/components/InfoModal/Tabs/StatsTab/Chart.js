import { Doughnut } from 'react-chartjs-2';

export default function Chart({ chartData }) {
  return (
    <Doughnut
      data={chartData}
      options={{
        plugins: {
          legend: {
            display: true,
            position: 'top',
          },
        },
      }}
    />
  );
}
