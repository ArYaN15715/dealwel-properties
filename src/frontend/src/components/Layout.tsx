import { Footer } from "@/components/Footer";
import { MobileBottomBar } from "@/components/MobileBottomBar";
import { Navbar } from "@/components/Navbar";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <main className="flex-1">{children}</main>

      <Footer />

      {/* Sticky mobile bottom bar — only visible on small screens */}
      <MobileBottomBar />

      {/* Safe area bottom spacer so content isn't hidden behind the sticky bar on mobile */}
      <div className="h-[72px] md:hidden" aria-hidden="true" />
    </div>
  );
}
