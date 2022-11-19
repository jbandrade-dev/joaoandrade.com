/* eslint-disable @next/next/no-img-element */
import { Heading } from "./Heading";
import { Text } from "./Text";

export function Cards() {
  return (
    <div className="grid pc:grid-cols-2 pc:gap-20">
      <div className="mb-12 px-16 text-center pc:order-2">
        <div className="mb-8">
          <Heading className="uppercase mob:text-5xl font-bold text-center pc:pt-20">Deputado Reimont</Heading>
          <div className="flex bg-orange-500 h-0.5 mx-32 mt-6" />
        </div>
        <Text className="flex text-xl leading-relaxed tracking-wider justify-center">
          Site desenvolvido para campanha do então vereador e atual deputado federal do Rio, Reimont.
        </Text>
      </div>
      <img className="w-screen pc:order-1" src="/site-reimont.png" alt="Imagem de evento do portfólio" />
    </div>
  )
}