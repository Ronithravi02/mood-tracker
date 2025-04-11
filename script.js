async function submitMood(mood) {
  await fetch("https://YOUR_API_GATEWAY_URL/mood", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ mood })
  });
  alert("Mood submitted!");
}
