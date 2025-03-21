import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";
import CustomCursor from "../components/CustomCursor";
import { GoogleAnalytics } from '@next/third-parties/google'

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata = {
    title: "Magdalena Inalaf, Software Developer",
    description: "My animated CV for the world",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className="h-full">
        <head>

        </head>
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased h-full bg-[--background] text-[--text-color] relative`}>
        {children}
        <CustomCursor /> {/* 🔹 Cursor en todas las páginas */}
        </body>
        <GoogleAnalytics gaId="G-ER9LCZNFE2" />
        </html>
    );
}
