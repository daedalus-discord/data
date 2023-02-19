import { PermissionFlagsBits, type PermissionResolvable } from "discord.js";

export default {
    modules: [
        { name: "modules", commands: ["modules"] },
        { name: "admin", commands: ["admin"] },
        {
            name: "moderation",
            description:
                "Moderation features for your moderators. Automated tools are in other modules such as the automod module.",
            commands: ["ban"],
        },
    ] satisfies {
        name: string;
        commands: string[];
        description?: string;
    }[],
    commands: {
        modules: { permissions: "admin" },
        admin: { permissions: "admin" },
        "admin/promote": { permissions: "owner" },
        "admin/demote": { permissions: "owner" },
        "admin/eval": { permissions: "owner" },
        ban: {
            description: "Ban a user from the server, even if they are not in the server.",
            permissions: PermissionFlagsBits.BanMembers | PermissionFlagsBits.ManageChannels,
        },
    } satisfies Record<
        string,
        {
            permissions?: string | PermissionResolvable;
            description?: string;
            bypass?: boolean;
        }
    >,
};
