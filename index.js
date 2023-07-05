// Fetch the list of animals from the server
fetch('http://localhost:3000/characters')
  .then(function(response) {
    return response.json();
  })
  .then(function(animalData) {
    let nameList = document.getElementById("animal-namelist");
    animalData.forEach(animal => {
      const animalListItem = document.createElement('li');
      animalListItem.innerText = animal.name;
      animalListItem.addEventListener('click', function() {
        clearDetails();
        showDetails(animal);
      });
      nameList.appendChild(animalListItem);
    });
  })
  .catch(function(error) {
    console.log("An error occurred:", error);
  });
''
function showDetails(animal) {
  const animalDetails = document.getElementById("animal-details");
  animalDetails.innerHTML = '';

  const nameHeading = document.createElement('h2');
  nameHeading.textContent = animal.name;

  const image = document.createElement('img');
  image.src = animal.image;

  const votesLabel = document.createElement('p');
  votesLabel.textContent = `Votes: ${animal.votes}`;

  const voteButton = document.createElement('button');
  voteButton.textContent = 'Add Vote';
  voteButton.addEventListener('click', function() {
    animal.votes++;
    votesLabel.textContent = `Votes: ${animal.votes}`;
  });

  animalDetails.appendChild(nameHeading);
  animalDetails.appendChild(image);
  animalDetails.appendChild(votesLabel);
  animalDetails.appendChild(voteButton);
}

function clearDetails() {
  const animalDetails = document.getElementById("animal-details");
  animalDetails.innerHTML = '';
}
