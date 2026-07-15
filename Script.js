const DATA = [
  // GAMES
  { cat:"games", icon:"🕹️", name:"The Magic Company", addr:"1 Jakes Gerwel Dr, Goodwood (GrandWest)", what:"Arcade games, claw machines, air hockey, racing games, basketball games." },
  { cat:"games", icon:"🍸", name:"Barcadia", addr:"62 Hout St, Cape Town CBD", what:"Arcade games, pinball, retro games, drinks, socialising." },
  { cat:"games", icon:"🔐", name:"Esc Rooms", addr:"Tyger Valley Shopping Centre, Bellville", what:"Escape room puzzles and teamwork challenges." },
  { cat:"games", icon:"🕵️", name:"BreakOut Quest Cape Town", addr:"Warwick St, Claremont", what:"Solve mystery rooms and escape challenges." },
  { cat:"games", icon:"🏎️", name:"Century Karting", addr:"0A Century Ave, Century City", what:"Indoor go-kart racing with friends." },

  // ACTIVITIES
  { cat:"activities", icon:"🤸", name:"Rush Extreme Claremont", addr:"25 Stegman Rd, Claremont", what:"Trampolines, ninja course, dodgeball, climbing." },
  { cat:"activities", icon:"🧗", name:"Freedom Adventure Park Canal Walk", addr:"490 Century Blvd, Century City", what:"Zip lines, climbing walls, obstacle courses." },
  { cat:"activities", icon:"🤾", name:"23 Jump Street — Trampoline Park", addr:"30 Columbus Cres, Cape Farms", what:"Trampolines, foam pits, fitness activities." },
  { cat:"activities", icon:"🏁", name:"Extreme Go Karting", addr:"Bill Bezuidenhout Ave & Willie Van Schoor Dr, Bellville", what:"Outdoor go-kart racing." },
  { cat:"activities", icon:"🎡", name:"Wonderland", addr:"Shop 73, Century City", what:"Indoor family entertainment, games, rides." },

  // CHILL
  { cat:"chill", icon:"⚓", name:"V&A Waterfront", addr:"19 Dock Rd, Cape Town", what:"Restaurants, shopping, live music, boat cruises, street performers." },
  { cat:"chill", icon:"🍜", name:"Mojo Market", addr:"30 Regent Rd, Sea Point", what:"Food stalls, live music, drinks, sports screenings." },
  { cat:"chill", icon:"🌇", name:"Sea Point Promenade", addr:"Sea Point", what:"Walking, jogging, cycling, sunsets, relaxing by the ocean." },
  { cat:"chill", icon:"🏖️", name:"Camps Bay Beach", addr:"Victoria Rd, Camps Bay", what:"Beach, restaurants, cocktails, sunsets, volleyball." },
  { cat:"chill", icon:"🌃", name:"Long Street", addr:"Cape Town CBD", what:"Bars, clubs, restaurants, nightlife." },

  // MORE
  { cat:"more", icon:"🎳", name:"Edgemead Bowling Club", addr:"Edgemead", what:"Ten-pin bowling with a club atmosphere." },
  { cat:"more", icon:"🎳", name:"Pinelands Bowling Club", addr:"Pinelands", what:"Ten-pin bowling, casual and social." },
  { cat:"more", icon:"⛸️", name:"GrandWest Ice Station", addr:"1 Jakes Gerwel Dr, Goodwood (inside GrandWest Casino)", what:"Indoor ice skating rink." },
  { cat:"more", icon:"🎬", name:"Ster-Kinekor", addr:"Canal Walk · V&A Waterfront · Cavendish", what:"Big-screen movies across three convenient locations." },
  { cat:"more", icon:"🎰", name:"GrandWest Casino & Entertainment World", addr:"1 Jakes Gerwel Dr, Goodwood", what:"Casino, restaurants, arcade, ice skating, live entertainment." },
  { cat:"more", icon:"🌊", name:"Clifton Beaches", addr:"Clifton, Cape Town", what:"Four sheltered coves, calm water, sundowners." },
  { cat:"more", icon:"🏄", name:"Muizenberg Beach", addr:"Muizenberg", what:"Surf lessons, colourful beach huts, warmer water." },
  { cat:"more", icon:"🏝️", name:"Bloubergstrand", addr:"Bloubergstrand", what:"Iconic Table Mountain view, kitesurfing, beach walks." },
];

const CATEGORY_META = {
  games:      { label:"Games",      mark:"01 — For the competitive",  desc:"Arcades, karts, and escape rooms for when you want to beat your friends at something." },
  activities: { label:"Activities", mark:"02 — For the restless",      desc:"Trampolines, obstacle courses, and anything that gets your heart rate up." },
  chill:      { label:"Chill spots",mark:"03 — For the low-key plans", desc:"Where people actually go to just sit, eat, and talk without an agenda." },
  more:       { label:"Bowling, skating, movies & beaches", mark:"04 — Everything else worth knowing", desc:"The reliable fallback list — always open, always an option." },
};

const main = document.getElementById("main");

function render(filter){
  main.innerHTML = "";
  const cats = filter === "all" ? Object.keys(CATEGORY_META) : [filter];

  cats.forEach(cat => {
    const items = DATA.filter(d => d.cat === cat);
    if(!items.length) return;
    const meta = CATEGORY_META[cat];

    const section = document.createElement("section");
    section.className = "category";
    section.id = "cat-" + cat;

    section.innerHTML = `
      <div class="category-head">
        <span class="mark">${meta.mark}</span>
        <h2>${meta.label}</h2>
      </div>
      <p class="category-desc">${meta.desc}</p>
      <div class="grid">
        ${items.map(i => `
          <article class="card" tabindex="0">
            <span class="tag-corner">${i.icon}</span>
            <h3>${i.name}</h3>
            <div class="addr"><span class="pin">📍</span><span>${i.addr}</span></div>
            <p class="what">${i.what}</p>
          </article>
        `).join("")}
      </div>
    `;
    main.appendChild(section);
  });
}

document.getElementById("filterbar").addEventListener("click", e => {
  const btn = e.target.closest(".pill");
  if(!btn) return;
  document.querySelectorAll(".pill").forEach(p => p.classList.remove("active"));
  btn.classList.add("active");
  render(btn.dataset.filter);
});

render("all");