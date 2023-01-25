/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type StatusemaildraftOverridesProps = {
    Statusemaildraft?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 6"?: PrimitiveOverrideProps<ViewProps>;
    Draft?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type StatusemaildraftProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: StatusemaildraftOverridesProps | undefined | null;
}>;
export default function Statusemaildraft(props: StatusemaildraftProps): React.ReactElement;
