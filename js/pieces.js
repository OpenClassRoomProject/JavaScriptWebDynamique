async function LoadPiece() 
{
    // Get pieces data from the JSON file
    const reponse = await fetch("./ressources/json/pieces-autos.json");
    const pieces = await reponse.json();

    // Creation of the html elements
    const article = pieces[0];

    const imageElement = document.createElement("img");
    imageElement.src = article.image;

    const nomElement = document.createElement("h2");
    nomElement.innerText = article.nom;

    const prixElement = document.createElement("p");
    prixElement.innerText = `Prix: ${article.prix} € (${article.prix < 35 ? "€" : "€€€"})`;

    const categorieElement = document.createElement("p");
    categorieElement.innerText = article.categorie ?? "Catégorie inconnue";

    const descriptionElement = document.createElement("p");
    descriptionElement.innerText = article.description ?? "Pas de description disponible.";

    const inStockElement = document.createElement("p");
    inStockElement.innerText = article.disponibilite ? "En stock" : "Rupture de stock";

    // Add elements to the DOM
    const sectionFiches = document.querySelector(".fiches");

    sectionFiches.appendChild(imageElement);
    sectionFiches.appendChild(nomElement);
    sectionFiches.appendChild(prixElement);
    sectionFiches.appendChild(categorieElement);
    sectionFiches.appendChild(descriptionElement);
    sectionFiches.appendChild(inStockElement);
}

LoadPiece();