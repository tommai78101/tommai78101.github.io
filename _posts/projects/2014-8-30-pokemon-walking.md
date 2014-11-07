---
layout: default
title: Pokémon Walking
permalink: /projects/project_3/
tag: project
showcaseImage: proj_walking.png
---

![Imgur](http://i.imgur.com/rwkiHwC.png)

![Imgur](http://i.imgur.com/P56aP0J.png)

### Pokémon Walking Algorithm (Working Title) 

<hr>

**Abstract:**

Implements the walking algorithm used in classic Pokémon G/S/C games. Also includes a level editor to create your own game areas.

**MILESTONE HAS REACHED**, *ALL PRIORITIES ARE SHIFTED TO LOW!* That means I won't be working on this as active as I used to be, but it is still in development. Note that it does not mimic the walking algorithm used in Pokémon R/B/Y games (1st generation games). I also no longer put new releases here at GitHub, due to the lack of showing downloads count. For more information, please scroll to the bottom.

**NEW UPDATE**: School life has now taken up 90% of my entire free time. As far as I know, my courses are time-consuming, I feared I can no longer update this project as I wanted. Sucks though, because this is a wonderful project I couldn't just put it down. Apparently, Java 2D isn't popular and welcomed at my school, so it's now disheartening for me to sponsor this and let everyone else know. But, I'll do my best to continue efforts on completing it. **/UPDATE**

<hr>

**Description:**

This is a project I am currently working on while I'm doing conscription service. The aim of this project is to port the walking algorithm used in the 2nd generation games of the official Pokémon game series. At the moment, I'm leaving out the 1st generation walking algorithm, as the 2nd generation games introduced "turning on the spot".

If all bodes well, it's possible that this will become a Java port of the Pokémon 2nd generation games. Highly likely, but I don't want to get my hopes up too soon.

It's still in very early stages of development. Possibly even earlier than "alpha". *Everything is done from scratch/by hand. Only the character design is mostly mimicked from the original Pokémon games.*

<hr>

**Demo:**

[Demo 1 - Walking / Exploring](http://www.gfycat.com/EachIlliterateHyrax#)

[Demo 2 - Ledge Jumping / Surfing](http://www.gfycat.com/ShabbySoupyDobermanpinscher)

<hr>

**Controls:**

*Inputs:*

* Use WASD keys or the arrow keys to navigate around. Tapping the keys will "turn on the spot".

* Just walk into the water to surf around.

* Use Z, X to interact. / and . can also be used. ZX and arrow keys are for right hand users, WASD and ./ are for left hand users.

* Press Enter to open start menu.


*Save/Load:*

* To save your game, use the in-game menu option called "Save".

* To load your game, just start up the game. Loading is done automatically upon start up.

* To delete your saved data, just delete the "data.sav" file that was generated when you save your game.

<hr>

![Imgur](http://i.imgur.com/m13jfwm.png)

### Level Editor

<hr>

**Abstract:**

A level editor used to create custom maps that can be loaded into the game by anyone.

<hr>

**Description:**

This level editor is designed with the intention of easily create maps and allow better focus on development. Since the game loads the area maps from PNG bitmap files, I thought that it would be much nicer if there's a program that allows me to draw area maps more quicker and easier.

It used to be painstakingly laborious to draw area maps. I had to open up Paint.NET, a graphics editor that I used, and follow the rules of drawing tiles set forth by the documentations that I wrote for this game, and have to use an Eyedropper tool to look up the pixel colors in Paint.NET to check for consistencies and errors. And once that was done, I would had to redo everything if the area map loaded up by the game turns out to be wrong or a tile was drawn incorrectly. Everything about it was just tedious to begin with.

With this level editor, I was able to speed up development, and easily draw out test areas for debugging new game mechanics. Just fire up this program, quickly draw something, save it, let the game load it up, and then finally test everything out. It's quick, simple, and gets the job done.

This level editor is released to the public to allow players to create their own custom areas and play them from the game.

<hr>

**Demo and Usage:**

[*How to use the Level Editor, part 1:*](http://www.gfycat.com/NextNeighboringFluke)

[*How to use the Level Editor, part 2:*](http://www.gfycat.com/FrighteningGargantuanDonkey)

[*How to use the Level Editor, part 3:*](http://www.gfycat.com/SneakyTalkativeAcaciarat)

[*You Should Know when starting the game:*](http://www.gfycat.com/CloudyBonyGlowworm)

[*Adding your Custom Maps:*](http://www.gfycat.com/WeepyUnsightlyFairybluebird)

[*Loading your Custom Maps:*](http://www.gfycat.com/FamiliarUncommonIndianabat)

<hr>

**Features:**

| In development | Beta (Close to completion) | Complete |
|:---:|:---:|:---:|
| Entity Interaction | Overworld | All Movements* |
| Ground Height Lighting | Dialogues | Ledges |
| ??? | Level Editor | Area Warping |
| | Triggers/Events | Stairs |
| | ??? | Water |
| | | Bitmap Animation |
| | | Item Balls |
| | | Inventory |
| | | Saving/Loading |

\*All movements: Walking, Facing/Turning, Surfing, Bicycling, Jumping, etc.

<hr>

**Known Issues:**

* There may be issues with the tiles-to-tiles interaction, causing unwanted bugs.
* There may be hidden issues I haven't seen/know of yet.
* All items will exit out of inventory.

<hr>

**Plans:**

* ~~Implement all walking situations from the original games. Walking, surfing, jumping over ledges, riding bicycle, etc. (MAIN GOAL)~~  (MILESTONE COMPLETE!)
* Create a game completely different from Pokémon games. (Extended Plan, low priority, low activity, won't guarantee completion.)

<hr>

| Downloads | Latest Stable Version | Link |
|:---:|:---:|:---:|
| Walking | v19 | http://www.thehelper.net/attachments/walking_v19-zip.18695/ |
| Editor | v5 | http://www.thehelper.net/attachments/editor_v5-zip.18692/ |

Extract the JAR file from the ZIP file after you have downloaded it. Then double-click on it to run.

<hr>

**Wanna chat?**

You may head over to The Helper Forums, or Java-Gaming.org to post your feedback and/or comments. Much appreciated.

| Discussion Site | Link to Discussion Thread (Including latest release info) |
|:---:|:---:|
| The Helper Forums | http://www.thehelper.net/threads/java-pok%C3%A9mon-walking-algorithm.159287/ |
| Java-Gaming.org | http://www.java-gaming.org/topics/pok-mon-walking/32546/view.html |
