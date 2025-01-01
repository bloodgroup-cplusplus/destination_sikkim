"use client";
import { LensDemo } from "@/components/Lens";
import background from "@/photos/background.jpg";
import gangtok from "@/photos/gangtok.jpg";
import gurudongmar from "@/photos/gurudongmar.jpg";

function Destinations() {
  return (
    <>
      <LensDemo
        heading="Namchi South Sikkim"
        description="namchi is bomb"
        imageData={background}
      />
      <LensDemo
        heading="Gangtok East Sikkim"
        description="Gangtok is bomb"
        imageData={gangtok}
      />
      <LensDemo
        heading="Gurudongmar East Sikkim"
        description="Gurudongmar is bomb as well"
        imageData={gurudongmar}
      />
    </>
  );
}

export default Destinations;
