import { cn } from '../../lib/util';
import { Undo, X, RotateCw } from 'lucide-react';
import Button from './Button';
const Table = () => {
  return (
    <div className="w-[320px] grid grid-col-1">
      <div className="flex justify-between my-2 text-sm text-white">
        <div>
          Bet: <span className="font-semibold">0.00 INR</span>
        </div>
        <div className="underline">Paytable</div>
      </div>
      <div className="grid grid-cols-6 w-full gap-[1px]">
        <div className="outline-white outline-1 outline p-1.5 rounded-tl-lg">
          <Number color="black" number={2} />
        </div>
        <div className="outline-white outline outline-1 p-1.5">
          <Number color="black" number={4} />
        </div>
        <div className="outline-white outline-1 outline p-1.5">
          <Number color="black" number={6} />
        </div>
        <div className="outline-white outline-1 outline p-1.5">
          <Number color="red" number={8} />
        </div>
        <div className="outline-white outline-1 outline p-1.5">
          <Number color="red" number={10} />
        </div>
        <div className="outline-white outline-1 outline p-1.5 rounded-tr-lg">
          <Number color="red" number={12} />
        </div>
        <div className="outline-white outline-1 outline p-1.5">
          <Number color="red" number={1} />
        </div>
        <div className="outline-white outline-1 outline p-1.5">
          <Number color="red" number={3} />
        </div>
        <div className="outline-white outline-1 outline p-1.5">
          <Number color="red" number={5} />
        </div>
        <div className="outline-white outline-1 outline p-1.5">
          <Number color="black" number={7} />
        </div>
        <div className="outline-white outline-1 outline p-1.5">
          <Number color="black" number={9} />
        </div>
        <div className="outline-white outline-1 outline p-1.5">
          <Number color="black" number={11} />
        </div>
        <div className="outline-white outline-1 outline p-1.5 rounded-bl-lg flex justify-center items-center text-xs text-white">
          1-6
        </div>
        <div className="outline-white outline-1 outline p-1.5 flex justify-center items-center text-xs text-white">
          Even
        </div>
        <div className="outline-white outline-1 outline p-1.5">
          <Number color="black" number={null} />
        </div>
        <div className="outline-white outline-1 outline p-1.5">
          <Number color="red" number={null} />
        </div>
        <div className="outline-white outline-1 outline p-1.5 flex justify-center items-center text-xs text-white">
          Odd
        </div>
        <div className="outline-white outline-1 outline p-1.5 rounded-br-lg flex justify-center items-center text-xs text-white">
          7-12
        </div>
      </div>
      <div className="flex justify-between my-2">
        <div className="flex gap-x-1">
          <Button>
            <Undo className="mr-1 w-4 h-4" />
            Back
          </Button>
          <Button>
            {' '}
            <X className="mr-1 w-4 h-4" />
            Clear
          </Button>
        </div>
        <Button>
          {' '}
          <RotateCw className="mr-1 w-4 h-4" />
          Rebet
        </Button>
      </div>
    </div>
  );
};
const Number = ({
  color,
  number,
}: {
  color: 'red' | 'black';
  number: number | null;
}) => {
  return (
    <div
      className={cn(
        'rounded-full w-10 h-10 flex justify-center items-center font-semibold text-white border-black border-2 text-lg shadow-lg',
        {
          red: color === 'red',
          black: color === 'black',
        }
      )}
    >
      {number ? number : null}
    </div>
  );
};
export default Table;
