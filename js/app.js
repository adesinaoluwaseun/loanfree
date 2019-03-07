const myLoan = new Loan(5000, 50, 3);

myLoan.calculateLoanPayment();
console.log(myLoan.table);



// vaiable
const loanBudget = document.getElementById('loan-budget');




// 



// Event Listeners
eventListeners();

function eventListeners(){
    // form Submission
    document.querySelector('#form').addEventListener('submit', setCalValue);
}

// Function
function setCalValue(e){
    e.preventDefault();

    // read the text area value
    const loanAmount = document.getElementById('loanAmount').value;
    const interestRate = document.getElementById('interestRate').value;
    const loanPeriod = document.getElementById('loanPeriod').value;
    // const amount = document.getElementById('periodType');
    
    
    
    // //  create a new html <li>
    // const ul = document.createElement('ul');
    // ul.textContent = amount;
    // loanBudget.appendChild(ul);
    // // Read all the document in the text areas
    
    
}


