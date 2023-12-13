---
index: 1
name: 'VR Aim Trainer'
tools: ['Godot', 'Blender', 'Figma']
timeSpent: '1 month'
images: ['/assets/VRaim.png']
roles: ['Solo Developer']
description: 'A VR aim trainer after I could not find a good one on Steam.
'
---

I come from a fairly competitive background playing a lot of CS2, Overwatch 2 and Valorant where I was team captain for the Valorant esports team at college. Naturally, I have spent a fair while in traditional aim trainers to get better at clicking heads however when I was trying to go for a record in one of my favorite VR games I found myself not being able to aim very effectively as I haven't played VR for a while. So I spent a bit of time looking for a good game to train my aim for these intense battles but everything I found didn't look good or crashed when I opened them, so I took it upon myself to make my own.

<iframe
    src="https://www.youtube.com/embed/V55YZD8FdH8?si=i7trc6MJH0MnNrUJ"
    title="YouTube video"
    allowFullScreen
    frameborder="0"
></iframe>

I had never made any VR games before and I didn't know how well godot could handel VR but to my surprise it was worked very well. Thankfully a lot of the work had been done by the [Godot Open-XR](https://github.com/GodotVR/godot_openxr) team which had all the boilerplate code ready and worked right out the box with loads of documentation. Within my first day I already had a MVP of the game and in this video you can see me messing around and testing it out.

I had made a handful of traditional 3D games so some of my skills would translate to VR game development but I was faced with a handful of issues so far. The biggest issue is making a good GUI for the game as I had to take into account they can't just take off their headset to use a keyboard and mouse and had to design it so you could physically point and click.

<div class="ImageGrid">

![Describe what is in this image](/assets/SettingsBoardV1.png)

![Describe what is in this image](/assets/SettingsBoardV2.png)

</div>

In my first 2 attempts at this GUI, I was still learning about the correct way to make GUI and the fact that I made them overly blocky and huge to account for the use of VR made them very ugly but it was a good starting point to get my ideas down.

<div class="ImageGrid">

![Describe what is in this image](/assets/SettingsBoardV3.png)

![Describe what is in this image](/assets/SettingsBoard2V3.png)

</div>

Next, my friend who specializes in website and GUI design and creation made these GUI alongside me to teach me how to make better websites and GUI overall. This was a big step and allowed me to create a better GUI in future games and laid the foundation knowledge to design this website you are on right now!

<div class="ImageGrid">

![Describe what is in this image](/assets/ScenarioSelectorV4.png)

![Describe what is in this image](/assets/GameSettingsV4.png)

</div>

These were my final designs for VR that incorporated the good practices and designs from my friend's creation alongside my ideas and then optimized them for VR gaming. I then began the tedious part of actually coding them into my game. I Love the Godot Game Engine but I do hate how you create GUI and I wish I could just write it in React or HTML as that is what I am more used to now.

<div class="ImageGrid">

![Describe what is in this image](/assets/VRAddTasks.PNG)

![Describe what is in this image](/assets/VRTasks.PNG)

</div>

One of the biggest things for me when coding up this GUI was to make it as expandable as possible. When looking back on some of my older projects such as my Dungeon Resurgence I can see how hard it would be to maintain the code and add more and more items later on. I wanted to have as many “scenarios” as possible and to have the ability to make your own just like Kovvaks. So I opted to make all my GUI dynamic, one of the ways I did this was to add each scenario to the GUI list as it was loaded from a JSON file, you can see a part of the code in these screenshots.

![Describe what is in this image](/assets/VRGun.PNG)

For most of my other projects I havent attempted to stick to my naming conventions and overcomplicating parts of the game that doesnt need to be over complicated, for example this gun has been simplified as much as possible with all extra things removed and I have stuck to using pascal-case for my node naming.

Unfortunately this game is only half way to being done at the time of writing but I have been documenting every step as I like to make YouTube content about things I do and wanted to try make some videos on game development. These videos would also act as some kind of marketing for the games I create so more people would play them when I upload them on itch.io.
