

export default function Card(props: {title: string, message: string}) {
  return (
    <div className="block max-w-sm p-6 border border-emerald-200 rounded-lg shadow-md hover:bg-emerald-100 dark:bg-emerald-800 dark:border-emerald-700 dark:hover:bg-emerald-700 text-center">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-emerald-900 dark:text-white ">
        {props.title}
      </h5>
      <p className="font-normal text-slate-200">
        {props.message}
      </p>
    </div>
  );
}
