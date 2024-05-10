//store video IDs
const videoIds = [
    "3ottn7kfRuc",
    "mr41cCpwszE",
    "f6npxyqfXAI",
    "9BDC3m7wkT0",
    "r0q6bam_m6c",
    "7agE233fpM4",
    "3LXQWU67Ufk",
    "XEZadYdknZo",
    "NippTUo17aI",
    "9lJayd1qjAA",
    "xVA7nCNOpvk",
    "UvdEP5bNjsM",
    "eHG4YV0831U",
    "Zs2DOO5Qmds",
    "zkvokrIlnK8",
    "r1MIwavF_sw",
    "nboBPR-OfR8",
    "TL2x4vyo3Sk",
    "Nci33g-dVEo",
    ""

];
//store places
const koreaPlaces = [
    { place: "Select From Dropdown", videoId: "Select" },
    { place: "Gangnam", videoId: "3ottn7kfRuc" },
    { place: "Myeongdong", videoId: "mr41cCpwszE" },
    { place: "Itaewon", videoId: "f6npxyqfXAI" },
    { place: "Jongno", videoId: "9BDC3m7wkT0" },
    { place: "Seoul,subway line2 Daelim station ", videoId: "XEZadYdknZo" },
    { place: "Lotte World Tower", videoId: "NippTUo17aI" },
    { place: "Seoul, Gwanghwamun Boulevard", videoId: "9lJayd1qjAA" },
    { place: "Seoul, Seoul Station Plaza", videoId: "UvdEP5bNjsM" },
    { place: "Seoul, Lotte World", videoId: "nboBPR-OfR8" },
    { place: "Seoul, Jamsil Bridge", videoId: "Nci33g-dVEo" },
    { place: "Seoul, SeogangBridge", videoId: "JiyB29FducQ" },
    { place: "Gangwondo, Sokcho Beach", videoId: "Zs2DOO5Qmds" },
    { place: "Suwon, Gwanggyo Lake Park", videoId: "zkvokrIlnK8" },
    { place: "Busan, Songjeong beach", videoId: "r1MIwavF_sw" },
    { place: "Busan, Gwangandaegyo Bridge", videoId: "xVA7nCNOpvk" },
    { place: "Jeju Island, Seongsan Ilchulbong", videoId: "TL2x4vyo3Sk" },
    { place: "Jeju Island", videoId: "eHG4YV0831U" }
    //{ place: "to add", videoId: "to add" }
];

const spacePlaces = [
    { place: "Select From Dropdown", videoId: "Select" },
    { place: "Asteroid watch", videoId: "r0q6bam_m6c" },
    { place: "ISS", videoId: "7agE233fpM4" }
];

const italyPlaces = [
    { place: "Select From Dropdown", videoId: "Select" },
    { place: "Venice", videoId: "3LXQWU67Ufk" }
];

function populateDropdown(dropdown, places) {
    places.forEach(placeObj => {
        const option = document.createElement("option");
        option.value = placeObj.place.toLowerCase();
        option.text = placeObj.place;
        dropdown.appendChild(option);
    });

    dropdown.addEventListener("change", function () {
        const selectedPlace = this.value.toLowerCase();
        const selectedVideo = places.find(placeObj => placeObj.place.toLowerCase() === selectedPlace);
        if (selectedVideo) {
            const iframe = createIframe(selectedVideo.videoId);
            videoList.innerHTML = "";
            videoList.appendChild(iframe);
        }
    });
}

function searchVideos() {
    const searchInput = document.getElementById("searchInput").value.toLowerCase();
    const videoList = document.getElementById("videoList");
    videoList.innerHTML = "";
    //search inputs 
    if (searchInput === "korea") {
        const dropdown = document.createElement("select");
        dropdown.id = "koreaDropdown";
        populateDropdown(dropdown, koreaPlaces);
        videoList.appendChild(dropdown);
    } else if (searchInput === "space") {
        const dropdown = document.createElement("select");
        dropdown.id = "spaceDropdown";
        populateDropdown(dropdown, spacePlaces);
        videoList.appendChild(dropdown);
    } else if (searchInput === "italy") {
        const dropdown = document.createElement("select");
        dropdown.id = "italyDropdown";
        populateDropdown(dropdown, italyPlaces);
        videoList.appendChild(dropdown);
    } else {
        videoIds.forEach(videoId => {
            if (videoId.toLowerCase().includes(searchInput)) {
                const iframe = createIframe(videoId);
                videoList.appendChild(iframe);
            }
        });
    }
}

function createIframe(videoId) {
    const iframe = document.createElement("iframe");
    iframe.width = "560";
    iframe.height = "315";
    iframe.src = `https://www.youtube.com/embed/${videoId}`;
    iframe.allowFullscreen = true;
    return iframe;
}