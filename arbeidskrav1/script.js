//Henter inn elementet med id "htmlElement" fra HTML-filen.
const htmlElement = document.getElementById("htmlElement");

//Lager en array med objekter som inneholder informasjon om ressurser.
function displayResources(category) {
    const resourcesFilter = resources.filter(resource => resource.category === category);

    //Lager en variabel som skal inneholde HTML-koden som skal vises på nettsiden.
    let resourceHTML = "";

    //Itererer gjennom arrayen med ressurser og legger til HTML-koden i variabelen "resourceHTML".
    resourcesFilter.map((resource) => resourceHTML += 
        `<article class="resources">
        <h2>${resource.category}</h2>
        <p>${resource.text}</p>
            <ul>
                ${resource.sources.map(source => `<li><a href="${source.url}" target="_blank">${source.title}</a></li>`).join("")}
            </ul>
        </article>`
    )

    //Setter inn HTML-koden i elementet med id "htmlElement".
    htmlElement.innerHTML = resourceHTML;
}

//Henter inn elementet med klassen "subject" fra HTML-filen.
function buttonClick(button, content) {
    const activeButton = document.querySelector(".subject.active");

    //Sjekker om det er en aktiv knapp, og fjerner klassen "active" fra denne.
    if (activeButton) {
        activeButton.classList.remove("active");
    }

    //Legger til klassen "active" på knappen som ble trykket på.
    button.classList.add("active");

    //Kaller på funksjonen "displayResources" og sender med innholdet som skal vises.
    displayResources(content);
    console.log("content displayed");
}

displayResources("HTML");
console.log("script loaded"); 