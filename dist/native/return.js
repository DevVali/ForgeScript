"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NativeFunction_1 = require("../structures/NativeFunction");
const Return_1 = require("../structures/Return");
exports.default = new NativeFunction_1.NativeFunction({
    name: "$return",
    version: "1.0.0",
    description: "Returns a value",
    unwrap: true,
    args: [
        {
            name: "value",
            description: "The value to return",
            rest: false,
            required: true,
            type: NativeFunction_1.ArgType.String,
        },
    ],
    brackets: false,
    execute(_, [val]) {
        return Return_1.Return.return(val ?? "");
    },
});
//# sourceMappingURL=return.js.map