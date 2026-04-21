window.onload = async () => {
    const id = sessionStorage.getItem("id");

    if (!id) {
        window.location = "./index.html";
        return;
    }

    try {
        const res = await fetch(`http://127.0.0.1:3000/users/${id}`);
        const user = await res.json();

        document.getElementById("userName").textContent = user.username;
        document.getElementById("userEmail").textContent = user.email || "N/A";

    } catch (error) {
        console.error("Error cargando perfil:", error);
    }
};

document.getElementById("logoutBtn").addEventListener("click", () => {
    sessionStorage.clear();
    window.location = "./index.html";
});