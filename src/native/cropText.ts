import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$cropText",
    category: "unknown",
    version: "1.0.3",
    description: "Crops given text",
    brackets: true,
    args: [
        {
            name: "text",
            description: "The text to crop",
            rest: false,
            required: true,
            type: ArgType.String,
        },
        {
            name: "start index",
            description: "The start index to start cropping",
            rest: false,
            required: true,
            type: ArgType.Number,
        },
        {
            name: "end index",
            description: "The end index to finish cropping",
            rest: false,
            type: ArgType.Number,
        },
    ],
    unwrap: true,
    execute(_, [text, start, end]) {
        return this.success(text.slice(start, end || undefined))
    },
})
