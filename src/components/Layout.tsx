import { ReactNode } from "react";
import { SessionProvider } from "next-auth/react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <SessionProvider>
      <div className="min-h-screen bg-gray-100">
        <main>{children}</main>
      </div>
    </SessionProvider>
  );
};
