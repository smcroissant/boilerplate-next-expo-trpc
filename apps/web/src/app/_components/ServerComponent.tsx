import { serverApi } from "@/trpc/server"

export const ServerComponent = async () => {
  const data = await serverApi.example.hello({
    text: 'from Server Component'
  })

  return (<div className="p-4 bg-blue-100 rounded-lg">
    <h2 className="text-lg font-semibold mb-2">Server Component</h2>
    <p>{data.greeting}</p>
    <p className="text-sm text-gray-600">Time: {data.time}</p>
  </div>
  )

}
