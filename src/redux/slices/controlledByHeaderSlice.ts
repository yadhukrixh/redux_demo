import { createSlice, PayloadAction } from "@reduxjs/toolkit";

/**
 * Interface for the controlledByHeader state.
 */
interface ControlledByHeaderState {
    /** A string representing the header text */
    headerString: string | undefined;
    
    /** A number representing the header-related count */
    headerNumber: number | null;
}

/**
 * Initial state for the controlledByHeader slice.
 */
const initialState: ControlledByHeaderState = {
    headerString: "Initial Header",
    headerNumber: 0,
};

/**
 * Redux slice for managing the header state.
 *
 * This slice provides reducers to update:
 * - `headerString`: A string value that represents the header text.
 * - `headerNumber`: A numerical value that can be controlled via user actions.
 */
const controlledByHeaderSlice = createSlice({
    name: "controlledByHeader",
    initialState,
    reducers: {
        /**
         * Updates the `headerString` state with the provided payload.
         * @param {ControlledByHeaderState} state - The current state.
         * @param {PayloadAction<string>} action - The action containing the new header string.
         */
        setHeaderString: (state, action: PayloadAction<string>) => {
            state.headerString = action.payload;
        },

        /**
         * Updates the `headerNumber` state with the provided payload.
         * @param {ControlledByHeaderState} state - The current state.
         * @param {PayloadAction<number>} action - The action containing the new header number.
         */
        setHeaderNumber: (state, action: PayloadAction<number>) => {
            state.headerNumber = action.payload;
        },
    },
});

// Exporting the actions for use in components
export const { setHeaderString, setHeaderNumber } = controlledByHeaderSlice.actions;

// Exporting the reducer to be used in the Redux store
export default controlledByHeaderSlice.reducer;
