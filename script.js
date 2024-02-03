/* ========================== Profession/Description Animation In Home Page ========================== */
var typed = new Typed(".profession",{
    strings:["" ,"Fun","Enjoyment", "Laughter", "Friendship"],
    typeSpeed: 90,
    BackSpeed: 30,
    loop: true})

/* ========================== Carousel In Achievements Tab Located In Portfolio Section ========================== */
const track = document.getElementById("slider");

const handleOnDown = (e) => 
    track.dataset.mouseDownAt = e.clientX;

const handleOnUp = () => {
    track.dataset.mouseDownAt = "0";
    track.dataset.prevPercentage = track.dataset.percentage;
}

const handleOnMove = (e) => {
    if (track.dataset.mouseDownAt === "0") return;

    const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX;
    const maxDelta = window.innerWidth;

    if (!isNaN(mouseDelta) && !isNaN(maxDelta)) {
        const percentage = (mouseDelta / maxDelta) * -100;
        const prevPercentage = parseFloat(track.dataset.prevPercentage) || 0;
        const nextPercentageUnconstrained = prevPercentage + percentage;
        const nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -70);

        track.dataset.percentage = nextPercentage;

        track.animate(
            { transform: `translateX(${nextPercentage}%)` },
            { duration: 1200, fill: "forwards" }
        );
    }
}

window.onmousedown = (e) => handleOnDown(e);

window.ontouchstart = (e) => handleOnDown(e.touches[0]);

window.onmouseup = (e) => handleOnUp(e);

window.ontouchend = (e) => handleOnUp(e.touches[0]);

window.onmousemove = (e) => handleOnMove(e);

window.ontouchmove = (e) => handleOnMove(e.touches[0]);

/* ========================== Side Menu Script From Small Screen ========================== */
var sidemenu = document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.right = "0";
}
function closemenu(){
    sidemenu.style.right = "-200px";
}