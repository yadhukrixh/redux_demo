"use client";
import React, { useState } from "react";
import styles from "./left-container.module.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { setLeftChildrenNumber } from "@/redux/slices/controlledByChildren";
import { setHeaderString } from "@/redux/slices/controlledByHeaderSlice";

/**
 * LeftContainer Component
 * 
 * This component handles:
 * - Local state updates
 * - Dispatching Redux actions to modify global state
 * - Updating the header and left children count
 */
const LeftContainer = () => {
  const dispatch = useDispatch();
  const [localCount, setLocalCount] = useState(0);

  // Increment local count and update Redux state
  const handleIncrement = () => {
    setLocalCount((prev) => {
      const updatedCount = prev + 1;
      dispatch(setLeftChildrenNumber(updatedCount));
      return updatedCount;
    });
  };

  // Decrement local count and update Redux state
  const handleDecrement = () => {
    setLocalCount((prev) => {
      const updatedCount = prev - 1;
      dispatch(setLeftChildrenNumber(updatedCount));
      return updatedCount;
    });
  };

  // Modify header text
  const handleHeaderChange = () => {
    dispatch(setHeaderString("Modified by left container"));
  };

  const heading = useSelector((state: RootState) => state.children.childrenString);
  const countFromHeader = useSelector((state: RootState) => state.header.headerNumber);
  const countByRightChildren = useSelector((state: RootState) => state.children.rightChildrenNumber);

  return (
    <div className={styles.leftContainer}>
      <h2>{heading}</h2>
      <p>Local count: {localCount}</p>
      <div className={styles.buttons}>
        <button onClick={handleIncrement}>+</button>
        <button onClick={handleDecrement}>-</button>
      </div>
      <p>Count of header: {countFromHeader}</p>
      <p>Count of right container: {countByRightChildren}</p>
      <button onClick={handleHeaderChange}>Change Header content</button>
    </div>
  );
};

export default LeftContainer;