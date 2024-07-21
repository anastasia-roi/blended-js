// You need to calculate amount of tip to give in a restaurant/cafe.
// 	Workflow:
// 1.	User inputs check summ. (Use “prompt” function).
// 2.	User inputs tip percentage. (Use “prompt” function)
// 3. For cancelled input show “Canceled.”
// 4.	You need to validate the input data: both values should be numbers,  check summ can’t be
// a negative number, percentage can’t be negative and bigger than 100.
// 5.	If input data isn’t valid, you should show message “Invalid input data”. (Use “alert” function).
// 6.	You need to calculate tip amount and total sum to pay.
// 7.	Show message: (example). Use ”alert” function
// Check summ: 200
// Tip: 15%
// Tip amount: 30
// Total sum to pay:  230

const checkSum = prompt(`Input check sum, please.`); 
const tip = prompt(`Input % of the tips, plrase.`);
if (checkSum === null || tip === null) {
    alert(`Canceled.`);
} else {
    const parsedSum = Number.parseFloat(checkSum);
    const parsedTip = Number.parseFloat(tip);
    if (Number.isNaN(parsedSum) || Number.isNaN(parsedTip) || parsedSum < 0 || parsedTip > 100 || parsedTip < 0)  {
        alert(`Invalid data.`);
    } else {
        const tipSum = ((parsedSum * parsedTip) / 100);
        const totalSum = tipSum + parsedSum;
        const message = `Check summ: ${parsedSum}
Tip: ${parsedTip}%
Tip amount: ${tipSum.toFixed(2)}
Total sum to pay: ${totalSum.toFixed(2)} `;
        alert(message);
    }
        
   // console.log(parsedSum);
        
        
}
    
