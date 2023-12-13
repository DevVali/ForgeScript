# $c
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Marks any code inside as a comment
## Usage
```
$c[...comment]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
comment | String | The comments | Yes | Yes
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/c.ts)
    
</summary>
    
```ts
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$c",
    version: "1.0.0",
    description: "Marks any code inside as a comment",
    unwrap: false,
    args: [
        {
            name: "comment",
            rest: true,
            required: true,
            description: "The comments",
            type: ArgType.String,
        },
    ],
    brackets: true,
    execute() {
        return this.success()
    },
})

```
    
</details>