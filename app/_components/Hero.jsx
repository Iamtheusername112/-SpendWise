import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="bg-gray-50 flex items-center flex-col">
      <div class="relative py-16">
        <div
          aria-hidden="true"
          class="absolute inset-0 h-max w-full m-auto grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20"
        >
          <div class="blur-[106px] h-56 bg-gradient-to-br from-teal-500 to-purple-400 dark:from-blue-700"></div>
          <div class="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600"></div>
        </div>

        <div class="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
          <div class="relative">
            <div class="mt-6 m-auto space-y-6 md:w-8/12 lg:w-7/12">
              <h1 class="text-center text-4xl font-bold text-gray-800 dark:text-white md:text-5xl">
                Manage Your Expense
              </h1>
              <p class="text-center text-xl text-gray-600 dark:text-gray-300">
                Empower your financial future: Take charge of your budget and
                save with confidence.
              </p>
              <div class="flex flex-wrap justify-center gap-6">
                <a
                  href="#"
                  class="relative flex h-12 w-full items-center justify-center px-8 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
                >
                  <span class="relative text-base font-semibold text-white dark:text-dark">
                    Get Started
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Image
        src={"/dashboard.jpeg"}
        width={1000}
        height={700}
        alt="Hero section image"
        className="-mt-5 rounded-xl border-2"
      />
    </div>
  );
};

export default Hero;
