import { GameInfo } from "../components/GameInfo";
import { Header } from "../components/Header";
import { PreOrder } from "../components/PreOrder";
import { Sinopse } from "../components/Sinopse";

export default function Home() {
  return (
    <>
      <Header />
      <PreOrder />
      <GameInfo />
      <Sinopse />
    </>
  );
}
