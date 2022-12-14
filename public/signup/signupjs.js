

document.querySelector('#submit-btn').addEventListener('click', (e)=>{
    e.preventDefault();
    let name =document.getElementById('fullname').value
    let email = document.getElementById('emailid').value
    let password = document.getElementById('password').value
    let repassword = document.getElementById('repassword').value

    
    function ispvalid(password) {
        var decimal=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
        if(decimal.test(password)){
            return true;
        }
        
        return false
    }
    function check(password,repassword){
        if (password==repassword) {
            return true;
        }
        return false;
    }

    function isnamevalid(name){
        if(/^[A-Za-z\s]+$/.test(name)){
              return true;
        }
        else
             {return false;}
    }

    function isemailvalid(email){
        var validRegex =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(validRegex.test(email)){
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


    if(!ispvalid(password)) {
        alert('Input Password and Submit [8 to 15 characters which contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character]')
            return;
    }
    

    if(!check(password,repassword)){
        alert('Please match your password')
        return ;
    }

    let checkbox = document.getElementById("checkbox");
    checkbox.addEventListener( "change", () => {
       if ( checkbox.checked===false ) {
          alert('please check terms and conditions')
       } 
    })
    

    const userdetails ={
        fullname:name,
        account:email,
        passkey:password
    }
    const promise = new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()
        const url ='/signup'
    
    
        xhr.open('POST', url)
    
        xhr.setRequestHeader('Content-Type', 'application/json')
        xhr.setRequestHeader('Access-Control-Allow-Origin', '*')
    
        xhr.onreadystatechange = () => {
    
            if(xhr.readyState === 4 )
            {
                
                if(xhr.status === 201) 
                {
                    
                    resolve(xhr.responseText)
                    
                }
               else if(xhr.status === 200){
                    reject(xhr.responseText)
                    return;
                }
                else if( xhr.status===500)
                {
                    reject(xhr.responseText)
                }
            }
            
        }
        xhr.send( JSON.stringify(userdetails) )
    })

    promise.then((result) => {
        alert(result)
        window.location.href='/login'
    }).catch((err) => {alert(err)
        return;
    })

        

    
    
    document.getElementById('fullname').value=''
    document.getElementById('emailid').value=''
    document.getElementById('password').value=''
    document.getElementById('repassword').value=''

    

})