const apiUrl = "https://4ytjbozp47.execute-api.us-east-1.amazonaws.com/mood"; // <- change this

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
      alert("Mood saved successfully!");
    } catch (err) {
      console.error("Error saving mood:", err);
      alert("Failed to save mood.");
    }
  });
});
