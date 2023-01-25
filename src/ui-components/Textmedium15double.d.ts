/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type Textmedium15doubleOverridesProps = {
    Textmedium15double?: PrimitiveOverrideProps<ViewProps>;
    "Deal title"?: PrimitiveOverrideProps<TextProps>;
    Amount?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type Textmedium15doubleProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: Textmedium15doubleOverridesProps | undefined | null;
}>;
export default function Textmedium15double(props: Textmedium15doubleProps): React.ReactElement;