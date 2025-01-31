"use client";
import React, { useState } from "react";
import styles from "./header.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setHeaderNumber } from "@/redux/slices/controlledByHeaderSlice";
import { RootState } from "@/redux/store";

/**
 * Header component that displays a header string, a local count,
 * and counts of left and right children from the Redux store.
 * Provides buttons to increment and decrement the local count,
 * while also updating the Redux store with the new count.
 */
const Header = () => {
  const dispatch = useDispatch(); // Hook to dispatch Redux actions
  const [localCount, setLocalCount] = useState(0); // Local state to manage count in the component

  // Selector to retrieve the header string from the Redux store
  let headerString = useSelector(
    (state: RootState) => state.header.headerString
  );

  // Selectors to retrieve the number of left and right children from the Redux store
  let countByLeftChildren = useSelector(
    (state: RootState) => state.children.leftChildrenNumber
  );

  let countByRightChildren = useSelector(
    (state: RootState) => state.children.rightChildrenNumber
  );

  /**
   * Handles incrementing the local count and dispatching the updated count to the Redux store.
   */
  const handleIncrement = () => {
    setLocalCount((prev) => {
      const updatedCount = prev + 1;
      dispatch(setHeaderNumber(updatedCount)); // Dispatch action to update header count in the Redux store
      return updatedCount; // Update local state
    });
  };

  /**
   * Handles decrementing the local count and dispatching the updated count to the Redux store.
   */
  const handleDecrement = () => {
    setLocalCount((prev) => {
      const updatedCount = prev - 1;
      dispatch(setHeaderNumber(updatedCount)); // Dispatch action to update header count in the Redux store
      return updatedCount; // Update local state
    });
  };

  return (
    <div className={styles.header}>
      {/* Display the header string and local count */}
      <div>
        <h2>{headerString}</h2>
        <p>Local count:{localCount}</p>
        <div className={styles.buttons}>
          {/* Buttons to increment and decrement the local count */}
          <button onClick={handleIncrement}>+</button>
          <button onClick={handleDecrement}>-</button>
        </div>
      </div>
      {/* Display counts of left and right children */}
      <div>
        <p>count of left children:{countByLeftChildren}</p>
        <p>count of right children:{countByRightChildren}</p>
      </div>
    </div>
  );
};

export default Header;
