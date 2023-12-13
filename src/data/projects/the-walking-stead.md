---
index: 0
name: The Walking Stead
tools: ['Godot', 'Blender']
timeSpent: '2 months'
images: ['/assets/WalkingSteadImg.png']
roles: ['Project Lead', 'Solo Developer']
description: 'The Walking Stead is a fan game of Project Zomboid and Left For Dead 2.
'
---

Over the summer holidays, me and 2 other friends played a lot of a game called Project Zomboid. Project Zomboid is a 2D isometric, open-world survival game where you corporately survive the zombie apocalypse. However, this game has no official storyline so as we played we created our own lore and story about how we met, how we survived, and how we died.

This lore later got expanded enough to where we decided to use our creative skills and writing to create a game based on this lore. We had recently played Left for Dead 2 and thought we would follow a similar game progression and style as that. I was the only one with game development skills, however, I wasn't so good with 3d modelling so my friends spent this time learning about 3D modelling and game development as I worked on the code of the game. The name “The Walking Stead” is a play on words from the TV show “The Walking Dead” as the main character from this game is called Del Steadman.

In its current state The Walking Stead has a fairly large 1st level and fully working multiplayer with support for up to 3 people. However, everyone has lost interest in the project for the time being and the project hasn't been worked on for a while except for me working on some of the code every now and then. This is one of the most complicated yet well-thought-out projects I have made to date so I wanted to share this on my website with some screenshots and descriptions of it improved and grew over time.

<iframe
    src="https://www.youtube.com/embed/ugyTidbpqo8?si=y88RANgu6QRcU30W"
    title="YouTube video"
    allowFullScreen
    frameborder="0"
>
</iframe>
This is a video from our last play test showing the state of the game and us just having fun playing it.

![Describe what is in this image](/assets/DelsteadmanEarlyScreenshot.png)
This is a screenshot of the early development when I was setting up the multiplayer networking and GUI.

![Describe what is in this image](/assets/DelsteadmanFigmaDesigns.png)
This is from our Figma file where we designed some of the UI for the game and came up with the unique character 3D selection screen which is rendered in real-time.

<div class="ImageGrid">

![Describe what is in this image](/assets/DelsteadmanSelect1.png)

![Describe what is in this image](/assets/DelsteadmanSelect2.png)

</div>
Here you can see behind the scenes of the room and how I used the white material of the wall to bounce light back onto the characters to make the scene brighter and how dim it would look without it.

![Describe what is in this image](/assets/DelsteadmanZombieAI.png)
Here is a snapshot of the zombie AI that I made from scratch for the game. This was particularly hard as the zombies in Project Zomboid are really advanced and I wanted to have it as accurate to the original game as possible. Some of the things I implemented were: Zombies will idle around the map over time, Zombies will walk towards the player if they see or hear them, Zombies will lose interest in the player if they don't see or hear them for a while. One of the lesions I learnt about this was about staticly typed vs dynamically typed variables in godot. By not specifying what variable type it is, int, str, array etc.. It left it up to the compiler to interpret it and made the zombie AI a lot less preformant than it could have been if I staticly typed it.

![Describe what is in this image](/assets/InsideBigHouse.png)
We recreated all of the interiors for each house in the area, unfortunately not all the furniture was placed around as people lost interest in making the game for the time being. However, I did go out of my way to add as much life to the game as possible. I did this by making functional light switches for each house and I made animations for intractable objects.

<iframe
    src="https://www.youtube.com/embed/WE7Oonea6hk?si=Nj4AuWWXCl8k5a-I"
    title="YouTube video"
    allowFullScreen
    frameborder="0"
>
</iframe>

One of the things I am most proud of is the intractable windows as they are a massive part of the Project Zomboid game. In the game, you can jump though the windows to escape zombies and I went out of my way to make this as polished as possible by adding custom character and camera animations as well as re-implementing a feature from an old game I made where the broken glass had physics and would bounce of your character.

![Describe what is in this image](/assets/WalkingSteadConceptArt.png)
Partway through development I got back into 3D rendering and creating cool renders for desktop backgrounds and posters. I decided to dedicate a full day to making some concept art for the game which really motivated the team and inspired some of our ideas.

I would like to credit Ben (parsons00) for helping create the 3D models for the characters, zombies, and environment including outside objects and the furniture.

I would like to credit DJ (HardLadBarry) for creating each of the houses in the game and for being the primary story writer and designer.

I would like to credit [quaternius](https://quaternius.com/) and his website as we used his asset packs for many of the ingame weapons and items.
