import type { PermissionFlagsBits } from "discord.js";

export default {
    modules: {
        modules: { name: "Manage Modules", commands: ["modules"] },
        admin: { name: "Admin Controls", commands: ["admin"] },
        moderation: {
            name: "Moderation",
            icon: "shield",
            description:
                "Moderation features for your moderators. Automated tools are in other modules such as the automod module.",
            commands: ["ban"],
        },
    } as Record<
        string,
        {
            name: string;
            icon?: string;
            description?: string;
            commands: string[];
            disable?: boolean;
        }
    >,
    commands: {
        modules: { name: "Manage Modules", permissions: "admin" },
        admin: { name: "Admin Controls", permissions: "admin" },
        "admin/promote": { permissions: "owner" },
        "admin/demote": { permissions: "owner" },
        "admin/eval": { permissions: "owner" },
        ban: {
            name: "Ban User",
            description: "Ban a user from the server, even if they are not in the server.",
            permissions: "BanMembers",
        },
    } as Record<
        string,
        {
            name?: string;
            permissions?: "owner" | "admin" | keyof typeof PermissionFlagsBits | (keyof typeof PermissionFlagsBits)[];
            description?: string;
            bypass?: boolean;
            disable?: boolean;
        }
    >,
};
