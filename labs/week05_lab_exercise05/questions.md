# Short Answer Questions
## Maddox Duggan - 101483006

### 1. Explain the purpose of `express.Router()` in the Code Above.

The point of using `express.Router()` is so that you can individualize
coding files and group together relevant work. The function itself will
help 'route' to different files, making sure all of the files in your project
are linked efficiently. For larger projects, this is
crucial as is it can great improve organization and cleanliness.

### 2. Error handling in Express.js

Error handling helps catch issues before they can ruin the build.
This happens by passing the error to a function that will then forward that
error to a middleware. After that, the user will be given an error message that is
more digestable.
For example, if you try to read a file that simply doesn't exist, this error would be passed on
a few times until it reaches the middleware, where it would then output an easy-to-read message
that tells the user what went wrong.