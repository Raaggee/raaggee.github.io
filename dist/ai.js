const API_KEY = 'your-api-key-goes-here';
const submitButton = document.querySelector('#submit');
const outputPrompt = document.querySelector('#output');
const inputPrompt = document.querySelector('#search');
const clearButton = document.querySelector('#newChat');
const loadingSpinner = document.getElementById('loading');

submitButton.addEventListener('click', getMessage);
clearButton.addEventListener('click', clearInput);

async function getMessage() {
  console.log('click');
  const inputText = inputPrompt.value.trim();
  if (!inputText) {
    return; // Ignore empty input
  }

  const requestOptions = {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${API_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      model: 'gpt-3.5-turbo',
      messages: [
        { role: 'system', content: 'Act like you are a Self Help tutor only. No code. Act like Buddha and spread good and wisdom knowledge. Act like a very great person and generate short and crisp responses!' },
        { role: 'user', content: inputText }
      ],
      max_tokens: 1000
    })
  };

  try {
    loadingSpinner.classList.remove('hidden');
    const response = await fetch('https://api.openai.com/v1/chat/completions', requestOptions);
    const data = await response.json();
    console.log(data);
    outputPrompt.textContent = data.choices[0].message.content;
    outputPrompt.classList.remove('hidden');
  } catch (error) {
    console.log(error);
    outputPrompt.textContent = 'Error occurred. Please try again later.';
    outputPrompt.classList.remove('hidden');
  } finally {
    loadingSpinner.classList.add('hidden');
  }
}

function clearInput() {
  inputPrompt.value = '';
  outputPrompt.textContent = '';
 
