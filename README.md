[![discord](https://img.shields.io/badge/Join-Legacy%20Scripts-orange?logo=discord&logoColor=white)](https://discord.gg/legacyscripts)



> [!CAUTION]
> This Lua script is distributed under the GNU General Public License (GPL).
> You are free to use and modify this script, but you must comply with the terms of the GPL.
> You cannot sell or distribute this script as your own work.
> See https://www.gnu.org/licenses/gpl-3.0.html for the full text of the GPL.

<hr style="border-radius: 50%; margin: 0 25px;">

> [!TIP]
> Create custom notifications for your pleasure
> No Notification Presets
<hr style="border-radius: 50%; margin: 0 25px;">




# LGF_Notify

## Standalone Notification for Fivem Server


![imagenoti](https://github.com/ENT510/LGF_Notify/assets/145626625/b776b944-1b7b-4c1b-ba25-1d85aaca2000)


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
