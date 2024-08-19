const url = "http://20.244.56.144/test/register";
const data = {
    companyName: 'svce_college',
    clientID: '1ca03cd7-0944-48b7-9e93-5e4ef6b26f7f',
    clientSecret: 'ndKbpfxgmsYRyOXd',
    ownerName: 'Madhumathi',
    ownerEmail: '2021cs0346@svce.ac.in',
    rollNo: '84'
    }

fetch(url, {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer your_token"
    },
    body: JSON.stringify(data)
})
.then(response => response.json())
.then(data => console.log("Registration successful:", data))
.catch(error => console.error("Error:", error));
