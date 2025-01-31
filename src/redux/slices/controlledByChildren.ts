import { createSlice, PayloadAction } from "@reduxjs/toolkit";

/**
 * Interface representing the state managed by the `controlledByChildren` slice.
 */
interface ControlledByChildrenState {
    /** A string representing the children-related text */
    childrenString: string | undefined;
    
    /** A number representing the left child's count */
    leftChildrenNumber: number | null;

    /** A number representing the right child's count */
    rightChildrenNumber: number | null;
}

/**
 * Initial state for the `controlledByChildren` slice.
 */
const initialState: ControlledByChildrenState = {
    childrenString: "Initial Children",
    leftChildrenNumber: 0,
    rightChildrenNumber: 0
};

/**
 * Redux slice for managing state related to children components.
 *
 * This slice provides reducers to update:
 * - `childrenString`: A string value related to children components.
 * - `leftChildrenNumber`: A numerical value controlled by the left child.
 * - `rightChildrenNumber`: A numerical value controlled by the right child.
 */
const controlledByChildrenSlice = createSlice({
    name: "controlledByChildren",
    initialState,
    reducers: {
        /**
         * Updates the `childrenString` state with the provided payload.
         * @param {ControlledByChildrenState} state - The current state.
         * @param {PayloadAction<string>} action - The action containing the new children string.
         */
        setChildrenString: (state, action: PayloadAction<string>) => {
            state.childrenString = action.payload;
        },

        /**
         * Updates the `leftChildrenNumber` state with the provided payload.
         * @param {ControlledByChildrenState} state - The current state.
         * @param {PayloadAction<number>} action - The action containing the new left child count.
         */
        setLeftChildrenNumber: (state, action: PayloadAction<number>) => {
            state.leftChildrenNumber = action.payload;
        },

        /**
         * Updates the `rightChildrenNumber` state with the provided payload.
         * @param {ControlledByChildrenState} state - The current state.
         * @param {PayloadAction<number>} action - The action containing the new right child count.
         */
        setRightChildrenNumber: (state, action: PayloadAction<number>) => {
            state.rightChildrenNumber = action.payload;
        },
    },
});

// Exporting the actions for use in components
export const { setChildrenString, setLeftChildrenNumber, setRightChildrenNumber } = controlledByChildrenSlice.actions;

// Exporting the reducer to be used in the Redux store
export default controlledByChildrenSlice.reducer;
