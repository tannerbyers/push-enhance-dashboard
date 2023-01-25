/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type Textregular12profilegrayOverridesProps = {
    Textregular12profilegray?: PrimitiveOverrideProps<ViewProps>;
    "Role at Company"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type Textregular12profilegrayProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: Textregular12profilegrayOverridesProps | undefined | null;
}>;
export default function Textregular12profilegray(props: Textregular12profilegrayProps): React.ReactElement;
