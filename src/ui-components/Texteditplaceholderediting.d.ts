/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TexteditplaceholdereditingOverridesProps = {
    Texteditplaceholderediting?: PrimitiveOverrideProps<ViewProps>;
    "First name"?: PrimitiveOverrideProps<TextProps>;
    Jane?: PrimitiveOverrideProps<TextProps>;
    "Rectangle 3"?: PrimitiveOverrideProps<ViewProps>;
} & EscapeHatchProps;
export declare type TexteditplaceholdereditingProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: TexteditplaceholdereditingOverridesProps | undefined | null;
}>;
export default function Texteditplaceholderediting(props: TexteditplaceholdereditingProps): React.ReactElement;
