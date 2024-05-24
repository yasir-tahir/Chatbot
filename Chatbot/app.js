var list = document.getElementById("user-input");
var sendButton = document.getElementById('send-button');
var list = document.getElementById('list');

function sendMessage(){
    if(event.keyCode === 13) {
        var value = event.target.value;
        list.innerHTML +=  "<ul class ='question' ><li>" + value + "</li></ul>"; 
        if(['hi', 'hey', 'hye', 'oye', 'moye', 'hay', 'haye'].indexOf(event.target.value)
             !== -1) { 
            setTimeout(function () {
                
                list.innerHTML += "<ul class='answer' ><li> Hello </li></ul>"; 
            },2000)

            setTimeout(function () {
                
                list.innerHTML += "<ul class='answer' > <li> Welcome to SMIT Chatbot! </li> </ul>"; 
            },4000)   
        }
        
        else if(['mujhe course ki information chahiye', 'courses', 'smit courses', 'courses information',].indexOf(event.target.value)
                !== -1) { 
               setTimeout(function () {
                
                   list.innerHTML += "<ul class='answer'><li> Web And Mobile App Development </li> </ul>";
                   list.innerHTML += "<ul class='answer'><li> Python </li></ul>";
                   list.innerHTML += "<ul class='answer'><li> Ai & Chatbot </li></ul>";
                   list.innerHTML += "<ul class='answer'><li> Flutter </li></ul>";
                   list.innerHTML += "<ul class='answer'><li> Graphics Designing </li></ul>";
                   list.innerHTML += "<ul class='answer'><li> 3D Animation </li></ul>";
                   list.innerHTML += "<ul class='answer'><li> 3D Visualization with 3D Max </li></ul>";
                   list.innerHTML += "<ul class='answer'><li> Motor Bike Repairing </li></ul>";
                   list.innerHTML += "<ul class='answer'><li> Mobile Repairing </li></ul>";
                   list.innerHTML += "<ul class='answer'><li> Laptop Repairing </li></ul>";
                   
               },2000)
               setTimeout(function () {
              
                list.innerHTML += "<ul class='answer'><li> Which Course do you interested? </li></ul>"; 
            },4000)       
            }

            else if(['web development', 'web'].indexOf(event.target.value)
                  !== -1) { 
                 setTimeout(function () {
                    
                     list.innerHTML += "<ul class='answer'><li> I have been trained on a wide range of topics, including web and mobile app development. I can provide information and answer questions on various aspects of development, such </li></ul>";
                     list.innerHTML +=  "<ul class='answer'> <li> Programming languages (e.g., HTML, CSS, JavaScript, Java, Swift, Kotlin)</li></ul>";
                     
                     list.innerHTML +=  "<ul class='answer'><li> - Development frameworks (e.g., React, Angular, Vue, Ruby on Rails) </li></ul>";
                     list.innerHTML +=   "<ul class='answer'><li>  - Databases (e.g., MySQL, MongoDB, Firebase) </li></ul>";
                     list.innerHTML +=   "<ul class='answer'><li> - APIs and RESTful architecture </li></ul>";
                     list.innerHTML +=   "<ul class='answer'><li> - Mobile app development (iOS and Android) </li></ul>";
                     list.innerHTML +=    "<ul class='answer'><li> - Responsive web design and mobile-first development </li></ul>";
                     list.innerHTML +=  "<ul class='answer'><li> - User experience (UX) and user interface (UI) design principles </li></ul>";
                     list.innerHTML +=    "<ul class='answer'><li>- Web and mobile security best practices </li></ul>";
                     
                     list.innerHTML +=    "<ul class='answer'><li> Feel free to ask me any specific questions you have, and I'll do my best to help! </li></ul>"; 
                 },2000)
                       
              }

              else if(['grphic'].indexOf(event.target.value)
                  !== -1) { 
                 setTimeout(function () {
                     
                     list.innerHTML += "<ul class='answer'><li> I have knowledge in graphic designing, including: </li></ul>";
                     list.innerHTML += "<ul class='answer'><li> - Design principles (balance, contrast, emphasis, movement, pattern, unity)  </li></ul>";
                     list.innerHTML += "<ul class='answer'><li>- Color theory (color harmony, color modes, color psychology)                     </li></ul>";
                     list.innerHTML += "<ul class='answer'><li>- Typography (font selection, typography styles, text arrangement                     </li></ul>";
                     list.innerHTML += "<ul class='answer'><li>- Visual elements (icons, graphics, images, illustrations                     </li></ul>";
                     list.innerHTML += "<ul class='answer'><li>- Design software (Adobe Creative Suite, Sketch, Figma, Canva)                     </li></ul>";
                     list.innerHTML += "<ul class='answer'><li>- File formats (JPEG, PNG, GIF, SVG, PDF)                     </li></ul>";
                     list.innerHTML += "<ul class='answer'><li>- Branding and identity design (logos, business cards, letterheads                     </li></ul>";
                     list.innerHTML += "<ul class='answer'><li>- User experience (UX) and user interface (UI) design principles                     </li></ul>";
                      
                 },2000)
                       
              }

              else if(['admission'].indexOf(event.target.value)
                  !== -1) { 
                 setTimeout(function () {
                    
                     list.innerHTML += "<ul class='answer'><li> New Admission Next Month se start honge!</li></ul>"; 
                 },2000)
                       
              }

              else if(['pata kese chalega'].indexOf(event.target.value)
                  !== -1) { 
                 setTimeout(function () {
                     
                     list.innerHTML += "<ul class='answer'><li> Ye Links dekhlo</li></ul>";
                     list.innerHTML += "<ul class='answer'><li> https://www.facebook.com/SaylaniWelfareInternationalTrust/ </li></ul>";
                     list.innerHTML += "<ul class='answer'><li> https://www.youtube.com/channel/UCqIAX63GnO9xcEfnbgBfwcQ </li></ul>"; 
                     
                 },2000)
                       
              }

              else if(['Thank you', 'thank you', 'shukriya',
              'jazakallah'].indexOf(event.target.value)
                  !== -1) { 
                 setTimeout(function () {
                
                    list.innerHTML += "<ul class='answer'><li> hmm... </li></ul>"; 
                 },2000)
                 
                       
              }

              else if(['apply kese hoga'].indexOf(event.target.value)
                !== -1) { 
               setTimeout(function () {
                   
                   list.innerHTML += "<ul class='answer'><li> Ye Links dekhlo</li></ul>";
                   list.innerHTML += "<ul class='answer'><li> https://forms.saylaniwelfare.com/ </li></ul>";
                   
                   
               },2000)
                     
            }

            else if(['Thank you', 'thank you', 'shukriya',
              'jazakallah'].indexOf(event.target.value)
                  !== -1) { 
                 setTimeout(function () {
                    
                    list.innerHTML += "<ul class='answer'><li> hmm... </li></ul>"; 
                 },2000)
                 
                       
              }

        event.target.value = ""
    }
}

