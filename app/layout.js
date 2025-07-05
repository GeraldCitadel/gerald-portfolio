import { Geist, Geist_Mono, } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';



const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});


export const metadata = {
    title: "Gerald Citadel",
    description: "A portfolio website for a fullstack developer Gerald Citadel",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.subsets} ${geistMono.variable}  antialiased`}
            >
                <ToastContainer />
                {children}
            </body>
        </html>
    );
}
