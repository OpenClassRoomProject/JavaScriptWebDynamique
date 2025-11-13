async function LoadPieces() 
{
    // Get pieces data from the JSON file
    const reponse = await fetch("./ressources/json/pieces-autos.json");
    const pieces = await reponse.json();

    const sectionFiches = document.querySelector(".fiches");

    // instantiate every pieces from the JSON file and add it to the section
    for (let i = 0; i < pieces.length; i++)
    {
        AddPieceToSection(pieces[i], sectionFiches);
    }

    const boutonTrier = document.querySelector(".btn-trier");
    boutonTrier.addEventListener("click", function () 
    {
        const piecesSorted = Array.from(pieces)
        piecesSorted.sort((a, b) => 
        {
            return a.prix - b.prix
        });
        console.log(piecesSorted);
    });

    const boutonFiltrer = document.querySelector(".btn-filtrer");
    boutonFiltrer.addEventListener("click", function () 
    {
        const piecesFiltered = pieces.filter(piece => 
        {
            return piece.prix < 35
        });
        console.log(piecesFiltered);
    });
}

function AddPieceToSection(pieces, sectionFiches) 
{
    const pieceElement = document.createElement("article");

    const imageElement = document.createElement("img");
    imageElement.src = pieces.image;

    const nomElement = document.createElement("h2");
    nomElement.innerText = pieces.nom;

    const prixElement = document.createElement("p");
    prixElement.innerText = `Prix: ${pieces.prix} € (${pieces.prix < 35 ? "€" : "€€€"})`;

    const categorieElement = document.createElement("p");
    categorieElement.innerText = pieces.categorie ?? "Catégorie inconnue";

    const descriptionElement = document.createElement("p");
    descriptionElement.innerText = pieces.description ?? "Pas de description disponible.";

    const inStockElement = document.createElement("p");
    inStockElement.innerText = pieces.disponibilite ? "En stock" : "Rupture de stock";

    pieceElement.appendChild(imageElement);
    pieceElement.appendChild(nomElement);
    pieceElement.appendChild(prixElement);
    pieceElement.appendChild(categorieElement);
    pieceElement.appendChild(descriptionElement);
    pieceElement.appendChild(inStockElement);

    sectionFiches.appendChild(pieceElement);
}


LoadPieces();
