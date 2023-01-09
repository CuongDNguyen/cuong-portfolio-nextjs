import Head from 'next/head'
import Link from 'next/link';
import Image from "next/image";


export default function Home() {


  return (
    <>
      <Head>
        <title>Cuong Nguyen</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      Welcome to <Link href="/experience">Next.js!</Link>
      <Image src="/images/CartoonPanda.png" height={144} width={144} alt="CartoonPanda"/>
      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </>
  )
}