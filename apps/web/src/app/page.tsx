import { ClientComponent } from './_components/ClientComponent';

export default function Home() {
  return (
    <div className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-8">tRPC Demo</h1>

      <div className="grid gap-8 md:grid-cols-2">
        <ClientComponent />
      </div>
    </div>
  );
}
