# $botDestroy
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Destroy Client
## Usage
```
$botDestroy
```
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/botDestroy.ts)
    
</summary>
    
```ts
import { NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$botDestroy",
    version: "1.0.0",
    description: "Destroy Client",
    unwrap: true,
    execute(ctx) {
        ctx.client.destroy()
        return this.success()
    },
})

```
    
</details>