---
layout: default
order_id: 8
name: chillMurderAndSunshine
title: Chill, Murder & Sunshine
preview-img: chillMurderAndSunshineThumbnail.png
header-img: chillMurderAndSunshineHeader.png
icon: gamepad
icon_type: light
content_color: dark
alt: Far From Normal
link: https://snowfallstudio.itch.io/chillmurdersunshine
category: Game
description: This is the first game I ever put a lot of focus on procedural generation. The idea was to create an RTS game where the player would start on an island and have enemies to handle on different islands with the final goal of wiping out all opposition. The procedural part comes in the form of creating the islands, placing environmental objects as well as enemies and locations of interest. The island is created by first running a perlin noise calculation. From it I create a mesh for each island. For spawning the objects, I could have used the same tehnique, but it would have seemed too inorganic. To solve that I used the Poisson Disc Sampling method, which allows picking spawning locations in areas without overlap. To finish, the sea is a shader I wrote in Cg.<br><br>The game is a classic RTS, in the style of warcraft. The player has a base of operations, can build units as well as other structures. However, the theme of the game is criminality. As such, resources are businesses, to which you send your units and they intimidate them to give money. We had a lot of fun designing the possible businesses as well as the units belonging to the mob boss.<br><br>The enemy is quite simple, acting more similarly to barbarians in CIV games. Basically they can keep spawning and take over businesses, but there's no real faction AI other than attacking units belonging to the player.<br><br>Credits:<br>- Austeja Vaicyte | Artist<br>- Theodor F Purcaru | Programmer
screenshots:
    - img: gameplay.png
      title: Gameplay
      description: How the game looked at the end of the jam.
    - img: gameplayGif.gif
      title: Unit gathering resources
      description: The unit gathers resources by "intimidating" business owners, as he is a mafia member.
videos:
    - link: https://www.youtube.com/embed/p1Sy_wbO2BU
      title: Gameplay Video
      description: Showcasing some of the gameplay
taggers:
    - title: Game-Jam
    - title: C#
    - title: Unity
---

