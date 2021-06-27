---
layout: default
order_id: 4
name: autonomousRobot
title: Autonomous Robot
preview-img: autonomousRobot.png
header-img: autonomousRobotHeader.jpg
icon: keyboard
icon_type: light
content_color: light
alt: Autonomous Robot
category: Software
description: During the first semester of the Computer Science Master at AAU, I chose to be part of a project covering autonomous robotic solutions. Our proposed solution aimed to make a robot with a minimalist hardware design. As such, the robot only had one ultrasonic sensor, alter changed to an IR sensor for more exact results. Instead of odometry via a wheel sensor or other similar solutions. The robot counts the loops on the arduino to measure the distance it has moved. In order to measure rotation, when the robot first starts, there is a initiation manouver, where it checks the distance to anything in front and then rotates until that same distance is detected again. This requires that the robot starts looking at something that is at a unique distance away from it. By doing this, we measure how many degrees it can do per loop, since when it finished, we've countent how many loops per 360 degrees. The robot then sends points of collisons through a bluetooth module to a hub application made in Unity.<br><br>The application takes each point and draws a map, it can connect to multiple robots and has the ability to send commands to the robot. The communication solution also has an acknowledgment functionality, where each message is acknowledged before forgotten, therefore, as the robot moves, it builds up a buffer of points, if the buffer reaches a set length, it stops moving, and the points are sent, until acknwoledged and then removed from the buffer.<br><br>Possible commands:<br>- new_phone_who_dis | the hub sends a request to each of the connected ports expecting back "IDENTIFIER|NAME". If the response comes back corectly, the hub adds the robot to a list.<br>- manual | the hub sends a request to the selected robot in the list, changing it's state to manual control, which can then be controlled by a remote UI on the hub, useful to test the movements of the robot and debug the sensor.<br>- start | wipes the memory of the robot of existing points and restarts the initiation function.<br>- ack | acknowledges the previous message, telling the received to stop sending the current message and continue in the buffer.<br>- pause | the robot stops moving and no longer sends messages with the points, but keeps them in the buffer.<br>- stop | the robot stops moving and no longer sends messages with the points as well as wiping them from memory.<br>- give_state | returns the current state of the robot to the hub app, containing the current length of the points buffer, the current objective (moving,rotating, etc) and the current loop counter.<br>In order to test the robot easily, I also built a simulation of it in Unity, the functionality was made the same as the arduino version of it. As such, anyone in the team could write their own implementation by creating an instance of the robot class which would allow them to make the robot move forward, rotate and use sensors.
screenshots:
    - img: realMap.jpg
      title: A demo environment
      description: I made a quick area to test the collision point system.
    - img: realMapClose.jpg
      title: Robot initiation
      description: This is how the robot starts, facing a unique distanced object.
    - img: unitySimulation.png
      title: The Unity Simulation
      description: This map was built to allow quick testing of the robot behavior and mapping.
    - img: pointsFromSimulation.png
      title: Points map
      description: These are the points detected by the robot implementation in the Unity simulation.
    - img: robo-map2.gif
      title: Hub app mapping
      description: The hub app receiving dots and drawing them on a map.
taggers:
    - title: IoT
    - title: C++
    - title: Bluetooth
---

