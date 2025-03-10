"use client"
import Image from "next/image";
import { Input } from "./composants/Input"
import { Suspense } from "react";


export default function Home() {
  return (
    <div className="min-h-full p-2 bg-gray-800 items-center flex flex-col gap-8">  
      <h1 className="text-6xl cursor-default opacity-70 text-slate-50 text-center font-bold pt-8">MovieFinder</h1>
      <Suspense>
      <Input/>
      </Suspense>
    </div>
  );
}
