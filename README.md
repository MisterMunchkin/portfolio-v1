# portfolio-v1

First portfolio website just using plain HTML, CSS, and Javascript. Hosting using gh-pages, ssl and other security stuff from cloudflare,
and I got my custom domain from godaddy. Using github actions to deploy the website to github pages


# How to test this website

We no longer can just double-click on the HTML file and everything will work. This is because we have async scripts and also references to other files.

So we create a local web server for testing which is easy enough with python3. Go to the root page of this project in the terminal then run
```bash title='python3 webserver'
python3 -m http.server
```

Then go to *localhost:8000* in your web browser of choice.

That's it!
