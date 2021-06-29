---
layout: default
order_id: 14
name: hapticGlove
title: Haptic Glove
preview-img: hapticGloveThumbnail.png
header-img: hapticGloveHeader.png
icon: keyboard
icon_type: light
content_color: dark
alt: Haptic Glove
category: Software
description: For my Master Thesis, I developed a haptic feedback glove based on work done by people such as Thad Starner. The work was separated in two semesters, in the first one we focused on Grounded theory, where we collected rich data to try to understand saxophone players and their problems. This was done through interviews and observations I led, as well as a number of surveys. We took all of the collected data and generated a Thematic Analysis which was crucial at knowing what we wanted to specifically target with out solution the next semester.<br><br>During the second semester we went through a lengthy design phase until developing the final version of the project. I interviewed experts in the field of playing the saxophone, electrical engineering and design. They helped bring in context and answer the questions that came through the iterative process.<br><br>I built the glove using an Arduino Nano for all of the logic, pressure sensors to detect the movements of the user, coin motors to give haptic feedback, leds to guide the user and a bluetooth BLE module to send data to an Android app. The app was used to improve the capabilities of data storage and debugging but after different feedback I expanded it to allow users to setup and calibrate the glove as well as recording and replaying movement patterns. We conducted a number of interviews of people using the glove, where they would try to either follow along, the vibrations being continuous until correct, or simply feel a whole pattern move without any interuption and try to see if they could memorize or understand it. The results were discussed in the final research paper.
screenshots:
    - img: affinityDiagram.png
      title: Affinity Diagram for Thematic Analysis
      description: The themes we discovered from our indepth analysis.
    - img: gloveEvolution.png
      title: Original Design --> Final Design
      description: The final design supports differently sized hands due to the finger modules being able to bend.
    - img: displayedParts.png
      title: Parts on display
      description: All of the parts used except for the leds.
    - img: oldAppNewApp.png
      title: The two Android apps
      description: The first one is the debug app, the one on the right is the final one I developed.
videos:
    - link: https://www.youtube.com/embed/tj38RzZlQ9E
      title: Showcasing "Slow Learning"
      description: This video shows the mode where users need to properly follow along with the haptic feedback.
taggers:
    - title: IoT
    - title: C++
    - title: Bluetooth
    - title: Android
---

