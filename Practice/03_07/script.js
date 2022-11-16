/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

 const updatebox = (update) => {
    let main = document.querySelector("main");
    main.innerHTML = markup(box);
    console.info(update);
  };


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
    updatebox(`The lid has been open.`);
    }




};


const markup = (backpack) => {
    return `
    <div>
      <h3>${box.name}</h3>
      <ul>
        <li>Volume: ${box.volume}</li>
        <li>Color: ${box.color}</li>
        <li>Top lid: ${box.lidOpen ? "Open" : "Closed"}</li>
      </ul>
    </div>
  `;
  };

const main = document.createElement("main");
main.innerHTML = markup(box);
document.body.appendChild(main);

console.log("The object",box)
console.log("Color of object is",box.color)
console.log("Name of Object is",box.name)
console.log("Sand",box.sand.right)

console.log("Sand",box["sand"]);

var number = "volume";
console.log("This is the volume number",box[number]);