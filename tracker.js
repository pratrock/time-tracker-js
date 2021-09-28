import data from "./data.json" assert { type: "json" };
console.log(data);
const weekAr = data.map((data) => {
  console.log(data);
  const {
    timeframes: { weekly },
  } = data;
  const { title } = data;
  return {
    weekly,
    title,
  };
});
const dailyAr = data.map((data) => {
  console.log(data);
  const {
    timeframes: { daily },
  } = data;
  const { title } = data;
  return {
    daily,
    title,
  };
});

const monthlyAr = data.map((data) => {
  console.log(data);
  const {
    timeframes: { monthly },
  } = data;
  const { title } = data;
  return { monthly, title };
});
console.log("week array", weekAr);
console.log("monthly array", monthlyAr);
console.log("daily array", dailyAr);

const classFix = (className) => {
  return className
    .split("")
    .map((w) => (w == " " ? "-" : w))
    .join("");
};

const addImage = (className) => {
  let image;
  switch (className) {
    case "work":
      image = "images\\icon-work.svg";
      break;
    case "play":
      image = "images\\icon-play.svg";
      break;
    case "study":
      image = "images\\icon-study.svg";
      break;
    case "exercise":
      image = "images\\icon-exercise.svg";
      break;
    case "social":
      image = "images\\icon-social.svg";
      break;
    case "self-care":
      image = "images\\icon-self-care.svg";
      break;
  }

  return image;
};

window.addEventListener("load", showDefault);
function showDefault() {
  var data = document.querySelector(`.tab-panel[data-content="${2}"]`);
  data.innerHTML = weekAr
    .map((x) => {
      return `
      <div class="schedule-card">
          <div class="card-container ${classFix(x.title.toLowerCase())}">
          <img src="${addImage(
            classFix(x.title.toLowerCase())
          )}" height="67px" class="scheduler-img"/>
          </div>
          <div class="schedule-container">
          <div class="left-face">
          <p class="left-title">${x.title}</p>
        <p class="left-current">${x.weekly.current}hrs</p>
        </div>
        <div class="right-face">
        <img src="images\\icon-ellipsis.svg" class="ellipsis-img"/>
        <p class="prev">Last Week - ${x.weekly.previous}hrs</p>
        </div>
        </div>
        </div>
    
    `;
    })
    .join(" ");
  data.classList.add("show-content");
}

const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".tab-panel");

tabs.forEach((tab) =>
  tab.addEventListener("click", function () {
    tabs.forEach((tab) => tab.classList.remove("active"));
    contents.forEach((c) => c.classList.remove("show-content"));

    const contentId = this.dataset.content;
    console.log(contentId);

    this.classList.add("active");

    var doc = document.querySelector(`.tab-panel[data-content="${contentId}"]`);
    if (contentId == 1) {
      doc.innerHTML = dailyAr
        .map((x) => {
          return `
          <div class="schedule-card">
          <div class="card-container ${classFix(x.title.toLowerCase())}">
          <img src="${addImage(
            classFix(x.title.toLowerCase())
          )}" class="scheduler-img" height="67px"/>
          </div>
          <div class="schedule-container">
          <div class="left-face">
          <p class="left-title">${x.title}</p>
        <p class="left-current">${x.daily.current}hrs</p>
        </div>
        <div class="right-face">
        <img src="images\\icon-ellipsis.svg" class="ellipsis-img"/>
        <p class="prev">Last Week - ${x.daily.previous}hrs</p>
        </div>
        </div>
        </div>
        
        `;
        })
        .join(" ");
    } else if (contentId == 2) {
      doc.innerHTML = weekAr
        .map((x) => {
          return `
          <div class="schedule-card">
          <div class="card-container ${classFix(x.title.toLowerCase())}">
          <img src="${addImage(
            classFix(x.title.toLowerCase())
          )}" class="scheduler-img" height="67px"/>
          </div>
          <div class="schedule-container">
          <div class="left-face">
          <p class="left-title">${x.title}</p>
        <p class="left-current">${x.weekly.current}hrs</p>
        </div>
        <div class="right-face">
        <img src="images\\icon-ellipsis.svg" class="ellipsis-img"/>
        <p class="prev">Last Week - ${x.weekly.previous}hrs</p>
        </div>
        </div>
        </div>
       
        `;
        })
        .join(" ");
    } else {
      doc.innerHTML = monthlyAr
        .map((x) => {
          return `
          <div class="schedule-card">
          <div class="card-container ${classFix(x.title.toLowerCase())}">
          <img src="${addImage(
            classFix(x.title.toLowerCase())
          )}" class="scheduler-img" height="67px"/>
          </div>
          <div class="schedule-container">
          <div class="left-face">
          <p class="left-title">${x.title}</p>
        <p class="left-current">${x.monthly.current}hrs</p>
        </div>
        <div class="right-face">
        <img src="images\\icon-ellipsis.svg" class="ellipsis-img" />
        <p class="prev">Last Week - ${x.monthly.previous}hrs</p>
        </div>
        </div>
        </div>
       
        `;
        })
        .join(" ");
    }

    doc.classList.add("show-content");
  })
);
