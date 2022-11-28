import { GameInfo } from "../components/GameInfo";
import { Header } from "../components/Header";
import { PreOrder } from "../components/PreOrder";

export default function Home() {
  return (
    <>
      <Header />
      <PreOrder />
      <GameInfo />
    </>
  );
}
