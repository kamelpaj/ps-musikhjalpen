import Head from "next/head";
import useSWR from "swr";
import Card from "../components/Card";
import Office from "../components/Office";
import Progress from "../components/Progress";
import Spinner from "../components/Spinner";
import { Data } from "./api/data";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Home() {
  const { data, error } = useSWR<Data>("/api/data", fetcher, {
    refreshInterval: 10000,
  });

  if (error) return <p>whoops something broke</p>;
  if (!data)
    return (
      <main className="w-screen h-screen mt-20">
        <Spinner />
      </main>
    );

  return (
    <div>
      <Head>
        <title>PS ♥️ Musikhjälpen</title>
        <meta name="description" content="Office donation tracker" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://rsms.me/" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </Head>

      <main className="p-4">
        <h1 className="text-4xl lg:text-6xl font-bold text-center pb-4">
          PS <span className="animate-pulse"> ❤️ </span> Musikhjälpen
        </h1>
        <section className="p-2 flex flex-col lg:flex-row justify-center gap-2">
          <Card
            title={`Total: ${data?.totalAmount} SEK`}
            message={"💰FOR THE KIDZ💰"}
          />
          <Card
            title={`Top donator: ${
              data?.topD?.name ? data?.topD?.name : "Anonymous"
            }`}
            message={`${data?.topD?.amount} SEK ${
              data?.topD?.message ? `- ${data?.topD?.message}` : ""
            }`}
          />
        </section>

        <section className="p-2 m-auto lg:w-1/2 flex flex-col justify-center gap-2">
          <div className="block p-6 border rounded-lg shadow-md bg-emerald-800 border-emerald-700 text-center">
          <h5 className="mb-2 text-2xl font-bold tracking-tight">ROAD TO 10K</h5>
            {data.offices.map((office, i) => (
              <Progress
                key={i}
                value={(office.totalAmount / 10000) * 100}
                name={office.name}
              />
            ))}
          </div>
        </section>

        <section className="p-2 flex flex-col lg:flex-row justify-center gap-2">
          {data?.offices.map((office) => (
            <article key={office.name}>
              <Office officeData={office} image={office.image} />
            </article>
          ))}
        </section>
      </main>
    </div>
  );
}
