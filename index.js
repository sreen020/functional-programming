console.log("script loaded");
const endPoint = "https://opendata.rdw.nl/resource/cgqw-pfbp.json";

getData(endPoint);

async function getData(url) {
  const res = await fetch(url);
  console.log("response", res);

  const data = await res.json();
  cleanDates(data);

  const uniqueIds = listUnique(data);
}

function cleanDates(dataArray) {
  dataArray.forEach((dataRow) => {
    const getYears = dataRow.startdatesellingpoint.slice(0, 4);
    const getMonths = dataRow.startdatesellingpoint.slice(4, 6);
    const getDays = dataRow.startdatesellingpoint.slice(6, 8);

    const date = `${getDays}-${getMonths}-${getYears}`;
    // console.log(date);

    if (getYears > 2018) {
      console.log("Aantal values boven 2018");
    }
  });
}

function listUnique(dataArray) {
  let uniqueArray = [];
  dataArray.map((item) => {
    if (uniqueArray.indexOf(item) == -1) {
      uniqueArray.push(item);
    }
  });
  return uniqueArray;
}
