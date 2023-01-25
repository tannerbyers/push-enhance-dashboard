/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
import { Textmedium11grayProps } from "./Textmedium11gray";
import { IconmenutoggleProps } from "./Iconmenutoggle";
import { Textmedium13darkblueProps } from "./Textmedium13darkblue";
import { IconmenusettingsProps } from "./Iconmenusettings";
import { Textmedium13accentProps } from "./Textmedium13accent";
import { IconmenudealsactiveProps } from "./Iconmenudealsactive";
import { IconmenuchatProps } from "./Iconmenuchat";
import { IconmenucontactsProps } from "./Iconmenucontacts";
import { IconmenuemailProps } from "./Iconmenuemail";
import { IconmenutasksProps } from "./Iconmenutasks";
import { IconmenudashboardProps } from "./Iconmenudashboard";
import { Textregular13darkblueProps } from "./Textregular13darkblue";
import { AvatarprofilephotoProps } from "./Avatarprofilephoto";
import { Textmedium14blackProps } from "./Textmedium14black";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SidebardealsOverridesProps = {
    Sidebardeals?: PrimitiveOverrideProps<ViewProps>;
    side_nav_bg?: PrimitiveOverrideProps<ViewProps>;
    toggle_sidebar?: PrimitiveOverrideProps<ViewProps>;
    "text/medium_11_gray11521003"?: Textmedium11grayProps;
    "icon/menu/toggle"?: IconmenutoggleProps;
    Settings?: PrimitiveOverrideProps<ViewProps>;
    "text/medium_13_darkblue11521006"?: Textmedium13darkblueProps;
    "icon/menu/settings"?: IconmenusettingsProps;
    Deals?: PrimitiveOverrideProps<ViewProps>;
    "text/medium_13_accent"?: Textmedium13accentProps;
    "icon/menu/deals-active"?: IconmenudealsactiveProps;
    Chat?: PrimitiveOverrideProps<ViewProps>;
    "text/medium_13_darkblue11521012"?: Textmedium13darkblueProps;
    "icon/menu/chat"?: IconmenuchatProps;
    Contacts?: PrimitiveOverrideProps<ViewProps>;
    "text/medium_13_darkblue11521015"?: Textmedium13darkblueProps;
    "icon/menu/contacts"?: IconmenucontactsProps;
    Email?: PrimitiveOverrideProps<ViewProps>;
    "text/medium_13_darkblue11521018"?: Textmedium13darkblueProps;
    "icon/menu/email"?: IconmenuemailProps;
    Tasks?: PrimitiveOverrideProps<ViewProps>;
    "text/medium_13_darkblue11521021"?: Textmedium13darkblueProps;
    "icon/menu/tasks"?: IconmenutasksProps;
    dashboard?: PrimitiveOverrideProps<ViewProps>;
    "text/medium_13_darkblue11521024"?: Textmedium13darkblueProps;
    "icon/menu/dashboard"?: IconmenudashboardProps;
    task_statuses?: PrimitiveOverrideProps<ViewProps>;
    active_status?: PrimitiveOverrideProps<ViewProps>;
    active_circle?: PrimitiveOverrideProps<IconProps>;
    "text/regular_13_darkblue11521029"?: Textregular13darkblueProps;
    Group?: PrimitiveOverrideProps<ViewProps>;
    completed_circle?: PrimitiveOverrideProps<IconProps>;
    "text/regular_13_darkblue11521032"?: Textregular13darkblueProps;
    ended_status?: PrimitiveOverrideProps<ViewProps>;
    ended_circle?: PrimitiveOverrideProps<IconProps>;
    "text/regular_13_darkblue11521035"?: Textregular13darkblueProps;
    "SaaS Kit"?: PrimitiveOverrideProps<TextProps>;
    profile?: PrimitiveOverrideProps<ViewProps>;
    "avatar/profile_photo"?: AvatarprofilephotoProps;
    "text/medium_14_black"?: Textmedium14blackProps;
    "text/medium_11_gray11521040"?: Textmedium11grayProps;
    side_nav_devider?: PrimitiveOverrideProps<ViewProps>;
} & EscapeHatchProps;
export declare type SidebardealsProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: SidebardealsOverridesProps | undefined | null;
}>;
export default function Sidebardeals(props: SidebardealsProps): React.ReactElement;
