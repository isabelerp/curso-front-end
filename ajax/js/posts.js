// import fetch from 'node-fetch'

let_data = {
    title: "teste de envio",
    body: "loren ipsum sit dolor amet consectur",
    userId: "10"
}

fetch ('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify(_data),
    headers: {
        'Content-Type': 'application/json; charset=UTF-8'
    }
}
)
    .then( response => response.json())
    .then(json => console.log(json))
   .catch(error => console.error(error))
