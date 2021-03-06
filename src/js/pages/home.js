function home() {
  const container = document.createElement("div");
  container.className = "home-container";

  const markup = `
<section class="home-container_first-section">
      <div class="home-container_first-section_title">
        <h1>DISCO</h1>
        <h2>CHEETAH</h2>
        <h2>KOREAN GRILL</h2>
      </div>
    </section>

    <section class="home-container_second-section">
      <div class="home-second-section_mission">
        <h1>SERVING REAL FOOD, FAST!</h1>
        <p>
          We cook up bright, bold Korean dishes that are totally unique in
          Vancouver, you won’t find our flavors and colors anywhere else. And we
          serve it all hot, fast and in a format that’s affordable and
          comfortable for urban Vancouverites to enjoy.
        </p>
      </div>
    </section>
    
    <section class="home-container_third-section">
      <div class="home-third-section_locations">
        <div class="restaurant">
          <div class="icon"></div>
          <h2 class="title">VISIT OUR RESTAURANT</h2>
          <div class="hours">
            <p>MONDAY - THURSDAY <span> 11AM – 10PM </span></p>
            <p>FRIDAY - SUNDAY <span>11AM - 11PM</span></p>
          </div>
          <div class="btn">HOURS & LOCATION</div>
        </div>
        <div class="truck">
          <div class="icon"></div>
          <h2 class="title">VISIT OUR FOOD TRUCK</h2>
          <div class="hours">
            <p>MONDAY - FRIDAY 11AM-2PM <span>at robson square</span></p>
            <p>SATURDAY -SUNDAY <span>at events around the city</span></p>
          </div>
          <div class="btn">STREET FOOD APP</div>
        </div>
      </div>
    </section>`;

  container.insertAdjacentHTML("beforeend", markup);

  return container;
}

export default home;
