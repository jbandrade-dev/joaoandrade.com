import { v4 as uuidv4 } from "uuid"
import { MyDisclosure } from "./Disclosure";
import { Logo } from "./Logo";
import { SocialNetworks } from "./SocialNetworks";
import { Text } from "./Text";

const buttons = [
  {
    id: uuidv4(),
    title: 'Geral',
    panel: [{
      name: "Portfólio",
      link: ""
    }, {
      name: "Curricúlo",
      link: ""
    }, {
      name: "Sobre",
      link: ""
    }
    ]
  },
  {
    id: uuidv4(),
    title: 'Últimos Projetos',
    panel:
      [
        {
          name: "Reimont",
          link: ""
        },
        {
          name: "Timer (estudo)",
          link: ""
        },
        {
          name: "Todo List (estudo)",
          link: ""
        }

      ]
  },
  {
    id: uuidv4(),
    title: 'Contato',
    panel:
      [
        {
          name: "Telefone",
          link: ""
        },
        {
          name: "Email",
          link: ""
        },
        {
          name: "Briefing",
          link: ""
        }
      ]
  }
]

export function Footer() {
  return (
    <footer className="bg-gray-900 pt-20" >
      <Logo tailwind="text-cyan-700 mob:text-6xl mb-6" />
      <SocialNetworks tailwind="flex gap-2 text-cyan-500 justify-center items-center pb-14" size={23} />
      <ul className="mb-8">
        {
          buttons.map(item => {
            return (
              <li key={item.id}>
                <MyDisclosure content={item} />
              </li>
            )
          })
        }
      </ul>
      <Text className="flex justify-center text-[10px] mb-4">
        Made with ❤️ by
        <a className="ml-0.5" href="https://www.joaoandrade.com/">João Andrade</a>
      </Text>
    </footer >
  )
}
