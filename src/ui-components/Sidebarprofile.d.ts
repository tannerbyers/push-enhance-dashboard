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
import { IconmenucontactsProps } from "./Iconmenucontacts";
import { IconmenuemailProps } from "./Iconmenuemail";
import { IconmenutasksProps } from "./Iconmenutasks";
import { IconmenudashboardProps } from "./Iconmenudashboard";
import { AvatarprofilephotoactiveProps } from "./Avatarprofilephotoactive";
import { Textmedium14accentProps } from "./Textmedium14accent";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SidebarprofileOverridesProps = {
    Sidebarprofile?: PrimitiveOverrideProps<ViewProps>;
    side_nav_bg?: PrimitiveOverrideProps<ViewProps>;
    toggle_sidebar?: PrimitiveOverrideProps<ViewProps>;
    "text/medium_11_gray11521204"?: Textmedium11grayProps;
    "icon/menu/toggle"?: IconmenutoggleProps;
    Settings?: PrimitiveOverrideProps<ViewProps>;
    "text/medium_13_darkblue11521207"?: Textmedium13darkblueProps;
    "icon/menu/settings"?: IconmenusettingsProps;
    Deals?: PrimitiveOverrideProps<ViewProps>;
    "text/medium_13_darkblue11521210"?: Textmedium13darkblueProps;
    "icon/menu/deals"?: IconmenudealsProps;
    Chat?: PrimitiveOverrideProps<ViewProps>;
    "text/medium_13_darkblue11521213"?: Textmedium13darkblueProps;
    "icon/menu/chat"?: IconmenuchatProps;
    Contacts?: PrimitiveOverrideProps<ViewProps>;
    "text/medium_13_darkblue11521216"?: Textmedium13darkblueProps;
    "icon/menu/contacts"?: IconmenucontactsProps;
    Email?: PrimitiveOverrideProps<ViewProps>;
    "text/medium_13_darkblue11521219"?: Textmedium13darkblueProps;
    "icon/menu/email"?: IconmenuemailProps;
    Tasks?: PrimitiveOverrideProps<ViewProps>;
    "text/medium_13_darkblue11521222"?: Textmedium13darkblueProps;
    "icon/menu/tasks"?: IconmenutasksProps;
    dashboard?: PrimitiveOverrideProps<ViewProps>;
    "text/medium_13_darkblue11521225"?: Textmedium13darkblueProps;
    "icon/menu/dashboard"?: IconmenudashboardProps;
    "SaaS Kit"?: PrimitiveOverrideProps<TextProps>;
    profile?: PrimitiveOverrideProps<ViewProps>;
    "avatar/profile_photo-active"?: AvatarprofilephotoactiveProps;
    "text/medium_14_accent"?: Textmedium14accentProps;
    "text/medium_11_gray11521231"?: Textmedium11grayProps;
    side_nav_devider?: PrimitiveOverrideProps<ViewProps>;
} & EscapeHatchProps;
export declare type SidebarprofileProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: SidebarprofileOverridesProps | undefined | null;
}>;
export default function Sidebarprofile(props: SidebarprofileProps): React.ReactElement;
