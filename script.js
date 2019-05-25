const inputDate = document.getElementById("dateInput");
const button = document.getElementById("button");
const result = document.getElementById("result");

const birthstoneMap = {
    january:"Garnet",
    february:"Amethyst",
    march:"Aquamarine",
    april:"Diamond",
    may:"Emerald",
    june:"Pearl",
    july:"Ruby",
    august:"Peridot",
    september:"Sapphire",
    october:"Opal",
    november:"Topaz",
    december:"Turquoise"
}

function formatString(month, birthstone){
    return "The birthstone for " + month.charAt(0).toUpperCase() + month.slice(1) +" is" + " " + birthstone;
}

button.addEventListener("click", function(){
    const month = inputDate.value;
    const birthstone = birthstoneMap[month];
    result.innerHTML= formatString(month, birthstone);
});