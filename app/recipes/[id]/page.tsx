import { getRecipe } from "@/lib/utils";
import { Button } from "@/components/ui/button";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
export default function ProductPage({ params }: { params: { id: string } }) {
  console.log(params);

  const recipe = getRecipe(params.id);

  return (
    <main className="px-4 mx-auto my-40 py-6 space-y-40">
      <div className="max-w-7xl mx-auto flex gap-10">
        <div className="flex flex-col gap-4">
          <Image
            alt="Product Image"
            className="aspect-square object-cover border border-gray-200 max-w-xl rounded-xl overflow-hidden dark:border-gray-800"
            height={600}
            // @ts-ignore
            src={recipe?.image}
            width={600}
          />
          <div className="flex flex-col gap-2">
            <h1 className="font-bold text-3xl">{recipe?.name}</h1>
            <p className="text-gray-500 dark:text-gray-400 max-w-lg">
              {recipe?.instructions}
            </p>
            <div className="flex items-center gap-4">
              <Button size="lg">Order now</Button>
              <div className="text-4xl font-bold">$12.99</div>
            </div>
          </div>
        </div>
        <div className="grow">
          {/* Category */}
          <h3 className="text-lg">
            Dish from :{" "}
            <span className="text-green-500">{recipe?.category}</span>
          </h3>
          {/* ingredients */}
          <h4 className="text-lg mt-8">Ingredients</h4>
          <div className="flex flex-wrap gap-2 max-w-96">
            {recipe?.ingredients.map((ingredient) => (
              <Badge key={ingredient}>{ingredient}</Badge>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
