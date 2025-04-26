document.querySelector('#form-login').addEventListener('submit', e => {
    e.preventDefault()
    let email = document.querySelector('#email').value
    let password = document.querySelector('#password').value
    
    let json = {
        email,
        password
    }

    if (!json.email) {
        alert('Preencha o campo e-mail !')
        console.error('Preencha o campo e-mail !')
    } else if (!json.password) {
        alert('Preencha o campo senha !')
        console.error('Preencha o campo senha !')
    } else {
        alert('Dados informados com sucesso !')
        console.info('Dados informados com sucesso !')  
    }

    // let stringJSON = JSON.stringify(json)
    // let jsonParse = JSON.parse(stringJSON)
})