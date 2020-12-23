

   function myFunc() {
    
       
    document.write("<ul><li>MANGO</li><li>WATERMELON</li></ul>")
    
    let dan=4;
    // document.write('<ul>')
    document.write('<table border="1">')
    for(let i=1; i<10; i++) {
        if(i%2==1){
    document.write('<li class="even">'+'<tr><td>'+dan+'*'+i+'</td><td>'+'='+'<b>'+(dan*i)+'</b>'+'</li>')
    }
  
    
    // for(let i=1; i<10; i++) {

    //     if(i%2==1){
    //         document.write('<li class="even">'+dan+'*'+i+'='+'<b>'+(dan*i)+'</b>'+'</li>');
    
    //     }else{
    //         document.write('<li class="odd">'+dan+'*'+i+'='+'<b>'+(dan*i)+'</b>'+'</li>');
    
    //     }
        
    // }
    //    document.write('</ul>');
    
       
   }

