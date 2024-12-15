import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const router = useRouter();

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <header className="bg-blue-500 text-white py-4 px-6 flex items-center">
        {router.pathname !== "/" && (
          <button
            onClick={() => router.back()}
            className="mr-4 text-xl font-bold hover:opacity-80"
          >
            ←
          </button>
        )}
        <Link href="/" className="text-xl font-bold">
          Preqin Investors
        </Link>
      </header>
      <main className="flex-1 p-6">{children}</main>
      <footer className="bg-gray-200 text-center py-4 text-sm">
        © 2024 Preqin
      </footer>
    </div>
  );
};

export default Layout;
