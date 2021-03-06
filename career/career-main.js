const careerContent = document.getElementById("careerContent");

//Makes a function that creates a div with the class container for Bootstrap layout
const createContainer = () => {
    let container = document.createElement("div");
    container.className = "container";
    return container
}

const createDiv = () => {
    let div = document.createElement("div");
    return div;
}


//Creates the div and stores it in introHeader
const introHeader = createContainer();
//Gets value from database and sets it to the value of the introHeader
introHeader.innerHTML = `<h2 class = "text-center text-char">${careerDatabase.intro[0].title}</h2>`;
//Appends the introHeader to the page as a child of the careerContent article
careerContent.appendChild(introHeader)

const introText = createContainer();
introText.innerHTML = `<p>${careerDatabase.intro[0].content1}</p>` + `<p>${careerDatabase.intro[0].content2}</p>`;

introHeader.appendChild(introText);

const skillContainer = createDiv();
skillContainer.classList.add("light-blue", "py-1", "my-4");
careerContent.appendChild(skillContainer);

//Skills section
const skillsHeader = createContainer();
skillsHeader.classList.add("text-light")
skillsHeader.innerHTML = `<h2 class = "text-center">Skills</h2>`;

skillContainer.appendChild(skillsHeader)

//const skills = createContainer();
//skills.classList.add("bg-transparent", "my-3");


let skillsLoop = () => {
  let loop = "";
  for (let i = 0; i < careerDatabase.skills.length; i++) {
  loop += 
        `<div class="card border-0 bg-transparent">
            <img class="card-img-top icon mx-auto" src=${careerDatabase.skills[i].img} alt="Card image cap">
            <div class="card-body pb-0">
                <h5 class="card-title">${careerDatabase.skills[i].skill}</h5>
                <p class="card-text">${careerDatabase.skills[i].description}</p>
            </div>     
        </div>`
}
return loop;
}

let skillsCards = skillsLoop();
let skillsContent = `<div class="card-deck border-0 py-1 text-light">${skillsCards}</div>`
let skillsParent = createContainer();
skillsParent.innerHTML = skillsContent;

skillsHeader.appendChild(skillsParent);

//Creates the 'works' cards container
const works = createContainer();
const worksHeader = createContainer();
worksHeader.innerHTML = `<h2 class = "text-center text-char">Notable Work</h2>`;
//Appends works cards to the page
careerContent.appendChild(worksHeader);
worksHeader.appendChild(works)

//Loop function that loops through his works and creates a card for each one 
let worksLoop = () => {
    let loop = "";
    for (let i = 0; i < careerDatabase.works.length; i++) {
    loop += 
            `<div class="card">
                <div class="card-body">
                    <h5 class="card-title">${careerDatabase.works[i].bandName}</h5>
                    <p class="card-text">${careerDatabase.works[i].about}</p>
                </div>
            </div>`
}
return loop;
}

//Calls the works loop function
let worksCards = worksLoop();
//Puts the works cards inside of the card group div
let worksContent = `<div class="card-group shadows my-3 rounded">${worksCards}</div>`
let worksParent = createContainer();
worksParent.innerHTML = worksContent;

//Appends the card group to the page
careerContent.appendChild(worksParent);


const collabCards = createContainer();
const collabsTitle = createDiv();
collabsTitle.classList.add("my-5", "turqouise", "py-3");
collabsTitle.innerHTML = `<h2 class = "container text-center text-white py-3">Collaborations</h2>`;

careerContent.appendChild(collabsTitle);
collabsTitle.appendChild(collabCards);

