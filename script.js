window.addEventListener('DOMContentLoaded', () => {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  document.getElementById('year').textContent = new Date().getFullYear();

  const menu = document.querySelector('.menu-button');
  const nav = document.querySelector('.site-header nav');
  menu?.addEventListener('click', () => { const open = menu.getAttribute('aria-expanded') === 'true'; menu.setAttribute('aria-expanded', String(!open)); nav.style.display = open ? '' : 'flex'; });

  if (!reduced && window.Lenis) {
    const lenis = new Lenis({ lerp: .09, smoothWheel: true });
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add(t => lenis.raf(t * 1000)); gsap.ticker.lagSmoothing(0);
  }

  if (!reduced && window.gsap) {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from('.site-header', { y: -30, opacity: 0, duration: .8, ease: 'power3.out' });
    gsap.from('.hero .reveal', { y: 35, opacity: 0, duration: 1, stagger: .13, delay: .2, ease: 'power3.out' });
    gsap.utils.toArray('.section-heading, .statement, .intro-details, .service-grid, .projects, .skill-groups, .principle-list, .workflow-layout ol, .testimonial-track').forEach(el => {
      gsap.from(el, { y: 35, opacity: 0, duration: .85, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 86%', once: true } });
    });
    gsap.utils.toArray('.journey-list article, .skill-groups article, .principle-list article, .workflow-layout li').forEach((el, i) => {
      gsap.from(el, { x: -18, opacity: 0, duration: .55, delay: i * .06, scrollTrigger: { trigger: el.parentElement, start: 'top 82%', once: true } });
    });
    gsap.to('.hero-visual', { y: -24, ease: 'none', scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: 1.2 } });
  }

  if (!reduced && window.VanillaTilt) VanillaTilt.init(document.querySelectorAll('[data-tilt]'), { max: 4, speed: 600, glare: true, 'max-glare': .12 });
  document.querySelectorAll('.magnetic').forEach(button => {
    button.addEventListener('mousemove', e => { if (reduced) return; const r = button.getBoundingClientRect(); button.style.transform = `translate(${(e.clientX-r.left-r.width/2)*.12}px, ${(e.clientY-r.top-r.height/2)*.18}px)`; });
    button.addEventListener('mouseleave', () => button.style.transform = 'translate(0,0)');
  });
  const glow = document.getElementById('cursor-glow');
  window.addEventListener('pointermove', e => { glow.style.opacity = 1; glow.style.left = e.clientX+'px'; glow.style.top = e.clientY+'px'; }, { passive: true });

  if (!reduced && window.THREE) {
    const canvas = document.getElementById('hero-canvas'); const scene = new THREE.Scene(); const camera = new THREE.PerspectiveCamera(55, innerWidth / innerHeight, .1, 100); camera.position.z = 5;
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true }); renderer.setPixelRatio(Math.min(devicePixelRatio, 1.5)); renderer.setSize(innerWidth, innerHeight);
    const geo = new THREE.BufferGeometry(), count = 160, positions = new Float32Array(count * 3); for (let i=0;i<count*3;i++) positions[i]=(Math.random()-.5)*11; geo.setAttribute('position', new THREE.BufferAttribute(positions,3));
    const points = new THREE.Points(geo, new THREE.PointsMaterial({ color: 0xc5f36a, size: .028, transparent: true, opacity: .7 })); scene.add(points);
    const wire = new THREE.Mesh(new THREE.IcosahedronGeometry(1.45, 2), new THREE.MeshBasicMaterial({ color: 0x8ed6b6, wireframe: true, transparent: true, opacity: .12 })); wire.position.set(1.9,.1,-1); scene.add(wire);
    const loop = () => { wire.rotation.x += .0014; wire.rotation.y += .002; points.rotation.y -= .00045; renderer.render(scene,camera); requestAnimationFrame(loop); }; loop();
    addEventListener('resize', () => { camera.aspect=innerWidth/innerHeight; camera.updateProjectionMatrix(); renderer.setSize(innerWidth,innerHeight); });
  }
});

