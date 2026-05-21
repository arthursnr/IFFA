import { MainPage } from "./components/mainPage/mainPage";


export default function Home() {

  return (
    <Head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000000" />
     </Head>
    <div className="min-h-screen min-w-screen bg-gray-100">
      <MainPage />
    </div>
  );
}
