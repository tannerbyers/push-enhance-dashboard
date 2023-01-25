/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type StatuspermissionreadOverridesProps = {
    Statuspermissionread?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 3"?: PrimitiveOverrideProps<ViewProps>;
    Group?: PrimitiveOverrideProps<ViewProps>;
    Read?: PrimitiveOverrideProps<TextProps>;
    arrow_down?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type StatuspermissionreadProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: StatuspermissionreadOverridesProps | undefined | null;
}>;
export default function Statuspermissionread(props: StatuspermissionreadProps): React.ReactElement;
