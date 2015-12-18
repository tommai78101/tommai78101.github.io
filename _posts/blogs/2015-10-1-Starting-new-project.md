---
layout: post
title: Deprecating Master's Project
---

In very late January, and early February, I started to work on my Master's Project with the idea of implementing multiplayer mode.

It comes to a point where Unity decided to start deprecating the old networking API in favor of a new server-client networking model, which is called Unity Networking API, also known as UNET.

I was fine with it and continued to work with the legacy networking API, but then further Unity updates led me to start considering whether I should migrate to UNET. Discussing this with my professor proved to be fruitless since my professor not a tech person, which I don't blame him for that. 

After heavy consideration during September, I feel that it is time for me to start tackling this brand new API. Since it's a new API, maybe they have a better documentation available for us to read and use, right? It turns out, that's not the case.

First, UNET manual, or documentation, at the moment only documents some features that supports player objects and network interactions are limited to player objects only. There's no new information available to have any other non-player objects to interact with each other, so I have to do this on my own.

Second, it's going to take a while for me to get back into optimal development speed now that I'm starting to learn something new with the API. It is time-consuming, yet required in order to successfully transition to the new API. I don't know how long it's going to take, but I hoped it will go well.

And finally, I had planned to have playtesting sessions so I can gather feedback quickly and iterate upon, but that's going to be pushed to the back for now. Once the project is stable enough, I'll post another update about this.

I'm starting the transitioning stage at the moment, and you can keep up with the progress here on [this Github repository](https://github.com/tommai78101/Unity-UNET-RTS). The old repository will be closed from this point on, in order for me to keep consistency, and not to be confusing. 

If I have anything else to say, I'll post about it.