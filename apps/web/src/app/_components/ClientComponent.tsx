'use client';

import { clientApi } from '@/trpc/client';

export function ClientComponent() {
  const { data, isLoading } = clientApi.example.hello.useQuery({
    text: 'from Client Component',
  });

  const addMutation = clientApi.example.add.useMutation();

  if (isLoading) return <div>Loading...</div>;
  if (!data) return <div>No data</div>;

  return (
    <div className="p-4 bg-blue-100 rounded-lg">
      <h2 className="text-lg font-semibold mb-2">Client Component</h2>
      <p>{data.greeting}</p>
      <p className="text-sm text-gray-600">Time: {data.time}</p>

      <div className="mt-4">
        <button
          onClick={() => {
            addMutation.mutate(
              { x: 5, y: 3 },
              {
                onSuccess: (result) => {
                  alert(`5 + 3 = ${result}`);
                },
              }
            );
          }}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          Calculate 5 + 3
        </button>
      </div>
    </div>
  );
}
