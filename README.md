# turn by turn icons

for: https://mapzen.com/products/turn-by-turn/

## why?

there are a lot of icons. we want to limit the number of http requests that must be made to fetch them. also svgs are great for resolution-independent imagery compared to png spritesheets, and, when done properly, can even be themed in an application. [read more.](https://css-tricks.com/svg-symbol-good-choice-icons/)

this repository creates that svg bundle from the source illustrations, also in svg. the source files are in the `assets/` directory.

## howto

i assume you have a pretty recent version of [node](https://nodejs.org/en/).

you should clone this repo locally.

```sh
git clone git@github.com:mapzen/turn-by-turn-icons.git
```

then you should install project dependencies.

```sh
npm install
```

the built svg bundle is in the `dist/` directory. if you want to build a new one, you can add svgs to `assets/`.

you can rebuild the svg by running gulp.

```sh
gulp
```

you will know it is working because it will be telling you what it is doing.

## preview

you can see a preview of the built svg file by opening up `preview.html`. i am lazy so this preview only works in new chrome or firefox for no good reason.

## finale

have problems? e-mail lou@mapzen.com
