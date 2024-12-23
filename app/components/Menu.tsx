import Link from "next/link";
import Image from "next/image";

const menuItems = [
  {
    icon: "/home.png",
    label: "Accueil",
    href: "/home",
    visible: ["admin", "doctor"],
  },
  {
    icon: "/patient.png",
    label: "Patients",
    href: "/patients",
    visible: ["admin", "user", "doctor"],
  },
  {
    icon: "/schedule.png",
    label: "Rendez-vous",
    href: "/schedules",
    visible: ["admin", "user", "doctor"],
  },

  {
    icon: "/user.png",
    label: "Utilisateurs",
    href: "/users",
    visible: ["admin"],
  },
  {
    icon: "/settings.png",
    label: "Paramètres",
    href: "/settings",
    visible: ["admin", "user", "doctor"],
  },
];

const Menu = () => {
  return (
    <div className="mt-10 text-xs">
      {menuItems.map((item) => (
        <Link
          href={item.href}
          key={item.label}
          className="flex items-center justify-center lg:justify-start gap-4 text-gray-500 py-4"
        >
          <Image src={item.icon} alt="" width={20} height={20} />
          <span className="hidden lg:block">{item.label}</span>
        </Link>
      ))}
    </div>
  );
};

export default Menu;
