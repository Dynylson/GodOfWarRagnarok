import { Characters } from "../components/Characters";
import { CharactersSlide } from "../components/CharactersSlide";
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
      <Characters />
      <CharactersSlide />
    </>
  );
}
