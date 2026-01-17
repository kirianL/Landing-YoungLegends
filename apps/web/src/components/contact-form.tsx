"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function ContactForm({ locale }: { locale: string }) {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const isEs = locale === "es";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    // Simulate API call
    setTimeout(() => {
      setStatus("success");
    }, 2000);
  };

  if (status === "success") {
    return (
      <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
        <h2 className="text-3xl font-black uppercase tracking-tighter">
          {isEs ? "¡Mensaje Enviado!" : "Message Sent!"}
        </h2>
        <p className="text-muted-foreground">
          {isEs
            ? "Nos pondremos en contacto contigo pronto."
            : "We'll get back to you shortly."}
        </p>
        <Button variant="link" onClick={() => setStatus("idle")}>
          {isEs ? "Enviar otro" : "Send another"}
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
            {isEs ? "Nombre" : "Name"}
          </label>
          <input
            required
            className="w-full bg-black/50 border border-white/10 px-4 py-3 focus:outline-none focus:border-white transition-colors"
          />
        </div>
        <div className="space-y-2">
          <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
            Email
          </label>
          <input
            required
            type="email"
            className="w-full bg-black/50 border border-white/10 px-4 py-3 focus:outline-none focus:border-white transition-colors"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
          {isEs ? "Tipo de solicitud" : "Request Type"}
        </label>
        <select className="w-full bg-black/50 border border-white/10 px-4 py-3 focus:outline-none focus:border-white transition-colors appearance-none text-white">
          <option value="booking">Booking</option>
          <option value="press">{isEs ? "Prensa" : "Press"}</option>
          <option value="collab">
            {isEs ? "Colaboración" : "Collaboration"}
          </option>
          <option value="other">{isEs ? "Otro" : "Other"}</option>
        </select>
      </div>

      <div className="space-y-2">
        <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
          {isEs ? "Mensaje" : "Message"}
        </label>
        <textarea
          required
          rows={5}
          className="w-full bg-black/50 border border-white/10 px-4 py-3 focus:outline-none focus:border-white transition-colors resize-none"
        />
      </div>

      <Button
        disabled={status === "loading"}
        className="w-full bg-white text-black font-black uppercase tracking-widest py-8 hover:scale-[1.02] active:scale-100 transition-all disabled:opacity-50 h-auto"
      >
        {status === "loading"
          ? isEs
            ? "Enviando..."
            : "Sending..."
          : isEs
            ? "Enviar Mensaje"
            : "Send Message"}
      </Button>
    </form>
  );
}
