const logout = function(){
    fetch('/api/users/logout', {
        method: 'POST', 
        headers: { 'Content-Type': 'applicationjson'}
    }).then((res)=>{
        if (res.ok){
            document.location.replace('/login')
        } else{
            alert('log out failed!')
        }
    })
}

document.getElementById('logout').addEventListener('click', logout)