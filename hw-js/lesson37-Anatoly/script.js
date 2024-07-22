const article = document.getElementsByTagName('article')

for (let i = 0; i < article.length; i++) {
  const element = article[i];
  const wrap = element.querySelector('.wrap')
  async function fetchData() {
    try {
          const response = await fetch (' https://jsonplaceholder.typicode.com/comments')
          const data = await response.json()  
          if (!response.ok) {
              throw new Error('Дані не отримано')
          }
          let i = Math.floor(Math.random() * data.length)
            const element = data[i];
            console.log(element);
            const listItem = document.createElement('div')
            listItem.classList.add('info')
            listItem.innerHTML =`
            <header>
            <p class="logo">
              <span class="name">${data[i].name}</span>
              <span class="data">${data[i].email}</span>
            </p>
            <button class="reply">
              <img class="button" src="./images/reply.svg" alt=""/>Reply
            </button>
          </header>
          <p class="text">${data[i].body}</p>`
          wrap.appendChild(listItem) 
      } catch (error) {
        const listItem = document.createElement('div')
        listItem.textContent = `Помилка виконання запиту ${error}`
        wrap.appendChild(listItem)
      }
  }
  fetchData()
}

