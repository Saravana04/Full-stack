var tr=$('<tr/>');
var count = 0;
function fetch(){
    var usr = document.getElementById('uname').value;
    console.log(usr);
    count = count+1;
        $.ajax({
            url: "https://api.myjson.com/bins/93dfw",
            dataType: "json",
            success: function(data){
                console.log(data);

                //$(data.git).each(function(index,value){
                for(var i = 0; i < data.git.length; i++)
                    {      
                    var User = data.git[i]    
                    //var User = value.name;
                    User.issues = count;
                    if(User.name === usr){
                        for(var j = 0; j < User.repositories.length; j++)
                        {
                            var repo = User.repositories[j];
                            
                            tr.append( "<tr><td>" + repo + "</td>"+ "<td>" +"<button onclick=redirect()>"+"New issue</button>" + "</td>" + "<td>"+User.issues +"</td></tr>");              
                        }
                    }   
                    $('table').append(tr);  
                //});
            }
        } 
        });    
        
        
          
    }


function redirect(){
    window.open('/Full-Stack/Sample/issue.html');
}

