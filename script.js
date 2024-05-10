//Video IDs
const videoIds = [
    "VIDEO_ID_1",
    "3ottn7kfRuc",
    "mr41cCpwszE",
    "f6npxyqfXAI", 
    "9BDC3m7wkT0",
    "r0q6bam_m6c",
    "7agE233fpM4",
    //continue adding
];

//places in Korea
const koreaPlaces = [
    { place: "Select From Dropdown", videoId: "Select" },
    { place: "Gangnam", videoId: "3ottn7kfRuc" },
    { place: "Myeongdong", videoId: "mr41cCpwszE" },
    { place: "Itaewon", videoId: "f6npxyqfXAI" },
    { place: "Jongno", videoId: "9BDC3m7wkT0" },
   // { place: "to add", videoId: "to add" },
   // { place: "to add", videoId: "to add" },
   // { place: "to add", videoId: "to add" },
    //continue adding
];

const spacePlaces = [
    { place: "Select From Dropdown", videoId: "Select" },
    { place: "Asteroid watch", videoId: "r0q6bam_m6c" },
    { place: "ISS", videoId: "7agE233fpM4" },
    // { place: "to add", videoId: "to add" },
    // { place: "to add", videoId: "to add" },
    // { place: "to add", videoId: "to add" },
    //continue adding
];

function searchVideos() {
    const searchInput = document.getElementById("searchInput").value.toLowerCase();
    const videoList = document.getElementById("videoList");
    videoList.innerHTML = "";

    // Check if the search input matches "korea"
    if (searchInput === "korea") {
        const dropdown = document.createElement("select");
        dropdown.id = "koreaDropdown";

        koreaPlaces.forEach(placeObj => {
            const option = document.createElement("option");
            option.value = placeObj.place.toLowerCase();
            option.text = placeObj.place;
            dropdown.appendChild(option);
        });

        dropdown.addEventListener("change", function () {
            const selectedPlace = this.value.toLowerCase();
            const selectedVideo = koreaPlaces.find(placeObj => placeObj.place.toLowerCase() === selectedPlace);
            if (selectedVideo) {
                const iframe = createIframe(selectedVideo.videoId);
                videoList.innerHTML = "";
                videoList.appendChild(iframe);
            }
        });

        videoList.appendChild(dropdown);
    }
    // Check if the search input matches "space"
    else if (searchInput === "space") {
        const dropdown = document.createElement("select");
        dropdown.id = "spaceDropdown";

        spacePlaces.forEach(placeObj => {
            const option = document.createElement("option");
            option.value = placeObj.place.toLowerCase();
            option.text = placeObj.place;
            dropdown.appendChild(option);
        });

        dropdown.addEventListener("change", function () {
            const selectedPlace = this.value.toLowerCase();
            const selectedVideo = spacePlaces.find(placeObj => placeObj.place.toLowerCase() === selectedPlace);
            if (selectedVideo) {
                const iframe = createIframe(selectedVideo.videoId);
                videoList.innerHTML = "";
                videoList.appendChild(iframe);
            }
        });

        videoList.appendChild(dropdown);
    }
    // For general search, iterate through videoIds
    else {
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