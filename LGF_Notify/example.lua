---@diagnostic disable: missing-parameter



-- Example Notification client side
RegisterCommand('notifica', function()
    exports.LGF_Notify:SendNotification({
        icon = "fa-solid fa-info-circle",
        colorIcon = "#FFA500",
        message = "Example Notification Client Side",
        title = "Legacy Framework",
        position = "top",
        bgColor = "#000000",
        duration = 6 -- in seconds
    })
end)

-- Example Notification Server side
RegisterCommand('notificasv', function(source)
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
