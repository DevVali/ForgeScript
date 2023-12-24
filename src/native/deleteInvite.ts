import { ArgType, NativeFunction, Return } from "../structures"
import noop from "../functions/noop"

export default new NativeFunction({
    name: "$deleteInvite",
    category: "unknown",
    version: "1.0.0",
    brackets: true,
    description: "Deletes an invite, returns the code",
    unwrap: true,
    args: [
        {
            name: "code",
            description: "The invite code",
            rest: false,
            required: true,
            type: ArgType.Invite,
        },
    ],
    async execute(_, [invite]) {
        return this.success(!!(await invite.delete().catch(noop)))
    },
})
