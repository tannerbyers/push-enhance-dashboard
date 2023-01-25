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
export declare type TexteditcalendarplaceholdershowingOverridesProps = {
    Texteditcalendarplaceholdershowing?: PrimitiveOverrideProps<ViewProps>;
    Title?: PrimitiveOverrideProps<TextProps>;
    "Office meet-up"?: PrimitiveOverrideProps<TextProps>;
    "icon/contact/schedule"?: IconcontactscheduleProps;
} & EscapeHatchProps;
export declare type TexteditcalendarplaceholdershowingProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: TexteditcalendarplaceholdershowingOverridesProps | undefined | null;
}>;
export default function Texteditcalendarplaceholdershowing(props: TexteditcalendarplaceholdershowingProps): React.ReactElement;
