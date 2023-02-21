import type { PermissionFlagsBits } from "discord.js";

export default {
    modules: {
        modules: { name: "Manage Modules", commands: ["modules"] },
        admin: { name: "Admin Controls", commands: ["admin"] },
        core: {
            name: "Core",
            icon: "label_important_outline",
            description: "Core commands for managing and configuring the bot.",
            commands: ["settings"],
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
        modules: { name: "Manage Modules", permissions: "admin", ghost: true },
        admin: { name: "Admin Controls", permissions: "admin", ghost: true },
        settings: {
            name: "Settings",
            icon: "settings",
            permissions: "ManageGuild",
            description: "Manage bot settings.",
        },
    } as Record<
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
    >,
};
