
const objectsButtonPrevious = document.querySelector('[data-name="objects-btn-previous"]');
const objectsButtonNext = document.querySelector('[data-name="objects-btn-next"]');
const objectsLists = document.querySelectorAll('[data-name="objects-list"]'); // screen-more-576
const objectsListsLess576 = document.querySelectorAll('[data-name="objects-list-less-576"]'); // screen-more-576

// screen-more-576

let objectsListIndex = 1;

showObjectsList(objectsListIndex);

function showObjectsList(index) {
  if (index > objectsLists.length) {
    objectsListIndex = 1;
  }
  if (index < 1) {
    objectsListIndex = objectsLists.length;
  }

  for (let objectsList of objectsLists) {
    objectsList.style.display = 'none';
  }

  objectsLists[objectsListIndex-1].style.display = 'flex';
}

objectsButtonPrevious.addEventListener('click', previousObjectsList);

function previousObjectsList() {
  showObjectsList(objectsListIndex += 1);
}

objectsButtonNext.addEventListener('click', nextObjectsList);

function nextObjectsList() {
  showObjectsList(objectsListIndex -= 1);
}

// screen-less-576

let objectsListLess576Index = 1;

showObjectsListLess576(objectsListLess576Index);

function showObjectsListLess576(indexLess576) {
  if (indexLess576 > objectsListsLess576.length) {
    objectsListLess576Index = 1;
  }
  if (indexLess576 < 1) {
    objectsListLess576Index = objectsListsLess576.length;
  }

  for (let objectsList of objectsListsLess576) {
    objectsList.style.display = 'none';
  }

  objectsListsLess576[objectsListLess576Index-1].style.display = 'flex';
}

objectsButtonPrevious.addEventListener('click', previousObjectsListLess576);

function previousObjectsListLess576() {
  showObjectsListLess576(objectsListLess576Index += 1);
}

objectsButtonNext.addEventListener('click', nextObjectsListLess576);

function nextObjectsListLess576() {
  showObjectsListLess576(objectsListLess576Index -= 1);
}
