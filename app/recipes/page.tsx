import { recipes } from "@/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Recipes() {
  return (
    <main className="flex flex-col items-center max-w-7xl mx-auto my-40 space-y-20">
      <div>
        <h1 className="text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          All Recipes
        </h1>
        <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
          Discover the Culinary Delights
        </p>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:gap-6">
        {recipes.map((recipe, index) => (
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
    </main>
  );
}
