import TopMenu from "@/components/ui/top-menu/TopMenu";

export default function shopLayout({children}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen ">

      <TopMenu />

      { children }
    </main>
  );
}