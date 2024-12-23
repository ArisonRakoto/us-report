import Obst1T from "../components/Obst1";
// import Obst23T from "../components/Obst23";

const PatientReport = () => {
  return (
    <div className="text-start overflow-hidden">
      {/* INFO PATIENT */}
      <div className="items-center justify-start m-2 p-2 bg-white rounded-md text-xs leading-loose">
        <p className="font-semibold">RAKOTOARISON Miora Tantely</p>
        <p>Masculin</p>
        <p>40 ans</p>
      </div>

      {/* CHOICE EXAM */}
      <div className="flex items-center justify-between m-2 p-2 bg-white rounded-md text-xs">
        <label className="font-semibold">
          Examen :
          <select name="" id="" className="outline-none w-[300px]">
            <option value="">Echographie Obstetricale 1T</option>
            <option value="">Echographie Obstetricale 2T - 3T</option>
            <option value="">Echographie Abdominale</option>
            <option value="">Echographie Abdomino-Pelvienne</option>
          </select>
        </label>

        <div className="w-[45%]">
          <input
            className="outline-none"
            type="text"
            placeholder="Indication ..."
          />
        </div>

        <div>
          <label className="font-semibold">Date de l&apos;examen : </label>
          <input type="date" name="" id="" className="" />
        </div>

        <div>
          <button className="h-7 flex items-center justify-center rounded-md bg-sky font-semibold px-2">
            Valider
          </button>
        </div>
      </div>

      <div className="flex items-start justify-start m-2 p-2 bg-white rounded-md text-xs gap-2 h-full">
        <div className="w-[30%] p-2 bg-slate-200 overflow-hidden">
          <h1 className="mb-4 p-2 font-semibold bg-white rounded-md">
            Edition
          </h1>
          <Obst1T />
          {/* <Obst23T /> */}
        </div>
        <div className="w-[70%] p-2 bg-slate-200 overflow-hidden">
          <h1 className="mb-4 p-2 font-semibold bg-white rounded-md">
            Prévisualisation
          </h1>
        </div>
      </div>
    </div>
  );
};

export default PatientReport;
