---
layout: default
order_id: 18
name: ageOfSpace
title: Age Of Space
preview-img: ageOfSpaceThumbnail.png
header-img: ageOfSpaceHeader2.png
icon: gamepad
icon_type: light
content_color: light
alt: Age of Space
link: https://store.steampowered.com/app/616780/Age_of_Space/
category: Game
description: During my intership semester I worked on Age of Space developing gameplay functionaliy and tools to ease further tasks for the other team members. I've worked on multiple aspects of the game. Originally I focused on the SteamAPI and Photon for the networking aspects of the game. Later on I shifted focus to developing an IK solution for the turrets in the game, able to support any amount of joints in order to target the enemy. This allowed us to quickly develop weaponry for different factions, some working on a regular 2 joint swivel, similar to current real world technologies while others having multiple joins and acting more like a robotic arm.<br><br>I continued working on the Age of Space project, and later I developed the pathfinding as a 3D implementation of the A* algorithm and I based the movement on the Boids program, developed by Craig Reynolds.<br><br>I created an ecosystem logic, where entities would work based on their function, allowing quick implementation of new elements in a scene simulating an active "base". This allowed us to have mining ships leave space stations, mine and retrieve the resources, firing events in order to affect a future economy, as well as any other ships creating a traffic of sorts as well as giant carriers warping in, delivering cargo and warping out.<br><br>One of the tools I created is a dynamic cinematic system based on a Finite State Machine. It allows the quick addition of any behaviour and is designed to replicate popular camera actions seen in Battlestar Galactica, Star Wars or any other movies I like. It supports following a target, orbiting it, making specific movements, even following predetermined or dynamically created curves around a position.
screenshots:
    - img: turrets3.gif
      title: IK turrets
      description: Some of the turrets following and firing at their target from different positions.
    - img: pathFinding.png
      title: 3D A*
      description: The ships are able to navigate around obstacles.
    - img: ecosystem.png
      title: Shuttles in traffic
      description: The game is far more intense now, with more dangers and tools at the players disposal.
    - img: ecosystemMining.png
      title: Miners doing their thing
      description: Each ship mines and returns to the station of origin.
videos:
    - link: https://www.youtube.com/embed/S9JKlTWKLkI
      title: Dynamic Cinematic
      description: Showcasing some of the cinematic behaviours
taggers:
    - title: C#
    - title: Unity
---

