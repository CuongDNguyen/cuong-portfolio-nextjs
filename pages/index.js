import Head from 'next/head'
import Image from "next/image";
import Navbar from "../components/Navigation";
import 'bootstrap/dist/css/bootstrap.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Cuong Nguyen</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
        <div className="container">
            <Image src="/images/CartoonPanda.png" height={144} width={144} alt="CartoonPanda"/>
        </div>
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