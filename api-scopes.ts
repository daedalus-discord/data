export default {
    all: "grants all permissions - <b>this is a dangerous permission to enable and should probably only be used for testing</b>",
    "moderation:history:get": "obtain a user's history",
    "moderation:history:append": "append entries to a user's history",
    "moderation:history:append:id":
        "allow the application to set the action's mod to any user (by default, it shows the API token's name in user history)",
    "moderation:history:delete": "delete entries from a user's history",
    "xp:get": "read XP, both for individual users and the server leaderboard",
    "xp:write": "edit user XP",
} satisfies Record<string, string>;
