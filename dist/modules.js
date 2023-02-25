"use strict";
exports.__esModule = true;
exports["default"] = {
    modules: {
        modules: { name: "Manage Modules", commands: ["modules"] },
        admin: { name: "Admin Controls", commands: ["admin"] },
        core: {
            name: "Core",
            icon: "label_important_outline",
            description: "Core commands for managing and configuring the bot.",
            commands: ["settings"]
        },
        welcome: {
            name: "Welcome",
            icon: "waving_hand",
            description: "Welcome incoming members to the server.",
            commands: []
        },
        "supporter-announcements": {
            name: "Supporter Announcements",
            icon: "campaign",
            description: "Announce new boosters and other server supporters by role.",
            commands: []
        },
        xp: {
            name: "XP",
            icon: "sort",
            description: "Server experience system to reward active members.",
            commands: ["top", "rank", "mee6-import", "reset-xp"]
        },
        "reaction-roles": {
            name: "Reaction Roles",
            icon: "add_reaction",
            description: "Allow users to self-assign roles, including verification roles.",
            self_permissions: ["ManageRoles", "ManageMessages"],
            commands: []
        },
        moderation: {
            name: "Moderation",
            icon: "shield",
            description: "Moderation commands for managing users and content.",
            commands: [
                "ban",
                "kick",
                "mute",
                "timeout",
                "warn",
                "unban",
                "unmute",
                "massban",
                "history",
                "delete-warn",
                "clear-warns",
                "slowmode",
                "purge",
                "notes",
            ]
        }
    },
    commands: {
        modules: { name: "Manage Modules", permissions: "admin", ghost: true },
        admin: { name: "Admin Controls", permissions: "admin", ghost: true },
        settings: {
            name: "Settings",
            icon: "settings",
            permissions: "ManageGuild",
            self_permissions: "ManageWebhooks",
            description: "Manage bot settings."
        },
        top: {
            name: "Top",
            icon: "leaderboard",
            description: "Get top users by XP."
        },
        rank: {
            name: "Rank",
            icon: "military_tech",
            description: "Get a user's XP and rank."
        },
        "mee6-import": {
            name: "MEE6 XP Import",
            icon: "import_export",
            permissions: "ManageGuild",
            description: "Import XP from MEE6"
        },
        "reset-xp": {
            name: "Reset XP",
            icon: "restart_alt",
            permissions: "ManageGuild",
            description: "Reset a user's XP irreversibly."
        }
    }
};
