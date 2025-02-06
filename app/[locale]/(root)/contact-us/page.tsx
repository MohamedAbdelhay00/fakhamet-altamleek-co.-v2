"use client";

import emailjs from "@emailjs/browser";
import { MapPin, Mail, Phone } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useLocale } from "@/context/LocaleContext";
import { useToast } from "@/hooks/use-toast";

export default function ContactUs() {
  const t = useTranslations("contactUs");
  const { locale } = useLocale();
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    if (!formData.fullName || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      setIsLoading(false);
      return;
    }

    if (!validateEmail(formData.email)) {
      toast({
        title: "Error",
        description: "Please enter a valid email address",
        variant: "destructive",
      });
      setIsLoading(false);
      return;
    }

    try {
      const response = await emailjs.send(
        "service_gzuxog9",
        "template_o1uvg4i",
        {
          from_name: formData.fullName,
          from_email: formData.email,
          message: formData.message,
          reply_to: formData.email,
        },
        "M8UkcqiT5XnE3mNID" // Public Key
      );

      console.log("SUCCESS!", response.status, response.text);

      setFormData({ fullName: "", email: "", message: "" });
      toast({
        title: "Success!",
        description: t("form.successMessage"),
        variant: "default",
      });
    } catch (error) {
      console.error("FAILED...", error);
      toast({
        title: "Error!",
        description: t("form.errorMessage"),
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="px-4 pb-10 pt-[110px] sm:px-10">
      <div className="grid h-screen grid-cols-1 md:grid-cols-2">
        {/* Left Section - Image */}
        <div className="relative h-[30vh] md:h-full">
          <div className="p-4 md:p-20">
            <Image
              src="/images/contact-us.jpg"
              alt="Contact Us"
              fill
              style={{ objectFit: "cover" }}
              className="rounded-xl"
            />
          </div>
        </div>

        {/* Right Section - Form & Contact Info */}
        <div className="flex flex-col justify-center py-8 dark:text-light-500 md:px-16">
          <h2 className="mb-4 text-4xl font-extrabold text-dark-100 dark:text-light-700">
            {t("title")}
          </h2>
          <p className="mb-6 leading-relaxed text-light-400 dark:text-light-500">
            {t("subtitle")}
          </p>

          {/* Form */}
          <form className="mb-8 space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="mb-1 block font-medium text-dark-300 dark:text-light-500">
                {t("form.fullName")}
              </label>
              <Input
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                className="rounded-md border-light-400 bg-light-700 px-3 py-6 focus:ring-2 focus:ring-primary dark:border-dark-200 dark:bg-dark-400 dark:text-light-700"
                placeholder={t("form.fullNamePlaceholder")}
                required
              />
            </div>
            <div>
              <label className="mb-1 block font-medium text-dark-300 dark:text-light-500">
                {t("form.emailAddress")}
              </label>
              <Input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                className="rounded-md border-light-400 bg-light-700 px-3 py-6 focus:ring-2 focus:ring-primary dark:border-dark-200 dark:bg-dark-400 dark:text-light-700"
                placeholder={t("form.emailPlaceholder")}
                required
              />
            </div>
            <div>
              <label className="mb-1 block font-medium text-dark-300 dark:text-light-500">
                {t("form.message")}
              </label>
              <Textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={3}
                className="rounded-md border-light-400 bg-light-700 focus:ring-2 focus:ring-primary dark:border-dark-200 dark:bg-dark-400 dark:text-light-700"
                placeholder={t("form.messagePlaceholder")}
                required
              />
            </div>
            <Button
              className="w-full rounded-md bg-primary py-6 font-medium text-primary-foreground transition-all duration-300 hover:bg-primary/90 dark:bg-primary dark:text-primary-foreground dark:hover:bg-primary/90"
              type="submit"
              disabled={isLoading}
              aria-label="Submit form"
            >
              {isLoading ? t("form.sending") : t("form.button")}
            </Button>
          </form>

          {/* Contact Details */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div
                className={`${
                  locale === "ar" ? "mx-2" : ""
                } flex size-10 items-center justify-center rounded-full bg-primary hover:bg-primary/75`}
              >
                <MapPin
                  size={20}
                  className="text-light-700"
                  aria-label="Location"
                />
              </div>
              <p className="text-dark-300 dark:text-light-500">
                {t("details.location")}
              </p>
            </div>
            <div className="flex items-center space-x-3">
              <div
                className={`${
                  locale === "ar" ? "mx-2" : ""
                } flex size-10 items-center justify-center rounded-full bg-primary hover:bg-primary/75`}
              >
                <Mail size={20} className="text-light-700" aria-label="Email" />
              </div>
              <p className="text-dark-300 dark:text-light-500">
                info@fakhametaltamleek.com
              </p>
            </div>
            <div className="flex items-center space-x-3">
              <div
                className={`${
                  locale === "ar" ? "mx-2" : ""
                } flex size-10 items-center justify-center rounded-full bg-primary hover:bg-primary/75`}
              >
                <Phone
                  size={20}
                  className="text-light-700"
                  aria-label="Phone"
                />
              </div>
              <p className="text-dark-300 dark:text-light-500">
                +966 544 934 745
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
