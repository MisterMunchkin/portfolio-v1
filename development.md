# How to test this website

We no longer can just double-click on the HTML file and everything will work. This is because we have async scripts and also references to other files.

So we create a local web server for testing which is easy enough with python3. Go to the root page of this project in the terminal then run
```bash title='python3 webserver'
python3 -m http.server
```

Then go to *localhost:8000* in your web browser of choice.

That's it!

New idea: instead of having static images, we animate the drawing
layer by layer over each section, and then add the house at the last https://www.youtube.com/watch?v=FJ44qmE5odc


https://mattfarley.ca as design inspiration

# New Ideas
- We should add a moon svg on the hero section. When clicked, the moon will drop and a new sun svg will come up. This will allow us to have a light and dark mode. The hero image will also change colors as well as the background.

- Add screenshots of the hero section on the side projects that are applicable. We can probably make it into a carousel instead of just a grid view.

Problems:
- When I edit in scripts.js it does not update the src in localhost:8000