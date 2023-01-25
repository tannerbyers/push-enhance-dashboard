/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { TextProps, ViewProps } from "@aws-amplify/ui-react";
import { IconothersearchProps } from "./Iconothersearch";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SearchsearchboxOverridesProps = {
    Searchsearchbox?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 3"?: PrimitiveOverrideProps<ViewProps>;
    search?: PrimitiveOverrideProps<ViewProps>;
    "Search colleague"?: PrimitiveOverrideProps<TextProps>;
    "icon/other/search"?: IconothersearchProps;
} & EscapeHatchProps;
export declare type SearchsearchboxProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: SearchsearchboxOverridesProps | undefined | null;
}>;
export default function Searchsearchbox(props: SearchsearchboxProps): React.ReactElement;
