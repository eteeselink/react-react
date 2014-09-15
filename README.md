react-react
===========

Slides for a talk about React, partially made with React.

I could just publish them online, but where's the fun in that? Do the following simple cross-platform steps to get a feel:

Setup
-----
Get Node.js and then run `npm install` in the root directory.

Use
---
Run `js-watch.cmd` (or .sh) to start a watching webserver and go to <http://localhost:54321/www>.

Edit index.html or any .jsx or .styl file and the presentation should automatically reload.

Appify
------
To turn this into a mobile app, you'll also need to `npm install -g cordova` and your phone's platform SDK.
From `src` do `cordova platform add <your phone platform>`, then `cordova build` and then `cordova run --device`.

There's no real use in doing this though, except for demonstration purposes.

Credits
-------
* Content by Egbert Teeselink
* Presentation made with [reveal.js](http://lab.hakim.se/reveal-js/#/)
* Crowd-O-Meter made with [React](https://facebook.github.io/react)
