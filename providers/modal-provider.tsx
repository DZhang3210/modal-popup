"use client";
import AlertModal from "@/components/alert-modal";
import React, { useEffect, useState } from "react";

const ModalProvider = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return (
    <div className="">
      <AlertModal />
    </div>
  );
};

export default ModalProvider;
