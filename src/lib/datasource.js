// const baseUrl = process.env.BASE_URL;
const baseUrl = "http://localhost:8080/todos"

export const getTodos = () => {
    console.log(baseUrl);
    return fetch(baseUrl)
    .then(res=> res.json())
}

export const createTodo = (name) => 
{
    return fetch(baseUrl,{
        method:'POST',
        headers:{
            'Accept':'application/json',
            'Content-type':'application/json'
        },
        body: JSON.stringify({'name':name,'isComplete':false})
    })
    .then(res=> res.json())
}