let donors = JSON.parse(localStorage.getItem("donors")) || [];
document.getElementById("donorForm").addEventListener("submit", function(e) {
    e.preventDefault();
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let blood = document.getElementById("bloodGroup").value;
    let city = document.getElementById("city").value;
    let phone = document.getElementById("phone").value;
    let donor = {
        name: name,
        age: age,
        blood: blood,
        city: city,
        phone: phone
    };
    donors.push(donor);
    localStorage.setItem("donors", JSON.stringify(donors));
    alert("✅ Registered Successfully!");
    document.getElementById("donorForm").reset();
});
function searchDonors() {
    let group = document.getElementById("searchGroup").value;
    let resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = "";
    if(group === ""){
        resultsDiv.innerHTML = "<p>Please select a blood group.</p>";
        return;
    }
    let filtered = donors.filter(function(d){
        return d.blood === group;
    });
    if(filtered.length === 0){
        resultsDiv.innerHTML = "<p>❌ No donors found.</p>";
        return;
    }
    filtered.forEach(function(d){
        let div = document.createElement("div");
        div.className = "resultCard";
        div.innerHTML = `
            <p><strong>Name:</strong> ${d.name}</p>
            <p><strong>Age:</strong> ${d.age}</p>
            <p><strong>Blood Group:</strong> ${d.blood}</p>
            <p><strong>City:</strong> ${d.city}</p>
            <p><strong>Phone:</strong> ${d.phone}</p>
            <hr>
        `;
        resultsDiv.appendChild(div);
    });

}
