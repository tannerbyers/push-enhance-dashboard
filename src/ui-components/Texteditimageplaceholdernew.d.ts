/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { IconProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TexteditimageplaceholdernewOverridesProps = {
    Texteditimageplaceholdernew?: PrimitiveOverrideProps<ViewProps>;
    "Lindsey Stroud"?: PrimitiveOverrideProps<TextProps>;
    associated_photo?: PrimitiveOverrideProps<ViewProps>;
    Ellipse?: PrimitiveOverrideProps<IconProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
    "Rectangle 3"?: PrimitiveOverrideProps<ViewProps>;
} & EscapeHatchProps;
export declare type TexteditimageplaceholdernewProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: TexteditimageplaceholdernewOverridesProps | undefined | null;
}>;
export default function Texteditimageplaceholdernew(props: TexteditimageplaceholdernewProps): React.ReactElement;
