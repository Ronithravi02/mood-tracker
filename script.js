const apiUrl = "https://jsonplaceholder.typicode.com/posts"; // Mock API

document.querySelectorAll('.emoji').forEach(emoji => {
  emoji.addEventListener('click', async () => {
    const mood = emoji.dataset.mood;

    try {
      const res = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ mood }),
      });

      const data = await res.json();
      console.log("Response from mock API:", data);
      alert("Mood saved successfully (mock)!");
    } catch (err) {
      console.error("Error saving mood:", err);
      alert("Failed to save mood.");
    }
  });
});
