const images = [
    { src: "https://picsum.photos/id/1015/600/400", caption: "Mountain View" },
    { src: "https://picsum.photos/id/1016/600/400", caption: "Cityscape" },
    { src: "https://picsum.photos/id/1018/600/400", caption: "Sunset Lake" },
    { src: "https://picsum.photos/id/1020/600/400", caption: "Snowy Forest" },
    { src: "https://picsum.photos/id/1021/600/400", caption: "Beach" },
    { src: "https://picsum.photos/id/1022/600/400", caption: "Hillside" },
    { src: "https://picsum.photos/id/1024/600/400", caption: "Old Barn" },
    { src: "https://picsum.photos/id/1025/600/400", caption: "Cute Puppy" },
    { src: "https://picsum.photos/id/1027/600/400", caption: "Golden Fields" },
    { src: "https://picsum.photos/id/1031/600/400", caption: "Forest Path" },
    { src: "https://picsum.photos/id/1035/600/400", caption: "Boat Ride" },
    { src: "https://picsum.photos/id/1039/600/400", caption: "Evening Sky" },
    { src: "https://picsum.photos/id/1040/600/400", caption: "Vintage Car" },
    { src: "https://picsum.photos/id/1043/600/400", caption: "Farm Animals" },
    { src: "https://picsum.photos/id/1044/600/400", caption: "Calm River" },
    { src: "https://picsum.photos/id/1045/600/400", caption: "Rustic Window" },
    { src: "https://picsum.photos/id/1049/600/400", caption: "Red Leaf" },
    { src: "https://picsum.photos/id/1050/600/400", caption: "Bridge Over Fog" },
    { src: "https://picsum.photos/id/1051/600/400", caption: "Mountain Cabin" },
    { src: "https://picsum.photos/id/1052/600/400", caption: "Desert Rock" },
    { src: "https://picsum.photos/id/1053/600/400", caption: "Forest Fog" },
    { src: "https://picsum.photos/id/1055/600/400", caption: "Pine Trees" },
    { src: "https://picsum.photos/id/1060/600/400", caption: "Bike in Alley" },
    { src: "https://picsum.photos/id/1062/600/400", caption: "Lone Tree" },
    { src: "https://picsum.photos/id/1063/600/400", caption: "Cottage Garden" },
    { src: "https://picsum.photos/id/1064/600/400", caption: "Mountain River" },
    { src: "https://picsum.photos/id/1065/600/400", caption: "Stone House" },
    { src: "https://picsum.photos/id/1066/600/400", caption: "Open Field" },
    { src: "https://picsum.photos/id/1067/600/400", caption: "Island Horizon" },
    { src: "https://picsum.photos/id/1068/600/400", caption: "Foggy Dock" },
    { src: "https://picsum.photos/id/1070/600/400", caption: "Colorful Sunrise" },
    { src: "https://picsum.photos/id/1071/600/400", caption: "Glass Reflections" },
    { src: "https://picsum.photos/id/1072/600/400", caption: "Old Tower" },
    { src: "https://picsum.photos/id/1073/600/400", caption: "Autumn Walk" },
    { src: "https://picsum.photos/id/1074/600/400", caption: "Rocky Shore" },
    { src: "https://picsum.photos/id/1075/600/400", caption: "Snowy Mountains" },
];
  
const gallery = document.getElementById("gallery");
const searchInput = document.getElementById("searchInput");

function renderGallery(filter = "") {
    gallery.innerHTML = "";
    const filteredImages = images.filter(img =>
        img.caption.toLowerCase().includes(filter.toLowerCase())
    );
    filteredImages.forEach((img, index) => {
        const image = document.createElement("img");
        image.src = img.src;
        image.alt = img.caption;
        image.dataset.index = index;
        image.addEventListener("click", () => openModal(index, filteredImages));
        gallery.appendChild(image);
    });
    currentImageList = filteredImages;
}

const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const captionText = document.getElementById("caption");
const closeBtn = document.getElementById("closeBtn");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
  
let currentIndex = 0;
let currentImageList = images;
  
function openModal(index, list) {
    currentIndex = index;
    currentImageList = list;
    modal.style.display = "block";
    updateModal();
}

closeBtn.onclick = () => {
    modal.style.display = "none";
};

prevBtn.onclick = () => {
    currentIndex = (currentIndex - 1 + currentImageList.length) % currentImageList.length;
    updateModal();
};
  
nextBtn.onclick = () => {
    currentIndex = (currentIndex + 1) % currentImageList.length;
    updateModal();
};

function updateModal() {
    modalImg.src = currentImageList[currentIndex].src;
    captionText.textContent = currentImageList[currentIndex].caption;
}

window.onclick = function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
};

searchInput.addEventListener("input", () => {
    const value = searchInput.value.trim();
    renderGallery(value);
});

renderGallery();  