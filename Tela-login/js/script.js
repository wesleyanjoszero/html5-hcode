document.querySelector('#form-login').addEventListener('submit', e => {
    e.preventDefault()
    let email = document.querySelector('#email').value
    let password = document.querySelector('#password').value
    
    let json = {
        email,
        password
    }

    console.log(json)
    
    let stringJSON = JSON.stringify(json)
    console.log(stringJSON)
    
    let jsonParse = JSON.parse(stringJSON)
    console.log(jsonParse)
})