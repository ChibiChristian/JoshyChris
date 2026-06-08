/* ============================================================
   Para Josh Tonoto — lógica del recorrido
   ------------------------------------------------------------
   PARA EDITAR LOS TEXTOS: cambia lo que está entre comillas en
   MOMENTOS (abajo) y en CARTA. No toques nada más si no quieres.
   ============================================================ */

// ---- Los recuerdos (cada uno es una estrella) ----
const MOMENTOS = [
  {
    fecha: "1 de junio · 2024",
    titulo: "Por fin, en persona",
    foto: "fotos/01-primera-vez.jpg",
    texto: "Llevábamos tanto tiempo hablando por mensaje que ya te sentía mío sin haberte visto nunca. Ese día por fin nos conocimos en persona y fuimos a Chapultepec. Te perdiste —no sabías andar en la calle— y llegaste tres horas tarde. Te esperé sin pensarlo, porque algo dentro de mí ya sabía que valías cada minuto."
  },
  {
    fecha: "7 de junio · 2024",
    titulo: "Te escapaste solo por verme",
    foto: "fotos/02-segunda-cita.jpg",
    texto: "Nuestra segunda cita. Te escapaste solo para vernos y nos fuimos al cine, a Plaza Oceanía. Los dos ya traíamos la misma idea en la cabeza, pero ninguno se animaba a decirla. Esa tarde supe que no quería que esto se quedara en un 'casi'."
  },
  {
    fecha: "11 de junio · 2024",
    titulo: "El sí",
    foto: null,
    special: true,
    seal: "✦",
    texto: "Y entonces llegó el día. Nos dimos el sí. Sin más vueltas, sin más miedo. Desde aquí empezó a contar todo lo que vino después… y todo lo que todavía nos falta por vivir."
  },
  {
    fecha: "Días después",
    titulo: "Nuestra primera noche",
    foto: "fotos/04-primera-noche.jpg",
    texto: "Una semana y media después te invité a mi casa y pasamos nuestra primera noche juntos. Hicimos hotcakes en forma de donitas y vimos películas hasta tarde. Nada del otro mundo, y aun así fue de mis noches favoritas."
  },
  {
    fecha: "Poco después",
    titulo: "Conocí a tus papás",
    foto: "fotos/05-sus-papas.jpg",
    texto: "Después fui a casa de tus papás. Conocer de dónde vienes, tu gente, tu mundo… me hizo quererte un poquito más. Nos encantaba salir a dar la vuelta, sin rumbo, solo por el gusto de estar juntos."
  },
  {
    fecha: "Nuestro primer concierto",
    titulo: "NCT Dream",
    foto: "fotos/06-nct-dream.jpg",
    texto: "Cantamos, gritamos y nos divertimos como niños. Todavía no lo sabíamos, pero ese sería apenas el primero de muchos conciertos juntos."
  },
  {
    fecha: "Un día antes de tu cumple",
    titulo: "Teotihuacán y la cartilla fantasma",
    foto: "fotos/07-teotihuacan.jpg",
    texto: "Fuimos a Teotihuacán… en teoría a sacar tu cartilla militar. Resultó que no era ahí (clásico). Pero como casi no podíamos vernos, terminamos celebrando tu cumpleaños entre pirámides. Día fallido en los papeles, perfecto en mi memoria."
  },
  {
    fecha: "Por mi cumpleaños",
    titulo: "Por fin, más tiempo",
    foto: "fotos/08-segunda-noche.jpg",
    texto: "Te saliste de casa de tus papás y por fin podíamos vernos más seguido. El día después de mi cumpleaños pasamos nuestra segunda noche juntos, felices de saber que ahora habría más tiempo, más nosotros."
  },
  {
    fecha: "Una escapada",
    titulo: "Toluca: mi abue y Zacango",
    foto: "fotos/09-toluca.jpg",
    texto: "Te llevé a Toluca, donde viví antes de mudarme a la CDMX. Conociste a mi abue y fuimos al zoológico de Zacango. Enseñarte mis raíces se sintió como darte una llave de mi vida."
  },
  {
    fecha: "Marzo",
    titulo: "Te tocó modo bebé",
    foto: "fotos/10-marzo.jpg",
    texto: "El cumple de tu tía. Te pusiste happy de más y me tocó cuidarte: bañarte, aguantarte… hasta me vomitaste encima. Al día siguiente no te acordabas de nada (yo sí, y lo grabé, jaja). Cuidarte así también es amor, Tonoto."
  },
  {
    fecha: "Un mes después",
    titulo: "Stray Kids",
    foto: "fotos/11-straykids.jpg",
    texto: "No nos tocó la misma zona y salí afónico de tanto gritar, pero con solo saber que estabas ahí, en el mismo lugar que yo, ya era suficiente para ser feliz."
  },
  {
    fecha: "11 de junio · 2025",
    titulo: "Nuestro primer año",
    foto: "fotos/12-primer-anio.jpg",
    texto: "Empezó triste: el trabajo me mandó a Guadalajara y nos felicitamos a distancia. Pero el 13 lo festejamos como se debía y fue un día lindísimo. Aprendimos algo importante: la distancia no nos gana."
  },
  {
    fecha: "Lo nuestro de siempre",
    titulo: "El teatro",
    foto: "fotos/13-teatro.jpg",
    texto: "Hay recuerdos que guardo con un cariño especial: las idas al teatro, cada vez que nos escapábamos un rato del mundo. Momentos chiquitos, pero completamente nuestros."
  },
  {
    fecha: "Lo nuestro de siempre",
    titulo: "Escapadas al cine",
    foto: "fotos/14-cine.jpg",
    texto: "Y las escapadas al cine, tantas que ya perdí la cuenta. Pequeños ratos robados al día que, contigo, siempre valieron oro."
  },
  {
    fecha: "Octubre",
    titulo: "El intento fit (RIP)",
    foto: "fotos/15-fit.jpg",
    texto: "Juramos ponernos fit. Fuimos UNA vez. Hasta hoy seguimos diciendo 'mañana empezamos'… y aquí seguimos, jaja. Te amo igual, con o sin sentadillas."
  },
  {
    fecha: "1 de noviembre",
    titulo: "Scooby y Shaggy",
    foto: "fotos/16-halloween.jpg",
    texto: "Nos disfrazamos de Scooby y Shaggy, y los disfraces los hicimos nosotros: yo de Scooby, tú de Shaggy. Quedaron increíbles. Hacer locuras contigo es mi plan favorito."
  },
  {
    fecha: "Diciembre",
    titulo: "Nuestra primera Navidad",
    foto: "fotos/17-navidad.jpg",
    texto: "Algo nuevo para los dos. Para entonces ya casi vivíamos juntos y, aun viéndonos todos los días, nunca —nunca— me aburrí de ti."
  },
  {
    fecha: "Tu segundo cumple juntos",
    titulo: "Ya juntos para celebrar",
    foto: "fotos/18-cumple-josh.jpg",
    texto: "Llegaron de nuevo los cumpleaños, el tuyo y el mío, pero esta vez ya podíamos festejarlos juntos, sin relojes ni distancias. Soplar las velas a tu lado se volvió mi tradición favorita."
  },
  {
    fecha: "14 de febrero",
    titulo: "Acapulco: conociste el mar",
    foto: "fotos/19-acapulco.jpg",
    texto: "Nos fuimos a la playa y conociste el mar. Un viaje cortito, pero de los más divertidos. Ver tu cara frente al mar por primera vez es algo que no se me va a olvidar."
  },
  {
    fecha: "Hoy",
    titulo: "Aquí, vivivitos",
    foto: "fotos/20-ahora.jpg",
    texto: "Y míranos ahora: viviendo juntos, cumpliendo dos años de noviervivitos. Lo que empezó con un 'hola' por mensaje hoy es mi casa, mi rutina y mi persona favorita."
  }
];

