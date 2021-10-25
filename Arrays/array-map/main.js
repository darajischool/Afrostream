(function (window, document) {
    // body
    /**
     * structuration des elements
     **/
    const hotels = [
        {
            name: "Temeri Jant",
            country: "Senegal",
            address: "3 Boulevard des Palmiers, Dakar, Senegal",
            phone: "221775554655",
            about: "Lorem ipsum dolor sit amet, consectetur adipis. Integer lipsum  sit amet",
            imgUrl: "https://source.unsplash.com/2gOxKj594nM/600x400",
        },
        {
            name: "The Golden Thread",
            country: "USA",
            address: "5 Maple Street, Los Angeles, CA, 90000",
            phone: "2125552345",
            about: "Lorem ipsum dolor sit amet, consectetur adipis. Integer lipsum  sit amet",
            imgUrl: "https://source.unsplash.com/UBe-M4bBxjw/600x400",
        },
        {
            name: "Sine Sine",
            country: "usa",
            address: "3669 Elm Street, New York, 30000",
            phone: "7075559087",
            about: "Lorem ipsum dolor sit amet, consectetur adipis. Integer lipsum  sit amet",
            imgUrl: "https://source.unsplash.com/RDnYlufMFAw/600x400",
        },
        {
            name: "Petites Caraïbes",
            country: "USA",
            address: "1 Kings Place, Atlanta, GA, 30000",
            phone: "6785553125",
            about: "Lorem ipsum dolor sit amet, consectetur adipis. Integer lipsum  sit amet",
            imgUrl: "https://source.unsplash.com/O5rFo-cJu94/600x400",
        },
        {
            name: "Dragon Shower",
            country: "Senegal",
            address: "3 Boulevard des Palmiers, Dakar, Senegal",
            phone: "221775554655",
            about: "Lorem ipsum dolor sit amet, consectetur adipis. Integer lipsum  sit amet",
            imgUrl: "https://source.unsplash.com/pHANr-CpbYM/600x400",
        },
        {
            name: "The 3 Queens",
            country: "USA",
            address: "5 Maple Street, Los Angeles, CA, 90000",
            phone: "2125552345",
            about: "Lorem ipsum dolor sit amet, consectetur adipis. Integer lipsum  sit amet",
            imgUrl: "https://source.unsplash.com/_A7H-ujstEc/600x400",
        },
        {
            name: "Tooth Peak",
            country: "usa",
            address: "3669 Elm Street, New York, 30000",
            phone: "7075559087",
            about: "Lorem ipsum dolor sit amet, consectetur adipis. Integer lipsum  sit amet",
            imgUrl: "https://source.unsplash.com/_A7H-ujstEc/600x400",
        },
        {
            name: "Tuxedo Beach",
            country: "USA",
            address: "1 Kings Place, Atlanta, GA, 30000",
            phone: "6785553125",
            about: "Lorem ipsum dolor sit amet, consectetur adipis. Integer lipsum  sit amet",
            imgUrl: "https://source.unsplash.com/EjW1VKoaHMs/600x400",
        },
    ];

    const cardsHtml = renderCards(hotels);

    const content = document.querySelector("#content");

    if (!!cardsHtml) {
        content.innerHTML = cardsHtml;
    }

    function renderCards(cards) {
        return `
        <div id="cards">
            ${cards
                .map((card) => {
                    return `
                    <div class="card">
                        <figure>
                            <img
                                src="${card.imgUrl}"
                                alt="${card.name}"
                            />
                        </figure>
                        <h3>${card.name}</h3>
                        <p class="card-label">
                            ${card.about}
                        </p>
                    </div>
                `;
                })
                .join("\n")}
        </div>
      `;
    }
})(window, document);
