/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type Textmedium13darkblueo50OverridesProps = {
    Textmedium13darkblueo50?: PrimitiveOverrideProps<ViewProps>;
    "Table title"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type Textmedium13darkblueo50Props = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: Textmedium13darkblueo50OverridesProps | undefined | null;
}>;
export default function Textmedium13darkblueo50(props: Textmedium13darkblueo50Props): React.ReactElement;
