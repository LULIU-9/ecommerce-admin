"use client";

import { Modal } from "@/components/ui/modal";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="h-screen">
      <Modal title="test" description="test des" isOpen onClose={() => {}} />
    </div>
  );
}
