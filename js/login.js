document.getElementById('btn-submit').addEventListener('click',function(){
    console.log('submit button clicked')
    // try to get email value
    const emailfeild =  document.getElementById('user-email')
    const email = emailfeild.value
    console.log(email)
    // try to get password
    const passwordFeild = document.getElementById('user-password')
    const password = passwordFeild.value
    console.log(password)
    passwordFeild.value = ''
    emailfeild.value = ''
    if(email == 'imon@gmail.com' && password == 'imon'){
        console.log('valid users')
    }
    else{
        console.log('invalid user')
    }
})