"use client";

import type React from "react";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    agreeToTerms: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormData((prev) => ({ ...prev, agreeToTerms: checked }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    console.log("Form submitted:", formData);

    // Simulate API call
    // await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after showing success message
    // setTimeout(() => {
    //   setIsSubmitted(false);
    //   setFormData({
    //     fullName: "",
    //     companyName: "",
    //     email: "",
    //     phone: "",
    //     agreeToTerms: false,
    //   });
    // }, 3000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  // const formFieldVariants = {
  //   focus: { scale: 1.02, borderColor: "#8b5cf6" },
  //   blur: { scale: 1, borderColor: "rgba(255, 255, 255, 0.1)" },
  // };

  return (
    <div className="min-h-[calc(100vh-var(--navbar-height))] flex items-center justify-center text-foreground px-4 max-sm:my-6">
      <motion.div
        className="w-full max-w-6xl grid md:grid-cols-2 gap-8 rounded-xl"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Left column */}
        <motion.div
          className="flex flex-col justify-center"
          variants={itemVariants}
        >
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-4"
            variants={itemVariants}
          >
            Meet with Amar
          </motion.h1>
          <motion.p className="dark:text-gray-300 mb-8" variants={itemVariants}>
            Let us show you how we can transform the way you govern and share
            your sensitive data.
          </motion.p>

          <motion.div
            className="flex items-center gap-4 mb-8"
            variants={itemVariants}
          >
            <motion.div
              className="w-16 h-16 rounded-full overflow-hidden bg-[#ff9f7f] flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
            >
              <Image
                loading="lazy"
                width={64}
                height={64}
                src="/images/avatar.svg"
                alt="Cameron Williamson"
                className="w-full h-full object-cover"
              ></Image>
            </motion.div>
            <div>
              <h3 className="font-semibold text-lg">Amarjit Karan Sharma</h3>
              <p className="text-gray-400">Freelancer | Full Stack Developer</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Right column - Form */}
        <motion.div variants={itemVariants}>
          {isSubmitted ? (
            <motion.div
              className="h-full flex flex-col items-center justify-center text-center p-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              <motion.div
                className="w-20 h-20 rounded-full bg-purple-600 flex items-center justify-center mb-6"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              >
                <Check size={32} className="text-white" />
              </motion.div>
              <h2 className="text-2xl font-bold mb-2">Message Sent!</h2>
              <p className="text-gray-300">
                Thank you for reaching out. Cameron will get back to you
                shortly.
              </p>
            </motion.div>
          ) : (
            <motion.form
              onSubmit={handleSubmit}
              className="space-y-6 p-2"
              variants={containerVariants}
            >
              <motion.div className="space-y-2" variants={itemVariants}>
                <Label
                  htmlFor="fullName"
                  className="text-sm font-medium flex gap-1"
                >
                  Full Name <span className="text-primary">*</span>
                </Label>

                <Input
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Your full name"
                  required
                  className="dark:bg-[#1a1d2d] dark:border-[#2a2d3d] bg-white border-white dark:text-white h-12 rounded-md focus:ring-2 focus:ring-purple-500 transition-all"
                />
              </motion.div>

              <motion.div className="space-y-2" variants={itemVariants}>
                <Label
                  htmlFor="companyName"
                  className="text-sm font-medium flex gap-1"
                >
                  Company Name <span className="text-primary">*</span>
                </Label>

                <Input
                  id="companyName"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  placeholder="Your company name"
                  required
                  className="dark:bg-[#1a1d2d] dark:border-[#2a2d3d] bg-white border-white dark:text-white h-12 rounded-md focus:ring-2 focus:ring-purple-500 transition-all"
                />
              </motion.div>

              <motion.div className="space-y-2" variants={itemVariants}>
                <Label
                  htmlFor="email"
                  className="text-sm font-medium flex gap-1"
                >
                  Email <span className="text-primary">*</span>
                </Label>

                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email address"
                  required
                  className="dark:bg-[#1a1d2d] dark:border-[#2a2d3d] bg-white border-white dark:text-white h-12 rounded-md focus:ring-2 focus:ring-purple-500 transition-all"
                />
              </motion.div>

              <motion.div className="space-y-2" variants={itemVariants}>
                <Label
                  htmlFor="phone"
                  className="text-sm font-medium flex gap-1"
                >
                  Phone <span className="text-primary">*</span>
                </Label>

                <Input
                  id="phone"
                  name="phone"
                  type="text"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Your Phone Number"
                  required
                  className="dark:bg-[#1a1d2d] dark:border-[#2a2d3d] bg-white border-white dark:text-white h-12 rounded-md focus:ring-2 focus:ring-purple-500 transition-all"
                />
              </motion.div>

              <motion.div
                className="flex items-center gap-2"
                variants={itemVariants}
              >
                <Checkbox
                  id="terms"
                  checked={formData.agreeToTerms}
                  onCheckedChange={handleCheckboxChange}
                  className="data-[state=checked]:bg-purple-600 border-gray-500"
                />
                <Label
                  htmlFor="terms"
                  className="text-sm dark:text-gray-300 cursor-pointer"
                >
                  I agree that my personal data will be processed in accordance
                  with the privacy policy
                </Label>
              </motion.div>

              <motion.div variants={itemVariants}>
                <motion.button
                  type="submit"
                  disabled={!formData.agreeToTerms || isSubmitting}
                  className={`w-full md:w-auto px-8 py-2 h-12 bg-primary active:bg-purple-700 text-white rounded-md transition-all ${
                    isSubmitting ? "opacity-80" : ""
                  }`}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <motion.div
                        className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{
                          repeat: Number.POSITIVE_INFINITY,
                          duration: 1,
                          ease: "linear",
                        }}
                      />
                      <span>Sending...</span>
                    </div>
                  ) : (
                    "Send Message"
                  )}
                </motion.button>
              </motion.div>
            </motion.form>
          )}
        </motion.div>
      </motion.div>
    </div>
  );
}
