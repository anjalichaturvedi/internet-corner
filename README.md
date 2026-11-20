# internet corner

a little home on the internet. every version of my personal site lives here, one folder per version, from the first react portfolio to the latest train ride.

## the versions

### v1

my first portfolio, built with react. chakra ui for the layout, framer motion for the animation and a custom cursor to make it feel a little more playful.

- stack: react, chakra ui, framer motion, react router
- deployed with gh-pages

### v2

a personal portfolio reimagined as a spotify desktop client, built from the ground up with react. it's a space to showcase my work, my experience, and my thoughts on product + engineering.

- stack: react, framer motion, lucide icons
- typography: inter
- deployed at [anjalichaturvedi.vercel.app](https://anjalichaturvedi.vercel.app/)

### v3

a static portfolio with no build step. it has the infinite receipt landing page and an interactive product playground with six case studies: unified support workspace, content management, help center revamp, consent management, ai support and ndr recovery.

- stack: plain html, css and javascript
- start at `v3/index.html`

### api to kpi express

the newest one. a personal site built as an indian railways journey. scroll sideways and a train carries you from school to product, one station at a time, while the sky turns from morning to night.

- stack: plain html, css and vanilla javascript, no dependencies
- start at `api-to-kpi-express/index.html`
- full details in its [readme](api-to-kpi-express/README.md)

## run it locally

v1 and v2 are react apps, so install and start them from their own folder:

```bash
git clone https://github.com/anjalichaturvedi/internet-corner.git
cd internet-corner/v2
npm install
npm start
```

v3 and api to kpi express need no setup. open their `index.html` in a browser.

## repo structure

```
v1/                   first portfolio (react, chakra ui)
v2/                   spotify desktop client portfolio (react)
v3/                   infinite receipt and product playground (static)
api-to-kpi-express/   indian railways journey site (static)
```
