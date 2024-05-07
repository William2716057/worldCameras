//Video IDs
const videoIds = [
    "VIDEO_ID_1",
    "3ottn7kfRuc",
    "mr41cCpwszE",
    "f6npxyqfXAI", 
    //continue adding
];

//places in Korea
const koreaPlaces = [
    { place: "Seoul", videoId: "SEOUL_VIDEO_ID" },
    { place: "Gangnam", videoId: "3ottn7kfRuc" },
    { place: "Myeongdong", videoId: "mr41cCpwszE" },
    { place: "Itaewon", videoId: "f6npxyqfXAI" },
    //continue adding
];

function searchVideos() {
    const searchInput = document.getElementById("searchInput").value.toLowerCase();
    const videoList = document.getElementById("videoList");
    videoList.innerHTML = "";
    //search function
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
                const iframe = document.createElement("iframe");
                iframe.width = "560";
                iframe.height = "315";
                iframe.src = `https://www.youtube.com/embed/${selectedVideo.videoId}`;
                iframe.allowFullscreen = true;
                videoList.innerHTML = "";
                videoList.appendChild(iframe);
            }
        });

        videoList.appendChild(dropdown);
    } else {
        videoIds.forEach(videoId => {
            
            if (videoId.toLowerCase().includes(searchInput)) {
                const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;
                const iframe = document.createElement("iframe");
                iframe.width = "560";
                iframe.height = "315";
                iframe.src = `https://www.youtube.com/embed/${videoId}`;
                iframe.allowFullscreen = true;
                videoList.appendChild(iframe);
            }
        });
    }
}