/* Query Selectors */
let neil = document.getElementById('neil');
let nichole = document.getElementById('nichole');
let jim = document.getElementById('jim');

/* Query Selectors for buttons in friends posts */
let neilBtn = document.getElementById('neil-btn');
let nicholeBtn = document.getElementById('nichole-btn');
let jimBtn = document.getElementById('jim-btn');

/* Event Listeners*/
neilBtn.addEventListener('click', ()=> {
    addLikeNeil();
});

nicholeBtn.addEventListener('click', ()=> {
    addLikeNichole();
});

jimBtn.addEventListener('click', ()=> {
    addLikeJim();
});

/* Functions for adding likes */
function addLikeNeil() {
    neil.textContent++;
}

function addLikeNichole() {
    nichole.textContent++;
}

function addLikeJim() {
    jim.textContent++;
}

// sorry for my busted code :C riperino
// function isNotPlural(string) {
//     console.log("is not plural checks string");
//     console.log(string + typeof string);
//     if (neil.textContent === '1') {
//         console.log("singular check returned true");
//         console.log(neilP.textContent);
//         neilP.textContent = neilP.textContent.substring(0,6);
//         console.log(neilP.textContent);
//         return neilP.textContent;
//     }
// }