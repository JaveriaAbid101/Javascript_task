function ajaxCall(e){
    e.preventDefault();

    var data = {
        "userName":  (document.getElementById('username-field').value),
        "email":  (document.getElementById('email-field').value),
        "password": (document.getElementById('password-field').value),
        "passwordConfirmation":  (document.getElementById('passconfirm-field').value),
        "dateOfBirth":  (document.getElementById('dob-field').value),
        "firstName": (document.getElementById('firstname-field').value),
        "lastName":  (document.getElementById('lastname-field').value),
        "gender":  (document.getElementById('gendername-field').value),
      }

    console.log(data);
      
    var req = new XMLHttpRequest();
    req.open('POST','http://api.d.playback.live/api/1.0/user/register',true);
    req.onreadystatechange = function (){
        if(req.readyState == 4 && req.status == 200){

            document.getElementById('loaddata').innerHTML=req.response
        }
        
    }

    req.setRequestHeader('Content-Type', 'application/json;charset=UTF-8')

    req.send(JSON.stringify(data));
}