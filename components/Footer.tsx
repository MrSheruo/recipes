import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer key="1" className="bg-gray-800 py-8">
      <div className="container mx-auto flex flex-col items-center justify-between gap-6 px-4 sm:flex-row sm:gap-0">
        <div className="flex items-center">
          <Image
            src={"/logo_white.png"}
            alt="logo"
            width={300}
            height={300}
            className="w-36"
          />
          <span className="sr-only">Recipes logo</span>
        </div>
        <div />
        <div className="text-sm  text-gray-400">
          Made with ❤️ by{" "}
          <Link
            href={"https://ahmed-yasser-portfolio.vercel.app/"}
            target="_blank"
            className="hover:text-gray-200"
          >
            Ahmed Yasser
          </Link>
        </div>
      </div>
    </footer>
  );
}
