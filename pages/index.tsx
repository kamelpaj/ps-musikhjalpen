import Head from "next/head";
import useSWR from "swr";
import Card from "../components/Card";
import Office from "../components/Office";
import Spinner from "../components/Spinner";
import { GBG } from "../constants/offices";
import { Data } from "./api/data";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Home() {
  const { data, error } = useSWR<Data>("/api/data", fetcher);

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
          PS ❤️ Musikhjälpen
        </h1>
        <section className="p-2 flex flex-col lg:flex-row justify-center gap-2">
          <Card
            title={`Total: ${data?.totalAmount} SEK`}
            message={"Ska vi ha någon fin text här?"}
          />
          <Card
            title={`Top donator: ${data?.topD?.name}`}
            message={`${data?.topD?.amount} SEK - ${data?.topD?.message}`}
          />
        </section>

        <section className="p-2 flex flex-col lg:flex-row justify-center gap-2">
          {data?.offices.map((office) => (
            <>
              <Office officeData={office} image={office.image} />
            </>
          ))}
        </section>
      </main>
    </div>
  );
}
