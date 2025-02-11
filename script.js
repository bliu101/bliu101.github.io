const API_BASE_URL = "https://bliu101-github-io.onrender.com"; // Replace with actual Render backend URL

async function generateQuiz() {
    const num_q = document.getElementById("num_q").value;
    const unit_num = document.getElementById("unit_num").value;

    if (!num_q || !unit_num) {
        alert("Please enter valid inputs.");
        return;
    }

    const requestBody = { num_q, unit_num };

    try {
        const response = await fetch(`${API_BASE_URL}/bliu101.github.io`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(requestBody),
        });

        const data = await response.json();
        document.getElementById("quizOutput").textContent = JSON.stringify(data, null, 4);
    } catch (error) {
        document.getElementById("quizOutput").textContent = "Error generating quiz.";
    }
}
