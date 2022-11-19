import { InputHTMLAttributes, ReactNode } from "react";
import { Slot } from "@radix-ui/react-slot";
import Cleave from "cleave.js/react";
import "cleave.js/dist/addons/cleave-phone.br";

export interface TextInputRootProps {
  children: ReactNode;
}

function TextInputRoot(props: TextInputRootProps) {
  return (
    <div className="input">
      {props.children}
    </div>
  );
}

TextInputRoot.displayName = "TextInput.Root";

export interface TextInputIconProps {
  children: ReactNode;
}

function TextInputIcon(props: TextInputIconProps) {
  return <Slot className="w-6 h-6 text-gray-400">{props.children}</Slot>;
}

TextInputIcon.displayName = "TextInput.Icon";

export interface TextInputInputProps
  extends InputHTMLAttributes<HTMLInputElement> {}

function TextInputInput(props: TextInputInputProps) {
  return (
    <input
      className="bg-transparent flex-1 text-gray-100 text-xs placeholder:text-gray-400 outline-none"
      {...props}
      required      
    />
  );
}

TextInputInput.displayName = "TextInput.Input";

function TextInputTel() {
  return (
    <Cleave
      placeholder="Telefone"
      type="telephone"
      options={{ phone: true, phoneRegionCode: "BR" }}
      className="form-field bg-transparent flex-1 text-gray-100 text-xs placeholder:text-gray-400 outline-none"
      required
    />
  );
}

TextInputTel.displayName = "TextInput.Tel";

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInputIcon,
  Tel: TextInputTel,
};
