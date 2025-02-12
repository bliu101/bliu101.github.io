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
        const response = await fetch(`${API_BASE_URL}/generate_quiz`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(requestBody),
        });

        const data = await response.json();

        // Format response text by replacing newline characters with <br>
        const formattedResponse = data.response.replace(/\n/g, "<br>");
        const formattedContext = data.rag_context.replace(/\n/g, "<br>");

        document.getElementById("quizOutput").innerHTML = `
            <h3>Quiz Generated:</h3>
            <p>${formattedResponse}</p>
            <h3>Additional Context:</h3>
            <p>${formattedContext}</p>
        `;
        //document.getElementById("quizOutput").textContent = JSON.stringify(data, null, 4);
    } catch (error) {
        document.getElementById("quizOutput").textContent = "Error generating quiz.";
    }
}
