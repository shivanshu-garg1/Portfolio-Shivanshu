import React from "react";
import { HoverEffect } from "./ui/card-hover-effect";
import { projects } from "../data";

export default function Card() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <HoverEffect items={projects} />
    </div>
  );
}
