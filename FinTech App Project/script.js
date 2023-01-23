var homeLink = document.getElementById("home-link");
var aboutLink = document.getElementById("about-link");
var transactionLink = document.getElementById("transaction-link");
var loginLink = document.getElementById("login-link");
var signupLink = document.getElementById("signup-link");
var cryotoLink = document.getElementById("crypto-link");


var home = document.getElementById("home");
var about = document.getElementById("about");
var transactionSystem = document.getElementById("transaction-system");
var login = document.getElementById("login");
var signup = document.getElementById("signup");
var budget = document.getElementById("budget");

homeLink.addEventListener("click", function() {
    home.style.display = "block";
    about.style.display = "none";
    transactionSystem.style.display = "none";
    login.style.display = "none";
    signup.style.display = "none";

});


transactionLink.addEventListener("click", function() {
    home.style.display = "none";
    about.style.display = "none";
    transactionSystem.style.display = "block";
    login.style.display = "none";
    signup.style.display = "none";
});

loginLink.addEventListener("click", function() {
    home.style.display = "none";
    about.style.display = "none";
    transactionSystem.style.display = "none";
    login.style.display = "block";
    signup.style.display = "none";
});

signupLink.addEventListener("click", function() {
    home.style.display = "none";
    about.style.display = "none";
    transactionSystem.style.display = "none";
    login.style.display = "none";
    signup.style.display = "block";
});



// Code that I reaserched 
window.onload = function() {
    document.getElementById("home").style.display = "block";
}

var navLinks = document.querySelectorAll("ul a");

navLinks.forEach(function(link) {
  link.addEventListener("click", function() {
    link.classList.add("animation-class");
    link.classList.add("clicked")
  });
});
const aboutSection = document.querySelector('#about');
const aboutText = document.querySelectorAll('#about p, #about h1');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.intersectionRatio > 0) {
      aboutText.forEach(text => text.classList.add('slide-in-left'));
    }
  });
});
observer.observe(aboutSection);

var transactionsForm = document.getElementById("transactions-form");
transactionsForm.addEventListener("submit", function(event) {
    event.preventDefault();

    var name = document.getElementById("name").value;
    var recipientName = document.getElementById("recipient-name").value;
    var bankId = document.getElementById("bank-id").value;
    var amount = document.getElementById("amount").value;

    var queryString = "?name=" + name + "&recipientName=" + recipientName + "&bankId=" + bankId + "&amount=" + amount;
    window.location.href = "receipt.html" + queryString;
});


// Get the budget form, advice container and modal
const budgetForm = document.getElementById("budget-form");
const adviceContainer = document.getElementById("advice-container");
const adviceModal = document.getElementById("advice-modal");
const closeButton = document.getElementsByClassName("close-button")[0];
const budgetLink = document.getElementById("budget-link");
const budgetSection = document.getElementById("budget");
const cryptoSection = document.getElementById("crypto");
const sections = document.querySelectorAll("section");

function handleNavClick(event) {
  sections.forEach(section => {
    section.style.display = "none";
  });
  const clickedNav = event.currentTarget;
  const sectionId = clickedNav.getAttribute("href");
  const sectionToShow = document.querySelector(sectionId);
  sectionToShow.style.display = "block";
}

budgetLink.addEventListener("click", handleNavClick);
homeLink.addEventListener("click", handleNavClick);
transactionLink.addEventListener("click", handleNavClick);
loginLink.addEventListener("click", handleNavClick);
signupLink.addEventListener("click", handleNavClick);
cryotoLink.addEventListener("click",handleNavClick);



budgetForm.addEventListener("submit", function(event) {
  event.preventDefault();
  const income = budgetForm.income.value;
  const expenses = budgetForm.expenses.value;
  const savings = budgetForm.savings.value;
  const savingsRate = (savings / (income - expenses)) * 100;
  let advice = "";
  if (savingsRate < 10) {
    advice += "You should try to save more of your income.<br>";
    advice += "Consider setting a savings goal and creating a budget to help you reach it. <br>";
    advice += "You could also look for ways to increase your income. <br>";
  } else if (savingsRate >= 10 && savingsRate < 20) {
    advice += "You're doing a good job saving, but you could try to save more.<br>";
    advice += "Look for ways to reduce expenses or increase income. <br>";
    advice += "You could also consider opening a high yield savings account to earn more interest on your savings. <br>";
  } else {
    advice += "Great job saving! Keep up the good work.<br>";
    advice += "You could consider investing your savings for long term growth. <br>";
    advice += "You may also want to consider setting even more aggressive savings goals. <br>";
  }
  if(income <= expenses){
    advice += "It looks like your expenses are higher than your income, you should try to reduce expenses or increase income to have a positive cash flow. <br>";
    advice += "You could also consider cutting out non-essential expenses or finding ways to increase your income. <br>";
  }
  if(income <= 2000){
    advice += "It looks like your income is low, you should consider ways to increase your income or reduce expenses to have a more comfortable life. <br>";
    advice += "You could look into getting a higher paying job, starting a side business, or negotiating a raise.<br>";
  }
  if(savings <= 0){
    advice += "It looks like you are not saving any money, you should consider setting a savings goal and creating a budget to help you reach it. <br>";
    advice += "You could also look into automating your savings by setting up a direct deposit to a savings account. <br>";
  }
  if(savingsRate > 30){
    advice += "You are saving a very high percentage of your income, you should consider taking some of your savings and investing it for long-term growth. <br>";
  }
  if(expenses <= 100){
    advice += "It seems that your expenses are not sufficient to cover the basic necessities for daily living.";
  }
  adviceContainer.innerHTML = advice;
  document.getElementById("close-button").style.display = "block";
});


document.getElementById("close-button").addEventListener("click", function() {
  adviceContainer.innerHTML = "";
  document.getElementById("close-button").style.display = "none";
});

document.getElementById("close-button").addEventListener("click", function() {
  // Clear the stored input values
  sessionStorage.removeItem("income");
  sessionStorage.removeItem("expenses");
  sessionStorage.removeItem("savings");
  // Or reset the form inputs
  budgetForm.reset();
  // Or set the input values to empty strings
  budgetForm.income.value = "";
  budgetForm.expenses.value = "";
  budgetForm.savings.value = "";
});


const cryptoForm = document.getElementById("crypto-form");
cryptoForm.addEventListener("submit", function(event) {
  event.preventDefault();
  // Get the form values
  const cryptoType = cryptoForm.cryptoType.value;
  const purchaseAmount = cryptoForm.purchaseAmount.value;
  const walletAddress = cryptoForm.walletAddress.value;
  // Simulate the purchase
  if(purchaseAmount > 0) {
    //Create a new object to store the transaction information
    const transactionInfo = {
      cryptoType: cryptoType,
      purchaseAmount: purchaseAmount,
      walletAddress: walletAddress
    };
    //stringify the object to store it in the session storage
    sessionStorage.setItem("transactionInfo", JSON.stringify(transactionInfo));
    //Redirect to the transaction receipt page
    window.location.href = "transactionreceipt.html";
  } else {
    alert("Invalid purchase amount. Please enter a valid amount.");
  }
}); 

