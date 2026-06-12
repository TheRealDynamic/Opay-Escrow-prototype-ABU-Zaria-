let transactions = [];

function login() {
  let user = document.getElementById("username").value;

  if (user.trim() === "") {
    alert("Enter username");
    return;
  }

  document.getElementById("loginPage").classList.remove("active");
  document.getElementById("dashboard").classList.add("active");
}

function logout() {
  document.getElementById("dashboard").classList.remove("active");
  document.getElementById("loginPage").classList.add("active");
}

function createEscrow() {
  let buyer = document.getElementById("buyer").value;
  let seller = document.getElementById("seller").value;
  let amount = document.getElementById("amount").value;

  if (!buyer || !seller || !amount) {
    alert("Fill all fields");
    return;
  }

  let transaction = {
    buyer,
    seller,
    amount,
    status: "Pending"
  };

  transactions.push(transaction);
  renderTransactions();
}

function renderTransactions() {
  let list = document.getElementById("transactions");
  list.innerHTML = "";

  transactions.forEach((t, index) => {
    list.innerHTML += `
      <li>
        <b>${t.buyer}</b> ↔ <b>${t.seller}</b><br/>
        ₦${t.amount} - ${t.status}
      </li>
    `;
  });
}
