/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { TextProps, ViewProps } from "@aws-amplify/ui-react";
import { Textmedium11grayProps } from "./Textmedium11gray";
import { IconmenutoggleProps } from "./Iconmenutoggle";
import { Textmedium13darkblueProps } from "./Textmedium13darkblue";
import { IconmenusettingsProps } from "./Iconmenusettings";
import { IconmenudealsProps } from "./Iconmenudeals";
import { IconmenuchatProps } from "./Iconmenuchat";
import { Textmedium13accentProps } from "./Textmedium13accent";
import { IconmenucontactsactiveProps } from "./Iconmenucontactsactive";
import { IconmenuemailProps } from "./Iconmenuemail";
import { IconmenutasksProps } from "./Iconmenutasks";
import { IconmenudashboardProps } from "./Iconmenudashboard";
import { AvatarprofilephotoProps } from "./Avatarprofilephoto";
import { Textmedium14blackProps } from "./Textmedium14black";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SidebarcontactsOverridesProps = {
    Sidebarcontacts?: PrimitiveOverrideProps<ViewProps>;
    side_nav_bg?: PrimitiveOverrideProps<ViewProps>;
    toggle_sidebar?: PrimitiveOverrideProps<ViewProps>;
    "text/medium_11_gray1152971"?: Textmedium11grayProps;
    "icon/menu/toggle"?: IconmenutoggleProps;
    Settings?: PrimitiveOverrideProps<ViewProps>;
    "text/medium_13_darkblue1152974"?: Textmedium13darkblueProps;
    "icon/menu/settings"?: IconmenusettingsProps;
    Deals?: PrimitiveOverrideProps<ViewProps>;
    "text/medium_13_darkblue1152977"?: Textmedium13darkblueProps;
    "icon/menu/deals"?: IconmenudealsProps;
    Chat?: PrimitiveOverrideProps<ViewProps>;
    "text/medium_13_darkblue1152980"?: Textmedium13darkblueProps;
    "icon/menu/chat"?: IconmenuchatProps;
    Contacts?: PrimitiveOverrideProps<ViewProps>;
    "text/medium_13_accent"?: Textmedium13accentProps;
    "icon/menu/contacts-active"?: IconmenucontactsactiveProps;
    Email?: PrimitiveOverrideProps<ViewProps>;
    "text/medium_13_darkblue1152986"?: Textmedium13darkblueProps;
    "icon/menu/email"?: IconmenuemailProps;
    Tasks?: PrimitiveOverrideProps<ViewProps>;
    "text/medium_13_darkblue1152989"?: Textmedium13darkblueProps;
    "icon/menu/tasks"?: IconmenutasksProps;
    dashboard?: PrimitiveOverrideProps<ViewProps>;
    "text/medium_13_darkblue1152992"?: Textmedium13darkblueProps;
    "icon/menu/dashboard"?: IconmenudashboardProps;
    "SaaS Kit"?: PrimitiveOverrideProps<TextProps>;
    profile?: PrimitiveOverrideProps<ViewProps>;
    "avatar/profile_photo"?: AvatarprofilephotoProps;
    "text/medium_14_black"?: Textmedium14blackProps;
    "text/medium_11_gray1152998"?: Textmedium11grayProps;
    side_nav_devider?: PrimitiveOverrideProps<ViewProps>;
} & EscapeHatchProps;
export declare type SidebarcontactsProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: SidebarcontactsOverridesProps | undefined | null;
}>;
export default function Sidebarcontacts(props: SidebarcontactsProps): React.ReactElement;
