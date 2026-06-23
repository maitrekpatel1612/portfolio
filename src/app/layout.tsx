import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Maitrek Patel",
    description: "Full Stack Engineer | AI Engineer | IIITDM Jabalpur",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
