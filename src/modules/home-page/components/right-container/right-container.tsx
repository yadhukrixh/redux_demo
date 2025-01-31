"use client";
import React, { useState } from "react";
import styles from "./right-container.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setRightChildrenNumber } from "@/redux/slices/controlledByChildren";
import { setHeaderString } from "@/redux/slices/controlledByHeaderSlice";
import { RootState } from "@/redux/store";

/**
 * RightContainer Component
 *
 * This component is responsible for managing local state updates and dispatching actions
 * to the Redux store. It modifies the right child count and updates the header state.
 */
const RightContainer = () => {
  const dispatch = useDispatch();
  const [localCount, setLocalCount] = useState(0);

  /**
   * Increments the local count and updates the Redux store.
   */
  const handleIncrement = () => {
    setLocalCount((prev) => {
      const updatedCount = prev + 1;
      dispatch(setRightChildrenNumber(updatedCount));
      return updatedCount;
    });
  };

  /**
   * Decrements the local count and updates the Redux store.
   */
  const handleDecrement = () => {
    setLocalCount((prev) => {
      const updatedCount = prev - 1;
      dispatch(setRightChildrenNumber(updatedCount));
      return updatedCount;
    });
  };

  /**
   * Updates the global header string via Redux.
   */
  const handleHeaderChange = () => {
    dispatch(setHeaderString("Modified by Right container"));
  };

  // Redux state selectors
  const heading = useSelector((state: RootState) => state.children.childrenString);
  const countFromHeader = useSelector((state: RootState) => state.header.headerNumber);
  const countByLeftChildren = useSelector((state: RootState) => state.children.leftChildrenNumber);

  return (
    <div className={styles.rightContainer}>
      <h2>{heading}</h2>
      <p>Local count: {localCount}</p>
      <div className={styles.buttons}>
        <button onClick={handleIncrement}>+</button>
        <button onClick={handleDecrement}>-</button>
      </div>
      <p>Count of header: {countFromHeader}</p>
      <p>Count of Left container: {countByLeftChildren}</p>
      <button onClick={handleHeaderChange}>Change Header content</button>
    </div>
  );
};

export default RightContainer;
