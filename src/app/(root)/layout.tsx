import MainNav from "@/components/MainNav";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="relative">
      <div>
        <MainNav />
      </div>
      {children}
    </main>
  )
};