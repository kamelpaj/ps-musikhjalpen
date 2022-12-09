export default function Card(props: { title: string; message: string }) {
  return (
    <div className="block max-w-sm p-6 border rounded-lg shadow-md bg-emerald-800 border-emerald-700 text-center">
      <h5 className="mb-2 text-2xl font-bold tracking-tight">{props.title}</h5>
      <p className="font-normal text-slate-200">{props.message}</p>
    </div>
  );
}
