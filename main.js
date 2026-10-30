const list = document.querySelector("#list");
const add = document.querySelector("#add-btn");
const input = document.querySelector("#userInput");

add.addEventListener("click", () => {
	const userInput = input.value;
	if (userInput.trim() === "") {
		return;
	}

	const uniqueId = "input-" + Date.now();

	let item = document.createElement("li");
	item.innerHTML = `<input id="${uniqueId}" type="checkbox"/><label for="${uniqueId}"></label>`;

	let newItem = item.querySelector("label");
	newItem.textContent = userInput;

	list.appendChild(item);

	input.value = "";
	input.focus();
});
