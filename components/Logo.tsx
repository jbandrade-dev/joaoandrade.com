import { Heading } from "./Heading";

interface LogoProps {
  tailwind: string
}

export function Logo({ tailwind }: LogoProps) {
  return (
    <div className="flex justify-center mb-2">
      <Heading className={tailwind}>João Andrade</Heading>
    </div>
  )
}