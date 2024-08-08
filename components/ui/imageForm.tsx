"use client";

import { useState, ChangeEvent } from "react";
import { Input } from "@/components/ui/input";
import Image from "next/image";

export default function ImageForm() {
  const [image, setImage] = useState<string | null>(null);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        setImage(reader.result as string);
      };
    }
  };
  return (
    <>
      {image && (
        <Image
          src={image}
          alt="image"
          width={300}
          height={300}
          className="m-2"
        />
      )}
      <Input type="file" onChange={handleChange} />
    </>
  );
}
