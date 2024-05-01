import MainNav from "@/components/MainNav/MainNav";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="relative">
      <div className="w-full absolute top-0 z-50">
        <MainNav />
      </div>
      {children}
    </main>
  )
}