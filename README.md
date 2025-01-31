# Next.js Project with Redux and TypeScript

## 🚀 Project Overview
This project is built using **Next.js** with **TypeScript** and **Redux Toolkit** for state management. The application follows best practices for modular state management and is optimized for scalability.

## 🛠️ Tech Stack
- **Next.js** (React Framework)
- **TypeScript** (Static Typing)
- **Redux Toolkit** (State Management)
- **React-Redux** (Bindings for React Components)
- **CSS Modules** (Scoped Styling)

---

## 📂 Project Structure
```
📦 your-project-name
├── 📁 app                                  # Next.js App Router (If using App Directory)
│   ├── 📁 modules                          # Different modules
│   │   ├── 📁 home-page                    # Home page module
│   │   |   ├── 📁 components               # Components of home-page
|   |   |   |   ├── 📁 left-container       # Left component
|   |   |   |   ├── 📁 right-container      # Right component
|   |   |   ├── 📁 views                    # Wrap all components in here.
├── 📁 themes         
│   ├── components                          # Reusable React components
├── 📁 redux                                # Redux state management
│   ├── 📁 slices                           # Redux slices(contains different slices)
│   ├── store.ts                            # Redux store setup
│   ├── redux-provider.ts                   # Wrap children in redux provider
├── 📁 pages                                # Next.js Pages Router (If using Pages Directory)
├── 📁 styles                               # Global and component styles
├── 📄 package.json                         # Project dependencies & scripts
└── 📄 README.md                            # Project documentation
```

---

## 🔧 Installation & Setup
### 1️⃣ Clone the Repository
```sh
git clone https://github.com/your-username/your-repo.git
cd your-repo
```

### 2️⃣ Install Dependencies
```sh
npm install  # or yarn install
```

### 3️⃣ Run the Development Server
```sh
npm run dev  # or yarn dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📌 Redux State Management
### 🏗 Store Setup

In `redux/store.ts` redux store has been defined and the slices where defined in `redux/slices`.
And also `redux/redux-provider.ts` wrap the childrens using Provider from react-redux.
The redux-provider wrapper where used in layout.tsx in order to wrap the children, So the children could use Redux store.

### 🎯 Example Redux Slice (`redux/slices/controlledByHeaderSlice.ts`)
```ts
import { createSlice } from "@reduxjs/toolkit";

interface ControlledByHeaderState {
    headerString: string | undefined;
    headerNumber: number | null;
}

const initialState: ControlledByHeaderState = {
    headerString: "Initial Header",
    headerNumber: 0,
};

const controlledByHeaderSlice = createSlice({
    name: "controlledByHeader",
    initialState,
    reducers: {
        setHeaderString: (state, action) => {
            state.headerString = action.payload;
        },
        setHeaderNumber: (state, action) => {
            state.headerNumber = action.payload;
        },
    },
});

export const { setHeaderString, setHeaderNumber } = controlledByHeaderSlice.actions;
export default controlledByHeaderSlice.reducer;
```

---

## 📜 Usage
### Using Redux in a Component (`components/Header.tsx`)
```tsx
"use client";
import React, { useState } from "react";
import styles from "./header.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setHeaderNumber } from "@/redux/slices/controlledByHeaderSlice";
import { RootState } from "@/redux/store";

const Header = () => {
  const dispatch = useDispatch();
  const [localCount, setLocalCount] = useState(0);

  let headerString = useSelector(
    (state: RootState) => state.header.headerString
  );
  let countByLeftChildren = useSelector(
    (state: RootState) => state.children.leftChildrenNumber
  );

  let countByRightChildren = useSelector(
    (state: RootState) => state.children.rightChildrenNumber
  );

  const handleIncrement = () => {
    setLocalCount((prev) => {
      const updatedCount = prev + 1;
      dispatch(setHeaderNumber(updatedCount));
      return updatedCount;
    });
  };

  const handleDecrement = () => {
    setLocalCount((prev) => {
      const updatedCount = prev - 1;
      dispatch(setHeaderNumber(updatedCount));
      return updatedCount;
    });
  };

  return (
    <div className={styles.header}>
      <div>
        <h2>{headerString}</h2>
        <p>Local count:{localCount}</p>
        <div className={styles.buttons}>
          <button onClick={handleIncrement}>+</button>
          <button onClick={handleDecrement}>-</button>
        </div>
      </div>
      <div>
        <p>count of left children:{countByLeftChildren}</p>
        <p>count of right children:{countByRightChildren}</p>
      </div>
    </div>
  );
};

export default Header;
```

---

## 🏗 Deployment
### Deploy to Vercel
```sh
npm run build  # or yarn build
vercel deploy
```

---



