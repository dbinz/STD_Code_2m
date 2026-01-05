const mainContent = document.querySelector(".main-content");
const url =
  "https://phish.in/api/v2/shows?page=1&per_page=10&sort=date%3Adesc&audio_status=any&start_date=1970-01-01&end_date=2070-01-01&liked_by_user=false";
const mainContentItem = (img, name, duration, location) => {
  return `
    <div class="main-content-item">
                <div class="main-content-item-img">
                    <img class="img-movie" src="${img}">
                </div>
                <div class="main-content-item-info">
                    <div class="main-content-item-info-name">
                        <p><span>Tên phim: </span>${name}</p>
                    </div>
                    <div class="main-content-item-info-duration">
                        <p><span>Thời lượng: </span>${duration}</p>
                    </div>
                    <div class="main-content-item-info-location">
                        <p><span>Địa điểm: </span>${location}</p>
                    </div>
                </div>
            </div>
    `;
};

const fetchMovie = async () => {
  const response = await fetch(url);
  response.json().then((data) => {
    data.shows.forEach((item) => {
      const dataItem = mainContentItem(
        item.album_cover_url,
        item.tour_name,
        ` ${item.duration} Minutes`,
        item.venue_name
      );
      mainContent.innerHTML += dataItem;
    });
  });
};
fetchMovie();
