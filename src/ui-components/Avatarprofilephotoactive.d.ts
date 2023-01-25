/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { AvatarprofilephotoProps } from "./Avatarprofilephoto";
import { IconProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AvatarprofilephotoactiveOverridesProps = {
    Avatarprofilephotoactive?: PrimitiveOverrideProps<ViewProps>;
    "avatar/profile_photo"?: AvatarprofilephotoProps;
    active_profile?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type AvatarprofilephotoactiveProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: AvatarprofilephotoactiveOverridesProps | undefined | null;
}>;
export default function Avatarprofilephotoactive(props: AvatarprofilephotoactiveProps): React.ReactElement;
