const button = document.querySelector("button");
const input = document.querySelector("input");
const p = document.querySelectorAll("p");
console.log(p);

const provideInfo = (e) => {
  e.preventDefault();
  const nameInput = input.value;
  console.log(nameInput);

  amIpartyMember(nameInput);
  guestsPlusOne();
  totalAmountofGuests();
  getMeme();
};

button.addEventListener("click", provideInfo);

const urlParty = "https://test-api-faker.herokuapp.com/vigi-33/party";

const amIpartyMember = async (name) => {
  try {
    const resolve = await fetch(urlParty);
    const data = await resolve.json();
    const filteredArray = data.filter((item) => item.name == name);
    console.log(filteredArray);
    if (filteredArray.length === 0) {
      p[0].innerText = "You are not in the party list";
      p[1].innerText = "";
    } else {
      p[0].innerText = `You name is ${filteredArray[0].name}`;
      p[1].innerText = "You are ViP";
    }
  } catch (error) {
    console.log(error);
  }
};
// amIpartyMember("Povilas");

const urlWeddingList = "https://test-api-faker.herokuapp.com/vigi-33/wedding";

const guestsPlusOne = async () => {
  try {
    const resolve = await fetch(urlWeddingList);
    const data = await resolve.json();
    const plusOne = data.filter((item) => item.plusOne == true);

    p[2].innerText = `Amount of attendees who selected plus on option: ${plusOne.length}`;
    console.log(`Amount of plusOne: ${plusOne.length}`);
  } catch (error) {
    console.log(error);
  }
};

// guestsPlusOne();

const isAttending = async () => {
  try {
    const resolve = await fetch(urlWeddingList);
    const data = await resolve.json();
    console.log(data);

    const attendingSum = data.filter((item) => item.attending == true);
    console.log(`Amount of attending: ${attendingSum.length}`);
  } catch (error) {
    console.log(error);
  }
};

isAttending();

const totalAmountofGuests = async () => {
  try {
    const resolve = await fetch(urlWeddingList);
    const data = await resolve.json();
    const attendingSum = data.filter((item) => item.attending == true);
    const plusonefromAttendence = attendingSum.filter(
      (item) => item.plusOne == true
    );
    const total = attendingSum.length + plusonefromAttendence.length;
    p[3].innerText = `Amount of total attendess: ${total}`;
    console.log(`Total guest list ${total}`);
  } catch (error) {
    console.log(error);
  }
};
// totalAmountofGuests();

const urlMeme = "https://test-api-faker.herokuapp.com/vigi-33/meme";

const getMeme = async () => {
  try {
    const resolve = await fetch(urlMeme);
    const data = await resolve.json();
    const img = document.createElement("img");
    img.setAttribute("src", `${data.imgUrl}`);
    document.body.append(img);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
// getMeme();
