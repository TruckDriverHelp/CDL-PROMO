import { InputLabelStateVariantType, InputStateVariantType, InputStyleVariantType } from "./types";

export const inputStyleVariant: Record<InputStyleVariantType, InputStateVariantType> = {
    primary: {
        default: 'rounded-base bg-transparent border-1 border-mist appearance-none text-emphasis-high',
        focus: 'focus:outline-none focus:ring-0 focus:border-grape focus:border-2'
    }
}

export const inputLabelStyleVariant: Record<InputStyleVariantType, InputLabelStateVariantType> = {
    primary: {
        default: 'text-xs text-emphasis-medium duration-300 bg-white px-2 peer-placeholder-shown:text-base',
        focus: 'peer-focus:text-xs peer-focus:text-grape'
    }
}