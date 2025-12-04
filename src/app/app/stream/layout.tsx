export default function StreamLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen">
      <main className="container max-w-[1600px] mx-auto p-6 lg:p-10 lg:px-0">
        {children}
      </main>
    </div>
  );
}
