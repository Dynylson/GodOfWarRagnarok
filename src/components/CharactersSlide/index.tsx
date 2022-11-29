import { Flex } from "@chakra-ui/react";
import { CardCharacters } from "../CardCharacters";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export function CharactersSlide() {
  return (
    <>
      <Flex my={10} maxWidth={1600} ml="auto">
        <Swiper slidesPerView={3.5} spaceBetween={30}>
          <SwiperSlide>
            <CardCharacters
              src="/characters/kratos.png"
              alt="Kratos"
              name="Kratos"
              info="Deus da Guerra"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardCharacters
              src="/characters/atreus.png"
              alt="Atreus"
              name="Atreus"
              info="Filho de Kratos"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardCharacters
              src="/characters/mimir.png"
              alt="Mimir"
              name="Mimir"
              info="Aliado de Kratos"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardCharacters
              src="/characters/freya.png"
              alt="Freya"
              name="Freya"
              info="Mãe de Baldur"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardCharacters
              src="/characters/thor.jpg"
              alt="Thor"
              name="Thor"
              info="Filho de Odin"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardCharacters
              src="/characters/thyr.jpg"
              alt="Thyr"
              name="Thyr"
              info="Deus da Guerra da mitologia Nóridca"
            />
          </SwiperSlide>
        </Swiper>
      </Flex>
    </>
  );
}
