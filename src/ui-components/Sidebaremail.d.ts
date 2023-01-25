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
import { IconmenudealsProps } from "./Iconmenudeals";
import { IconmenuchatProps } from "./Iconmenuchat";
import { IconmenucontactsProps } from "./Iconmenucontacts";
import { Textmedium13accentProps } from "./Textmedium13accent";
import { IconmenuemailactiveProps } from "./Iconmenuemailactive";
import { IconmenutasksProps } from "./Iconmenutasks";
import { IconmenudashboardProps } from "./Iconmenudashboard";
import { AvatarprofilephotoProps } from "./Avatarprofilephoto";
import { Textmedium14blackProps } from "./Textmedium14black";
import { Textregular13darkblueProps } from "./Textregular13darkblue";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SidebaremailOverridesProps = {
    Sidebaremail?: PrimitiveOverrideProps<ViewProps>;
    side_nav_bg?: PrimitiveOverrideProps<ViewProps>;
    toggle_sidebar?: PrimitiveOverrideProps<ViewProps>;
    "text/medium_11_gray1152926"?: Textmedium11grayProps;
    "icon/menu/toggle"?: IconmenutoggleProps;
    Settings?: PrimitiveOverrideProps<ViewProps>;
    "text/medium_13_darkblue1152929"?: Textmedium13darkblueProps;
    "icon/menu/settings"?: IconmenusettingsProps;
    Deals?: PrimitiveOverrideProps<ViewProps>;
    "text/medium_13_darkblue1152932"?: Textmedium13darkblueProps;
    "icon/menu/deals"?: IconmenudealsProps;
    Chat?: PrimitiveOverrideProps<ViewProps>;
    "text/medium_13_darkblue1152935"?: Textmedium13darkblueProps;
    "icon/menu/chat"?: IconmenuchatProps;
    Contacts?: PrimitiveOverrideProps<ViewProps>;
    "text/medium_13_darkblue1152938"?: Textmedium13darkblueProps;
    "icon/menu/contacts"?: IconmenucontactsProps;
    Email?: PrimitiveOverrideProps<ViewProps>;
    "text/medium_13_accent"?: Textmedium13accentProps;
    "icon/menu/email-active"?: IconmenuemailactiveProps;
    Tasks?: PrimitiveOverrideProps<ViewProps>;
    "text/medium_13_darkblue1152944"?: Textmedium13darkblueProps;
    "icon/menu/tasks"?: IconmenutasksProps;
    dashboard?: PrimitiveOverrideProps<ViewProps>;
    "text/medium_13_darkblue1152947"?: Textmedium13darkblueProps;
    "icon/menu/dashboard"?: IconmenudashboardProps;
    "SaaS Kit"?: PrimitiveOverrideProps<TextProps>;
    profile?: PrimitiveOverrideProps<ViewProps>;
    "avatar/profile_photo"?: AvatarprofilephotoProps;
    "text/medium_14_black"?: Textmedium14blackProps;
    "text/medium_11_gray1152953"?: Textmedium11grayProps;
    side_nav_devider?: PrimitiveOverrideProps<ViewProps>;
    email_statuses?: PrimitiveOverrideProps<ViewProps>;
    draft_status?: PrimitiveOverrideProps<ViewProps>;
    Ellipse1152957?: PrimitiveOverrideProps<IconProps>;
    "text/regular_13_darkblue1152958"?: Textregular13darkblueProps;
    scheduled_status?: PrimitiveOverrideProps<ViewProps>;
    Ellipse1152960?: PrimitiveOverrideProps<IconProps>;
    "text/regular_13_darkblue1152961"?: Textregular13darkblueProps;
    sent_status?: PrimitiveOverrideProps<ViewProps>;
    Ellipse1152963?: PrimitiveOverrideProps<IconProps>;
    "text/regular_13_darkblue1152964"?: Textregular13darkblueProps;
    archived_status?: PrimitiveOverrideProps<ViewProps>;
    Ellipse1152966?: PrimitiveOverrideProps<IconProps>;
    "text/regular_13_darkblue1152967"?: Textregular13darkblueProps;
} & EscapeHatchProps;
export declare type SidebaremailProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: SidebaremailOverridesProps | undefined | null;
}>;
export default function Sidebaremail(props: SidebaremailProps): React.ReactElement;
