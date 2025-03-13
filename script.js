document.addEventListener("DOMContentLoaded", function () {
    const ctx1 = document.getElementById("productsChart").getContext("2d");
    const ctx2 = document.getElementById("resourcesChart").getContext("2d");

    new Chart(ctx1, {
        type: "bar",
        data: {
            labels: ["Claim Approved", "Claim Processed", "Claim Remaining"],
            datasets: [{
                label: "Percent Complete",
                data: [65, 30, 10],
                backgroundColor: "#02C4B1"
            }]
        }
    });

    new Chart(ctx2, {
        type: "bar",
        data: {
            labels: ["Claim A", "Claim B", "Claim C"],
            datasets: [{
                label: "Resources Used",
                data: [4, 3, 6],
                backgroundColor: "#02C4B1"
            }]
        }
    });
});
