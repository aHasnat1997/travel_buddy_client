import Footer from "@/components/MainFooter";
import MainNav from "@/components/MainNav";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="min-h-screen relative flex flex-col">
      <div>
        <MainNav />
      </div>
      {children}
      <div className="mt-auto">
        <Footer />
      </div>
    </main>
  )
};