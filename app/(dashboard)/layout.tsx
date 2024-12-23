import Link from "next/link";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Menu from "../components/Menu";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex">
      {/* LEFT */}
      <div className="w-[12%] md:w-[8%] lg:w-[16%] xl:w-[14%] p-4">
        <Link
          href="/home"
          className="flex items-center justify-center lg:justify-start gap-2"
        >
          <Image src="/ultrasound.png" alt="logo" width={32} height={32} />
          <span className="hidden lg:block font-semibold">
            UltraSound
            <span className="text-blue-600 font-bold bg-sky p-1 rounded-sm">
              Report
            </span>
          </span>
        </Link>
        <Menu />
      </div>
      {/* RIGHT */}
      <div className="w-[88%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#F7F8FA] overflow-scroll">
        <Navbar />
        {children}
      </div>
    </div>
  );
}
