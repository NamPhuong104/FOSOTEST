export default async function DynamicDetailPage({
  params
}: {
  params: Promise<{ dynamic: string; id: string }>
}) {
  const { dynamic, id } = await params

  return (
    <div className='container py-10'>
      <h1 className='mb-6 text-3xl font-bold'>Dynamic Detail Page</h1>
      <p className='text-lg'>
        Category: <strong>{dynamic}</strong>
      </p>
      <p className='text-lg'>
        ID: <strong>{id}</strong>
      </p>
    </div>
  )
}
