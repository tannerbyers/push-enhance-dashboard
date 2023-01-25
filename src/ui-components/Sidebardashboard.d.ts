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
import { Textmedium13accentProps } from "./Textmedium13accent";
import { IconmenudashboardactiveProps } from "./Iconmenudashboardactive";
import { AvatarprofilephotoProps } from "./Avatarprofilephoto";
import { Textmedium14blackProps } from "./Textmedium14black";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SidebardashboardOverridesProps = {
    Sidebardashboard?: PrimitiveOverrideProps<ViewProps>;
    side_nav_bg?: PrimitiveOverrideProps<ViewProps>;
    toggle_sidebar?: PrimitiveOverrideProps<ViewProps>;
    "text/medium_11_gray11521045"?: Textmedium11grayProps;
    "icon/menu/toggle"?: IconmenutoggleProps;
    Settings?: PrimitiveOverrideProps<ViewProps>;
    "text/medium_13_darkblue11521048"?: Textmedium13darkblueProps;
    "icon/menu/settings"?: IconmenusettingsProps;
    Deals?: PrimitiveOverrideProps<ViewProps>;
    "text/medium_13_darkblue11521051"?: Textmedium13darkblueProps;
    "icon/menu/deals"?: IconmenudealsProps;
    Chat?: PrimitiveOverrideProps<ViewProps>;
    "text/medium_13_darkblue11521054"?: Textmedium13darkblueProps;
    "icon/menu/chat"?: IconmenuchatProps;
    Contacts?: PrimitiveOverrideProps<ViewProps>;
    "text/medium_13_darkblue11521057"?: Textmedium13darkblueProps;
    "icon/menu/contacts"?: IconmenucontactsProps;
    Email?: PrimitiveOverrideProps<ViewProps>;
    "text/medium_13_darkblue11521060"?: Textmedium13darkblueProps;
    "icon/menu/email"?: IconmenuemailProps;
    Tasks?: PrimitiveOverrideProps<ViewProps>;
    "text/medium_13_darkblue11521063"?: Textmedium13darkblueProps;
    "icon/menu/tasks"?: IconmenutasksProps;
    dashboard?: PrimitiveOverrideProps<ViewProps>;
    "text/medium_13_accent"?: Textmedium13accentProps;
    "icon/menu/dashboard-active"?: IconmenudashboardactiveProps;
    profile?: PrimitiveOverrideProps<ViewProps>;
    "avatar/profile_photo"?: AvatarprofilephotoProps;
    "text/medium_14_black"?: Textmedium14blackProps;
    "text/medium_11_gray11521071"?: Textmedium11grayProps;
    "SaaS Kit"?: PrimitiveOverrideProps<TextProps>;
    side_nav_devider?: PrimitiveOverrideProps<ViewProps>;
} & EscapeHatchProps;
export declare type SidebardashboardProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: SidebardashboardOverridesProps | undefined | null;
}>;
export default function Sidebardashboard(props: SidebardashboardProps): React.ReactElement;
