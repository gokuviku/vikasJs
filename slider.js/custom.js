

let tr = '';
let addNew = [
    {
        id: 1, src: "https://www.yudiz.com/codepen/expandable-animated-card-slider/winter-3.jpg", title: "The Witcher 3", para:
            "The Witcher 3 is a multiplayer online battle arena by Valve. The game is a sequel to Defense of the Ancients, which was a community-created mod for Blizzard Entertainment's Warcraft III."
    },

    { id: 2, src: "https://www.yudiz.com/codepen/expandable-animated-card-slider/rdr-2.jpg", title: "RDR 2", para: "RDR 2 is a multiplayer online battle arena by Valve. The game is a sequel to Defense of the Ancients, which was a community-created mod for Blizzard Entertainment's Warcraft III." },

    { id: 3, src: "https://www.yudiz.com/codepen/expandable-animated-card-slider/pubg.jpg", title: "PUBG 2", para: "PUBG 2 is a multiplayer online battle arena by Valve. The game is a sequel to Defense of the Ancients, which was a community-created mod for Blizzard Entertainment's Warcraft III." },

    { id: 4, src: "https://www.yudiz.com/codepen/expandable-animated-card-slider/fortnite.jpg", title: "Fortnite", para: "Battle royale where 100 players fight to be the last person standing. which was a community-created modfor Blizzard Entertainment's Warcraft III.." },

    { id: 5, src: "https://www.yudiz.com/codepen/expandable-animated-card-slider/far-cry-5.jpg", title: "Far Cry 5", para: "Far Cry 5 is a 2018 first-person shooter game developed by Ubisoft. which was a community-created mod for Blizzard Entertainment's Warcraft III" },

    { id: 6, src: "https://www.yudiz.com/codepen/expandable-animated-card-slider/dota-2.jpg", title: "Dota 2", para: "Dota 2 is a multiplayer online battle arena by Valve. The game is a sequel to Defense of theAncients, which was a community-created mod for Blizzard Entertainment's Warcraft III" },  
      { id: 7, src: "https://m.media-amazon.com/images/M/MV5BOWM2OWJiNjgtMmUwZS00ZGIwLWFlODYtODY1ZmYyMmNlNzJkXkEyXkFqcGdeQXVyODU5ODY0ODc@._V1_.jpg", title: "Tekken 3", para: "Tekken 3 is a multiplayer online battle arena by Valve. The game is a sequel to Defense of theAncients, which was a community-created mod for Blizzard Entertainment's Warcraft III" },
];

addNew.map((item) => {
    tr += `<div class="item "  style="background-image: url(${item.src});">
                    <div class="item-desc">
                    <h3>${item.title}</h3>
                    <p>${item.para}</p>
                    </div>
            </div>`;
});

document.getElementById("sliderImg").innerHTML = tr;


$(".custom-carousel").owlCarousel({
    autoWidth: true,
    loop: true
});

$(document).ready(function () {
    $(".custom-carousel .item").click(function () {
        $(".custom-carousel .item").not($(this)).removeClass("active");
        $(this).toggleClass("active");
    });
});