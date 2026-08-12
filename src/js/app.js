// 여기에 웹페이지의 동작을 작성해보세요.
// 예: 버튼 클릭 처리, 화면의 내용 변경, 서버에서 데이터 불러오기

async function getDummyData() {
  const response = await fetch("/api");
  const data = await response.json();

  console.log(data);
}

getDummyData();

window.addEventListener("load", async ()=> {
  const response = await fetch("/api");
  const data = await response.json();

  const result = document.getElementById("result")

  result.innerHTML = `
    <p>${data.title}</p>
    <p>${data.description}</p>
  `
})