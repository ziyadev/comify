"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion } from "motion/react";

export const TestamonialItem = ({
  name,
  testamonial,
  role,
  avatar,
}: {
  name: string;
  testamonial: string;
  role: string;
  avatar: string;
}) => {
  return (
    <div className="w-full h-[350px] rounded-xl shadow-sm bg-muted p-8 text-lg flex flex-col justify-between ">
      <p>{testamonial}</p>
      <div className="flex gap-2 h-10">
        <Avatar className="shrink shadow-sm p-[3px] h-full aspect-square w-auto">
          <AvatarImage className="rounded-full" src={avatar} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>

        <div>
          <p className="text-sm font-semibold">{name}</p>
          <p className="text-sm text-muted-foreground">{role}</p>
        </div>
      </div>
    </div>
  );
};
