import Image from "next/image";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between m-2 p-2 bg-white rounded-md">
      {/* SEARC BAR */}
      <div className="hidden md:flex items-center gap-2 text-xs rounded-2xl ring-[1.5px] ring-gray-300 px-2 ml-2">
        <Image src="/search.png" alt="" width={14} height={14} />
        <input
          type="text"
          placeholder="Recherche ..."
          className="w-[200px] py-1 bg-transparent outline-none"
        />
      </div>

      {/* USER */}
      <div className="flex items-center justify-end gap-2 w-full">
        <div className="flex flex-col">
          <span className="text-xs leading-3 font-semibold">Arison Rakoto</span>
          <span className="text-[10px] text-gray-400 text-right pt-1">
            Administrateur
          </span>
        </div>
        <Image
          src="/avatar.png"
          alt=""
          width={30}
          height={30}
          className="rounded-full"
        />
      </div>
    </div>
  );
};

export default Navbar;
