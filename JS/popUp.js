const container = document.getElementById('#modal');
const workCont = document.querySelector('.w-container');
// Tout d'abord
const projs = [
  {
    title: 'Tonic',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    image: 'imgMBV/Snapshoot 2.png',
    technologies: ['html', 'css', 'javaScript'],
    liveLink: 'https://ghostesso.github.io/Portfolio-New-Setup/',
    sourceLink: 'https://github.com/GhostEsso/Portfolio-New-Setup',
    details: [' CANOPY • BACK END DEV • 2015'],
  },

  {
    title: 'Multi Posting',
    description: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    image: 'imgMBV/Snapshoot 3.png',
    technologies: ['html', 'css', 'javaScript'],
    liveLink: 'https://ghostesso.github.io/Portfolio-New-Setup/',
    sourceLink: 'https://github.com/GhostEsso/Portfolio-New-Setup',
    details: [' CANOPY • LEADER BOARD • 2015'],
  },

  {
    title: 'Facebook 360',
    description: 'Exploring the future of media in Facebooks first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.',
    image: 'imgMBV/Snapshoot 4.png',
    technologies: ['html', 'css', 'javaScript'],
    liveLink: 'https://ghostesso.github.io/Portfolio-New-Setup/',
    sourceLink: 'https://github.com/GhostEsso/Portfolio-New-Setup',
    details: [' FACEBOOK • FULL STACK DEV • 2015'],
  },

  {
    title: 'Uber Navigation',
    description: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    image: 'imgMBV/Snapshoot 1.png',
    technologies: ['html', 'css', 'javaScript'],
    liveLink: 'https://ghostesso.github.io/Portfolio-New-Setup/',
    sourceLink: 'https://github.com/GhostEsso/Portfolio-New-Setup',
    details: [' CANOPY • UBER LEADER BOARD • 2015'],
  },
];
// Créez une fonction qui va créer le HTML de chaque projet.
for (let i = 0; i < projs.length; i += 1) {
  workCont.innerHTML += `<section class="wo-section">
      <div class="">
        <img src="${projs[i].image}" alt="Snapshoot image">
      </div>
      <div class="">
        <div class="w-topic">
          <h2>${projs[i].title}</h2>
        </div>
        <div class="w-detail">
          <ul>
            <li>${projs[i].details}<li>
          </ul>
        </div>
        <div class="w-paragraph">
          <p>${projs[i].description}</p>
        </div>
        <div class="w-langs">
          <ul>${projs[i].technologies.map((m) => `<li><a href="#">${m}</a></li>`).join('')}
          </ul>
        </div>
        <div class="w-button">
          <button id="btn-${[i]}" value="See Project">See Project</button>
        </div>
      </div>
    </section>`;
}

// add click event listeners to all the "See Project" buttons
for (let i = 0; i < projs.length; i += 1) {
  const btnx = document.querySelectorAll(`[id=btn-${[i]}]`);
  btnx.forEach((btx) => {
    btx.addEventListener('click', () => {
      container.style.display = 'flex';
      container.innerHTML = `
              <div class="w-m-c pop container-fluid p-5">
                <div class="row bg-light work-re">
                  <span class="closeit"><i class="fa-solid fa-xmark"></i></span>
                  <div class="col-12">
                    <div class="w-m-h px-2 py-2">
                      <h1 class="topic-here">${projs[i].title}</h1>
                      <ul class="list-inline flex">
                        ${projs[i].details}
                      </ul>
                      <img src="${projs[i].image}" class="img-fluid w-100" alt="Logo">
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="row d-flex flex-row">
                      <div class="col-md-8">
                        <p class="paragraph pb-2">${projs[i].description}</p> 
                      </div>
                      <div class="col-md-4 d-flex flex-column">
                        <ul class="list-inline ul-work">
                          ${projs[i].technologies.map((m) => `<li class="list-inline-item bagde bg-info text-primary"><a class="text-decoration-none text-dark" href="#">${m}</a></li>`).join('')}
                        </ul>
                        <div class="d-flex flex-row col-md-10 gap-2 pb-2">
                          <a href="${projs[i].liveLink}" class="btn btn-outline-primary text-decoration-none">See Live<i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                          <a href="${projs[i].sourceLink}" class="btn btn-outline-primary text-decoration-none">See Source <i class="fa-brands fa-github"></i></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>`;
      const closeBtn = document.querySelector('.closeit');
      closeBtn.addEventListener('click', () => {
        const containerA = document.querySelector('.w-modal');
        containerA.style.display = 'none';
      });
    });
  });
}
const closeBtn = document.querySelector('.closeit');
closeBtn.addEventListener('click', () => {
  const containerA = document.querySelector('.w-modal');
  containerA.style.display = 'none';
});
