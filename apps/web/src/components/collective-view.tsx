"use client";

import { useState } from "react";
import { MemberCard } from "./member-card";
import { cn } from "@/lib/utils";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ROLES = [
  { id: "all", label: { es: "Todos", en: "All" } },
  { id: "artist", label: { es: "Artistas", en: "Artists" } },
  { id: "producer", label: { es: "Productores", en: "Producers" } },
  { id: "dj", label: { es: "DJs", en: "DJs" } },
  { id: "videographer", label: { es: "Videógrafos", en: "Videographers" } },
  { id: "photographer", label: { es: "Fotógrafos", en: "Photographers" } },
];

export function CollectiveView({
  members,
  locale,
}: {
  members: any[];
  locale: string;
}) {
  const [activeRole, setActiveRole] = useState("all");
  const currentLocale = locale as "es" | "en";

  const filteredMembers =
    activeRole === "all"
      ? members
      : members.filter((m) => m.roles?.includes(activeRole));

  return (
    <div className="space-y-12">
      {/* Filter Tabs */}
      <Tabs defaultValue="all" className="w-full" onValueChange={setActiveRole}>
        <TabsList className="flex flex-wrap h-auto bg-transparent p-0 rounded-none border-b border-white/10 w-full justify-start gap-1">
          {ROLES.map((role) => (
            <TabsTrigger
              key={role.id}
              value={role.id}
              className="px-4 md:px-8 py-3 text-[10px] md:text-xs uppercase font-bold tracking-[0.2em] rounded-none data-[state=active]:bg-white data-[state=active]:text-black border-b-2 border-transparent data-[state=active]:border-white"
            >
              {role.label[currentLocale]}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {filteredMembers.map((member, index) => (
          <MemberCard
            key={member.id}
            member={member}
            locale={locale}
            index={index}
          />
        ))}
      </div>

      {filteredMembers.length === 0 && (
        <div className="py-24 text-center text-muted-foreground">
          {locale === "es"
            ? "No hay miembros en esta categoría."
            : "No members found in this category."}
        </div>
      )}
    </div>
  );
}
