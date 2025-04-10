export default async function WorkDetail({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;
  console.log(id);
  return (
    <div className="p-6">
      <h3>Project {id}</h3>
      <p>A brief description of Project One.</p>
    </div>
  );
}
