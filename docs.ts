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
        "co-op":
            "This module allows you to configure a co-op system for Genshin Impact. Users will be able to create help requests. This essentially allows you to let users ping helper roles without giving them direct permission and streamlines the process.",
        feeds: "This module lets you set up feeds to post to a channel from an external resource (currently supported: reddit)",
        count: "This module allows you to set up count channels in which users can only send messages that are the next number to be counted. A scoreboard tracks how many times each person has counted. Each count channel has a next value (the next number it is expecting to see) and an interval (how much the number changes each time). By default, double-counting is enabled, but you can enable it to allow the same person to send more than one consecutive number.",
        giveaways:
            "This module allows you to set up giveaways which let users join for a chance to win any prize you choose, and does the random selection for you. You can require users to have all or any of a list of roles, block roles, and set bypass roles to ignore both restrictions. You can also give select roles more entries.",
        reminders:
            "This module allows users to set reminders for themselves. If this command is disabled, users can always still use it in the bot's DMs.",
        reports:
            "This module allows users to report messages or users to mods. You can configure a channel to report to. If this channel is public, you may wish to make reporters anonymous, in which case you can specify roles that are allowed to view the author of an anonymous report.",
        polls: "This module lets you post polls for users to respond (anonymously) to.",
        highlights:
            "This module allows users to set highlighted phrases or conditions for the bot to DM them to alert them of something that happened in a channel they can see.",
        utility: "This module contains utility features, both for server moderation and for regular users to user.",
        "sticky-messages":
            "This module allows you to set a message to be constantly reposted to the bottom of a channel so users see it more visibly.",
        fun: "This module offers some purely for-fun commands.",
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
        "co-op": {
            syntaxes: [
                [
                    "/co-op [query] [world-level] [region]",
                    "Ask for co-op help. Set <b>query</b> to include details about your request. Setting the world level and region is optional if you have exactly one of the configured roles. You can set these to override the values obtained from detecting your roles.",
                ],
            ],
        },
        feed: {
            syntaxes: [
                [
                    "/feed add reddit <subreddit> <channel>",
                    "Set up a feed to post from the designated subreddit to the designated channel. Posts only happen at most once every 10 seconds, so if the subreddit receives posts faster than that, some will be skipped to keep the feed updated without hitting any ratelimits.",
                ],
                ["/feed list", "List this server's feeds."],
                ["/feed remove <id>", "Remove a feed by its ID."],
            ],
        },
        scoreboard: {
            syntaxes: [
                [
                    "/scoreboard [channel]",
                    "View the count scoreboard either for a specific channel or for the whole server combined.",
                ],
            ],
        },
        reroll: { syntaxes: [["/reroll <id>", "Reroll a giveaway by ID, completely recalculating its winners."]] },
        reminder: {
            syntaxes: [
                [
                    "/reminder set <duration> [query]",
                    "Set a reminder to DM yourself after a specified duration, optionally including a reminder message. You will be linked back to where you created the reminder in case you need context.",
                ],
                [
                    "/reminder list [all]",
                    "List your reminders. If <b>all</b> is true or you use this command in DMs, it will list reminders everywhere; otherwise, it will only list reminders you set in the current server.",
                ],
                [
                    "/reminder cancel <id>",
                    "Cancel a reminder by ID. The ID is specific to you and is global, so you can cancel a DM from a different server than where you set it.",
                ],
            ],
        },
        "Report User": {
            syntaxes: [
                [
                    "Report User",
                    "Right-click a user and select <b>Apps &gt; Report User</b>. You must specify a reason.",
                ],
            ],
        },
        "Flag Message": {
            syntaxes: [
                [
                    "Flag Message",
                    "Right-click a message and select <b>Apps &gt; Flag Message</b>. You may optionally specify a reason.",
                ],
            ],
        },
        report: { syntaxes: [["/report <user>", "Report a user. You must specify a reason in the pop-up modal."]] },
        flag: {
            syntaxes: [
                [
                    "/flag <message>",
                    "Flag a message (by URL). You may optionally specify a reason in the pop-up modal.",
                ],
            ],
        },
        poll: {
            syntaxes: [
                [
                    "/poll yes-no [allow-neutral] [create-thread] [duration] [qotd]",
                    "Create a yes/no poll. If <b>allow-neutral</b> is set, users can also vote for a neutral option. Results are displayed as a proportion bar showing green (yes), white (neutral), and red (no). </p><p>" +
                        "You will be asked to enter the question in a pop-up modal.",
                ],
                [
                    "/poll binary <left-label> <right-label> [allow-neutral] [create-thread] [duration] [qotd]",
                    "Create a binary poll. The left and right label options refer to what text will show up on the voting buttons. If <b>allow-neutral</b> is set, users can also vote for a neutral option. Results are displayed as a proportion bar showing blue (left), white (neutral), and green (right). </p><p>" +
                        "You will be asked to enter the question and the full left and right options in a pop-up modal.",
                ],
                [
                    "/poll multi [allow-multi] [create-thread] [duration] [qotd]",
                    "Create a multiple-choice poll. If <b>allow-multi</b> is set, users can vote for multiple options; otherwise, they can only select one. Results are displayed as a list of options in the order you specify with their vote counts and percentage approvals. </p><p>" +
                        "You will be asked to enter the question and the list of options in a pop-up modal.",
                ],
            ],
            footer: "For all types, if <b>create-thread</b> is set, a thread will be created on the poll message with that name. If <b>duration</b> is set, the poll will be posted after the specified delay. If <b>qotd</b> is set, the pop-up modal will also ask you for a QOTD and it will post it and create a thread under it using the <b>qotd</b> option as the name.",
        },
        "set-qotd-ping": {
            syntaxes: [
                [
                    "/set-qotd-ping [role]",
                    "Set or unset a role to be pinged whenever a QOTD is posted by <code>/poll</code>.",
                ],
            ],
        },
        highlight: {
            syntaxes: [
                [
                    "/highlight add <word-or-phrase>",
                    "Highlight a word or phrase so the bot will alert you if it is posted.",
                ],
                ["/highlight list", "List your highlighted words/phrases and show your highlight settings."],
                ["/highlight remove <word-or-phrase>", "Remove a word/phrase from your highlights."],
                ["/highlight clear", "Remove all of your highlighted words/phrases."],
                [
                    "/highlight [un]block channel|user <channel / user>",
                    "Block or unblock highlight alerts from a channel / user.",
                ],
                ["/highlight block list", "List your highlight-blocked channels and users."],
                ["/highlight unblock all", "Unblock all channels and users."],
                [
                    "/highlight cooldown <duration>",
                    "Set the minimum amount of time between consecutive highlights from the same channel.",
                ],
                [
                    "/highlight delay <duration>",
                    "Set the minimum amount of time to wait after your last message before highlighting you in that channel.",
                ],
                [
                    "/highlight replies <highlight>",
                    "Enable/disable highlighting for replies to your messages that had pings turned off.",
                ],
            ],
        },
        "emoji-roles": {
            syntaxes: [
                ["/emoji-roles view <emoji>", "View the allowed roles for an emoji."],
                ["/emoji-roles reset <emoji>", "Reset permissions for an emoji, allowing all users to use it."],
                [
                    "/emoji-roles enable <emoji> <roles...>",
                    "Enable an emoji for a role / multiple roles. If the emoji was previously not restricted, it will become restricted to anyone without these roles.",
                ],
                [
                    "/emoji-roles disable <emoji> <roles...>",
                    "Disable an emoji for a role / multiple roles. If you disable it for all roles, it becomes available for everyone.",
                ],
            ],
            footer: "This is a built-in Discord feature that you cannot control from the client itself and most bots do not support. This works everywhere, not just in your server - users will be unable to see the emoji in their emoji selector and if they try pasting the code directly, it will show up as <code>:EmojiName:</code>, just like if they did not have Nitro.",
        },
        help: { syntaxes: [["/help", "View bot help including some important links."]] },
        info: {
            syntaxes: [
                ["/info channel <channel>", "View channel info."],
                [
                    "/info invite <invite>",
                    "View invite info, including who created it, where it goes, and its expiration. Additionally, if possible, it will also show server info.",
                ],
                ["/info role <role>", "View role info, including its permissions, display settings, and position."],
                [
                    "/info server [server]",
                    "View server info, by default showing the current server. IF the bot is not in the server, it will attempt to fetch some basic data through your account through OAuth2 (you must log in on the dashboard to make this possible).",
                ],
                [
                    "/info user <user>",
                    "View user info, including their creation and join date and permissions in the server. If you have the appropriate permissions, you can also see if they are banned or not.",
                ],
            ],
        },
        avatar: {
            syntaxes: [
                ["/avatar <user>", "View a user's avatar, showing both their user and server avatar if applicable."],
            ],
        },
        roles: {
            syntaxes: [
                ["/roles add <user> <roles...>", "Add a role / multiple roles to a user."],
                ["/roles remove <user> <roles...>", "Remove a role / multiple roles from a user."],
            ],
            footer: "This command will check role hierarchy, so users cannot use this command to add/remove roles they would not be able to with the Manage Roles permission. You can also restrict which roles can be added/removed with this command.",
        },
        format: {
            syntaxes: [
                [
                    "/format channel <channel>",
                    "Post the format to display a channel mention (<code>&lt;#ID&gt;</code>).",
                ],
                [
                    "/format mentionable <user/role>",
                    "Post the format to display a user mention (<code>&lt;@ID&gt;</code>) or role mention (<code>&lt;@&amp;ID&gt;</code>).",
                ],
                [
                    "/format emoji <emoji>",
                    "Post the format to display an emoji (<code>&lt;:name:ID&gt;</code> for static and <code>&lt;a:name:ID&gt;</code> for animated). The bot will give you an autocomplete menu of the current server's emoji, so you can use this even without Nitro.",
                ],
            ],
        },
        say: {
            syntaxes: [
                [
                    "/say <message>",
                    "The bot will say your message as a regular message (i.e. it will respond secretly to your command, so other users cannot see who called this).",
                ],
            ],
            footer: "Use of this command for anything reasonably determined as malicious (e.g. trying to impersonate Discord staff, scamming users, posting abusive content) is subject to termination of your right to use Daedalus and a potential report to Discord.",
        },
        code: {
            syntaxes: [
                [
                    "/code <code>",
                    "Post the code in a plain-text message (for easy copying for mobile users) and display a link to the Genshin Impact gifting center with the code auto-filled.",
                ],
            ],
        },
        qr: {
            syntaxes: [
                [
                    "/qr <text>",
                    "Encode anything as a QR code. This is usually used for links but can be used for any text.",
                ],
            ],
        },
        tex: { syntaxes: [["/tex", "Open a pop-up modal to insert and render LaTeX into a PNG."]] },
        convert: {
            syntaxes: [
                [
                    "/convert <amount> <source> <target>",
                    "Convert between units or currencies. Currency values are only updated daily, so they are not guaranteed to be accurate. Do not use this command for crucial measurements as we cannot guarantee correctly and are not responsible for any injury or loss of life resulting from faulty conversions.",
                ],
            ],
        },
        snowflake: {
            syntaxes: [
                [
                    "/snowflake <snowflake>",
                    "Deconstruct a snowflake (Twitter's ID format which Discord also uses). If you have an ID but don't know what type of object it is (channel, role, user, etc.), you can still obtain its creation date with this.",
                ],
            ],
        },
        "role-accessibility": {
            syntaxes: [
                [
                    "/role-accessibility [threshold]",
                    "Check all roles in the server for if their color meets contrast standards with both the light and dark mode background. This uses WCAG 2.0 and requires roles to have a contrast of at least the provided threshold (default = 2.5).",
                ],
            ],
        },
        stick: {
            syntaxes: [
                [
                    "/stick [seconds]",
                    "Set the sticky message. A pop-up modal will appear to let you enter multi-line messages. The message will be reposted at most once every <b>seconds</b> (default 4) seconds.",
                ],
            ],
        },
        unstick: { syntaxes: [["/unstick", "Remove this channel's sticky message."]] },
        sticklist: { syntaxes: [["/sticklist", "List this server's sticky messages."]] },
        random: {
            syntaxes: [
                [
                    "/random choose <options...>",
                    "Randomly choose one of the listed options. These do not have to be unique, so you can do <code>/random choose 1 1 1 2</code> for a 75% chance to choose <code>1</code>.",
                ],
                ["/random flip [heads-chance]", "Flip a coin. You may optionally bias the coin."],
                [
                    "/random roll [config]",
                    "Roll a die. You may optionally configure the dice using D&amp;D format; for example, <code>1d6 + 2d10 - 2</code> will roll a 6-sided die and two 10-sided dice and then add them all and subtract 2 from the result.",
                ],
            ],
        },
    },
} as Docs;
