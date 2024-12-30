import Header from "./Header";

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto py-6">{children}</div>
      </main>
    </div>
  );
}

export default Layout;
