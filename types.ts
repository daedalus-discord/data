import type { Channel, Guild, GuildMember, Message, PermissionFlagsBits, Role, User } from "discord.js";

export type ModuleData = {
    modules: Record<
        string,
        {
            name: string;
            icon?: string;
            self_permissions?: keyof typeof PermissionFlagsBits | (keyof typeof PermissionFlagsBits)[];
            description?: string;
            commands: string[];
            disable?: boolean;
        }
    >;
    commands: Record<
        string,
        {
            name?: string;
            icon?: string;
            permissions?: "admin" | keyof typeof PermissionFlagsBits | (keyof typeof PermissionFlagsBits)[];
            self_permissions?: keyof typeof PermissionFlagsBits | (keyof typeof PermissionFlagsBits)[];
            description?: string;
            bypass?: boolean;
            disable?: boolean;
            ghost?: boolean;
        }
    >;
};

export type Docs = {
    modules: Record<string, string>;
    commands: Record<string, { syntaxes: [string, string][]; footer?: string }>;
};

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

export type Feed = {
    type: "reddit";
    key: string;
    owner: string;
    guild: string;
    id: number;
    channel: string;
};
