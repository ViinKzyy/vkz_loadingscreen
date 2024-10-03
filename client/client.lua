-- client.lua

-- Variable to check if native has already been run
local Ran = false

-- Wait until client is loaded into the map
AddEventHandler("playerSpawned", function ()
    -- If not already ran
    if not Ran then
        -- Close loading screen resource
        ShutdownLoadingScreenNui()
        
        -- Send the config value to the NUI (JavaScript)
        SendNUIMessage({
            action = "setMusicToggle",
            enableToggle = Config.EnableMusicToggle
        })
        
        -- Set as ran
        Ran = true
    end
end)
