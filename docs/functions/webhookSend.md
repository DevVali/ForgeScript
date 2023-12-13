# $webhookSend
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Sends a message with a webhook
## Usage
```
$webhookSend[url;content;return message ID]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
url | String | The webhook url | Yes | No
content | String | The content for the message | No | No
return message ID | Boolean | Return the message id of the sent message | No | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/webhookSend.ts)
    
</summary>
    
```ts
import { Message, WebhookClient } from "discord.js"
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$webhookSend",
    version: "1.0.0",
    description: "Sends a message with a webhook",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "url",
            description: "The webhook url",
            rest: false,
            required: true,
            type: ArgType.String,
        },
        {
            name: "content",
            description: "The content for the message",
            rest: false,
            type: ArgType.String,
        },
        {
            name: "return message ID",
            description: "Return the message id of the sent message",
            rest: false,
            type: ArgType.Boolean,
        },
    ],
    async execute(ctx, [url, content, returnMessageID]) {
        const web = new WebhookClient({ url })

        ctx.container.content = content || undefined
        const m = await ctx.container.send<Message>(web)
        return this.success(returnMessageID && m ? m.id : undefined)
    },
})

```
    
</details>