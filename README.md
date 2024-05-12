[![discord](https://img.shields.io/badge/Join-Legacy%20Scripts-orange?logo=discord&logoColor=white)](https://discord.gg/legacyscripts)

> [!CAUTION]
> This Lua script is distributed under the GNU General Public License (GPL).
> You are free to use and modify this script, but you must comply with the terms of the GPL.
> You cannot sell or distribute this script as your own work.
> See https://www.gnu.org/licenses/gpl-3.0.html for the full text of the GPL.



# LGF_Notify

Standalone Notification for Fivem Server


## Exports / Event


```lua

-- Client Side
exports.LGF_Notify:SendNotification({params})
-- Server Side
TriggerClientEvent('LGF_Notify:ServerNotify', source, {params})

```


## Example Usage


```lua
-- Example Notification client side
RegisterCommand('notifica', function()
    exports.LGF_Notify:SendNotification({
        icon = "fa-solid fa-info-circle",
        colorIcon = "#FFA500",
        message = "Example Notification Client Side",
        title = "Legacy Framework",
        position = "top",
        bgColor = "#000000",
        duration = 6
    })
end)

-- Example Notification Server side
RegisterCommand('notificasv', function(source, args, rawCommand)
    TriggerClientEvent('LGF_Notify:ServerNotify', source, {
        icon = "fa-solid fa-info-circle",
        colorIcon = "#FFA500",
        message = "Example Notification Server Side",
        title = "Legacy Framework",
        position = "top-right",
        bgColor = "#000000",
        duration = 6 -- in seconds
    })
end)
```


# ENT510
