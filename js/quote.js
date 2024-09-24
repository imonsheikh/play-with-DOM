const quotes = [
    { 
      name: "Inspiration",
      quote: "The only way to do great work is to love what you do.",
      author: "Steve Jobs" 
    },
    { 
      name: "Motivation",
      quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
      author: "Winston Churchill" 
    },
    { 
      name: "Perseverance",
      quote: "It does not matter how slowly you go as long as you do not stop.",
      author: "Confucius" 
    },
    { 
      name: "Wisdom",
      quote: "In the middle of every difficulty lies opportunity.",
      author: "Albert Einstein" 
    },
    { 
      name: "Courage",
      quote: "Courage is not the absence of fear, but the triumph over it.",
      author: "Nelson Mandela" 
    },
    { 
      name: "Leadership",
      quote: "Leadership is the capacity to translate vision into reality.",
      author: "Warren Bennis" 
    },
    { 
      name: "Happiness",
      quote: "Happiness is not something ready-made. It comes from your own actions.",
      author: "Dalai Lama" 
    },
    { 
      name: "Success",
      quote: "Don't watch the clock; do what it does. Keep going.",
      author: "Sam Levenson" 
    },
    { 
      name: "Life",
      quote: "Life is what happens when you're busy making other plans.",
      author: "John Lennon" 
    },
    { 
      name: "Dream",
      quote: "The future belongs to those who believe in the beauty of their dreams.",
      author: "Eleanor Roosevelt" 
    }
  ];
  

// console.log("quate ");
document.getElementById('quote').addEventListener('click', function(){
    const p = document.getElementById('quote-p')
    const h1 = document.getElementById('name')

    const randomIndex =  Math.floor(Math.random() * quotes.length)
    console.log(quotes[randomIndex]);

    p.innerText = quotes[randomIndex].quote
    h1.innerText = quotes[randomIndex].author

})