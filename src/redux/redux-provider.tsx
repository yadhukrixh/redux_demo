"use client";

import { Provider } from "react-redux";
import { store } from "./store";

/**
 * ReduxProvider Component
 *
 * This component serves as a wrapper to provide the Redux store to the entire application.
 * It ensures that any child components have access to the Redux state and can dispatch actions.
 *
 * @param {Object} props - Component props.
 * @param {React.ReactNode} props.children - The child components that need access to the Redux store.
 * @returns {JSX.Element} The provider component that wraps the application with Redux store.
 */
export default function ReduxProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Provider store={store}>{children}</Provider>;
}
