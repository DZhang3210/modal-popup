"use client";
import React from "react";
import { Modal } from "./ui/modal";
import { useModal } from "../../hooks/use-modal";
import { Button } from "./ui/button";

const AlertModal = () => {
  const decrement = useModal((state) => state.decrementCount);
  const increment = useModal((state) => state.incrementCount);
  const count = useModal((state) => state.count);
  return (
    <div>
      <Modal
        title="Hello"
        description="Hello"
        isOpen={count < 10}
        onClose={decrement}
      >
        <div>
          <div>Count: {count}</div>
          <Button onClick={increment}>Increment</Button>
          <Button onClick={decrement} variant={"outline"} className="ml-10">
            Decrement
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default AlertModal;
