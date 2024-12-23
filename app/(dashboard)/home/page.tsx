import CustomCard from "@/app/components/CustomCard";

const HomePage = () => {
  return (
    <div className="p-4 flex flex-col gap-4 md:flex-row">
      {/* LEFT */}
      <div className="w-full lg:w-2/3">
        <div className="flex gap-4 justify-between">
          <CustomCard type="patient" />
        </div>
      </div>
      {/* RIGHT */}
      <div className="w-full lg:w-1/3"></div>
    </div>
  );
};

export default HomePage;