// ---- La carta final (cada string es un párrafo). EDÍTALA a tu gusto. ----
const CARTA = [
  "Josh, si llegaste hasta aquí es porque recorriste, estrella por estrella, todo lo que hemos construido. Dos años que se dicen rápido, pero que están hechos de cientos de días eligiéndonos.",
  "Gracias por perderte ese primer día y aun así llegar. Gracias por escaparte para verme, por los conciertos, por los viajes, por dejarme cuidarte en tus peores momentos y por reírte de los míos. Gracias por hacer de cualquier día normal algo que vale la pena recordar.",
  "Acuario y Capricornio, dicen que somos polos distintos. Yo creo que por eso encajamos: tú me aterrizas, yo te elevo, y juntos formamos una constelación que nadie más entiende.",
  "Feliz aniversario, mi amor. Aquí estoy, listo para el año tres y para todos los que vengan."
];

/* ============================================================
   De aquí para abajo es el funcionamiento. No necesitas tocarlo.
   ============================================================ */

// ---- Campo de estrellas (canvas) ----
(function starfield() {
  const canvas = document.getElementById("starfield");
  const ctx = canvas.getContext("2d");
  let w, h, stars, shooting = [];
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function resize() {
    w = canvas.width = window.innerWidth * devicePixelRatio;
    h = canvas.height = window.innerHeight * devicePixelRatio;
    canvas.style.width = window.innerWidth + "px";
    canvas.style.height = window.innerHeight + "px";
    const count = Math.min(220, Math.floor((window.innerWidth * window.innerHeight) / 6500));
    stars = Array.from({ length: count }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: (Math.random() * 1.4 + 0.3) * devicePixelRatio,
      base: Math.random() * 0.5 + 0.3,
      tw: Math.random() * 0.02 + 0.004,
      ph: Math.random() * Math.PI * 2
    }));
  }

  function spawnShooting() {
    if (reduce) return;
    const startX = Math.random() * w * 0.7;
    shooting.push({ x: startX, y: Math.random() * h * 0.4, len: 0, max: (Math.random() * 160 + 120) * devicePixelRatio, life: 0 });
    setTimeout(spawnShooting, Math.random() * 9000 + 6000);
  }

  let t = 0;
  function draw() {
    ctx.clearRect(0, 0, w, h);
    t += 1;
    for (const s of stars) {
      const a = s.base + Math.sin(t * s.tw + s.ph) * 0.3;
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255,248,230,${Math.max(0.05, a)})`;
      ctx.fill();
    }
    shooting = shooting.filter((sh) => sh.life < 1);
    for (const sh of shooting) {
      sh.life += 0.012;
      sh.len = Math.min(sh.max, sh.len + 14 * devicePixelRatio);
      const x2 = sh.x + sh.len, y2 = sh.y + sh.len * 0.4;
      const grad = ctx.createLinearGradient(sh.x, sh.y, x2, y2);
      grad.addColorStop(0, "rgba(255,255,255,0)");
      grad.addColorStop(1, `rgba(255,240,200,${1 - sh.life})`);
      ctx.strokeStyle = grad;
      ctx.lineWidth = 2 * devicePixelRatio;
      ctx.beginPath();
      ctx.moveTo(sh.x, sh.y);
      ctx.lineTo(x2, y2);
      ctx.stroke();
    }
    requestAnimationFrame(draw);
  }

  window.addEventListener("resize", resize);
  resize();
  draw();
  if (!reduce) setTimeout(spawnShooting, 3500);
})();

// ---- Render de las estaciones ----
(function render() {
  const wrap = document.getElementById("stations");
  MOMENTOS.forEach((m, i) => {
    const side = i % 2 === 0 ? "left" : "right";
    const st = document.createElement("section");
    st.className = "station " + (m.special ? "special" : side);
    let inner = '<span class="marker"></span><div class="card">';
    if (m.special) {
      inner += `<span class="seal">${m.seal || "✦"}</span>`;
      inner += `<p class="card-date">${m.fecha}</p>`;
      inner += `<h3 class="card-title">${m.titulo}</h3>`;
      inner += `<p class="card-text">${m.texto}</p>`;
    } else {
      inner += `<img class="card-photo" src="${m.foto}" alt="${m.titulo}" loading="lazy" />`;
      inner += `<p class="card-date">${m.fecha}</p>`;
      inner += `<h3 class="card-title">${m.titulo}</h3>`;
      inner += `<p class="card-text">${m.texto}</p>`;
    }
    inner += "</div>";
    st.innerHTML = inner;
    wrap.appendChild(st);
  });

  // Carta
  const lb = document.getElementById("letterBody");
  lb.innerHTML = CARTA.map((p) => `<p>${p}</p>`).join("");
})();

// ---- Revelado al hacer scroll + línea de la constelación ----
(function reveal() {
  const stations = Array.from(document.querySelectorAll(".station"));
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("lit"); });
    },
    { rootMargin: "0px 0px -22% 0px", threshold: 0.25 }
  );
  stations.forEach((s) => io.observe(s));

  const finale = document.getElementById("finale");
  const fio = new IntersectionObserver(
    (entries) => entries.forEach((e) => { if (e.isIntersecting) finale.classList.add("show"); }),
    { threshold: 0.18 }
  );
  fio.observe(finale);

  const trail = document.querySelector(".trail");
  const lit = document.querySelector(".spine-lit");
  function onScroll() {
    const rect = trail.getBoundingClientRect();
    const mid = window.innerHeight * 0.5;
    const progressed = Math.min(Math.max(mid - rect.top, 0), trail.offsetHeight);
    lit.style.height = progressed + "px";
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);
  onScroll();
})();

// ---- Música ----
(function music() {
  const bgm = document.getElementById("bgm");
  const toggle = document.getElementById("musicToggle");
  const ytDiv = document.getElementById("ytFallback");
  const YT_ID = "sJELdTNHEk4"; // Ariana Grande - supernatural (Official Audio)
  let mp3Ok = true;
  let usingYT = false;
  let playing = false;

  bgm.addEventListener("error", () => { mp3Ok = false; });
  const src = bgm.querySelector("source");
  if (src) src.addEventListener("error", () => { mp3Ok = false; });

  function fadeTo(target, done) {
    const step = (target - bgm.volume) / 22;
    const id = setInterval(() => {
      bgm.volume = Math.min(1, Math.max(0, bgm.volume + step));
      if ((step > 0 && bgm.volume >= target) || (step < 0 && bgm.volume <= target)) {
        bgm.volume = target; clearInterval(id); if (done) done();
      }
    }, 55);
  }

  function startYT() {
    usingYT = true; playing = true;
    ytDiv.innerHTML =
      '<iframe width="1" height="1" allow="autoplay" frameborder="0" ' +
      'src="https://www.youtube.com/embed/' + YT_ID +
      '?autoplay=1&loop=1&playlist=' + YT_ID + '&controls=0&playsinline=1"></iframe>';
    setToggleState();
  }
  function stopYT() { ytDiv.innerHTML = ""; playing = false; setToggleState(); }

  function setToggleState() {
    toggle.hidden = false;
    toggle.classList.toggle("muted", !playing);
    toggle.classList.toggle("playing", playing);
  }

  function startMusic() {
    if (mp3Ok) {
      bgm.volume = 0;
      const p = bgm.play();
      if (p && p.then) {
        p.then(() => { playing = true; setToggleState(); fadeTo(0.38); })
         .catch(() => { startYT(); });
      } else { playing = true; setToggleState(); fadeTo(0.38); }
    } else {
      startYT();
    }
  }

  toggle.addEventListener("click", () => {
    if (usingYT) { playing ? stopYT() : startYT(); return; }
    if (playing) { fadeTo(0, () => { bgm.pause(); playing = false; setToggleState(); }); }
    else { bgm.play().then(() => { playing = true; setToggleState(); fadeTo(0.38); }).catch(() => {}); }
  });

  // Exponer para el botón "Abrir"
  window.__startMusic = startMusic;
})();

// ---- Abrir el cielo ----
(function open() {
  const intro = document.getElementById("intro");
  const journey = document.getElementById("journey");
  const openBtn = document.getElementById("openBtn");
  const replayBtn = document.getElementById("replayBtn");

  openBtn.addEventListener("click", () => {
    if (window.__startMusic) window.__startMusic();
    intro.classList.add("hide");
    setTimeout(() => {
      intro.style.display = "none";
      journey.hidden = false;
      window.scrollTo({ top: 0 });
    }, 1100);
  });

  replayBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
})();