window.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.theme-toggle');
  const setTheme = theme => { document.body.dataset.theme = theme; const light = theme === 'light'; toggle?.setAttribute('aria-pressed', String(light)); toggle?.setAttribute('aria-label', `Switch to ${light ? 'dark' : 'light'} mode`); if (toggle) toggle.querySelector('b').textContent = light ? 'Dark' : 'Light'; if (toggle) toggle.querySelector('span').textContent = light ? '☾' : '☼'; };
  setTheme(localStorage.getItem('portfolio-theme') || 'dark');
  toggle?.addEventListener('click', () => { const next = document.body.dataset.theme === 'dark' ? 'light' : 'dark'; setTheme(next); localStorage.setItem('portfolio-theme', next); });

});

window.addEventListener('DOMContentLoaded', () => {
  const groups = [
    ['mobile','✦','Mobile Development',[['Flutter','Cross-platform apps with expressive, responsive UI.'],['Dart','Clear, productive application code.'],['Android','Native Android platform fundamentals.'],['Java','Reliable Android applications and APIs.'],['Kotlin','Modern, concise Android development.'],['Jetpack Compose','Declarative Android interfaces.']]],
    ['state','◌','State Management',[['GetX','Reactive state and navigation for Flutter.'],['Provider','Lightweight dependency and state management.'],['Shared Preferences','Persistent local user preferences.']]],
    ['backend','↗','Backend & APIs',[['Laravel','Structured server-side administration.'],['REST APIs','Thoughtful JSON service integrations.'],['Retrofit','Type-safe Android networking.'],['Postman','Confident API testing and validation.'],['Firebase Admin SDK','Trusted server-side Firebase operations.']]],
    ['database','◫','Databases & Cloud',[['Firestore','Real-time cloud application data.'],['Firebase Authentication','Secure, low-friction identity flows.'],['SQLite','Reliable on-device persistence.'],['Room Database','Structured local Android data.'],['Cloudinary','Optimized image upload and delivery.']]],
    ['engineering','⌘','Software Engineering',[['Clean Architecture','Clear layers built for long-term change.'],['MVVM','Predictable UI state and presentation logic.'],['MVC','Focused separation of concerns.'],['Repository Pattern','A stable boundary around data access.'],['System Analysis','Requirements translated into useful systems.'],['Database Design','Data models grounded in user actions.'],['Software Architecture','Scalable decisions from the start.']]],
    ['design','△','UI / UX Design',[['Figma','High-fidelity product design and collaboration.'],['Wireframing','Fast exploration of ideas and structure.'],['User Flow','Intentional journeys with less friction.'],['Interactive Prototype','Experiences stakeholders can understand.'],['Design Systems','Reusable visual consistency at scale.'],['AI-assisted Design','Accelerated exploration with human judgement.']]],
    ['tools','⚡','Development Tools',[['Git','Intentional version control workflows.'],['GitHub','Collaboration, reviews and delivery.'],['Android Studio','Native Android tooling and debugging.'],['VS Code','Fast, focused daily development.'],['Firebase Console','Cloud configuration and monitoring.']]]
  ];
  const grid = document.getElementById('skill-grid');
  if (!grid) return;
  grid.innerHTML = groups.map(([category,icon,title,skills]) => `<section class="skill-category" data-category="${category}"><header><i>${icon}</i><div><span>${category}</span><h3>${title}</h3></div></header><div class="category-card-grid">${skills.map(([name,description]) => `<article data-category="${category}"><i>${icon}</i><h3>${name}</h3><p>${description}</p><b>Explore <span>↗</span></b></article>`).join('')}</div></section>`).join('');
  const skillLogos = {'Flutter':'flutter/flutter-original.svg','Dart':'dart/dart-original.svg','Android':'android/android-original.svg','Java':'java/java-original.svg','Kotlin':'kotlin/kotlin-original.svg','Jetpack Compose':'android/android-original.svg','GetX':'flutter/flutter-original.svg','Provider':'flutter/flutter-original.svg','Shared Preferences':'android/android-original.svg','Laravel':'laravel/laravel-original.svg','REST APIs':'fastapi/fastapi-original.svg','Retrofit':'android/android-original.svg','Postman':'postman/postman-original.svg','Firebase Admin SDK':'firebase/firebase-original.svg','Firestore':'firebase/firebase-original.svg','Firebase Authentication':'firebase/firebase-original.svg','SQLite':'sqlite/sqlite-original.svg','Room Database':'android/android-original.svg','Cloudinary':'cloudinary/cloudinary-original.svg','Clean Architecture':'android/android-original.svg','MVVM':'android/android-original.svg','MVC':'android/android-original.svg','Repository Pattern':'git/git-original.svg','System Analysis':'jira/jira-original.svg','Database Design':'mysql/mysql-original.svg','Software Architecture':'docker/docker-original.svg','Figma':'figma/figma-original.svg','Wireframing':'figma/figma-original.svg','User Flow':'figma/figma-original.svg','Interactive Prototype':'figma/figma-original.svg','Design Systems':'figma/figma-original.svg','AI-assisted Design':'figma/figma-original.svg','Git':'git/git-original.svg','GitHub':'github/github-original.svg','Android Studio':'androidstudio/androidstudio-original.svg','VS Code':'vscode/vscode-original.svg','Firebase Console':'firebase/firebase-original.svg'};
  document.querySelectorAll('.category-card-grid article').forEach(card => { const name=card.querySelector('h3')?.textContent.trim(), mark=card.querySelector('i'), src=skillLogos[name]; if (!mark) return; if (src) { mark.innerHTML=`<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${src}" alt="${name} logo" loading="lazy">`; mark.className='brand-skill-logo'; } else { mark.textContent=name?.length<=5?name:'⌘'; mark.className='concept-skill-logo'; mark.setAttribute('aria-label',`${name} technical concept`); } });
  const search = document.getElementById('skill-search'), tabs = [...document.querySelectorAll('.skill-tabs button')]; let active = 'all';
  const update = () => { const term=(search?.value||'').toLowerCase(); document.querySelectorAll('.skill-category').forEach(group => { const matchCategory=active==='all'||group.dataset.category===active; let visible=0; group.querySelectorAll('article').forEach(card=>{const match=matchCategory&&card.textContent.toLowerCase().includes(term);card.classList.toggle('hidden',!match);if(match)visible++;});group.classList.toggle('hidden',!visible); }); };
  tabs.forEach(tab=>tab.addEventListener('click',()=>{active=tab.dataset.filter;tabs.forEach(t=>t.classList.toggle('active',t===tab));update();})); search?.addEventListener('input',update);
  if (window.gsap && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) gsap.from('.skill-category', {opacity:0,y:24,duration:.65,stagger:.08,ease:'power3.out',scrollTrigger:{trigger:'#skill-grid',start:'top 82%',once:true}});
});

window.addEventListener('DOMContentLoaded', () => {
  const search = document.getElementById('skill-search');
  const tabs = [...document.querySelectorAll('.skill-tabs button')];
  const cards = [...document.querySelectorAll('.skill-card-grid article')];
  let category = 'all';
  const filterSkills = () => {
    const query = (search?.value || '').toLowerCase();
    cards.forEach(card => {
      const matchesCategory = category === 'all' || card.dataset.category === category;
      const matchesQuery = card.textContent.toLowerCase().includes(query);
      card.classList.toggle('hidden', !matchesCategory || !matchesQuery);
    });
  };
  tabs.forEach(tab => tab.addEventListener('click', () => { category = tab.dataset.filter; tabs.forEach(item => item.classList.toggle('active', item === tab)); filterSkills(); }));
  search?.addEventListener('input', filterSkills);
});
