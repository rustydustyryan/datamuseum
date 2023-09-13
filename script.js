const button = document.getElementById('search-btn');
const meansLike = document.getElementById('ml');
const soundsLike = document.getElementById('sl');
const spelledLike = document.getElementById('sp');
const rhymesWith = document.getElementById('rw');
const results = document.getElementById('results');

async function callApi() {
  const apiUrl = `https://api.datamuse.com/words?rel_rhy=${rhymesWith.value}&ml=${meansLike.value}&sl=${soundsLike.value}&sp=${spelledLike.value}&max=10`;

  try {
    const response = await fetch(apiUrl);
  
    console.log('Response object:', response);
    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.status}`);
    }
    const data = await response.json();
    console.log('Data object:', data);
    results.innerHTML = data.map(item => `<li>${item.word}</li>`).join('');
    if (data.length === 0) {
      results.innerHTML = '<li>No results found</li>';
    }
  } catch (error) {
    console.error('Fetch error:', error);
  }
}

button.addEventListener('click', callApi);