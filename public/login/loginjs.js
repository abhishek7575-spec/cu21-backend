document.querySelector('#submit-btn').addEventListener('click', (e) => {
    e.preventDefault()

    const email = document.querySelector('#emailid').value
    const password = document.querySelector('#passkey').value

    const user = {
        account: email,
        passkey: password
    }

    function isemailvalid(email){
        var validRegex =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(validRegex.test(email)){
            return true;
        }
        return false;
    }

    if (!isemailvalid(email)) {
        alert("Please enter correct email")
        return;
    }

    function check(password){
        if(password.length===0){
            return false;
        }
        return true;
    }

    if(!check(password)){
        alert("Please enter correct password")
        return;
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
               else if (xhr.status === 200) {
                    reject(xhr.responseText)
                    return;
                }
               else if (xhr.status === 500) {
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












