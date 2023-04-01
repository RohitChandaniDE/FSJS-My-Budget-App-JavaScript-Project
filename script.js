let calculateBudget = () => {
    let income = Number(document.getElementById("income").value);
	let expenses = Number(document.getElementById("expenses").value);
    let product = document.getElementById("productName").value;

	let budget = income - expenses;

	document.getElementById("budgetDisplay").innerHTML = "Available budget: $" + budget;
};

let reset = () => {
    document.getElementById("income").value = "";
	document.getElementById("expenses").value = "";
	document.getElementById("budgetDisplay").innerHTML = "";
};


