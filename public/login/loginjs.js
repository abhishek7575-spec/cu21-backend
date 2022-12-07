document.querySelector('#submit-btn').addEventListener('click', (e) => {
    e.preventDefault()

    const email = document.querySelector('#emailid').value
    const password = document.querySelector('#passkey').value

    const user = {
        account: email,
        passkey: password
    }


    const promise = new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()
        const url = '/login'

        xhr.open('POST', url)

        xhr.setRequestHeader('Content-Type', 'application/json')
        xhr.setRequestHeader('Access-Control-Allow-Origin', "*")

        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                if (xhr.status === 201) {

                    resolve(xhr.responseText)

                }
               else if (xhr.status === 401) {
                    reject(xhr.responseText)
                }
               else if (xhr.status === 403) {
                    reject(xhr.responseText)

                }
            }
        }
        xhr.send(JSON.stringify(user))

    })

    promise.then((result) => {
        alert(result)
        window.location.replace('/')
    }).catch((err) => {
        alert(err)
        return;
    })


})












