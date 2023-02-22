import type { Channel, Guild, GuildMember, Message, Role, User } from "discord.js";

export type CustomMessageComponent = (string | number | boolean | CustomMessageComponent)[];
export type Interpolation = (string | CustomMessageComponent)[];
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
