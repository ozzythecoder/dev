---
title: "What I'm (Re-)Learning: Figma and User Experience"
date: Oct 27, 2023
description: Discussing using Figma for wireframing, prototyping, and reimagining FlyBy Events 2.0.
---

In [my last post](/blog/rebuilding-flyby-events), I reflected on FlyBy Events, my solo capstone project from my time at Prime Digital Academy, and talked about the tech stack I'd be using to rebuild it from the ground up. But when looking on how to get started, I realized there was something even more fundamental I needed to take back to the (literal) drawing board.

Enter Figma; a popular and beloved wireframing/prototyping/user interface design tool. I built the initial wireframes for FlyBy Events using Figma, but even then, I could tell that I wasn't using the tool to its full potential. It's a very nice way to _quickly_ get ideas on paper, see what works, and confront design problems before they become code problems.

### Trying it out 💻

I began by choosing a color palette with [Realtime Colors](https://www.realtimecolors.com/), an _incredible_ palette-generating tool by YouTube creator [Juxtopposed](https://www.youtube.com/@juxtopposed).

<figure>
<img src="../blog-assets/realtime-colors-screenshot.png"/>
<figcaption>
Seriously, you should check this out.
</figcaption>
</figure>

Red was an important color in the original design, which I wanted to preserve, but I adjusted the shade closer to a burgundy, to stay a little further away from the fire engine red, which we often associate with danger. Realtime Colors helped me find suitable background and text colors for both light mode and dark mode.

<figure>
<img src="../blog-assets/figma-screenshot.png" />
</figure>

I brought my color palette into Figma manually (although Realtime Colors has a Figma plugin), and began building components and screen views. While working my way through its features, I discovered the Auto Layout feature, which can grant a component a layout and document flow very similar to CSS Flexbox. So much of responsive design is built with flexbox or similar tools, so this is a very welcome feature.

<figure>
<img src="../blog-assets/figma-button-code.png" />
<figcaption>
Button with auto layout and generated CSS
</figcaption>
</figure>

And then I discovered my favorite feature of all: components and variants. For one iteration of the mobile menu, I created a simple bottom navbar, similar to instagram:

<figure>
<img src="../blog-assets/figma-bottom-nav.png" />
<figcaption>
Bottom nav concept
</figcaption>
</figure>

But in order to mock up each screen, I would need to make a version of each navbar with each icon highlighted. No problem – create a component variant, set its name, and change the fill color of the proper icon. Took me a while to find this feature, but then it took me two minutes to make all these variants.

<figure>
<img src="../blog-assets/figma-footer-variants.png" />
<figcaption>
Bottom nav concept with highlighted icon variants
</figcaption>
</figure>

I also concepted a hamburger menu that folds out from the side, which is how the original FlyBy menu was designed.

<figure>
<img src="../blog-assets/figma-hamburger.png" />
<figcaption>
Hamburger nav concept
</figcaption>
</figure>

#### Sidenote: Features I didn't check out (but want to!) 👀

- **Dev Mode**, a recently-added feature that translates Figma designs into CSS, SwiftUI, XML, and more
- The **Figma VS Code Plugin**, that brings Figma CSS code directly into the IDE
  - This might be what gets me to take a break from Neovim...
- **Prototyping**, which allows for presenting an app design with functioning button clicks, dropdown menus, etc.

### User Experience 👩‍🎨

Great! So I have two different concepts for a menu. Now it's time to hear some user feedback. I wasn't sure what to expect. The hamburger menu is a classic, and words are always clearer in intent. But the Instagram-style bottom navbar feels much more intuitive to me, and with as few features as this app has (for now...), it makes sense to fit them all within thumbs' reach, so to speak.

I sent some screenshots via Discord to a group of friends, who are experienced technology users, but not developers. Felt like the perfect focus group. I set up a poll to see which menu they prefer...

<figure>
<img src="../blog-assets/discord-screenshot.png" />
</figure>

...and the hamburger menu won by a landslide. Huh.

Now obviously, nine votes from a discord server is hardly objective scientific research. I don't know how to create case studies or user stories; I just wanted to get my designs in front of some regular people with opinions.

But my friends' answers surprised me, and reminded me that being a developer doesn't make me "right." In the end, I'm building a tool for _users_, and if that tool creates friction or difficulty for them, I'm in no place to say "no it doesn't." Sounds obvious, but from the amount of [dark patterns](https://en.wikipedia.org/wiki/Dark_pattern) and the intense cognitive load I experience using the internet on a daily basis, it's clear that this attitude isn't the dominant one. Google any recipe and open the first result, and you'll see exactly what I mean.

So as I continue my journey as a developer, I'm gonna do all I can to maintain that humility. I know how to build, test, tweak, and debug software. But this is about _people_, with vastly different needs and use cases, and I want whatever I build to be informed by _people_ all the way down.
