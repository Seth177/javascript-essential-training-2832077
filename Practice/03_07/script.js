/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */


const box = {
    name:"Cool box",
    color:"red",
    volume: 20,
    sand: {
        top:30,
        bottom:20,
        left:10,
        right:10
    },

    lidOpen: false,
    toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
    updateBackpack(`The lid has been open.`);
    },




};