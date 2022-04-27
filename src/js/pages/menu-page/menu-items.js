/* STEP 1 */

let baseStep = `step 1:`;
let baseTitle = `base`;
let baseOptions = ["rice bowl", "salad", "bowl", "fries", "wrap"];
let basengridients = [
  [
    "Multigrain Rice",
    "Greens",
    "Corn",
    "Edamame",
    "Pickled Red Cabbage",
    "Scallion",
    "Oriental Vinaigrette",
  ],
  ["Greens", "Corn", "Edamame", "Pickled Red Cabbage", "Picked Red Radis"],
  ["Seasoned Fries", "Pickled", "Red Radish", "Scallion"],
  ["Multigrain Rice", "Greens", "Pickled Red Cabbage", "Napa Cabbage Kimchi"],
];

let htmlBase = `
    <div class="list-base_container">
      <p class="step">${baseStep}</p>
      <p class="title">${baseTitle}</p>
      <div class="icon"></div>
      <ul class="list">
        <li class="list-item">
          <p>${baseOptions[0]}</p>
          <p>${basengridients[0]}</p>
        </li>
        <li class="list-item">
          <p>${baseOptions[1]}</p>
          <p>${basengridients[1]}</p>
        </li>
        <li class="list-item">
          <p>${baseOptions[2]}</p>
          <p>${basengridients[2]}</p>
        </li>
        <li class="list-item">
          <p>${baseOptions[3]}</p>
          <p>${basengridients[3]}</p>
        </li>
      </ul>
    </div>
    `;

export default htmlBase;
