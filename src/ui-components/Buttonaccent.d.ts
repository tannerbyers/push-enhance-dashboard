/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ButtonaccentOverridesProps = {
    Buttonaccent?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 3"?: PrimitiveOverrideProps<ViewProps>;
    "Accent button"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type ButtonaccentProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: ButtonaccentOverridesProps | undefined | null;
}>;
export default function Buttonaccent(props: ButtonaccentProps): React.ReactElement;