import { MapPin, Mail, Phone } from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactUs() {
  return (
    <section className="px-10 pb-10 pt-[110px]">
      {/* <div className="max-h-10 p-[10px]"></div> */}
      <div className="grid h-[screen] grid-cols-1 md:grid-cols-2">
        {/* Left Section - Image */}
        <div className="relative h-[30vh] md:h-full">
          <div className=" p-20">
            <Image
              src="/images/contact-us.jpg"
              alt="Contact Us"
              layout="fill"
              objectFit=" cover"
              className=" rounded-xl"
            />
          </div>
        </div>

        {/* Right Section - Form & Contact Info */}
        <div className="flex flex-col justify-center bg-white  py-8 dark:bg-transparent dark:text-gray-100 md:px-16">
          <h2 className="mb-4 text-4xl font-extrabold text-gray-900 dark:text-white">
            Get in Touch
          </h2>
          <p className="mb-6 leading-relaxed text-gray-600 dark:text-gray-400">
            We'd love to hear from you! Use the form below or reach out through
            our contact details.
          </p>

          {/* Form */}
          <form className="mb-8 space-y-4">
            <div>
              <label className="mb-1 block font-medium text-gray-700 dark:text-gray-300">
                Full Name
              </label>
              <Input
                className="rounded-md border-gray-300 px-3 py-6 focus:ring-2 focus:ring-[#F36F21] dark:border-gray-900 dark:bg-[#121212] dark:text-gray-100"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="mb-1 block font-medium text-gray-700 dark:text-gray-300">
                Email Address
              </label>
              <Input
                className="rounded-md border-gray-300 px-3 py-6 focus:ring-2 focus:ring-[#F36F21] dark:border-gray-900 dark:bg-[#121212] dark:text-gray-100"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="mb-1 block font-medium text-gray-700 dark:text-gray-300">
                Message
              </label>
              <Textarea
                rows={3}
                className="rounded-md border-gray-300 focus:ring-2 focus:ring-[#F36F21] dark:border-gray-900 dark:bg-[#121212] dark:text-gray-100"
                placeholder="Type your message here..."
              />
            </div>
            <Button
              className="w-full rounded-md bg-[#F36F21] py-6 font-medium text-white transition-all duration-300 hover:bg-[#D95F1D] dark:bg-[#F36F21] dark:text-white dark:hover:bg-[#D95F1D]"
              type="submit"
            >
              Send Message
            </Button>
          </form>

          {/* Contact Details */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="flex size-10 items-center justify-center rounded-full bg-[#F36F21]">
                <MapPin size={20} className="text-white" />
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                Jeddah, Saudi Arabia
              </p>
            </div>
            <div className="flex items-center space-x-3">
              <div className="flex size-10 items-center justify-center rounded-full bg-[#F36F21]">
                <Mail size={20} className="text-white" />
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                info@company.com
              </p>
            </div>
            <div className="flex items-center space-x-3">
              <div className="flex size-10 items-center justify-center rounded-full bg-[#F36F21]">
                <Phone size={20} className="text-white" />
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                +966-123-456-789
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
