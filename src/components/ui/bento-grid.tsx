"use client";

import { cn } from "@/lib/utils";
import Globe from "../Globe";
import { ConfettiButton } from "../magicui/confetti";
import Image from "next/image"; // ✅ Import next/image

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 auto-rows-[12rem]",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  id?: number;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  return (
    <div
      className={cn(
        "group/bento relative row-span-1 flex flex-col justify-between overflow-hidden rounded-3xl border border-blue-500/[0.5] bg-transparent text-white p-4 transition duration-200 hover:shadow-md shadow-blue-950",
        id === 5 && "items-center justify-center text-center",
        (id === 1 || id === 6) &&
          "items-center justify-center text-center text-lg sm:text-xl lg:text-2xl font-bold",
        id === 2 && "justify-start min-h-[12rem]",
        className
      )}
    >
      {/* Background Image */}
      {img && (
        <Image
          src={img}
          alt="bento-background"
          fill
          className={cn(
            "object-cover opacity-50 z-0 rounded-3xl",
            imgClassName
          )}
          priority
        />
      )}

      {/* Optional Overlay Image at Bottom Right */}
      {spareImg && (
        <div
          className={cn(
            "absolute right-0 -bottom-5",
            id === 5 && "w-full opacity-80"
          )}
        >
          <Image
            src={spareImg}
            alt="bento-spare"
            width={200}
            height={200}
            className="object-cover object-center w-full h-full"
          />
        </div>
      )}

      {/* Text and Content Area */}
      <div
        className={cn(
          titleClassName,
          "group-hover/bento translate-x-2 transition duration-200 relative flex items-start justify-center h-full flex-col opacity-100 z-90 px-4 sm:px-5 md:px-8 py-5 lg:py-10"
        )}
      >
        {description && (
          <div className="text-xs sm:text-sm font-normal text-white dark:text-neutral-300 mb-2">
            {description}
          </div>
        )}

        {title && (
          <div className="font-bold text-white dark:text-neutral-200 text-sm sm:text-base z-50 md:text-lg lg:text-md max-w-96">
            {title}
          </div>
        )}

        {/* Globe Animation for id === 3 */}
        {id === 3 && <Globe />}

        {/* Tech Stack Showcase for id === 4 */}
        {id === 4 && (
          <div className="flex gap-1 sm:gap-2 lg:gap-5 absolute -right-3 lg:-right-2">
            <div className="flex flex-col gap-2 sm:gap-3 lg:gap-8">
              <span className="py-2 sm:py-3 px-3 rounded-lg text-center bg-[#10132E]" />
              {["React.js", "Node.js", "Express.js", "MongoDB", "TypeScript"].map(
                (item) => (
                  <span
                    key={item}
                    className="py-1 sm:py-2 px-2 text-xs sm:text-sm lg:text-base opacity-50 rounded-lg text-center bg-[#10132E]"
                  >
                    {item}
                  </span>
                )
              )}
              <span className="py-2 sm:py-3 px-3 rounded-lg text-center bg-[#10132E]" />
            </div>
            <div className="flex flex-col gap-2 sm:gap-3 lg:gap-8">
              <span className="py-2 sm:py-3 px-3 rounded-lg text-center bg-[#10132E]" />
              {["Javascript", "Java", "C", "C++", "Git"].map((item) => (
                <span
                  key={item}
                  className="py-1 sm:py-2 px-2 text-xs sm:text-sm lg:text-base opacity-50 rounded-lg text-center bg-[#10132E]"
                >
                  {item}
                </span>
              ))}
              <span className="py-2 sm:py-3 px-3 rounded-lg text-center bg-[#10132E]" />
            </div>
          </div>
        )}

        {/* Confetti Button for id === 6 */}
        {id === 6 && (
          <div className="flex justify-center w-full mt-4">
            <ConfettiButton email="gargshivanshu000@gmail.com" />
          </div>
        )}
      </div>
    </div>
  );
};
