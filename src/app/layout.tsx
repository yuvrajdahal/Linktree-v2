"use client";

import { useThemeToggle } from "@/appstate/darkmode";
import "./globals.css";
import { Inter } from "next/font/google";
import classNames from "@/utilities/classnames";
import Navbar from "@/components/Nav";
import { motion } from "framer-motion";
import { Suspense, useEffect } from "react";
import Footer from "@/components/Footer/Footer";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { setSystemTheme, theme } = useThemeToggle();

  useEffect(() => {
    setSystemTheme();
  }, []);

  return (
    <html lang="en">
      <body
        className={classNames(
          "h-screen w-screen bg-light dark:bg-dark md:overflow-x-hidden"
        )}
      >
        <motion.div
          className={classNames("container mx-auto px-10 py-8")}
          key={theme}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          <Navbar />
          {children}
          <Footer />
        </motion.div>
      </body>
    </html>
  );
}
