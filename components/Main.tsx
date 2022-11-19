import React from 'react'
import { Heading } from './Heading'
import { Text } from './Text'

const Main = () => {
  return (
    <div className="w-full h-screen">
      <div className="absolute top-0 left-0 w-full h-screen bg-black opacity-80"></div>
      <video className="w-full h-full object-cover" poster="" autoPlay loop muted>
        <source src="/code.mp4" type="video/mp4" />
      </video>
      <div className="absolute w-full h-full top-0 flex flex-col justify-start pt-32 items-center text-white ">
        <div className="mb-8">
          <Heading className="uppercase px-6 mob:text-5xl font-bold text-center">João Andrade</Heading>

        </div>
        <Text className="flex font-semibold px-10 text-xl leading-relaxed tracking-wider justify-center text-center">
        Olá! Seja bem-vindo sou Desenvolvedor Frontend, especialista em desenvolvimento de aplicativos e sites em geral. Ajudo pessoas dando vida a seus projetos.
        </Text>
      </div>
    </div>
  )
}

export default Main