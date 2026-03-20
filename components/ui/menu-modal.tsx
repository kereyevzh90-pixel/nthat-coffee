"use client";

import { useEffect } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

export type SubMenuItem = {
  name: string;
  price: string;
  description?: string;
  imgSrc?: string;
};

type MenuModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  items: SubMenuItem[];
  imgSrc?: string;
};

export function MenuModal({ isOpen, onClose, title, items, imgSrc }: MenuModalProps) {
  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <>
      {/* Backdrop */}
      <div
        className={cn(
          "fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm transition-opacity duration-300",
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        onClick={onClose}
      />

      {/* Dialog window */}
      <div
        className={cn(
          "fixed left-1/2 top-1/2 z-[101] w-full max-w-md -translate-x-1/2 -translate-y-1/2 transition-all duration-300",
          isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
        )}
      >
        <div className="bg-white rounded-none shadow-2xl overflow-hidden flex flex-col max-h-[85vh] mx-4">

          {/* Photo header */}
          {imgSrc ? (
            <div className="relative w-full h-48 flex-shrink-0">
              <Image src={imgSrc} alt={title} fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/50" />
              <h3 className="absolute bottom-4 left-6 text-3xl font-black uppercase tracking-tight text-white drop-shadow">{title}</h3>
              <button onClick={onClose} className="absolute top-4 right-4 p-1.5 rounded-none bg-black/30 hover:bg-black/50 transition-colors">
                <X className="w-4 h-4 text-white" />
              </button>
            </div>
          ) : (
            <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-neutral-100">
              <h3 className="text-3xl font-black uppercase tracking-tight text-[#0a1628]">{title}</h3>
              <button onClick={onClose} className="p-2 rounded-none hover:bg-neutral-100 transition-colors">
                <X className="w-5 h-5 text-neutral-400" />
              </button>
            </div>
          )}

          {/* Items */}
          <div className="overflow-y-auto flex-1 px-4 py-4 flex flex-col gap-2">
            {items.map((item, i) => (
              item.name.startsWith("—") || item.name.startsWith("*") ? (
                <p key={i} className="text-xs text-neutral-400 text-center py-2 font-medium tracking-widest uppercase">{item.name}</p>
              ) : item.imgSrc ? (
                <div key={i} className="flex items-center gap-3 p-2 rounded-none hover:bg-neutral-50 transition-colors border border-neutral-100">
                  <div className="relative w-16 h-16 rounded-none overflow-hidden flex-shrink-0">
                    <Image src={item.imgSrc} alt={item.name} fill className="object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-[#0a1628] text-sm leading-tight">{item.name}</p>
                    {item.description && (
                      <p className="text-xs text-neutral-400 mt-0.5 leading-tight">{item.description}</p>
                    )}
                  </div>
                  {item.price && (
                    <span className="text-[#2563eb] font-bold text-sm whitespace-nowrap">{item.price}</span>
                  )}
                </div>
              ) : (
                <div key={i} className="flex items-start justify-between gap-4 py-2.5 border-b border-neutral-100 last:border-0 px-1">
                  <div className="flex-1">
                    <p className="font-semibold text-[#0a1628] text-sm leading-tight">{item.name}</p>
                    {item.description && (
                      <p className="text-xs text-neutral-400 mt-0.5">{item.description}</p>
                    )}
                  </div>
                  {item.price && (
                    <span className="text-[#2563eb] font-bold text-sm whitespace-nowrap">{item.price}</span>
                  )}
                </div>
              )
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
