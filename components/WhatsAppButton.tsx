import Image from "next/image";
import Link from "next/link";
import { WhatsappLogo } from "phosphor-react";

const ddi = "55";
const ddd = "21";
const tel = "987654321";

export function WhatsAppButton() {
  return (
    <Link
      className="fixed text-green-500 w-11 bottom-4 right-3 z-50"
      title="Whatsapp"
      href={`https://wa.me/${ddi}${ddd}${tel}`}
      target="_blank"
    >
      <WhatsappLogo size={38} weight="fill"/>
    </Link>
  );
}
