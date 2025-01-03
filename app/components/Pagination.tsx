const Pagination = () => {
  return (
    <div className="py-4 flex items-center justify-between text-gray-500">
      <button className="py-2 px-4 rounded-md bg-slate-200 text-xs font-semibold disabled:opacity-50 disabled:cursor-not-allowed">
        Préc.
      </button>
      <div className="flex items-center gap-2 text-xs">
        <button className="px-2 rounded-md text-xs bg-sky">1</button>
        <button className="px-2 rounded-md text-xs">2</button>
        <button className="px-2 rounded-md text-xs">3</button>
        ...
        <button className="px-2 rounded-md">10</button>
      </div>
      <button className="py-2 px-4 rounded-md bg-slate-200 text-xs font-semibold disabled:opacity-50 disabled:cursor-not-allowed">
        Suiv.
      </button>
    </div>
  );
};

export default Pagination;
