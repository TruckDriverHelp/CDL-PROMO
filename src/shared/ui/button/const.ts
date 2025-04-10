import { ButtonStateVariantTypes, ButtonStyleVariantTypes } from "./types";

export const buttonStyleVariant: Record<ButtonStyleVariantTypes, ButtonStateVariantTypes> = {
    primary: {
        default: 'bg-indigo cursor-pointer shadow-elevated text-white',
        hover: 'hover:bg-indigo-dark hover:shadow-soft-purple'
    }
}