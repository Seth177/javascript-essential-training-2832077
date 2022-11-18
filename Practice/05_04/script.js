/**
 * Note: This file is intentionally empty.
 * You can use it to test your skills at traversing the DOM using JavaScript.
 */

const main = document.querySelector(".maincontent")

const content =`
    <div class="page-header">
        <h2 class="page-header__heading">A pack for every purpose</h2>
        <p>
          If you're carrying a heavy load, you can't find a better tool than a
          backpack. Distributing the weight evenly across your shoulders, back,
          and hips, the backpack lets you use the natural frame of your body to
          literally <em>shoulder</em> the weight while your legs do the
          carrying.
        </p>
    </div>
    <article class="backpack" id="pack01">
        <figure class="backpack__image">
          <img src="../../assets/images/everyday.svg" alt="" loading="lazy" />
        </figure>
        <h1 class="backpack__name">Everyday Backpack</h1>
        <ul class="backpack__features">
          <li class="feature backpack__volume">Volume:<span> 30l</span></li>
          <li class="feature backpack__color">Color:<span> grey</span></li>
          <li class="feature backpack__age">Age:<span> 684 days old</span></li>
          <li class="feature backpack__pockets">
            Number of pockets:<span> 15</span>
          </li>
          <li class="feature backpack__strap" data-side="left">
            Left strap length: <span>26 inches</span>
            <form class="leftlength" data-children-count="1">
              <input
                type="number"
                name="leftLength"
                placeholder="New left length"
              />
              <button>Update</button>
            </form>
          </li>
          <li class="feature backpack__strap" data-side="right">
            Right strap length: <span>26 inches</span>
            <form class="rightlength" data-children-count="1">
              <input
                type="number"
                name="rightLength"
                placeholder="New right length"
              />
              <button>Update</button>
            </form>
          </li>
          <li class="feature backpack__lid">Lid status: <span>closed</span></li>
        </ul>
        <button class="lid-toggle">Open lid</button>
      </article>
      <article class="backpack" id="pack02">
        <figure class="backpack__image">
          <img src="../../assets/images/frog.svg" alt="" loading="lazy" />
        </figure>
        <h1 class="backpack__name">Frog Backpack</h1>
        <ul class="backpack__features">
          <li class="feature backpack__volume">Volume:<span> 8l</span></li>
          <li class="feature backpack__color">Color:<span> green</span></li>
          <li class="feature backpack__age">Age:<span> 369 days old</span></li>
          <li class="feature backpack__pockets">
            Number of pockets:<span> 3</span>
          </li>
          <li class="feature backpack__strap" data-side="left">
            Left strap length: <span>10 inches</span>
            <form class="leftlength" data-children-count="1">
              <input
                type="number"
                name="leftLength"
                placeholder="New left length"
              />
              <button>Update</button>
            </form>
          </li>
          <li class="feature backpack__strap" data-side="right">
            Right strap length: <span>10 inches</span>
            <form class="rightlength" data-children-count="1">
              <input
                type="number"
                name="rightLength"
                placeholder="New right length"
              />
              <button>Update</button>
            </form>
          </li>
          <li class="feature backpack__lid">Lid status: <span>closed</span></li>
        </ul>
        <button class="lid-toggle">Open lid</button>
    </article>
`;

main.innerHTML = content;

console.log(document.querySelectorAll("main"))

console.log(document.querySelectorAll("main li:first-child").forEach(item =>item.style.backgroundColor="red"))
console.log(document.querySelectorAll(".backpack__color").forEach(item=>item.style.backgroundColor="blue"))
console.log(document.querySelector(".backpack__age"))
console.log(document.querySelectorAll(".backpack__age").forEach(item=>item.style.backgroundColor="green"))