/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { TextProps, ViewProps } from "@aws-amplify/ui-react";
import { Textmedium18blackProps } from "./Textmedium18black";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TexteditlargeplaceholdernewOverridesProps = {
    Texteditlargeplaceholdernew?: PrimitiveOverrideProps<ViewProps>;
    Title?: PrimitiveOverrideProps<TextProps>;
    "Rectangle 3"?: PrimitiveOverrideProps<ViewProps>;
    "text/medium_18_black"?: Textmedium18blackProps;
} & EscapeHatchProps;
export declare type TexteditlargeplaceholdernewProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: TexteditlargeplaceholdernewOverridesProps | undefined | null;
}>;
export default function Texteditlargeplaceholdernew(props: TexteditlargeplaceholdernewProps): React.ReactElement;
