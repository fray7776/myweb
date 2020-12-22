
   function myFunc() {
    <table>
    <tr>
        <td>4*1</td>
        <td>=</td>
        <td>4</td>

    </tr>
    </table>
       
    document.write("<ul><li>MANGO</li><li>WATERMELON</li></ul>")
    let dan=4;
    document.write('<ul>')
    

    for(let i=1; i<10; i++) {

        if(i%2==1){
            document.write('<li class="even">'+dan+'*'+i+'='+'<b>'+(dan*i)+'</b>'+'</li>');
    
        }else{
            document.write('<li class="odd">'+dan+'*'+i+'='+'<b>'+(dan*i)+'</b>'+'</li>');
    
        }
        
    }
       document.write('</ul>');
    
       
   }

   