collabCards.classList.add("my-3");
collabCards.innerHTML = `<div class="card-columns light-blue p-2 my-3 rounded">
<div class="card">
  <img class="card-img-top" src="${careerDatabase.collabs[0].image}" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">${careerDatabase.collabs[0].name}</h5>
    <p class="card-text">Lorem ipsum dolor amet four dollar toast synth pabst, shabby chic kogi direct trade flexitarian fam. Yr gastropub chambray adaptogen. Food truck af offal, godard celiac vape knausgaard drinking vinegar butcher roof party normcore. Cloud bread tilde paleo coloring book meditation blog.</p>
  </div>
</div>
<div class="card p-3 charcoal text-white">
  <blockquote class="blockquote mb-0 card-body text-white">
    <p>If he ever runs for president, Paul's got my vote</p>
    <footer class="blockquote-footer text-white">
      <small class="">
        Someone famous in <cite title="Source Title">a magazine</cite>
      </small>
    </footer>
  </blockquote>
</div>
<div class="card">
  <img class="card-img-top" src="${careerDatabase.collabs[1].image}" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">${careerDatabase.collabs[1].name}</h5>
    <p class="card-text">Lorem ipsum dolor amet venmo raclette cornhole lo-fi neutra lyft pitchfork pabst. Bicycle rights taiyaki street art tacos affogato, organic celiac kitsch authentic everyday cliche bushwick kickstarter semiotics adaptogen edison bulb. Squid pok pok glossier craft beer poutine shaman palo santo chillwave</p>
  </div>
</div>
<div class="card tangerine text-white text-center p-3">
  <blockquote class="blockquote mb-0 text-white">
    <p>Paul is the greatest musician I have ever worked with.</p>
    <footer class="blockquote-footer text-white">
      <small>
        Some famous guy
      </small>
    </footer>
  </blockquote>
</div>
<div class="card">
  <img class="card-img" src="img/dave.png" alt="Card image">
</div>
<div class="card p-3 text-right tangerine">
  <blockquote class="blockquote mb-0 text-white">
    <p>He founded The Beatles. How much cooler can you get?</p>
    <footer class="blockquote-footer text-white">
      <small class="text-white">
        Someone famous on <cite title="Source Title">some website</cite>
      </small>
    </footer>
  </blockquote>
</div>
<div class="card">
<img class="card-img-top" src="${careerDatabase.collabs[2].image}">
  <div class="card-body">
    <h5 class="card-title">${careerDatabase.collabs[2].name}</h5>
    <p class="card-text">Lorem ipsum dolor amet lo-fi neutra lyft pitchfork pabst. Bicycle rights taiyaki street art tacos affogato, organic celiac kitsch authentic everyday carry small batch cornhole. Literally pabst Tote bag taxidermy bicycle rights humblebrag vegan chartreuse.</p>
  </div>
</div>
<div class="card charcoal text-white text-right p-3">
  <blockquote class="blockquote mb-0 text-white">
    <p>He's the man</p>
    <footer class="blockquote-footer text-white">
      <small>
        Another famous person
      </small>
    </footer>
  </blockquote>
</div>
</div>`

//Creates the div and stores it in introHeader
const awardHeader = createContainer();
//Gets value from database and sets it to the value of the introHeader
awardHeader.innerHTML = `<h2 class = "text-center text-char">Awards</h2>`;
//Appends the introHeader to the page as a child of the careerContent article
careerContent.appendChild(awardHeader)

let awardsLoop = () => {
    let loop = "";
    for (let i = 0; i < careerDatabase.awards.length; i++) {
    loop += 
            `<li class="media my-2 col-md-6">
              <img class="mr-3 medal" src="img/medal.svg" alt="gold medal">
              <div class="media-body">
                <h5 class="mt-0 mb-1">${careerDatabase.awards[i].award}</h5>
                <p>${careerDatabase.awards[i].song} | ${careerDatabase.awards[i].year}</p>
              </div>
            </li>`
}
return loop;
}

let awardCards = awardsLoop();
let awardContent = `<ul class="list-unstyled row">${awardCards}</ul><h5 class="text-center">Plus a whole lot more</h5>`
let awardParent = createContainer();
awardParent.innerHTML = awardContent;

careerContent.appendChild(awardParent);