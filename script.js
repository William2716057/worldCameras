//store video IDs
const videoIds = [
    "3ottn7kfRuc",
    "mr41cCpwszE",
    "f6npxyqfXAI",
    "9BDC3m7wkT0",
    "r0q6bam_m6c",
    "7agE233fpM4",
    "3LXQWU67Ufk"
];
//store places
const koreaPlaces = [
    { place: "Select From Dropdown", videoId: "Select" },
    { place: "Gangnam", videoId: "3ottn7kfRuc" },
    { place: "Myeongdong", videoId: "mr41cCpwszE" },
    { place: "Itaewon", videoId: "f6npxyqfXAI" },
    { place: "Jongno", videoId: "9BDC3m7wkT0" }
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