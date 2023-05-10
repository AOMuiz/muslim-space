import Head from "next/head";
import { Inter } from "next/font/google";
import tw from "twin.macro";
import ListingCard from "@/components/ListingCard";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Muslim Space</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className={inter.className}>Welcome to Muslim space</h1>
        <div>
          <ListingCard />
        </div>
      </main>
    </>
  );
}
