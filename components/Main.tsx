import Image from 'next/image'
import React from 'react'
import { Heading } from './Heading'
import { Text } from './Text'

const Main = () => {
  return (
    <div className="w-full h-screen m-0 p-0">
      <div className="absolute top-0 left-0 w-full h-screen bg-black opacity-80"></div>
      <video className="w-full h-full object-cover" poster="" autoPlay loop muted>
        <source src="/code.mp4" type="video/mp4" />
      </video>
      <div className="absolute w-full h-full top-7 flex flex-col justify-center items-center text-white ">
        <div className="mb-8">
          <Heading className="uppercase px-6 mob:text-5xl font-bold text-center">Desenvolvedor Javascript</Heading>

        </div>
        <Text className="relative flex max-w-[380px] px-6 font-semibold text-2xl justify-center text-center">
          Olá, seja bem-vindo! <br />Me chamo João Andrade, e sou desenvolvedor fullstack júnior, especialista em desenvolvimento de aplicativos e sites em geral. Fico feliz em ajudar as pessoas a darem vida para seus projetos no mundo virtual.
        </Text>
      </div>
    </div>
  )
}

export default Main