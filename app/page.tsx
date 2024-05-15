import { ContactSection } from "@/components/component/contact-section";
import { HeroSection } from "@/components/component/hero-section";
import { team } from "@/data";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="space-y-40 mt-52">
      <HeroSection />
      <section
        id="download"
        className="w-full py-12 md:py-24 lg:py-32 xl:py-48"
      >
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Discover and Savor the Perfect Recipes
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Our recipes app is your ultimate culinary companion, helping you
                explore a world of delicious dishes and create unforgettable
                meals.
              </p>
            </div>
            <div className="space-x-4">
              <Link
                className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                href="#"
              >
                Download App
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section
        id="about"
        className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800"
      >
        <div className="container px-4 md:px-6">
          <div className="grid items-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                  Key Features
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Elevate Your Culinary Journey
                </h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Our recipes app offers a range of features to help you
                  discover new dishes, save your favorites, and plan delicious
                  meals with ease.
                </p>
              </div>
              <div className="grid gap-4">
                <div className="grid gap-1">
                  <h3 className="text-lg font-bold">Search Recipes</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Explore our extensive database of recipes, filter by
                    ingredients, dietary preferences, and more.
                  </p>
                </div>
                <div className="grid gap-1">
                  <h3 className="text-lg font-bold">Save Favorites</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Easily save your favorite recipes and access them anytime,
                    anywhere.
                  </p>
                </div>
                <div className="grid gap-1">
                  <h3 className="text-lg font-bold">Create Meal Plans</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Plan your meals for the week, generate grocery lists, and
                    stay organized with our meal planning tools.
                  </p>
                </div>
              </div>
            </div>
            <Image
              alt="Image"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              height="310"
              src="/about.jpg"
              width="550"
            />
          </div>
        </div>
      </section>

      <section className="w-full !m-0 py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <div className="grid items-center justify-center gap-4 text-center">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Meet the Culinary Experts
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Our team of passionate food enthusiasts and developers are
                dedicated to creating the ultimate recipes app for you.
              </p>
            </div>
            <div className="flex justify-center items-center mt-8 w-full gap-8 lg:gap-12 [&>Image]:mx-auto">
              {team.map((member, i) => (
                <div key={i} className="space-y-2 text-center">
                  <Image
                    alt="Avatar"
                    className="mx-auto h-20 w-20 rounded-full object-cover"
                    height="100"
                    src="/user.png"
                    style={{
                      aspectRatio: "100/100",
                      objectFit: "cover",
                    }}
                    width="100"
                  />
                  <div className="font-semibold">{member.name}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {member.job}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <ContactSection />
    </main>
  );
}
