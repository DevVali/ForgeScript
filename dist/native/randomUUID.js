"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_1 = require("crypto");
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$randomUUID",
    description: "Returns a random uuid",
    unwrap: false,
    execute() {
        return structures_1.Return.success((0, crypto_1.randomUUID)());
    }
});
//# sourceMappingURL=randomUUID.js.map