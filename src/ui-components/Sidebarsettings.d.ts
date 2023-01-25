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
import { Textmedium13accentProps } from "./Textmedium13accent";
import { IconmenusettingsactiveProps } from "./Iconmenusettingsactive";
import { Textmedium13darkblueProps } from "./Textmedium13darkblue";
import { IconmenudealsProps } from "./Iconmenudeals";
import { IconmenuchatProps } from "./Iconmenuchat";
import { IconmenucontactsProps } from "./Iconmenucontacts";
import { IconmenuemailProps } from "./Iconmenuemail";
import { IconmenutasksProps } from "./Iconmenutasks";
import { IconmenudashboardProps } from "./Iconmenudashboard";
import { AvatarprofilephotoProps } from "./Avatarprofilephoto";
import { Textmedium14blackProps } from "./Textmedium14black";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SidebarsettingsOverridesProps = {
    Sidebarsettings?: PrimitiveOverrideProps<ViewProps>;
    side_nav_bg?: PrimitiveOverrideProps<ViewProps>;
    toggle_sidebar?: PrimitiveOverrideProps<ViewProps>;
    "text/medium_11_gray11521130"?: Textmedium11grayProps;
    "icon/menu/toggle"?: IconmenutoggleProps;
    Settings?: PrimitiveOverrideProps<ViewProps>;
    "text/medium_13_accent"?: Textmedium13accentProps;
    "icon/menu/settings-active"?: IconmenusettingsactiveProps;
    Deals?: PrimitiveOverrideProps<ViewProps>;
    "text/medium_13_darkblue11521136"?: Textmedium13darkblueProps;
    "icon/menu/deals"?: IconmenudealsProps;
    Chat?: PrimitiveOverrideProps<ViewProps>;
    "text/medium_13_darkblue11521139"?: Textmedium13darkblueProps;
    "icon/menu/chat"?: IconmenuchatProps;
    Contacts?: PrimitiveOverrideProps<ViewProps>;
    "text/medium_13_darkblue11521142"?: Textmedium13darkblueProps;
    "icon/menu/contacts"?: IconmenucontactsProps;
    Email?: PrimitiveOverrideProps<ViewProps>;
    "text/medium_13_darkblue11521145"?: Textmedium13darkblueProps;
    "icon/menu/email"?: IconmenuemailProps;
    Tasks?: PrimitiveOverrideProps<ViewProps>;
    "text/medium_13_darkblue11521148"?: Textmedium13darkblueProps;
    "icon/menu/tasks"?: IconmenutasksProps;
    dashboard?: PrimitiveOverrideProps<ViewProps>;
    "text/medium_13_darkblue11521151"?: Textmedium13darkblueProps;
    "icon/menu/dashboard"?: IconmenudashboardProps;
    "SaaS Kit"?: PrimitiveOverrideProps<TextProps>;
    profile?: PrimitiveOverrideProps<ViewProps>;
    "avatar/profile_photo"?: AvatarprofilephotoProps;
    "text/medium_14_black"?: Textmedium14blackProps;
    "text/medium_11_gray11521157"?: Textmedium11grayProps;
    side_nav_devider?: PrimitiveOverrideProps<ViewProps>;
} & EscapeHatchProps;
export declare type SidebarsettingsProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: SidebarsettingsOverridesProps | undefined | null;
}>;
export default function Sidebarsettings(props: SidebarsettingsProps): React.ReactElement;
