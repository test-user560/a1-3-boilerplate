const counterButton = document.querySelector(".counter__button");
const counterValue = document.querySelector(".counter__value");
const pokemonSelect = document.querySelector(".pokemon__select");
const pokemonErrorButton = document.querySelector(".pokemon__error-button");
const pokemonImage = document.querySelector(".pokemon__image");
const pokemonName = document.querySelector(".pokemon__name");
const pokemonLoading = document.querySelector(".pokemon__loading--image");
const pokemonNameLoading = document.querySelector(".pokemon__loading--name");

// 버튼을 클릭하면 현재 숫자를 읽고 1을 더해 화면에 표시합니다.
//
// AI에게 이렇게 요청해볼 수 있어요.
// "사용자가 버튼을 클릭하면 현재 숫자에 1을 더하고 싶어.
// 바뀐 숫자가 화면에 표시되도록 JavaScript를 작성해줘."
counterButton.addEventListener("click", () => {
  const currentValue = Number(counterValue.innerText);
  counterValue.innerText = currentValue + 1;
});

// 포켓몬을 고르면 바로 요청하고, 받은 이름과 이미지를 화면에 표시합니다.
// 요청 중에는 선택창과 오류 버튼을 비활성화하고 스켈레톤 UI를 보여줍니다.
//
// AI에게 이렇게 요청해볼 수 있어요.
// "사용자가 select에서 포켓몬을 고르면 PokeAPI에서 포켓몬 정보를 가져오고 싶어.
// 가져온 이름과 이미지를 화면에 보여주고, 데이터를 불러오는 동안에는 스켈레톤 UI를 표시해줘.
// 요청 중에는 선택창을 비활성화해줘."
async function getPokemon(showError = false) {
  pokemonSelect.disabled = true;
  pokemonErrorButton.disabled = true;
  pokemonImage.hidden = true;
  pokemonLoading.hidden = false;
  pokemonName.hidden = true;
  pokemonNameLoading.hidden = false;
  pokemonName.classList.remove("pokemon__name--error");

  try {
    // 에러 상태를 직접 확인할 수 있도록 존재하지 않는 포켓몬 주소로 요청합니다.
    const requestedPokemonId = showError ? "not-found" : pokemonSelect.value;

    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${requestedPokemonId}`);

    if (!response.ok) {
      throw new Error("포켓몬 정보를 가져오지 못했습니다.");
    }

    const data = await response.json();
    pokemonImage.src = data.sprites.front_default;
    pokemonImage.alt = `${data.name} 이미지`;
    pokemonImage.hidden = false;
    pokemonName.hidden = false;
    pokemonName.innerText = data.name;
  } catch {
    pokemonName.hidden = false;
    pokemonName.classList.add("pokemon__name--error");
    pokemonName.innerText = "정보를 가져오지 못했어요. 다시 시도해보세요.";
  } finally {
    pokemonLoading.hidden = true;
    pokemonNameLoading.hidden = true;
    pokemonSelect.disabled = false;
    pokemonErrorButton.disabled = false;
  }
}

pokemonSelect.addEventListener("change", () => getPokemon());
pokemonErrorButton.addEventListener("click", () => getPokemon(true));
