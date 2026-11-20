# API to KPI Express

A personal site built as an Indian Railways journey. Scroll sideways and a train carries you from school to product, one station at a time, with a sky that turns from morning to night as you go.

Made by [Anjali Chaturvedi](https://linkedin.com/in/anjali-chaturvedi) and Claude Opus.

## What it is

One long platform you scroll through horizontally. Each station is a chapter: school, the community I built, college and internships, and work now. A train runs along the bottom and stops when you stop. No frameworks, no build step, no dependencies. Just HTML, CSS and a little vanilla JavaScript.

## Run it locally

This project lives in a folder inside the `internet-corner` repo. Clone the repo, go into the folder and open the file.

```bash
git clone https://github.com/anjalichaturvedi/internet-corner.git
cd internet-corner/api-to-kpi-express
open index.html # or just double-click it
```

That is the whole setup. The files load as plain scripts sharing one global, so it runs straight from the file system. No server needed. Fonts come from Google Fonts, so the first load wants an internet connection.

## Deploy

It is fully static, so any host works. Keep `css/` and `js/` next to `index.html`, and point the host at the `api-to-kpi-express` folder.

- Drag the folder onto [Netlify Drop](https://app.netlify.com/drop)
- Run `vercel` from the `api-to-kpi-express` folder
- Or turn on GitHub Pages for the repo

## How it works

There is no animation library. One scroll listener reads how far across you are and drives everything from that single number:

- The sky gradient interpolates through five keyframes, morning to night
- The sun arcs up and over, while clouds and the skyline drift at different speeds for parallax
- The masts, sleepers and rail shift to sell the motion
- The train's wheels spin while you scroll and pause when you stop
- The top nav highlights the station you are nearest

A vertical mouse wheel is mapped to horizontal scroll, except over a card that still has more to show, where it scrolls the card instead.

## Project structure

```
index.html        structure: the fixed scene, the two end panels, the nav
css/styles.css    all styling; colours are CSS variables at the top
js/data.js        all the copy and the links (edit here, nothing else)
js/render.js      builds the station panels from data.js
js/scene.js       the scroll-driven animation
js/app.js         wires it together on load
```

## Make it yours

Almost everything lives in `js/data.js`.

- Change any wording in `SITE.STATIONS`.
- Add a station by copying one block. The panel count, track width and nav all adjust on their own.
- A line with a `tag` renders a small yellow pill. A line without one is plain text.
- Links sit in `SITE.META` at the top of the file. Update the LinkedIn and resume URLs there.

Colours, fonts and sizes are CSS variables at the top of `css/styles.css`.

## Accessibility

Real links and buttons, 44px tap targets, and it honours `prefers-reduced-motion`: if your system asks for less motion, the animations and smooth scrolling turn off.

## Tech

Plain HTML, CSS and JavaScript. Inline SVG for the train and scenery. Fonts: Barlow Condensed, IBM Plex Mono, DotGothic16 and Noto Sans Devanagari.
