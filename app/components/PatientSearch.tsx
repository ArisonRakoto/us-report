import Image from "next/image";

const PatientSearch = () => {
  return (
    <div className="hidden md:flex items-center gap-2 text-xs rounded-2xl ring-[1.5px] ring-gray-300 px-2">
      <Image src="/search.png" alt="" width={14} height={14} />
      <input
        type="text"
        placeholder="Recherche ..."
        className="w-[200px] py-1 bg-transparent outline-none"
      />
    </div>
  );
};

export default PatientSearch;
