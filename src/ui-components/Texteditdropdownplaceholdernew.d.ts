/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TexteditdropdownplaceholdernewOverridesProps = {
    Texteditdropdownplaceholdernew?: PrimitiveOverrideProps<ViewProps>;
    "Office meet-up"?: PrimitiveOverrideProps<TextProps>;
    Polygon?: PrimitiveOverrideProps<IconProps>;
    "Rectangle 3"?: PrimitiveOverrideProps<ViewProps>;
} & EscapeHatchProps;
export declare type TexteditdropdownplaceholdernewProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: TexteditdropdownplaceholdernewOverridesProps | undefined | null;
}>;
export default function Texteditdropdownplaceholdernew(props: TexteditdropdownplaceholdernewProps): React.ReactElement;
