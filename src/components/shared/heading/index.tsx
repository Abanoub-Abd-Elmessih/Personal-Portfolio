export const Heading = ({ title }: { title: string }) => {
  return (
    <div className="space-y-3 group mb-6 flex flex-col items-center md:items-start">
      <h2 className="NSWFont text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 bg-clip-text text-transparent leading-tight mb-4">
        <span className="text-slate-600 group-hover:text-blue-400 transition-colors duration-300 mr-0.5">
          {"<"}
        </span>
        {title}
        <span className="text-slate-600 group-hover:text-blue-400 transition-colors duration-300 ml-0.5">
          {"/>"}
        </span>
      </h2>
      <div className="w-16 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full group-hover:w-24 duration-300" />
    </div>
  );
};
