import { type FC } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const NavbarRecipes: FC = () => {
  const router = useRouter();

  return (
    <nav className="sticky top-0 z-20 flex items-center justify-between bg-white/90 px-5 py-3 shadow-sm backdrop-blur-sm">
      <button
        className="flex items-center gap-1 rounded-full border border-solid border-gray-300 bg-transparent p-3 text-sm text-gray-600 shadow-xl hover:bg-gray-100 focus:outline-none"
        type="button"
        onClick={() => void router.push("/")}
      >
        <ArrowLeftIcon className="h-5 w-5" />
      </button>

      <Link href="/">
        <Image
          className="items-center justify-center md:flex"
          src="/svgs/logo.svg"
          alt="Logo"
          width={200}
          height={50}
        />
      </Link>
    </nav>
  );
};

export default NavbarRecipes;
