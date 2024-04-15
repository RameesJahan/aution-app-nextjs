import Header from "@/components/Header";

export default function MarketLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="flex min-h-screen flex-col items-center gap-4 p-8">
      <Header />
      {children}
    </section>
  );
}
