//$(document).ready(function (){

var Data = 
    {
    "git": [
        {
            "name": "Saravana",
            "repositories": [
                "Git_Demo",
                "Angular_code",
                "Css_files",
                "scripts"
            ]
        },
        {
            "name": "Balaji",
            "repositories": [
                "ver 1",
                "ver 2"
            ]
        }
    ]
    };
    var tr=$('<tr/>');
//});
function fetch(){
    var usr = document.getElementById('uname').value;
    console.log(usr);
    for(var i = 0; i < Data.git.length; i++)
    {   
        var User = Data.git[i];
        if(User.name === usr){
            //tr = $('<tr/>');
            
            for(var j = 0; j < User.repositories.length; j++)
            {
              var repo = User.repositories[j];
              
              tr.append( "<tr><td>" + repo + "</td>"+ "<td>" +"<button onclick=redirect()>"+"New issue</button>" + "</td>" + "</tr>");              
            }
            
            //$('table').append(tr);
            
        }
        
    }
    $('table').append(tr);     
}

function redirect(){
    window.open('/Full-Stack/Sample/issue.html');
}

function issue_count(){


}