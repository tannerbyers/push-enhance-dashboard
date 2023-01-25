/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { IconProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type IconcomponentsbuttonOverridesProps = {
    Iconcomponentsbutton?: PrimitiveOverrideProps<ViewProps>;
    Vector11521370?: PrimitiveOverrideProps<IconProps>;
    Rectangle?: PrimitiveOverrideProps<ViewProps>;
    point?: PrimitiveOverrideProps<ViewProps>;
    "Vector 2"?: PrimitiveOverrideProps<IconProps>;
    Vector11521374?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type IconcomponentsbuttonProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: IconcomponentsbuttonOverridesProps | undefined | null;
}>;
export default function Iconcomponentsbutton(props: IconcomponentsbuttonProps): React.ReactElement;
