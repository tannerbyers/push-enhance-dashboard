/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type Textmedium13accentOverridesProps = {
    Textmedium13accent?: PrimitiveOverrideProps<ViewProps>;
    "Side bar title active"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type Textmedium13accentProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: Textmedium13accentOverridesProps | undefined | null;
}>;
export default function Textmedium13accent(props: Textmedium13accentProps): React.ReactElement;
