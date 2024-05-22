var list = document.getElementById("user-input");
var sendButton = document.getElementById('send-button');
var list = document.getElementById('list');

function sendMessage(){
    if(event.keyCode === 13) {
        var value = event.target.value;
        list.innerHTML += "<li>" + value + "</li>"; 

        if(['hi', 'hey', 'hye', 'oye', 'moye', 'hay', 'haye'].indexOf(event.target.value)
             !== -1) { 
            setTimeout(function () {
                list.innerHTML += "<li> </br> </li>";
                list.innerHTML += "<li> Hello </li>"; 
            },2000)

            setTimeout(function () {
                
                list.innerHTML += "<li> Welcome to SMIT Chatbot! </li>"; 
            },4000)   
        }
        
        else if(['mujhe course ki information chahiye', 'courses', 'smit courses', 'courses information',].indexOf(event.target.value)
                !== -1) { 
               setTimeout(function () {
                list.innerHTML += "<li> </br> </li>";
                   list.innerHTML += "<li> Web And Mobile App Development </li>";
                   list.innerHTML += "<li> Python </li>";
                   list.innerHTML += "<li> Ai & Chatbot </li>";
                   list.innerHTML += "<li> Flutter </li>";
                   list.innerHTML += "<li> Graphics Designing </li>";
                   list.innerHTML += "<li> 3D Animation </li>";
                   list.innerHTML += "<li> 3D Visualization with 3D Max </li>";
                   list.innerHTML += "<li> Motor Bike Repairing </li>";
                   list.innerHTML += "<li> Mobile Repairing </li>";
                   list.innerHTML += "<li> Laptop Repairing </li>";
                   
               },2000)
               setTimeout(function () {
                list.innerHTML += "<li> </br> </li>";
                list.innerHTML += "<li> Which Course do you interested? </li>"; 
            },4000)       
            }

            else if(['web developement', 'web'].indexOf(event.target.value)
                  !== -1) { 
                 setTimeout(function () {
                    list.innerHTML += "<li> </br> </li>";
                     list.innerHTML += "<li> I have been trained on a wide range of topics, including web and mobile app development. I can provide information and answer questions on various aspects of development, such </li>"
                     list.innerHTML +=  " <li> Programming languages (e.g., HTML, CSS, JavaScript, Java, Swift, Kotlin)</li>"
                     list.innerHTML += "<li> </br> </li>";
                     list.innerHTML +=  "<li> - Development frameworks (e.g., React, Angular, Vue, Ruby on Rails) </li>"
                     list.innerHTML +=   "<li>  - Databases (e.g., MySQL, MongoDB, Firebase) </li>"
                     list.innerHTML +=   "<li> - APIs and RESTful architecture </li>"
                     list.innerHTML +=   "<li> - Mobile app development (iOS and Android) </li>"
                     list.innerHTML +=    "<li> - Responsive web design and mobile-first development </li>"
                     list.innerHTML +=  "<li> - User experience (UX) and user interface (UI) design principles </li>"
                     list.innerHTML +=    "<li>- Web and mobile security best practices </li>"
                     list.innerHTML += "<li> </br> </li>";
                     list.innerHTML +=    "<li> Feel free to ask me any specific questions you have, and I'll do my best to help! </li>"; 
                 },2000)
                       
              }

              else if(['grphic'].indexOf(event.target.value)
                  !== -1) { 
                 setTimeout(function () {
                     list.innerHTML += "<li> </br> </li>";
                     list.innerHTML += "<li> I have knowledge in graphic designing, including: </li>";
                     list.innerHTML += "<li> - Design principles (balance, contrast, emphasis, movement, pattern, unity)  </li>";
                     list.innerHTML += "<li>- Color theory (color harmony, color modes, color psychology)                     </li>";
                     list.innerHTML += "<li>- Typography (font selection, typography styles, text arrangement                     </li>";
                     list.innerHTML += "<li>- Visual elements (icons, graphics, images, illustrations                     </li>";
                     list.innerHTML += "<li>- Design software (Adobe Creative Suite, Sketch, Figma, Canva)                     </li>";
                     list.innerHTML += "<li>- File formats (JPEG, PNG, GIF, SVG, PDF)                     </li>";
                     list.innerHTML += "<li>- Branding and identity design (logos, business cards, letterheads                     </li>";
                     list.innerHTML += "<li>- User experience (UX) and user interface (UI) design principles                     </li>";
                      
                 },2000)
                       
              }

              else if(['admission'].indexOf(event.target.value)
                  !== -1) { 
                 setTimeout(function () {
                    list.innerHTML += "<li> </br> </li>";
                     list.innerHTML += "<li> New Admission Next Month se start honge!</li>"; 
                 },2000)
                       
              }

              else if(['pata kese chalega'].indexOf(event.target.value)
                  !== -1) { 
                 setTimeout(function () {
                     list.innerHTML += "<li> </br> </li>";
                     list.innerHTML += "<li> Ye Links dekhlo</li>";
                     list.innerHTML += "<li> https://www.facebook.com/SaylaniWelfareInternationalTrust/ </li>";
                     list.innerHTML += "<li> https://www.youtube.com/channel/UCqIAX63GnO9xcEfnbgBfwcQ </li>"; 
                     
                 },2000)
                       
              }

              else if(['Thank you', 'thank you', 'shukriya',
              'jazakallah'].indexOf(event.target.value)
                  !== -1) { 
                 setTimeout(function () {
                    list.innerHTML += "<li> </br> </li>"; 
                    list.innerHTML += "<li> hmm... </li>"; 
                 },2000)
                 
                       
              }

              else if(['apply kese hoga'].indexOf(event.target.value)
                !== -1) { 
               setTimeout(function () {
                   list.innerHTML += "<li> </br> </li>";
                   list.innerHTML += "<li> Ye Links dekhlo</li>";
                   list.innerHTML += "<li> https://forms.saylaniwelfare.com/ </li>";
                   
                   
               },2000)
                     
            }

            else if(['Thank you', 'thank you', 'shukriya',
              'jazakallah'].indexOf(event.target.value)
                  !== -1) { 
                 setTimeout(function () {
                    list.innerHTML += "<li> </br> </li>";
                    list.innerHTML += "<li> hmm... </li>"; 
                 },2000)
                 
                       
              }

        event.target.value = ""
    }
}



