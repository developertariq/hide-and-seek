
const mobileMenu = document.getElementById('dropdown');

function openNav() {
  mobileMenu.style.display = 'block';
  mobileMenu.style.position = 'fixed';
}

function closeNav() {
  mobileMenu.style.display = 'none';
}

function showDetails(container) {
  const popupWindow = document.getElementById('popup-window');
  fillPopupWindow(popupWindow, container.id);
  popupWindow.classList.add('show-details');
  popupWindow.classList.toggle('hide');
}

function closeDetails() {
  document.getElementById('popup-window').classList.remove('show-details');
  document.getElementById('popup-window').classList.toggle('hide');
}

function fillPopupWindow(targetWindow, workId) {
  const work = works.find((a) => a.id === workId);

  targetWindow.querySelector('h3').innerText = work.name;
  targetWindow.querySelector('p').innerText = work.description;
  targetWindow.querySelector('#see-live').href = work.livelink;
  targetWindow.querySelector('#see-source').href = work.sourcelink;
  targetWindow.querySelector('#popup-image').src = work.image;
  targetWindow.querySelector('#popup-image').alt = work.name;

  const list = targetWindow.querySelector('#popup-list');
  list.innerHTML = '';
  for (let i = 0; i < work.technology.length; i++) {
    const item = document.createElement('li');
    item.appendChild(document.createTextNode(work.technology[i]));
    item.classList.add('technology');
    list.appendChild(item);
  }
  console.log(targetWindow);
}

function fillWindow(targetWindow) {
  const work = Works.find((a) => a.id === targetWindow.id);
  targetWindow.querySelector('h3').innerText = work.name;
  targetWindow.querySelector('p').innerText = work.description;

  const list = targetWindow.querySelector('.proj-lang');
  if (list !== null) {
    list.innerHTML = '';
    for (let i = 0; i < work.technology.length; i++) {
      const item = document.createElement('li');
      item.appendChild(document.createTextNode(work.technology[i]));
      item.classList.add('technology');
      list.appendChild(item);
    }
  }
  targetWindow.style.background = `linear-gradient(179.35deg, rgba(38, 38, 38, 0) 0.85%, rgba(38, 38, 38, 0.9) 84%), url(${work.image})`;
}

function fillWindow2(targetWindow) {
  const work = works.find((a) => a.id === targetWindow.id);
  targetWindow.querySelector('h3').innerText = work.name;
  targetWindow.querySelector('p').innerText = work.description;
  targetWindow.querySelector('#img-animation').src = work.image;
  targetWindow.querySelector('#img-animation').alt = work.name;
  const list = targetWindow.querySelector('#top-proj-lang');
  if (list !== null) {
    list.innerHTML = '';

    for (let i = 0; i < work.technology.length; i++) {
      const item = document.createElement('li');
      item.appendChild(document.createTextNode(work.technology[i]));
      item.classList.add('technology');
      list.appendChild(item);
    }
  }
}

window.addEventListener('load', () => {
  createPopupWindow();
  loadRecentWorks();

});

function loadRecentWorks() {
  for (let i = 0; i < works.length; i++) {
    if (i === 0) {
      document.getElementById(works[i].id).addEventListener('load', fillWindow2(document.getElementById(works[i].id)));
    } else {
      document.getElementById(works[i].id).addEventListener('load', fillWindow(document.getElementById(works[i].id)));
    }
  }
}

function createPopupWindow() {
  const h3 = document.createElement('h3');
  h3.id = 'show-details-name';
  h3.classList.add('work-name', 'popup-name');
  const span = document.createElement('button');
  span.classList.add('closebtn');
  const clsbtn = document.createElement('i');
  clsbtn.classList.add('fas', 'fa-times');
  span.setAttribute('onclick', 'closeDetails()');
  span.appendChild(clsbtn);
  const namediv = document.createElement('div');
  namediv.classList.add('heading-close', 'margin-10');
  namediv.appendChild(h3);
  namediv.appendChild(span);

  const ul = document.createElement('ul');
  ul.id = 'popup-list';
  ul.classList.add('technologies');

  const img = document.createElement('img');
  img.id = 'popup-image';
  img.setAttribute('src', '');
  img.setAttribute('alt', '');
  const imgdiv = document.createElement('div');
  imgdiv.classList.add('popup-image-container');
  imgdiv.appendChild(img);

  const para = document.createElement('p');
  para.classList.add('pop-up-description');

  const seelive = document.createElement('a');
  seelive.id = 'see-live';
  seelive.setAttribute('href', '#');
  seelive.setAttribute('target', '_blank');
  seelive.innerText = 'See Live ';

  const externalicon = document.createElement('i');
  externalicon.classList.add('fas', 'fa-external-link-alt');
  seelive.appendChild(externalicon);

  const seesource = document.createElement('a');
  seesource.id = 'see-source';
  seesource.setAttribute('href', '#');
  seesource.setAttribute('target', '_blank');
  seesource.innerText = 'See Live ';

  const githubicon = document.createElement('i');
  githubicon.classList.add('fab', 'fa-github');
  seesource.appendChild(githubicon);

  const btndiv = document.createElement('div');
  btndiv.classList.add('live-btn-container');
  btndiv.appendChild(seelive);
  btndiv.appendChild(seesource);

  const popupWindow = document.createElement('div');
  popupWindow.id = 'popup-window';
  popupWindow.classList.add('hide');
  popupWindow.appendChild(namediv);
  popupWindow.appendChild(ul);
  popupWindow.appendChild(imgdiv);
  popupWindow.appendChild(para);
  popupWindow.appendChild(btndiv);

  document.querySelector('body').appendChild(popupWindow);
}

const overlay = document.createElement('div');

function lockBack() {
  overlay.classList.add('popupOverlay');
  overlay.classList.add('hide');
  document.querySelector('body').appendChild(overlay);
  overlay.appendChild(document.querySelector('#popup-window'));
}
