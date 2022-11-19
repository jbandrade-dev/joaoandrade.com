import Image from "next/image";
import Link from "next/link";

interface SocialNetworksProps {
  tailwind: string
  size: number
}

export function SocialNetworks({ tailwind, size }: SocialNetworksProps) {
  return (
    <ul className={tailwind}>
      <li className="flex justify-center items-center">
        <Link target="_blank" rel="noreferrer" href="">
          <Image src="/linkedin-logo.png" alt="" width={25} height={25} />
        </Link>
      </li>

      <li className="ml-1">
        <Link target="_blank" rel="noreferrer" href="">
        <Image src="/github-logo.png" alt="" width={25} height={25} />
        </Link>
      </li>

      <li>
        <Link target="_blank" rel="noreferrer" href="">
        <Image src="/storybook-logo.png" alt="" width={25} height={25} />
        </Link>
      </li>
    </ul>

  )
}