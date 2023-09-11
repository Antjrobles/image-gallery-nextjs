import "./globals.css";
import type { Metadata } from "next";


export const metadata: Metadata = {
    title: "Image Gallery | Pexels API",
    description: "Image gallery mad with nextjs TS and Tailwind",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <main className="max-w-6xl mx-auto">
                {children}
            </main>
            </body>
        </html>
    );
}
