
const clientsButtonPrevious = document.querySelector('[data-name="clients-btn-previous"]');
const clientsButtonNext = document.querySelector('[data-name="clients-btn-next"]');
const clientsLists = document.querySelectorAll('.list-about__clients-list');

let clientsListIndex = 1;

showClientsList(clientsListIndex);

function showClientsList(index) {
  if (index > clientsLists.length) {
    clientsListIndex = 1;
  }
  if (index < 1) {
    clientsListIndex = clientsLists.length;
  }

  for (let clientsList of clientsLists) {
    clientsList.style.display = 'none';
  }

  clientsLists[clientsListIndex - 1].style.display = 'grid';
}

clientsButtonPrevious.addEventListener('click', previousClientsList);

function previousClientsList() {
  showClientsList(clientsListIndex += 1);
}

clientsButtonNext.addEventListener('click', nextClientsList);

function nextClientsList() {
  showClientsList(clientsListIndex -= 1);
}










// function nextClientsList() {
//   console.log('Hi 2')
// }



