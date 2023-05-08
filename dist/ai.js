const API_KEY = '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';
const submitButton = document.querySelector('#submit');
const outputPrompt = document.querySelector('#output');
const inputPrompt = document.querySelector('#search');
const clearButton = document.querySelector('#newChat')



async function getMessage() {
    console.log('click');
    const options = {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${API_KEY}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [
                {role: "system", content: "Act like you are a Self Help tutor only. No code. Act like Buddha and spread good and wisdom knowledge. Act like a very great person and generate short and crisp responses!"},
                {role: "user", content: inputPrompt.value}

            ],
            max_tokens: 1000
        })
    };

    try {
        document.getElementById("loading").classList.remove("hidden")
        const response = await fetch('https://api.openai.com/v1/chat/completions', options);
        const data = await response.json();
        console.log(data);
        outputPrompt.textContent = data.choices[0].message.content
        document.getElementById("loading").classList.add("hidden")
        document.getElementById("output-box").classList.remove("hidden")
        
    } catch (error) {
        console.log(error);
    }
}

function clearInput(){
    inputPrompt.value = ''
    outputPrompt.textContent = ''
}

submitButton.addEventListener('click', getMessage);
clearButton.addEventListener('click', clearInput)
