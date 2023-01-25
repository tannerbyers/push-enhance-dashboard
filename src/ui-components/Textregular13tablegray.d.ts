/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type Textregular13tablegrayOverridesProps = {
    Textregular13tablegray?: PrimitiveOverrideProps<ViewProps>;
    "Table 2ndary text"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type Textregular13tablegrayProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: Textregular13tablegrayOverridesProps | undefined | null;
}>;
export default function Textregular13tablegray(props: Textregular13tablegrayProps): React.ReactElement;
