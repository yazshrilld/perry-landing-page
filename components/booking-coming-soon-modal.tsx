"use client";

import type React from "react";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

type BookingComingSoonModalProps = {
  children: React.ReactNode;
};

export function BookingComingSoonModal({ children }: BookingComingSoonModalProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-md rounded-xl border-[var(--ui-light-gray)] bg-white p-0 overflow-hidden">
        <div className="h-1.5 w-full bg-[var(--brand-primary)]" />
        <div className="p-6 md:p-7">
          <DialogHeader className="text-left">
            <DialogTitle className="text-2xl font-bold text-[var(--brand-charcoal)]">Coming Soon</DialogTitle>
            <DialogDescription className="mt-2 text-[var(--text-gray)] leading-7">
              This feature is coming soon and will be available to all users.
              <br />
              In the meantime, please contact us on:
              <br />
              <span className="font-semibold text-[var(--brand-charcoal)]">08032266625, 07061889992</span>.
            </DialogDescription>
          </DialogHeader>

          <DialogFooter className="mt-6">
            <DialogClose asChild>
              <button
                type="button"
                className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-[var(--brand-primary)] text-white hover:bg-slate-900 transition"
              >
                Got it
              </button>
            </DialogClose>
          </DialogFooter>
        </div>
      </DialogContent>
    </Dialog>
  );
}
