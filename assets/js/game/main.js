function main() {
    $("#stellarcoins-display").html(`${stellarcoins} Stellarcoins`);
}

var stellarcoins = initLs("stellarcoins", 0);

var currentlyShipping = false;
$("#ship-btn").click(() => {
    if (!currentlyShipping) {
        currentlyShipping = true;
        $("#ship-btn").addClass("disabled");
        setTimeout(() => {
            currentlyShipping = false;
            $("#ship-btn").removeClass("disabled");
        }, 1000);

        stellarcoins++;
        setLs('stellarcoins', stellarcoins);
    } else {
        console.log("cooldown");
    }
});

setInterval(() => {
    // console.log(stellarcoins);
    // console.log('ls: ' + localStorage.getItem("stellarcoins"));
    main();
}, 10);

main();