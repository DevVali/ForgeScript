# $findChannel
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Finds a channel
## Usage
```
$findChannel[query;return channel]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
query | String | The id, mention or channel name to find | Yes | No
return channel | Boolean | Returns the current channel id if none found | No | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/findChannel.ts)
    
</summary>
    
```ts
import { ArgType, CompiledFunction, NativeFunction, Return } from "../structures"
import { ChannelMentionCharRegex } from "./findGuildChannel"

export default new NativeFunction({
    name: "$findChannel",
    version: "1.0.0",
    description: "Finds a channel",
    brackets: true,
    args: [
        {
            name: "query",
            description: "The id, mention or channel name to find",
            rest: false,
            type: ArgType.String,
            required: true,
        },
        {
            name: "return channel",
            description: "Returns the current channel id if none found",
            rest: false,
            type: ArgType.Boolean,
        },
    ],
    unwrap: true,
    execute(ctx, [q, rt]) {
        const id = q.replace(ChannelMentionCharRegex, "")

        if (CompiledFunction.IdRegex.test(id)) {
            const ch = ctx.client.channels.cache.get(id)
            if (ch) return this.success(ch.id)
        }

        const rtId = rt ? ctx.channel?.id || undefined : undefined

        q = q.toLowerCase()

        return this.success(
            ctx.client.channels.cache.find(
                (x) => x.id === id || ("name" in x && (x.name as string).toLowerCase() === q)
            )?.id ?? rtId
        )
    },
})

```
    
</details>