import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { GoogleAnalytics } from "@next/third-parties/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata = {
  title: "Gerald Citadel | Full-Stack Software Engineer & Digital Product Developer",
  description: "Portfolio of Gerald Citadel, a Full-Stack Software Engineer specializing in modern web applications, scalable architecture, and intuitive user experiences using React, Next.js, and Node.js.",
  keywords: ["Full-Stack Engineer", "Software Developer", "Next.js Developer", "React Developer", "React Router Framework Mode Developer", "Gerald Citadel", "Portfolio"],
  metadataBase: new URL("https://gerald-portfolio-theta.vercel.app"),
  openGraph: {
    title: "Gerald Citadel | Full-Stack Software Engineer",
    description: "Full-Stack Software Engineer specializing in modern web applications, scalable architecture, and high-performance digital products.",
    url: "https://gerald-portfolio-theta.vercel.app",
    siteName: "Gerald Citadel Portfolio",
    type: "website",
  },
  verification: {
    google: "JU-c1N-MgH8Oj3e6f3hQKQ2yNI4j_HSHej-qt-8bhAo",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ToastContainer />
        {children}
      </body>
      {/* Google Analytics GA4 */}
      <GoogleAnalytics gaId="G-KFMHM3BQKC" /> 
    </html>
  );
}