/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type StatuscontactnewdropdownOverridesProps = {
    Statuscontactnewdropdown?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 6"?: PrimitiveOverrideProps<ViewProps>;
    arrow_down?: PrimitiveOverrideProps<IconProps>;
    New?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type StatuscontactnewdropdownProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: StatuscontactnewdropdownOverridesProps | undefined | null;
}>;
export default function Statuscontactnewdropdown(props: StatuscontactnewdropdownProps): React.ReactElement;
