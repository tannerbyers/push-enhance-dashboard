/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type IconcomponentsheaderOverridesProps = {
    Iconcomponentsheader?: PrimitiveOverrideProps<ViewProps>;
    Rectangle11521380?: PrimitiveOverrideProps<ViewProps>;
    Rectangle11521381?: PrimitiveOverrideProps<ViewProps>;
    Rectangle11521382?: PrimitiveOverrideProps<ViewProps>;
} & EscapeHatchProps;
export declare type IconcomponentsheaderProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: IconcomponentsheaderOverridesProps | undefined | null;
}>;
export default function Iconcomponentsheader(props: IconcomponentsheaderProps): React.ReactElement;
