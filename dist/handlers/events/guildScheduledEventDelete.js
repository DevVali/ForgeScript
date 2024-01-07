"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("../../core");
const DiscordEventHandler_1 = require("../../structures/extended/DiscordEventHandler");
exports.default = new DiscordEventHandler_1.DiscordEventHandler({
    name: "guildScheduledEventDelete",
    description: "This event is called when a schedule event is deleted",
    listener: async function (raw) {
        const now = raw;
        const commands = this.commands.get("guildScheduledEventDelete");
        for (const command of commands) {
            core_1.Interpreter.run({
                obj: now,
                command,
                client: this,
                states: {
                    scheduledEvent: {
                        new: now,
                        old: now
                    },
                },
                data: command.compiled.code,
                args: [],
            });
        }
    },
    intents: ["GuildScheduledEvents"],
});
//# sourceMappingURL=guildScheduledEventDelete.js.map