/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type StatuspermissionadminOverridesProps = {
    Statuspermissionadmin?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 3"?: PrimitiveOverrideProps<ViewProps>;
    Group?: PrimitiveOverrideProps<ViewProps>;
    Admin?: PrimitiveOverrideProps<TextProps>;
    arrow_down?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type StatuspermissionadminProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: StatuspermissionadminOverridesProps | undefined | null;
}>;
export default function Statuspermissionadmin(props: StatuspermissionadminProps): React.ReactElement;
