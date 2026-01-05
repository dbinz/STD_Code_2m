const url =
  "https://dogapi.dog/api/v2/breeds/036feed0-da8a-42c9-ab9a-57449b530b13";
const mainHeaderName = document.querySelector(".main-header-name");
const mainContainer = document.querySelector(".main-container");
const h1Element = (name) => {
  return `
    <h1>${name}</h1>`;
};

const contentSidebar = (
  description,
  life,
  male_weight,
  hypoallergenic,
  relationships
) => {
  return `
  <div class="main-container-sidebar">
                <div class="main-container-sidebar-introduction">
                    <p>${description}</p>
                </div>
                <div class="main-container-sidebar-info">
                    <div class="main-container-sidebar-info-detail">
                        <div class="main-container-sidebar-info-detail-icon">
                            <img src="./IMG/heart-rate_4533479.png">
                            <p>Life Span:</p>
                        </div>
                        <p>${life} Years</p>
                    </div>
                    <div class="main-container-sidebar-info-detail">
                        <div class="main-container-sidebar-info-detail-icon">
                            <img src="./IMG/balance_676306.png">
                            <p>Weight:</p>
                        </div>
                        <p>${male_weight} kg (Male & Female)</p>
                    </div>
                    <div class="main-container-sidebar-info-detail">
                        <div class="main-container-sidebar-info-detail-icon">
                            <img src="./IMG/shield_559394.png">
                            <p>Hypoallergenic:</p>
                        </div>
                        <p>${hypoallergenic}</p>
                    </div>
                    <div class="main-container-sidebar-info-detail">
                        <div class="main-container-sidebar-info-detail-icon">
                            <img src="./IMG/baidu_2626303.png">
                            <p>Group:</p>
                        </div>
                        <p>${relationships}</p>
                    </div>
                </div>
                <div class="main-container-sidebar-info-more">
                    <div class="main-container-sidebar-info-more-item">
                        <img src="./IMG/idea_6206128.png">
                        <p>Intelligent</p>
                    </div>
                    <div class="vertical-line"></div>
                    <div class="main-container-sidebar-info-more-item">
                        <img src="./IMG/lighting_2731636.png">
                        <p>Energetic</p>
                    </div>
                    <div class="vertical-line"></div>
                    <div class="main-container-sidebar-info-more-item">
                        <img src="./IMG/heart_214309.png">
                        <p>Intelligent</p>
                    </div>
                    <div class="vertical-line"></div>
                    <div class="main-container-sidebar-info-more-item">
                        <img src="./IMG/pawprint_2844559.png">
                        <p>Small Game Hunter</p>
                    </div>
                </div>
            </div>
            <div class="main-container-img">
                <img src="https://img.lovepik.com/bg/20231206/Adorable-Dog-Posing-Against-a-Stunning-Pink-Clouds-Backdrop_2450468_wh1200.png"
                    alt="Image Dog" style="width: 100%; height: 100%; object-fit: cover;">
            </div>`;
};
const fetchDog = async () => {
  const response = await fetch(url);
  response.json().then((data1) => {
    const dataH1 = h1Element(data1.data.attributes.name);
    mainHeaderName.innerHTML = dataH1;
  });
};

fetchDog();

const dogDetail = async () => {
  const response = await fetch(url);
  response.json().then((data2) => {
    let soSanh = "";
    if (data2.data.attributes.hypoallergenic == true) {
      soSanh = "Yes";
    } else {
      soSanh = "No";
    }

    const dataSidebar = contentSidebar(
      data2.data.attributes.description,
      data2.data.attributes.life.min + " - " + data2.data.attributes.life.max,
      data2.data.attributes.male_weight.min +
        " - " +
        data2.data.attributes.male_weight.max,
      soSanh, // data2.data.attributes.hypoallergenic ==  true ? "Yes" : "No"
      `Toy ${data2.data.relationships.group.data.type}`
    );
    mainContainer.innerHTML = dataSidebar;
  });
};
dogDetail();
