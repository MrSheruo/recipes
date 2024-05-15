import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function ContactSection() {
  return (
    <div id="contact" className="container mx-auto px-4 pb-44">
      <div className="grid gap-8 md:grid-cols-2 items-center">
        <div>
          <Image
            alt="Contact"
            className="rounded-lg"
            height="400"
            src="/contact.jpg"
            style={{
              aspectRatio: "600/400",
              objectFit: "cover",
            }}
            width="600"
          />
        </div>
        <div className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold">Get in touch</h2>
            <p className="text-gray-500 dark:text-gray-400">
              Have a question or want to work together? Fill out the form below
              and we will get back to you as soon as possible.
            </p>
          </div>
          <form className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Enter your name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" placeholder="Enter your email" type="email" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                className="min-h-[120px]"
                id="message"
                placeholder="Enter your message"
              />
            </div>
            <Button type="submit">Submit</Button>
          </form>
        </div>
      </div>
    </div>
  );
}
