import Link from "next/link";
import { menu } from "./MenuExpanded";
import { Text } from "./Text";


export function Menu() {
  return (
    <menu className="mob:hidden pc:flex justify-center gap-3 uppercase">
      <ul className="flex-1 inline-flex gap-8">
        {menu.map((item) => {
          return (
            <li key={item.name}>
              <Link href={item.link}>
                <Text size="sm" className="itemMenu text-[25px]">{item.name}</Text>
              </Link>
            </li>
          );
        })}
      </ul>
    </menu>
  );
}
