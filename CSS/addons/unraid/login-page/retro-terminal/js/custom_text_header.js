
 //Custom Text Header //
 // ACSII slant font

// Needs to be inside <section id="login" class="shadow">
// YOU MUST ESCAPE ANY SINGLE BACKSLASHES LIKE SO: \\

let custom_text_header = `
<div class="custom-text-header"> <pre>

              __   ___       __  
  ____ ______/ /__/ (_)___  / /__
 / __ `/ ___/ //_/ / / __ \\/ //_/
/ /_/ / /  / ,< / / / / / / ,<   
\\__,_/_/  /_/|_/_/_/_/ /_/_/|_|  
                                 

</pre> </div>
`;
document.getElementById("login").innerHTML += custom_text_header
