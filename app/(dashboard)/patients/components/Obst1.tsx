const Obst1T = () => {
  return (
    <div>
      <div>
        <h1 className="font-semibold mb-4">Obstetricale 1er Trimestre</h1>
      </div>

      <div className="font">
        <div className="justify-between">
          <label className="font-semibold">
            DDR :
            <input
              type="date"
              name=""
              id=""
              className="outline-none p-1 rounded-md bg-slate-50"
            />
          </label>
          <label> - DPA</label>
        </div>

        <div className="mt-2">
          <label className="font-semibold">Nombre de foetus : </label>
          <select
            name=""
            id=""
            className="rounded-md outline-none p-1 w-[50px]"
          >
            <option value="">1</option>
            <option value="">2</option>
            <option value="">3</option>
            <option value="">4</option>
          </select>
        </div>

        <div className="flex justify-around ">
          <label className=" font-semibold"> </label>
          Mobilité spontanée
          <input
            type="radio"
            value="1"
            name="mobilite"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          Oui
          <input
            type="radio"
            value="2"
            name="mobilite"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          Non
        </div>

        <div>
          <label className="font-semibold">Activité cardiaque : </label>
          <input
            type="text"
            name=""
            id=""
            className="outline-none p-1 rounded-md bg-slate-50 w-[50px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Obst1T;
