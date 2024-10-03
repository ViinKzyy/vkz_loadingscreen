fx_version 'cerulean'
games { 'gta5' }

author 'officialviinkz'
description 'Simple pause music video loading screen with toggle configuration'
version '1.0.0'

-- Specify the HTML file to use as the loading screen
loadscreen 'html/index.html'

-- Files required for the loading screen, including HTML, CSS, JS, and media assets
files {
    'html/index.html',
    'html/assets/logo.png',
    'html/css/style.css',
    'html/js/main.js',
    'html/assets/bgvideo.mp4',
    'html/assets/music.mp3'
}

-- Uncomment if you want to manually shut down the loadscreen
-- loadscreen_manual_shutdown 'yes'

-- Client scripts, including the main client-side Lua script and the configuration
client_scripts {
    'client/client.lua'  -- Main client-side script
}
