"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("../../core");
const DiscordEventHandler_1 = require("../../structures/extended/DiscordEventHandler");
exports.default = new DiscordEventHandler_1.DiscordEventHandler({
    name: "guildScheduledEventUserAdd",
    description: "This event is called when a user is added to a schedule event",
    listener: async function (m, user) {
        const commands = this.commands.get("guildScheduledEventUserAdd");
        for (const command of commands) {
            core_1.Interpreter.run({
                obj: user,
                command,
                client: this,
                states: {
                    scheduledEvent: {
                        new: m,
                        old: m
                    },
                },
                data: command.compiled.code,
                args: [],
            });
        }
    },
    intents: ["GuildScheduledEvents"],
});
//# sourceMappingURL=guildScheduledEventUserAdd.js.map