const PatientReport = () => {
  return (
    <div className="text-start overflow-hidden">
      {/* INFO PATIENT */}
      <div className="items-center justify-start m-2 p-2 bg-white rounded-md text-xs gap-2">
        <p>RAKOTOARISON Miora Tantely</p>
        <p>Masculin</p>
        <p>40 ans</p>
      </div>

      {/* CHOICE EXAM */}
      <div className="flex items-center justify-between m-2 p-2 bg-white rounded-md text-xs">
        <label className="font-semibold">
          Examen :
          <select name="" id="" className="outline-none w-[400px]">
            <option value="">Echographie Obstetricale</option>
            <option value="">Echographie Abdominale</option>
            <option value="">Echographie Abdomino-Pelvienne</option>
            <option value="">Echographie Obstetricale</option>
          </select>
        </label>

        <div className="w-[50%]">
          <input
            className="outline-none"
            type="text"
            placeholder="Indication ..."
          />
        </div>

        <div>
          <button className="h-7 flex items-center justify-center rounded-md bg-sky font-semibold px-2">
            Valider
          </button>
        </div>
      </div>

      <div className="flex items-start justify-start m-2 p-2 bg-white rounded-md text-xs gap-2 h-full">
        <div className="w-[12%] md:w-[8%] lg:w-[16%] xl:w-[14%] p-4 bg-slate-200 overflow-hidden">
          Edition
        </div>
        <div className="w-[88%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#F7F8FA] overflow-hidden">
          Prévisualisation
        </div>
      </div>
    </div>
  );
};

export default PatientReport;
