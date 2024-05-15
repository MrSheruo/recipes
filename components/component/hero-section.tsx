import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";
import { recipes } from "@/data";

export function HeroSection() {
  return (
    <>
      <section className="w-full pt-12 md:pt-24 lg:pt-32">
        <div className="container space-y-10 xl:space-y-16 px-4 md:px-6">
          <div className="flex items-center justify-center gap-6 lg:gap-12">
            <div className="space-y-4 text-center md:text-left">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Discover Delicious Recipes
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Find the perfect recipe for any occasion with our curated
                  collection.
                </p>
              </div>
              <form className="flex flex-col gap-4 ">
                <div className="flex items-center rounded-md bg-white border dark:bg-gray-950">
                  <SearchIcon className="mx-4 h-5 w-5 text-gray-500 dark:text-gray-400" />
                  <Input
                    className="w-full rounded-md border-none bg-transparent py-2 pl-2 pr-4 text-sm focus:outline-none focus:ring-0 dark:text-gray-50"
                    placeholder="Search recipes..."
                    type="search"
                  />
                </div>
                <Button type="submit">Search</Button>
              </form>
            </div>
            <Image
              alt="Hero"
              className="mx-auto aspect-[1000/600] overflow-hidden object-cover rounded-md"
              height="600"
              width="1200"
              src="/hero.gif"
            />
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="space-y-6 md:space-y-8 lg:space-y-10">
            <div className="space-y-3 text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Recipes You May Like
              </h1>
              <p className="max-w-[700px] mx-auto text-gray-500 md:text-xl dark:text-gray-400 ">
                Find inspiration for your next meal with our curated collection
                of recipes.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:gap-6">
              {recipes.splice(0, 6).map((recipe, index) => (
                <Link
                  href={`/recipes/${recipe.id}`}
                  key={index}
                  className="group overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md dark:border-gray-800 dark:bg-gray-950"
                >
                  <Image
                    alt="Recipe Image"
                    className="aspect-video w-full object-cover object-center transition-all group-hover:scale-105"
                    height={250}
                    src={recipe.image}
                    width={400}
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold">{recipe.name}</h3>
                    <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                      {recipe.instructions}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
            <div className="flex justify-center">
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                href="/recipes"
              >
                View All Recipes
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function SearchIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}
