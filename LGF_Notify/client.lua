---@diagnostic disable: missing-parameter, doc-field-no-class, undefined-doc-param

-- Github 

---@param data table A table containing the data for the notification.
---@field icon string (optional) The icon to display in the notification.
---@field colorIcon string (optional) The color of the icon.
---@field message string (optional) The text of the notification message.
---@field title string (optional) The title of the notification.
---@field position string (optional) The position of the notification on the screen. Can be "top-left", "top", or "top-right".
---@field bgColor string (optional) The background color of the notification.
---@field duration number (optional) The duration of the notification in milliseconds. If not specified, defaults to 4000 milliseconds (4 seconds).

function NotifyExports(data)
    local icon = data.icon or "fa-solid fa-check"
    local colorIcon = data.colorIcon or '#343A40'
    local message = data.message or ""
    local title = data.title or "Title"
    local position = data.position or "top-right" -- top-left / top / top-right
    local bgColor = data.bgColor or "#343A40"
    local duration = data.duration * 1000 or 4000


    if not position then
        position = 'top-right'
    end

    SendNUIMessage({
        action = "showNotification",
        icon = icon,
        colorIcon = colorIcon,
        message = message,
        title = title,
        position = position,
        bgColor = bgColor,
        duration = duration
    })
end

function SendNotification(data)
    NotifyExports(data)
end



RegisterNetEvent('LGF_Notify:ServerNotify', SendNotification)
exports('SendNotification', SendNotification)
