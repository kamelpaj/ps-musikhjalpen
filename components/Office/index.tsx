import { OfficeData } from "../../types";

export default function Office(props: {
  officeData: OfficeData;
  image: string;
}) {
  return (
    <div className="w-full max-w-sm bg-white rounded-lg shadow-md dark:bg-emerald-800 dark:border-emerald-700 border border-emerald-200">
      <img
        className="p-8 rounded-t-lg object-contain"
        src={props.image}
        alt="product image"
      />
      <div className="px-5 pb-5">
        <a href="#">
          <h5 className="text-xl font-semibold tracking-tight  dark:text-white">
            {props.officeData.name}
          </h5>
        </a>

        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold  dark:text-white">
            {props.officeData.totalAmount} SEK
          </span>
          <button
            className="text-white bg-emerald-700 hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-emerald-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-emerald-600 dark:hover:bg-emerald-700 dark:focus:ring-emerald-800"
            onClick={() => alert("Coming soon :)")}
          >
            See all donators
          </button>
        </div>

        <div className="pt-2">
          {props.officeData.topD && (
            <p className="text-l font-bold  dark:text-white">
              Top donator: {props.officeData.topD?.name},{" "}
              {props.officeData.topD?.amount} SEK
            </p>
          )}
          <p className="text-s font-normal text-slate-200">
            {props.officeData.topD?.message}
          </p>
        </div>
      </div>
    </div>
  );
}
