"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const scheduledEvent_1 = require("../../properties/scheduledEvent");
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$newScheduledEvent",
    description: "Retrieves new data from an event whose context was a scheduled event instance",
    brackets: true,
    unwrap: true,
    output: structures_1.ArgType.Unknown,
    args: [
        {
            name: "property",
            description: "The property to pull",
            rest: false,
            type: structures_1.ArgType.Enum,
            enum: scheduledEvent_1.ScheduledEventProperty,
            required: true,
        },
        {
            name: "separator",
            description: "The separator to use in case of array",
            rest: false,
            type: structures_1.ArgType.String,
        },
    ],
    execute(ctx, [prop, sep]) {
        return this.success(scheduledEvent_1.ScheduledEventProperties[prop](ctx.states?.scheduledEvent?.new, sep));
    },
});
//# sourceMappingURL=newScheduledEvent.js.map