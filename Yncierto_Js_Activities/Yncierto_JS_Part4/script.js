const btnCalc = document.getElementById("btnCalc");
const message = document.getElementById("message");

btnCalc.addEventListener("click", () => {
    const startDate = new Date(document.getElementById("startDate").value);
    const endDate = new Date(document.getElementById("endDate").value);

    const difference = endDate - startDate;
    const difInDays = difference/(1000*60*60*24);
    message.textContent = "The difference is "+ difInDays+" days.";
});