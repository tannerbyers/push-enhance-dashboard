/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type Textmedium13regular10OverridesProps = {
    Textmedium13regular10?: PrimitiveOverrideProps<ViewProps>;
    Notifications?: PrimitiveOverrideProps<TextProps>;
    "Your notification preferences"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type Textmedium13regular10Props = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: Textmedium13regular10OverridesProps | undefined | null;
}>;
export default function Textmedium13regular10(props: Textmedium13regular10Props): React.ReactElement;
