console.log("script loaded");
const endPoint = "https://opendata.rdw.nl/resource/cgqw-pfbp.json";
getData(endPoint);

// Makes the connection with the api endpoint
async function getData(url) {
  const res = await fetch(url);
  console.log("response", res);

  const data = await res.json();
  console.log(data[0]);
  cleanDates(data);
  cleanLocation(data);
}

// This function makes the date a readable format
function cleanDates(dataArray) {
  dataArray.forEach((dataRow) => {
    const getYears = dataRow.startdatesellingpoint.slice(0, 4);
    const getMonths = dataRow.startdatesellingpoint.slice(4, 6);
    const getDays = dataRow.startdatesellingpoint.slice(6, 8);

    const date = `${getDays}-${getMonths}-${getYears}`;
    // console.log(date);

    // Count the amount of values after a specific year
    if (getYears > 2018) {
      console.log("Aantal values boven 2018");
    }
  });
}

// This function devide the location values
function cleanLocation(dataArray) {
  dataArray.forEach((dataRow) => {
    const latitude = dataRow.location.latitude;
    const longitude = dataRow.location.longitude;

    const coordinates = `${latitude} - ${longitude}`;
    // console.log(coordinates);
  });
}
