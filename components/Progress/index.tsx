export default function Progress(props: { name: string; value: number }) {
  return (
    <>
      <div className="mb-1 text-lg font-medium">
        {props.name}
      </div>
      <div className="mb-4 w-full h-4 bg-gray-200 rounded-full">
        <div
          className="h-4 bg-emerald-600 rounded-full"
          style={{ width: `${props.value}%` }}
        ></div>
      </div>
    </>
  );
}
