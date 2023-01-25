/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { IconProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type IconsettingsaccountOverridesProps = {
    Iconsettingsaccount?: PrimitiveOverrideProps<ViewProps>;
    Group?: PrimitiveOverrideProps<ViewProps>;
    Vector11521441?: PrimitiveOverrideProps<IconProps>;
    Vector11521442?: PrimitiveOverrideProps<IconProps>;
    Ellipse?: PrimitiveOverrideProps<IconProps>;
    Vector11521444?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type IconsettingsaccountProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: IconsettingsaccountOverridesProps | undefined | null;
}>;
export default function Iconsettingsaccount(props: IconsettingsaccountProps): React.ReactElement;
