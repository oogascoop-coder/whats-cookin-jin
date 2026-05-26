import type { Metadata } from "next";
import "@/app/globals.css";
import { Sidebar } from "@/components/Sidebar";

export const metadata: Metadata = {
  title: "What's Cookin', Jin",
  description: "Easy recipes by Hajin for whatever you're craving today."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="font-sans antialiased">
        <div className="min-h-screen lg:flex">
          <Sidebar />
          <main className="min-h-screen flex-1 px-4 pb-24 pt-4 sm:px-6 lg:ml-72 lg:px-8 lg:py-8">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
