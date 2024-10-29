addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  const alphabet = "abcdefghijkl";
  const randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
  const url = `https://cdn.jsdelivr.net/gh/hitokoto-osc/sentences-bundle@latest/sentences/${randomLetter}.json`;
  const response = await fetch(url);
  const data = await response.json();
  const randomData = data[Math.floor(Math.random * data.length)];
  const jsonResponse = JSON.stringify(randomData);
  const headers = { 'Content-Type': 'application/json' };
  return new Response(jsonResponse, { headers });
}