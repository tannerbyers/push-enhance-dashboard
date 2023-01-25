/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { IconProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type IconmenudealsOverridesProps = {
    Iconmenudeals?: PrimitiveOverrideProps<ViewProps>;
    Vector11521277?: PrimitiveOverrideProps<IconProps>;
    Vector11521278?: PrimitiveOverrideProps<IconProps>;
    Rectangle11521279?: PrimitiveOverrideProps<ViewProps>;
    Rectangle11521280?: PrimitiveOverrideProps<ViewProps>;
} & EscapeHatchProps;
export declare type IconmenudealsProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: IconmenudealsOverridesProps | undefined | null;
}>;
export default function Iconmenudeals(props: IconmenudealsProps): React.ReactElement;
