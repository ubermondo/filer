# filer
A single-page frontend for a file hosting API, consisting of a file selector field, a Send button that calls the API endpoint, and a table that displays the returned data.

Requires RMS (https://github.com/privateblue/rm), which in turn requires SBT. Please consult the aforementioned URL for additional details and installation instructions.

TO RUN RMS:
Run RMS from its directory ("sbt run") in order to enable the API; there are two exposed endpoints:
- PUT /file/<filename> Uploads and processes a text file, and returns a json object with three keys: filename, total and words, where total is the total word count of the text file, and words is an object consisting of counts per word.
- GET /file/<filename> Returns stats corresponding to an earlier uploaded file, as a json object with three keys: filename, total and words, where total is the total word count of the text file, and words is an object consisting of counts per word.

TO RUN APPLICATION:
Simply add the directory to your web server and access /index.html in your browser.

NOTES:
- We are using compressed css and js files; do not change script/main.min.js or style/main.min.css. Instead, make your changes in script/main.js and style/main.less and compress/compile them into the appropriate .min.* files.
- Documentation was generated with JSDoc (https://github.com/jsdoc3/jsdoc). You may access the documentation by going to out/index.html in your browser.
