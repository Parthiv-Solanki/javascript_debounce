const inputElement = document.getElementById("debounceInput");
const searchValue = document.querySelector("p");

const debounce = (func, time) => {
  let searchTime;
  return (e) => {
    clearTimeout(searchTime);
    searchTime = setTimeout(() => func(e), time);
  };
};

const callApi = (e) => {
  console.log("callApi", e.target.value);
  searchValue.innerText = e.target.value;
};
const debouncedCallApi = debounce(callApi, 500);

inputElement.addEventListener("input", debouncedCallApi);
