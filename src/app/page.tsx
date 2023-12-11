import Wheel from './Wheel';
import Table from './table';
import { RotateCcw } from 'lucide-react';
const page = () => {
  return (
    <div id="roulette" className="min-h-screen">
      <div className="grid grid-cols-1 py-8 px-8 mb-16">
        <div className="h-[350px] flex justify-center items-center">
          <Wheel />
        </div>
        <div className="h-[200px] ">
          <Table />
        </div>
      </div>
      <div className=" bg-black/20 h-[95px] rounded-tl-lg rounded-tr-lg relative flex">
        <div
          className=" px-4 py-2 flex overflow-x-auto flex-nowrap overflow-y-hidden w-full items-center gap-x-3
        "
        >
          <div className="min-w-[50px] h-[50px] bg-gray-400 rounded-full flex items-center justify-center text-white font-medium shadow-lg ">
            1
          </div>
          <div className="min-w-[50px] h-[50px] bg-red-600 rounded-full flex items-center justify-center text-white font-medium shadow-lg">
            10
          </div>
          <div className="min-w-[50px] h-[50px] bg-blue-600 rounded-full flex items-center justify-center text-white font-medium shadow-lg">
            50
          </div>
          <div className="min-w-[50px] h-[50px] bg-green-500 rounded-full flex items-center justify-center text-white font-medium shadow-lg">
            100
          </div>
          <div className="min-w-[50px] h-[50px] bg-gray-700 rounded-full flex items-center justify-center text-white font-medium shadow-lg">
            500
          </div>
          <div className="min-w-[50px] h-[50px] bg-red-500 rounded-full flex items-center justify-center text-white font-medium shadow-lg">
            1000
          </div>
          <div className="min-w-[50px] h-[50px] bg-red-500 rounded-full flex items-center justify-center text-white font-medium shadow-lg">
            2000
          </div>
          <div className="min-w-[50px] h-[50px] bg-red-500 rounded-full flex items-center justify-center text-white font-medium shadow-lg">
            3000
          </div>
        </div>
        <button className="min-w-[80px] h-[80px] flex justify-center items-center rounded-full border border-black m-2 shadow-xl">
          <RotateCcw className="text-white min-w-[40px] h-[40px]" />
        </button>
      </div>
    </div>
  );
};

export default page;
