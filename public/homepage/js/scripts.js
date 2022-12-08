/*!
* Start Bootstrap - Business Frontpage v5.0.8 (https://startbootstrap.com/template/business-frontpage)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-business-frontpage/blob/master/LICENSE)
*/
document.getElementById('submit-btn').addEventListener('click', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;



    function isnamevalid(name) {
        if (/^[A-Za-z\s]+$/.test(name)) {
            return true;
        }
        else { return false; }
    }

    function isemailvalid(email) {
        var validRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (validRegex.test(email)) {
            return true;
        }
        return false;
    }

    function validatePhoneNumber(input_str) {
        var re = /^\d{10}$/

        if(re.test(input_str)) {
            return true;
        }
        return false;
        
    }

    if (!isnamevalid(name)) {
        alert("Please enter correct name")
        return;

    }

    if (!isemailvalid(email)) {
        alert("Please enter correct email")
        return;
    }


    if (!validatePhoneNumber(phone)) {
        alert("Please enter correct phone number")
        return;
    }

  

    const userdetails = {
        fullname: name,
        account: email,
        phoneno: phone,
        text: message
    }


    let promise = new Promise((resolve, reject) => {

        const xhr = new XMLHttpRequest();

        const url = '/blog'

        xhr.open('POST', url)

        xhr.setRequestHeader('Content-Type', 'application/json')
        xhr.setRequestHeader('Access-Control-Allow-Origin', '*')


        xhr.onreadystatechange = () => {

            if (xhr.readyState === 4) {

                if (xhr.status === 201) {

                    resolve(xhr.responseText)

                }

                else if (xhr.status === 200) {
                    resolve(xhr.responseText)
                }
                else if (xhr.status === 500){
                    reject(xhr.responseText)
                }
            }

        }
        xhr.send(JSON.stringify(userdetails))
    })

    promise.then((result) => {
        alert(result)
    }).catch((err) => {
        alert(err)
        return;
    })

    document.getElementById('name').value = ''
    document.getElementById('email').value = ''
    document.getElementById('phone').value = ''
    document.getElementById('message').value = ''



})