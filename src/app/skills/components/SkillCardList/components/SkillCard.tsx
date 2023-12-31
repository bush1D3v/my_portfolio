"use client";

import { useState, type ReactElement } from "react";

import { Modal } from "@/components";

interface SkillCardProps {
  icon: ReactElement;
  title: string;
  details: string[];
}

export default function SkillCard({
  icon,
  title,
  details
}: SkillCardProps): ReactElement {
  const [ isModalOpen, setIsModalOpen ] = useState<boolean>(false);

  return (
    <li
      className="relative md:static bg-Black2 hover:bg-transparent border-transparent border-2
      hover:border-White rounded-3xl duration-200 ease-in flex flex-col p-12 text-center cursor-pointer gap-10"
      onClick={!isModalOpen ? (): void => setIsModalOpen(!isModalOpen) : (): string => "nada"}
    >
      <Modal keys={details} isOpen={isModalOpen} setOpen={setIsModalOpen} />
      <span className="text-8xl text-White px-20">{icon}</span>
      <h3>{title}</h3>
    </li >
  );
}
