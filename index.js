document.getElementById('btn').onclick=()=>{
    let randomchar = 'abcdefghijklmnopqrstuvwxyz'
    let uppercase='ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let numbers='1234567890'
    let specialcase='!@#$%&';
    let password="";
    let count=0;
    let lengthval = document.getElementById('input').value||12;
    let checkcount=0;
    let len = lengthval;
    if(document.getElementById('uppercase').checked)
        checkcount++;
    if(document.getElementById('numbers').checked)
        checkcount++;
    if(document.getElementById('specialcharacter').checked)
        checkcount++;
    let seperatedlength=0;
    if(checkcount!==0){
        seperatedlength=Math.floor(len/(checkcount+1));
    }
    
    console.log(seperatedlength);

    if(document.getElementById('uppercase').checked){
        randomchar+=uppercase;
        for(let i=0;i<seperatedlength;i++)
        {
            let charval = uppercase.charAt(Math.floor(Math.random()*uppercase.length));
            password+=charval;
        }
        count+=seperatedlength; 
    }
    if(document.getElementById('numbers').checked){
        randomchar+=numbers;
        for(let i=0;i<seperatedlength;i++)
            {
                let charval = numbers.charAt(Math.floor(Math.random()*numbers.length));
                password+=charval;
            }
            count+=seperatedlength;
    }
    if(document.getElementById('specialcharacter').checked){
        randomchar+=specialcase;
        for(let i=0;i<seperatedlength;i++)
            {
                let charval = specialcase.charAt(Math.floor(Math.random()*specialcase.length));
                password+=charval;
            }
            count+=seperatedlength;
    }
    
    for(i=count;i<len;i++){
        let val=randomchar.charAt((Math.floor(Math.random()*randomchar.length)));
        password+=val;
    } 
    // console.log(password);
    document.getElementById('output').value=password;
}