import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ReduxProvider from "@/redux/redux-provider";
import Header from "@/themes/components/header/header";

// Import the Inter font from Google Fonts with the Latin subset
const inter = Inter({ subsets: ["latin"] });

// Metadata for the page, including title and description for SEO and other metadata purposes
export const metadata: Metadata = {
  title: "Create Next App", // Title of the application displayed in the browser tab
  description: "Generated by create next app", // Short description for the app
};

/**
 * RootLayout component that wraps the entire application.
 * This component provides the overall structure of the page, including
 * font styling, Redux store provider, and the Header component.
 * 
 * It accepts `children` as a prop, which represents the content that will
 * be rendered within the layout.
 * 
 * @param {object} props - The props for the RootLayout component.
 * @param {React.ReactNode} props.children - The content to be rendered inside the layout.
 * 
 * @returns {JSX.Element} The layout with the font, Redux provider, and header applied.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Wrap the application with ReduxProvider to provide access to the Redux store */}
        <ReduxProvider>
          {/* The Header component that will be displayed at the top of the page */}
          <Header />
          {/* Render the children (dynamic content) passed to the layout */}
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}
