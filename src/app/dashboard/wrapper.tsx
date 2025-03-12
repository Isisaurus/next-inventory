export default function DashboardWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`flex bg-neutral-50 text-gray-900 w-full min-h-screen`}>
      <p>sidebar</p>
      <main className="flex flex-col w-full h-full py-7 px-9 bg-neutral-50">
        {children}
      </main>
    </div>
  );
}
