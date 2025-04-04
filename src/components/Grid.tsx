"use client";
import React from "react";
import { BentoGrid, BentoGridItem } from "../components/ui/bento-grid";
import { gridItems } from "@/data";

export default function Grid() {
  return (
    <section className="mt-10 px-4 sm:px-6 md:px-8">
      <BentoGrid className="max-w-6xl mx-auto cursor-pointer">
        {gridItems.map(({ id, title, description, className, img, imgClassName, titleClassName, spareImg }) => (
          <BentoGridItem
            key={id}
            id={id}
            title={title}
            description={description}
            className={className}
            img={img}
            imgClassName={imgClassName}
            titleClassName={titleClassName}
            spareImg={spareImg}
          />
        ))}
      </BentoGrid>
    </section>
  );
}
