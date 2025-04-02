export default async function WorkDetail({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;
  console.log(id);
  return (
    <div>
      <h3>Project One</h3>
      <p>A brief description of Project One.</p>
    </div>
  );
}
