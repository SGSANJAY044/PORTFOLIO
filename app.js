// ============================================
// PORTFOLIO RENDERER - Renders content from data.js
// ============================================

document.addEventListener("DOMContentLoaded", () => {
  renderPersonalInfo();
  renderNavigation();
  renderSocials();
  renderAbout();
  renderExperiences();
  renderProjects();
  renderFooter();
  initSpotlightEffect();
  initScrollSpy();
});

// ============================================
// TEMPLATE FUNCTIONS
// ============================================

function renderPersonalInfo() {
  const { personal } = PORTFOLIO_DATA;
  
  document.getElementById("hero-name").innerHTML = `<a href="/">${personal.name}</a>`;
  document.getElementById("hero-title").textContent = personal.title;
  document.getElementById("hero-description").textContent = personal.description;
}

function renderNavigation() {
  const { navigation } = PORTFOLIO_DATA;
  const navContainer = document.getElementById("nav-links");
  
  navContainer.innerHTML = navigation.map((item, index) => `
    <li>
      <a class="group flex items-center py-3 ${index === 0 ? 'active' : ''}" href="#${item.id}">
        <span class="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
        <span class="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">${item.label}</span>
      </a>
    </li>
  `).join("");
}

function renderSocials() {
  const { socials } = PORTFOLIO_DATA;
  const socialsContainer = document.getElementById("social-links");
  
  socialsContainer.innerHTML = socials.map(social => `
    <li class="mr-5 text-xs shrink-0">
      <a class="block hover:text-slate-200" href="${social.url}" target="_blank" rel="noreferrer noopener" aria-label="${social.name} (opens in a new tab)" title="${social.name}">
        <span class="sr-only">${social.name}</span>
        ${social.icon}
      </a>
    </li>
  `).join("");
}

function renderAbout() {
  const { about } = PORTFOLIO_DATA;
  document.getElementById("about-content").innerHTML = about;
}

function renderExperiences() {
  const { experiences } = PORTFOLIO_DATA;
  const experienceContainer = document.getElementById("experience-list");
  
  experienceContainer.innerHTML = experiences.map(exp => `
    <li class="mb-12">
      <div class="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
        <div class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
        
        <header class="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
          ${exp.dateRange}
        </header>
        
        <div class="z-10 sm:col-span-6">
          <h3 class="font-medium leading-snug text-slate-200">
            <div>
              <a class="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
                href="${exp.companyUrl}"
                target="_blank"
                rel="noreferrer noopener">
                <span class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                <span>${exp.title}</span>
              </a>
            </div>
            <div>
              <div class="text-slate-500" aria-hidden="true">
                ${exp.company}${exp.subtitle ? ` · ${exp.subtitle}` : ''}
              </div>
            </div>
          </h3>
          
          <p class="mt-2 text-sm leading-normal">${exp.description}</p>
          
          <ul class="mt-2 flex flex-wrap" aria-label="Technologies used">
            ${exp.technologies.map(tech => `
              <li class="mr-1.5 mt-2">
                <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">${tech}</div>
              </li>
            `).join("")}
          </ul>
        </div>
      </div>
    </li>
  `).join("");
}

function renderProjects() {
  const { projects } = PORTFOLIO_DATA;
  const projectsContainer = document.getElementById("projects-list");
  
  projectsContainer.innerHTML = projects.map(project => `
    <li class="mb-12">
      <div class="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
        <div class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
        
        <div class="z-10 sm:order-2 sm:col-span-6">
          <h3>
            <a class="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
              href="${project.url}"
              target="_blank"
              rel="noreferrer noopener">
              <span class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
              <span>
                ${project.title}
                <span class="inline-block">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true">
                    <path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd"></path>
                  </svg>
                </span>
              </span>
            </a>
          </h3>
          
          <p class="mt-2 text-sm leading-normal">${project.description}</p>
          
          <ul class="mt-2 flex flex-wrap" aria-label="Technologies used:">
            ${project.technologies.map(tech => `
              <li class="mr-1.5 mt-2">
                <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">${tech}</div>
              </li>
            `).join("")}
          </ul>
        </div>
        
        <img
          alt="${project.title}"
          loading="lazy"
          width="200"
          height="48"
          decoding="async"
          class="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
          style="color:transparent"
          src="${project.image}"
        />
      </div>
    </li>
  `).join("");
}

function renderFooter() {
  const { footer } = PORTFOLIO_DATA;
  const footerContainer = document.getElementById("footer-content");
  
  footerContainer.innerHTML = `
    <p>
      Loosely designed in
      <a href="${footer.designTool.url}" class="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300" target="_blank" rel="noreferrer noopener" aria-label="${footer.designTool.name} (opens in a new tab)">${footer.designTool.name}</a>
      and coded in
      <a href="${footer.codeTool.url}" class="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300" target="_blank" rel="noreferrer noopener" aria-label="${footer.codeTool.name} (opens in a new tab)">${footer.codeTool.name}</a>
      by yours truly. Built with
      <a href="${footer.buildTool.url}" class="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300" target="_blank" rel="noreferrer noopener" aria-label="${footer.buildTool.name} (opens in a new tab)">${footer.buildTool.name}</a>,
      deployed with
      <a href="${footer.deployTool.url}" class="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300" target="_blank" rel="noreferrer noopener" aria-label="${footer.deployTool.name} (opens in a new tab)">${footer.deployTool.name}</a>
    </p>
  `;
}

// ============================================
// INTERACTIVE FEATURES
// ============================================

function initSpotlightEffect() {
  const spotlight = document.getElementById("spotlight");
  
  document.addEventListener("mousemove", (e) => {
    spotlight.style.background = `radial-gradient(600px circle at ${e.clientX}px ${e.clientY}px, rgba(29, 78, 216, 0.15), transparent 80%)`;
  });
}

function initScrollSpy() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll("#nav-links a");
  
  const observerOptions = {
    root: null,
    rootMargin: "-20% 0px -80% 0px",
    threshold: 0,
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const activeId = entry.target.id;
        
        navLinks.forEach((link) => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${activeId}`) {
            link.classList.add("active");
          }
        });
      }
    });
  }, observerOptions);
  
  sections.forEach((section) => observer.observe(section));
}
