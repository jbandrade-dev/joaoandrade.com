import { Disclosure } from "@headlessui/react";
import { Heading } from "./Heading";
import { Text } from "./Text";

interface MyDisclosureProps {
  content: {
    id: string;
    title: string;
    panel:
    {
      name: string
      link: string
    }[]
  }
}

export function MyDisclosure({ content }: MyDisclosureProps) {
  return (
    <section className="w-full">
      <div className="bg-transparent">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button
                aria-expanded="false"
                aria-label="Abrir disclosure"
                className="flex justify-center py-2 px-2 rounded text-sm w-full transition-colors text-left z-50"
              >

                <Text className="text-gray-100 uppercase text-xl">
                  <span className="">
                    {content.title}
                  </span>
                </Text>


              </Disclosure.Button>

              <Disclosure.Panel className="px-6">
                <div>
                  {content.panel.map(item => {
                    return (
                      <Text className="flex text-xl font-medium py-1 justify-center uppercase text-cyan-600" key={item.name}>
                        {item.name}
                      </Text>
                    )
                  })}
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </section>
  );
}
