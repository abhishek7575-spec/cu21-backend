document.querySelector('#submit-btn').addEventListener('click', (e) => {
    e.preventDefault()

    const email = document.querySelector('#emailid').value
    const password = document.querySelector('#passkey').value

    const user = {
        account: email,
        passkey: password
    }


    const xhr = new XMLHttpRequest()
    const url = 'http://localhost:5001/login'

    xhr.open('POST', url)

    xhr.setRequestHeader('Content-Type', 'application/json')
    xhr.setRequestHeader('Access-Control-Allow-Origin', "*")

    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
            if (xhr.status === 201) {

                console.log(JSON.parse(xhr.responseText))
                window.location.replace('views/index.ejs')
                
            }
            if (xhr.status === 401) {
                console.log(JSON.parse(xhr.responseText))
            }
            if (xhr.status === 403) {
                console.log(JSON.parse(xhr.responseText))

            }
        }
    }
    xhr.send(JSON.stringify(user))




})





