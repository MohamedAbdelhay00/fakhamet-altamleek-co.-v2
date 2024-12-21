import { MapPin, Mail, Phone } from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactUs() {
  return (
    <section className="px-10 pb-10 pt-[110px]">
      <div className="grid h-[screen] grid-cols-1 md:grid-cols-2">
        {/* Left Section - Image */}
        <div className="relative h-[30vh] md:h-full">
          <div className="p-20">
            <Image
              src="/images/contact-us.jpg"
              alt="Contact Us"
              layout="fill"
              objectFit="cover"
              className="rounded-xl"
            />
          </div>
        </div>

        {/* Right Section - Form & Contact Info */}
        <div className="flex flex-col justify-center py-8 dark:text-light-500 md:px-16">
          <h2 className="mb-4 text-4xl font-extrabold text-dark-100 dark:text-light-700">
            Get in Touch
          </h2>
          <p className="mb-6 leading-relaxed text-light-400 dark:text-light-500">
            We would love to hear from you! Use the form below or reach out
            through our contact details.
          </p>

          {/* Form */}
          <form className="mb-8 space-y-4">
            <div>
              <label className="mb-1 block font-medium text-dark-300 dark:text-light-500">
                Full Name
              </label>
              <Input
                className="rounded-md border-light-400 bg-light-700 px-3 py-6 focus:ring-2 focus:ring-primary dark:border-dark-200 dark:bg-dark-400 dark:text-light-700"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="mb-1 block font-medium text-dark-300 dark:text-light-500">
                Email Address
              </label>
              <Input
                className="rounded-md border-light-400 bg-light-700 px-3 py-6 focus:ring-2 focus:ring-primary dark:border-dark-200 dark:bg-dark-400 dark:text-light-700"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="mb-1 block font-medium text-dark-300 dark:text-light-500">
                Message
              </label>
              <Textarea
                rows={3}
                className="rounded-md border-light-400 bg-light-700 focus:ring-2 focus:ring-primary dark:border-dark-200 dark:bg-dark-400 dark:text-light-700"
                placeholder="Type your message here..."
              />
            </div>
            <Button
              className="w-full rounded-md bg-primary py-6 font-medium text-primary-foreground transition-all duration-300 hover:bg-primary/90 dark:bg-primary dark:text-primary-foreground dark:hover:bg-primary/90"
              type="submit"
            >
              Send Message
            </Button>
          </form>

          {/* Contact Details */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="flex size-10 items-center justify-center rounded-full bg-primary">
                <MapPin size={20} className="text-light-700" />
              </div>
              <p className="text-dark-300 dark:text-light-500">
                Jeddah, Saudi Arabia
              </p>
            </div>
            <div className="flex items-center space-x-3">
              <div className="flex size-10 items-center justify-center rounded-full bg-primary">
                <Mail size={20} className="text-light-700" />
              </div>
              <p className="text-dark-300 dark:text-light-500">
                info@company.com
              </p>
            </div>
            <div className="flex items-center space-x-3">
              <div className="flex size-10 items-center justify-center rounded-full bg-primary">
                <Phone size={20} className="text-light-700" />
              </div>
              <p className="text-dark-300 dark:text-light-500">
                +966-123-456-789
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
