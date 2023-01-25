/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { TextProps, ViewProps } from "@aws-amplify/ui-react";
import { IconcontactscheduleProps } from "./Iconcontactschedule";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TexteditcalendarplaceholderOverridesProps = {
    Texteditcalendarplaceholder?: PrimitiveOverrideProps<ViewProps>;
    Title?: PrimitiveOverrideProps<TextProps>;
    "Office meet-up"?: PrimitiveOverrideProps<TextProps>;
    "Rectangle 3"?: PrimitiveOverrideProps<ViewProps>;
    "icon/contact/schedule"?: IconcontactscheduleProps;
} & EscapeHatchProps;
export declare type TexteditcalendarplaceholderProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: TexteditcalendarplaceholderOverridesProps | undefined | null;
}>;
export default function Texteditcalendarplaceholder(props: TexteditcalendarplaceholderProps): React.ReactElement;
