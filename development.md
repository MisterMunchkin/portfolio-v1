# How to test this website

We no longer can just double-click on the HTML file and everything will work. This is because we have async scripts and also references to other files.

So we create a local web server for testing which is easy enough with python3. Go to the root page of this project in the terminal then run

```bash title='python3 webserver'
python3 -m http.server
```

Then go to _localhost:8000_ in your web browser of choice.

That's it!

New idea: instead of having static images, we animate the drawing
layer by layer over each section, and then add the house at the last https://www.youtube.com/watch?v=FJ44qmE5odc

https://mattfarley.ca as design inspiration

# New Ideas

-   Using astro for better DX
-   add better padding for smaller devices
-   use glassier blur effects and persist header
-   use framer motion, skia, gsap or 3js for some simple animations
-   experiment with lottie files
-   make an .ico of the house
-   Add company icons to the work experience instead of the pink dots.
-   if possible, animate building of the house and have a code block animate on the background simulating the house building
-   Rip off the designs of a poor bloke off twitter
