---
layout: default
order_id: 13
name: spaceRace
title: Space Race
preview-img: spaceRaceThumbnail.png
header-img: spaceRaceHeader.png
icon: gamepad
icon_type: light
content_color: light
alt: Far From Normal
category: Game
description: During CreateJam21 we made a multiplayer game where players have to collect items placed on a rotating station in space. They can bump into each other, lay traps and have to collect the most items until they're all gone. Their characters are picked randomly out of 3 premade ones. A fish, an alien and a tablet with my face on it.<br><br>The networking is done using Mirror, which is a library that acts as an abstraction allowing for the develop to focus on behaviour scripting. It functions similarly to Unity Networking, Photon etc. One of the more complex elements was the rigidbody setup of the player, showing properly for each connected user as well as responding to hits, being pushed back. This was achieved using a server authoritative setup, where the players send the input and the physics are only simulated on the host player.<br><br> I focused on making the experience comfortable for users, informing them if they'd have problems with connecting, when they'd connect, someone else joining the server and other quality of life features that make multiplayer games like these playable. Similarly the match has a clear start and end, showcased both through the UI as well as a giant shield around the station which dissappears when the game begins.<br><br>Credits:<br>- Austeja Vaicyte | Artist<br>- Theodor F Purcaru | Programmer
screenshots:
    - img: spaceRaceMe.png
      title: Player Character
      description: One of the players available in the game, designed after yours truly.
taggers:
    - title: Game-Jam
    - title: C#
    - title: Unity
---

