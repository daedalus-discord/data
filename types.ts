import type { Channel, Guild, GuildMember, Message, Role, User } from "discord.js";

export type CustomMessageComponent = (string | number | boolean | CustomMessageComponent)[];
export type Interpolation = (string | CustomMessageComponent)[];
export type CustomMessage = {
    content?: Interpolation;
    embeds?: {
        title?: Interpolation;
        description?: Interpolation;
        url?: Interpolation;
        color?: number;
        footer?: { text: Interpolation; icon_url?: Interpolation };
        image?: { url: Interpolation };
        thumbnail?: { url: Interpolation };
        author?: {
            name: Interpolation;
            url?: Interpolation;
            icon_url?: Interpolation;
        };
        fields?: {
            name: Interpolation;
            value: Interpolation;
            inline?: boolean;
        }[];
    }[];
};
export type userdata = string | number | boolean | userdata[];
export type ContextData = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    direct?: any;
    message?: Message;
    member?: GuildMember;
    user?: User;
    role?: Role;
    channel?: Channel;
    guild?: Guild;
};
