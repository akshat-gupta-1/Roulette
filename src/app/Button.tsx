const Button = ({ children }: { children: React.ReactNode }) => {
  return (
    <button className="flex text-white text-xs bg-inherit border border-black shadow-md rounded-full px-2 py-1 justify-center items-center">
      {children}
    </button>
  );
};

export default Button;
