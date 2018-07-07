---
layout: post
title: Reinstalling Nvidia Drivers on Prebuilt Laptops
---

Laptops come in a variety of shapes, sizes, and specs. Nowadays, it's all either OEM or Pre-built Laptops. I myself own a pre-built laptop, and it's a great ride thus far. Except, when it comes to installing and updating Windows 10...

You see, I have my own fair shares of hassles I need to address whenever a new Windows 10 upgrade comes up. But I've come to terms with it, and now I know exactly how to resolve some of the hassles along the way. One of the hassles I've recently resolved is my Nvidia Graphics chipset on my pre-built laptop.

It was a long while ago, and I don't really know when it started. All I know is I've noticed there are multiple times where on the Windows 10 Taskbar, I don't see any icons for my Nvidia GeForce Experience, nor my Nvidia Control Panel. And whenever I feel like playing a video game, it would start up sluggishly, which prompted me to notice that it's using my Intel integrated graphics chipset instead of my Nvidia discrete graphics chipset. Even restarting the laptop wouldn't have a high reliability to fix this issue.

So, after hours of scouring through the internet, I was able to fix the issue and call it a day for now, but I feel like I should document what I did to resolve this, so it may be able to help someone one day.

Since this post doesn't really have screenshots, you'll just have to bear with me until I slowly put screenshots up. With that said, here are the steps for Windows 10 (1803 Spring Creator's Update as of July 6, 2018):

1. Identify that the laptop you're using is a pre-built laptop, and it's not an OEM laptop.
2. Go to your laptop's manufacturer's website or support page, and download all the graphics drivers you can find. In my case, it's Dell's Nvidia Driver bundle.
3. Extract the contents of the Nvidia Driver bundle, but do not install it. In my case, Dell provided an extractor that would auto-run the packaged Nvidia Driver's installation wizard. I had to cancel the installation wizard after extraction.
4. By this point, the extracted contents should be located somewhere that's easily accessible with a short file path directory, like C:\NVIDIA. In my case, it's C:\Dell\NVIDIA, so it drives home the point it's a pre-built laptop's graphics drivers.
5. Open up the Start Menu, and click on the Power button.
6. Hold SHIFT key down (usually the left SHIFT key), and click on the "Restart" option.
7. During the process of shutting down, Windows 10 will ask you what to do after a restart. 
8. "Troubleshoot" > "Advanced Options" > "Startup Options" > "Restart".
9. You should see 9 options and a 10th one on the next page.
10. Select the 7th option, "Disable Driver Signing Enforcement", by pressing the F7 key. 
11. Your laptop should continue the process of shutting down, and restarting. 
12. After a restart, once you're able to login to Windows 10, hold down SHIFT key (usually the left SHIFT key), and RIGHT-CLICK on the Start Menu button. A context menu should pop up.
13. Select "Computer Management".
14. In "Computer Management", select "Device Manager".
15. In "Device Manager", check to see if under "Display Adapters", you see your Nvidia Graphics Adapter. In my case, it would be labeled as "Nvidia GeForce GTX 860M".
16. If it does exists, then it means you're done with most of the hassles. Restart your laptop normally, and skip the rest of the steps.
17. If it does not exist, check to see if under "Other Devices", you see "Unknown Device".
18. If "Unknown Device" exists, go ahead and uninstall that item. That item is most likely to be your Nvidia Graphics chipset, and somehow after a Windows 10 upgrade, it got corrupted.
19. If "Unknown Device" does not exist, or if you have completed Step #18, go back to where your Nvidia drivers are extracted at in Step #4.
20. Install your Nvidia Drivers normally.
21. If your Nvidia Drivers are installed and has completed, restart your laptop normally, and skip the rest of the steps.
22. If your Nvidia Drivers are not installed, or has an error during the installation process (like me), then go back to "Device Manager" and attempt to install a "Legacy Driver". This is the step where you need to locate an INF file, which is usually inside your Nvidia Drivers folders.
23. "Add Legacy Hardware" > Follow all prompts > "Have Disk" > Locate the INF file.
24. Wait until your hardware appears in the list, and then continue the installation process. After installation, restart the laptop, and then skip the remainder of the steps.
25. If you start to see your Nvidia graphics chipset under "Display Adapters" in "Device Manager" for some unknown reasons, it probably have installed successfully, and you can skip the remainder of the steps.
26. If during the Nvidia Drivers installation process, you encountered an error, and the error mentions "The installation of this device is forbidden by system policy", there are 2 places you need to check.
27. The first place to check is in the Local Group Policy Editor. However, this is only available for Windows 10 Pro Editions and up, and as far as I know, you can only access this via command line input, "gpedit.msc". There does not exist a GUI icon for this.
28. In Group Policy Editor, you want to navigate to "\Computer Configuration\Administrative Templates\System\Device Installation\Device Installation Restrictions", and disable any of the options there that may interfere the graphics drivers installation processes.
29. The second place to check is in your UEFI Firmware Settings (aka, your BIOS settings). Typically, the BIOS settings, "Secure Boot" is enabled, preventing the user from tampering critical options, enabling access to unsigned drivers. You need to turn this option off before installing Nvidia Drivers, and then you need to re-enable this option after completing the Nvidia Drivers installation by restarting your laptop again.
30. After all of this, restart your laptop normally.

For the "Disable Driver Signing Enforcement", that option is automatically re-enabled after a normal restart / reboot process. This is going by second-hand information passed around in the Microsoft Community Forums, and it is not yet verified via official documentation (if I can actually find one myself...).

The main hassle for doing all of these steps is the process of restarting your laptop. At minimum, it takes about 3 restarts just to make sure the Nvidia graphics chipsets are operating normally.

So there you have it. My main post for all of the steps necessary to install a Nvidia graphics driver on a pre-built laptop. I'm pretty sure it's very similar for OEM laptops.

Signing off.



