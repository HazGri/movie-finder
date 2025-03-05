"use client"
import Image from "next/image";
import { Input } from "./composants/Input"


export default function Home() {
  return (
    <div className="min-h-full bg-gray-800 items-center flex flex-col gap-8">  
      <h1 className="text-6xl cursor-default opacity-70 text-slate-50 text-center font-bold pt-8">MovieFinder</h1>
      <Input/>
    </div>
  );
}
