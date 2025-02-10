window.addEventListener("load", () => {
    document.getElementById("empForm").addEventListener("submit", (e) => {
        e.preventDefault();
        const fields = ["id", "name", "ext", "email", "department"];
        const data = fields.reduce((acc, field) => ({ ...acc, [field]: e.target[field].value }), {});
        console.log(`ID: ${data.id}\nName: ${data.name}\nExtension: ${data.ext}\nEmail: ${data.email}\nDepartment: ${data.department}`);
    });
});
