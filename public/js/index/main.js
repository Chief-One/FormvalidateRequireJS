(function () {
    console.log("In main");
})();

//Call up all the deps for the page and thats it
require(["jquery", "index/signup"], function ($) {
    console.log("All setup to go!");
});