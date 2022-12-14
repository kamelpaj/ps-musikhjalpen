import Image from "next/image";

export default function Progress(props: { name: string; value: number }) {
  return (
    <>
      <div className="flex justify-between mb-1">
        <span className="text-base font-medium ">{props.name}</span>
        <span className="text-sm font-medium ">{props.value.toFixed(1)}%</span>
      </div>

      <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
        <div
          className="bg-rose-600 h-4 rounded-full"
          style={{ width: `${props.value}%` }}
        >
          <Image
            style={{
              position: "relative",
              right: 0,
              left: `${50 + props.value}%`,
            }}
            src="/horse.gif"
            alt="running horse"
            width={100}
            height={100}
          />
        </div>
      </div>
    </>
  );
}
