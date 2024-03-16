"use client";

import { useStoreModal } from "@/hooks/use-store-modal";
import { Modal } from "@/components/ui/modal";

export const StoreModal = () => {
  const storeModal = useStoreModal();
  return (
    <Modal
      title="Create a store"
      description="Add a new store to manage"
      isOpen={storeModal.isOpen}
      onClose={storeModal.onClose}
    >
      create form
    </Modal>
  );
};
