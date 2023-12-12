'use client';
import { Pie } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Chart as ChartJS, ArcElement } from 'chart.js';
ChartJS.register(ArcElement, ChartDataLabels);
import { cn } from '../../lib/util';
import { useState } from 'react';
const Wheel = () => {
  const [spin, setSpin] = useState<boolean>(false);
  const dataArray = Array(12).fill(30);
  const data = {
    labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
    datasets: [
      {
        data: [...dataArray],
        backgroundColor: dataArray.map((_, index) => {
          if ((index + 1) % 2 === 0) {
            return 'rgba(255, 0, 0,1)';
          } else {
            return 'rgba(0,0,0,1)';
          }
        }),
        borderWidth: 1,
        borderColor: dataArray.map((_, index) => {
          if ((index + 1) % 2 === 0) {
            return 'rgba(255, 0, 0,1)';
          } else {
            return 'rgba(0,0,0,1)';
          }
        }),
      },
    ],
  };
  const options = {
    animation: {
      duration: 0,
    },
    events: [],
    plugins: {
      datalabels: {
        display: true,
        align: 'end',
        anchor: 'center',
        color: 'white',
        offset: 16,
        borderRadius: 3,
        font: {
          size: 18,
          weight: 600,
        },
        //@ts-ignore
        formatter: function (value, context) {
          return context.chart.data.labels[context.dataIndex];
        },
      },
    },
  };
  return (
    <div
      className={cn('w-[250px] h-[250px] rounded-full relative', {
        spinning: spin,
      })}
    >
      {/* @ts-ignore */}
      <Pie data={data} options={options}></Pie>
      <div className="absolute bg-black/20 shadow-md rounded-full w-[160px] h-[160px] top-11 left-11 flex justify-center items-center">
        <div className="bg-gray-200 rounded-full h-[100px] w-[100px] flex justify-center items-center shadow-lg">
          <div
            className="bg-black rounded-full h-[25px] w-[25px]"
            onClick={() => {
              setSpin(true);
              setTimeout(() => setSpin(false), 3000);
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Wheel;
