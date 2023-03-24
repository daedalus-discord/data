import type { Docs } from "./types.js";

const reason =
    "<li>The reason will be sent to the user unless otherwise specified and is put in their Daedalus user history and the Discord audit logs.</li>";
const silent = "<li>Set silent to true to not DM the member notifying them of this action.</li>";

export default {
    modules: {
        core: "This module contains some core configuration commands. Most configuration is done on the dashboard, but in some cases where it is easier for you to do it with a command, it is done via commands in this module instead.",
        welcome:
            "This module allows you to send a custom message whenever a member joins. This is typically used to welcome the user and show them a link to your rules channel and any important information. You can also use this for logging purposes or to alert moderators of new members, though there is a logging event for when members join.",
        "supporter-announcements":
            "This module allows you to send a custom message when a user supports the server. This supports booster announcements (only posted once when a user becomes a booster, not if they boost again while already having a boost) and detecting select roles for integration with other bots like Ko-Fi Bot, which assigns a role to Ko-Fi supporters. </p><p>" +
            "Role updates within the first 5 seconds of the user joining are ignored to prevent the Sticky Roles module from causing repeat announcements.",
        xp:
            "This module allows you to track users' activity through XP (experience) and give out automatic reward roles. </p><p>" +
            "You can block certain roles and channels from receiving XP and designate roles and channels to give extra XP to reward boosters (for example) or encourage users to use certain channels. Use the dashboard to set up level-up announcements, customize the rank card background image, and configure reward roles.",
        "reaction-roles":
            "This module allows you to set up role prompts that users can use to assign themselves roles. Use the dashboard to create and manage these prompts. </p><p>" +
            "You can either post fully custom messages or attach reaction roles to an existing message. If you post a message through the reaction role system, you can use dropdowns or buttons instead, which are much more streamlined for the user. </p><p>" +
            "Currently, four types of role prompts exist: </p>" +
            "<ul><li><b>normal</b>: roles can be added and removed at will and users can take as few or as many roles as they want</li><li><b>unique</b>: roles can be added or removed at will but a user can only have one of the offered roles at a time</li><li><b>verify</b>: roles can be added at will and users can take as few or as many roles as they want, but cannot remove them</li><li><b>lock</b>: a user can select one role and then they cannot remove it or select another role</li></ul>" +
            "<p>Here are our recommendations for which style of prompt to use:</p>" +
            "<ul><li><b>Dropdowns</b> are good for when you have many roles of the same category, especially if they're unique, as the interface automatically prevents users from selecting multiple. For example, you can use these for pronoun roles (non-unique) or age roles (unique).</li><li><b>Buttons</b> are good for when there is only one role or when there are similar roles that are not entirely the same category, such as ping roles.</li><li><b>Reactions</b> are good for legacy support, but are not as nice to use and require you to explain which reaction corresponds to which role and are therefore less accessible. Additionally, the bot can respond to dropdown and button interactions but not reactions.</li></ul> <p>",
        moderation:
            "This module contains commands for moderators to manage members and maintain a civil environment. All commands that take actions require confirmation unless otherwise specified. All commands check for relative permissions (role hierarchy, ownership).",
        starboard:
            "This module allows you to set up a starboard, which lets users highlight messages to a starboard channel by reacting to them. </p><p>" +
            "You can customize the reaction; by default, it is ⭐. You can also customize the threshold (number of reactions required); by default, it is 5. </p><p>" +
            "The target starboard channe and reaction threshold can be customized per channel and channels can be blocked from having messages appear on the starboard.",
        automod:
            "This module allows you to set up rules to detect certain conditions and automatically take action to mitigate damage and punish problematic users. </p><p>" +
            "In the global settings, you can ignore channels and roles and these can be overridden by each rule. You can specify <b>Interact With Webhooks</b> to scan messages from webhooks, which may be necessary to work with bots such as NQN or PluralKit. Since webhooks have no permissions, this may cause issues with announcement webhooks (e.g. if you limit the number of pings a user can send), so you may want to ignore your announcement channels.",
        "sticky-roles":
            "This module allows you to restore roles to users when they rejoin the server. You can control which roles are or aren't allowed to be re-added; for example, you should set the mute role to be sticky so users cannot clear their own mute by leaving and rejoining, but you may want to make your staff roles non-sticky. Roles that the bot cannot add or remove are simply ignored. Note that all of the user's roles are saved when they leave and the list of allowed roles is checked when they rejoin, so changing the settings does not change which roles the bot knows the user used to have.",
        "custom-roles":
            "This module allows you to reward users with individual custom roles. You can specify which roles have access to this as well as allowing boosters. Note that controlling the command's permissions is insufficient; users without a supporter role who have permission to use the command will still be denied. </p><p>" +
            "The anchor setting controls where these roles go; make sure this is above other color roles if you want users to be able to customize their name color. </p><p>" +
            "Once a user is no longer eligible to hold a custom role, or if they leave the server, their role is automatically deleted.",
        "stats-channels":
            "This module allows you to designate certain channels to be automatically updated to display data such as member count.",
        autoresponder:
            "This module allows you to set up triggers to automatically respond to certain messages. </p><p>" +
            "In the global settings, you can restrict by channel and role. </p><p>" +
            "Per trigger, you can control what text to match, whether or not partial matches are detected, and case-sensitivity. You can choose to make the reply a regular message or a reply with or without a ping. The response supports dynamic custom messages and you can specify a reaction, message response, or both.",
        modmail:
            "This module allows users to DM the bot to contact staff privately. Make sure the modmail category's permissions match the permissions you want the modmail channels to be created with.",
        tickets:
            "This module allows users to click a button under a ticket prompt to open a private channel to talk to staff. You can fully customize the prompt message, the button. and the message that is sent when a new ticket is opened. </p><p>" +
            "Make sure the modmail category's permissions match the permissions you want the modmail channels to be created with. The contact will be granted explicit permission to view and send messages in the opened channel.",
        nukeguard:
            "This module lets you mitigate damage from rogue or compromised staff. You can specify channels, roles, emoji, and stickers to protect and if any are deleted, the person who deleted it will be banned until someone can review the action. You can also protect all webhooks or prevent users from creating webhooks (instantly deletes them but doesn't ban the user), since the latter is a common way hackers will spam a server. </p><p>" +
            "You can also ratelimit bans and prevent a user from banning (or kicking, if selected) people too quickly (they will receive a warning about this first). Finally, you can select which roles people may add/remove. Be careful that you do not disallow any roles that are available via your server's onboarding flow, as that would cause regular members to be banned.",
        suggestions:
            "This module allows users to submit suggestions to the server. You can set suggestions to be anonymous in which case people who have permission to manage suggestions can click a button to view the author.",
    },
    commands: {
        settings: {
            syntaxes: [
                [
                    "/settings logging set-webhook <webhook>",
                    "Set or remove the webhook in a channel for logging. By default, the bot sends logging messages itself; however, bots cannot use emoji from server the bot is not in and neither can webhooks it creates. To log emoji correctly, you must create a webhook yourself and then use this command.",
                ],
            ],
            footer: "Other server-wide settings (embed color, mute role, etc.) are managed on the dashboard under Server Settings.",
        },
        top: {
            syntaxes: [
                [
                    "/top [type] [range] [page]",
                    "Fetch the top users in the server by XP.</p><ul><li>Set <b>type</b> to only view the text or voice leaderboard (by default, both are shown).</li><li>Set <b>range</b> to view the daily, weekly, or monthly leaderboard (by default, shows the all-time leaderboard).</li><li>Set <b>page</b> to view other pages in the leaderboard.</li></ul>",
                ],
            ],
        },
        rank: {
            syntaxes: [
                ["/rank [user]", "Show a user's rank card, including their text and voice XP, level, and rank."],
            ],
        },
        "mee6-import": {
            syntaxes: [
                [
                    "/mee6-import",
                    "Start the MEE6 import process. Instructions are given and options are shown after you call this command.",
                ],
            ],
        },
        "reset-xp": {
            syntaxes: [
                [
                    "/reset-xp <user>",
                    "Reset a user's XP to 0. Their daily, weekly, and monthly XP are reset to 0 and do not become negative. This deletes the user's records entirely, so they will no longer appear on the leaderboard until they gain XP again.",
                ],
            ],
        },
        ban: {
            syntaxes: [
                [
                    "/ban <user> [reason] [duration] [purge] [silent] [force]",
                    `Ban a user.</p> <ul>${reason}<li>The duration specifies after how long they will be unbanned. By default, the ban lasts forever.</li><li>Specify a purge duration to delete all of the user's recent messages within that time frame.</li>${silent}<li>Set force to true to unban and re-ban the user. If a user is already banned, they cannot be banned again, so the purge option will not work without forcing.</li></ul>`,
                ],
            ],
            footer: "Ban a user from the server, immediately removing them if they are in the server and preventing them from rejoining the server so long as they are banned. The IP address they were using at the time of the ban will also be blocklisted by Discord.",
        },
        kick: {
            syntaxes: [["/kick <member> [reason] [silent]", `Kick a member.</p> <ul>${reason}${silent}</ul>`]],
            footer: "Kick a member from the server, immediately removing them. They can rejoin immediately if they have an invite.",
        },
        mute: {
            syntaxes: [
                [
                    "/mute <user> [reason] [duration] [silent]",
                    `Mute a user.</p> <ul>${reason}<li>The duration specifies after how long they will be unmuted. By default, the ban lasts forever.</li>${silent}</ul>`,
                ],
            ],
            footer:
                "Mute a user by applying the mute role to them. Check the <a href='/docs/guides/permissions#how-to'>guides</a> for how to set up mute roles. Consider using timeouts instead. </p><p>" +
                "This will only work on server members unless you have the <a href='/docs/modules/sticky-roles'>Sticky Roles</a> module enabled.",
        },
        timeout: {
            syntaxes: [
                [
                    "/timeout <user> [reason] [duration] [silent]",
                    `Timeout a user or remove their timeout.</p> <ul>${reason}<li>The duration specifies how long the timeout lasts. By default, it is set to 0 seconds and will remove the timeout. The maximum duration is 28 days.</li>${silent}</ul>`,
                ],
            ],
            footer: "Timeout a user using native Discord timeouts, removing their ability to do anything other than view channels and read message history. This also disables their ability to react, interact with buttons/dropdowns, and perform any moderation tasks. Note that leaving and rejoining a server does not remove one's timeout.",
        },
        warn: {
            syntaxes: [
                [
                    "/warn <user> <reason> [informal] [silent]",
                    `Warn a user.</p> <ul><li>The reason will be sent to the user unless otherwise specified and put in their Daedalus user history.</li><li>Set informal to true to modify the DM to state that it is informal. This is reflected in their user history as well.</li><li>Set silent to true to not DM the warning to the member. This should only be used for retroactively adding warnings (such as if the user was warned in chat by a mod); warning a user is pointless if they don't see it.</li></ul>`,
                ],
            ],
        },
        unban: {
            syntaxes: [
                [
                    "/unban <user> [reason]",
                    "Unban a user. The reason is put in Discord's audit logs. No DM is sent and no user history is generated or modified.",
                ],
            ],
            footer: "Unban a user, allowing them to rejoin the server if they have an invite link.",
        },
        unmute: {
            syntaxes: [
                [
                    "/unmute <user> [reason] [silent]",
                    "Unmute a user. The reason will be sent to the user unless otherwise specified and is put in Discord's audit logs, but no user history is generated or modified. Set silent to true to not DM the user.",
                ],
            ],
            footer: "Unmute a user by removing their mute role. This will only work on server members unless you have the <a href='/docs/modules/sticky-roles'>Sticky Roles</a> module enabled. If you don't, then a user can leave and rejoin the server to remove their mute role anyway, unless another bot is applying sticky roles in which case Daedalus cannot interact with it.",
        },
        massban: {
            syntaxes: [
                [
                    "/massban file <file> [reason] [purge]",
                    "Massban a list of users from a file containing a list of IDs.",
                ],
                [
                    "/massban list <users> [reason] [purge]",
                    "Massban a list of users by providing a list of IDs directly.",
                ],
                [
                    "/massban modal [reason] [purge]",
                    "Massban a list of users by providing a list of IDs through a pop-up modal.",
                ],
                [
                    "/massban url <url> [reason] [purge]",
                    "Massban a list of users by providing a link to a raw file containing a list of IDs.",
                ],
            ],
            footer:
                "This command allows you to ban many users at once, which can be useful for managing raids or pre-emptively banning a spam wave from another server. This does not notify anyone who is banned. This action can be halted but will not revert existing bans. Each member will be checked for relative permissions (so a moderator cannot ban someone above themselves using this command) but it will be silently ignored and will not cause the command to fail. </p><p>" +
                "For all versions of the command, the reason will be included in banned users' Daedalus user histories and Discord audit logs and you can specify a purge duration to delete all of the user's recent messages within that time frame.",
        },
        history: { syntaxes: [["/history <user>", "View a user's Daedalus user history."]] },
        "delete-warn": {
            syntaxes: [
                [
                    "/delete-warn <id>",
                    "Delete a user history entry by its ID. The IDs are shown when you first take moderation action and when you call <code>/history</code>.",
                ],
            ],
        },
        "clear-warns": { syntaxes: [["/clear-warns <user>", "Clear a user's history entirely."]] },
        slowmode: {
            syntaxes: [
                [
                    "/slowmode [channel] [delay]",
                    "Set the specified channel (or this channel)'s slowmode to the specified delay (default: 0s).",
                ],
            ],
            footer: "Permissions are checked on the target channel rather than the channel in which the command is called. This does not ask for confirmation.",
        },
        purge: {
            syntaxes: [
                [
                    "/purge last <count> [types] [match] [case-sensitive]",
                    "Select the last N messages and delete those that pass the filter (see below).",
                ],
                [
                    "/purge between <start> [end] [types] [match] [case-sensitive]",
                    "Select messages inclusively between the specified start and end (default: the end of the channel) and delete those that pass the filter (see below).",
                ],
            ],
            footer:
                "Only 1000 messages may be selected at once. Only messages less than 2 weeks old can be bulk-deleted, so older messages are deleted one-by-one which may take a long time. </p>" +
                "<ul><li>Set <b>types</b> to filter by author type (human accounts vs. bot accounts)</li><li>Set <b>match</b> to filter by messages containing a certain string</li><li>Set <b>case-sensitive</b> to determine if matching is case-sensitive (default: false)</li></ul>",
        },
        notes: {
            syntaxes: [
                [
                    "/notes edit <user>",
                    "Bring up a modal to edit a user's mod notes. These are server-wide; use the built-in Discord feature for personal notes.",
                ],
                ["/notes view <user>", "View a user's mod notes."],
            ],
        },
        role: {
            syntaxes: [
                ["/role set [name] [color]", "Modify your custom role."],
                ["/role delete", "Delete your custom role."],
            ],
        },
        modmail: {
            syntaxes: [
                [
                    "/modmail reply [content] [anon] [file...]",
                    "Reply to a modmail thread. By default, the outgoing message shows your name, icon, and highest role, which can be disabled with <b>anon</b>.",
                ],
                [
                    "/modmail reply-modal [anon] [file...]",
                    "Just like <code>/modmail reply</code> but you will be prompted to include the message content in a pop-up modal. This is because slash command arguments cannot be multi-line.",
                ],
                [
                    "/modmail close [content]",
                    "Close a modmail thread. If the content is set to <code>-</code>, it will be replaced with the server default. If it is empty, the user will not be notified of the closure.",
                ],
            ],
            footer: "Note that by default everyone can use this command, because it is assumed that your modmail channels will only be visible to people who you want to allow to respond.",
        },
        ticket: { syntaxes: [["/ticket close", "Close a ticket channel."]] },
        suggest: { syntaxes: [["/suggest <suggestion>", "Post a suggestion."]] },
        suggestion: {
            syntaxes: [
                [
                    "/suggestion approve|consider|deny|implement <id> [explanation] [dm] [anon]",
                    "Update the status of a suggestion to approved, considered, denied, or implemented.</p> <ul><li>Set <b>explanation</b> to add context or details.</li><li>Set <b>dm</b> to notify the suggestion author.</li><li>Set <b>anon</b> to hide your identity from both the suggestion post and the DM notification if applicable.</li></ul>",
                ],
            ],
        },
    },
} as Docs;
