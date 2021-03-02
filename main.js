/*
Complete these tasks which shoudl be review from previous problems.

****************************************************
****** Submit via github before 10AM Monday. *******
****************************************************

Remember to do your own work.

You may add elements to the html unless otherwise told to use only javascript in a specific task.

Overview: The user will be able to type their name and choose from a list one of the three job titles. When they slick submit, they will see their name and the job title in a div and an image based on the job title they chose.

X-Task 1: Create an input element in html and store the user's typed name in a javascript variable when they press the submit button.

X=Task 2: Create an empty select element in the html. Add any 3 job types as options of the selector via javascript (i.e Fireman, Mage, Doctor, Robot).

XTask 3: When the user presses submit, if there is no name in the input field, an error message should say "Please enter your name first"

Task 4: When the user presses submit, if there is a name in the input field, the input field, submit button, and select element should go away and a div should say the job the person chose followed by their name (i.e. Doctor Fred). There is no way to enter the information again.

Task 5: When the user presses submit, in addition to what occured in Task 4, an image should also display via an img tag underneath their name. The image should be based on the job chosen (i.e. Robot Bob should show a picture of a robot under the text "Robot Bob")

Each task is worth 20 points for a total of 100 points on the assignment.
*/

'use strict';
let userInput = [];
document.addEventListener("DOMContentLoaded", () => {
    
        const surveyButton = document.getElementById("submit");
        const jobSelector = document.getElementById("jobs");
        const errorMsg = document.getElementById("error"); 
        const jobMsg = document.getElementById("message")
        
        surveyButton.addEventListener("click", () => {
            
        const inputField = document.getElementById("text1");
        userInput.push(inputField.value);
            
        console.log(userInput); //
           
         if(userInput [0] == "") {
            errorMsg.innerHTML = "Error: Please enter your name first";
             userInput.pop();
             
             
         } else if (userInput[0] != "") {
         errorMsg.innerHTML = "";
             
             
      /*      
        function job_image (url) {
        this.url = url,
        this.size = 50,
        this.shrink = () => {
    
        }
    }
    
        function job(image, name, desc) {
        this.image = image,
        this.name = name,
        this.description = desc
        }
             
}
       
    
    const job_image = new job_image('doctor.jpg');    
    const doctor = new job(doctor_image,
                            'Doctor');
             
    const job_image = new job_image('police.jpg');
    const police = new job(police_image,
                               'police');
            
    const job_image = new job_image('mechanic.jpg');
    const mechanic = new job(mechanic_image, 'Mechanic',);
    
     */  
             
    const possibleJobs = ['','Doctor', 'Police', 'Mechanic'];
    

    for(let i=0; i<possibleJobs.length; i++) {
    const jobOption = document.createElement('option');
          jobOption.innerHTML = possibleJobs[i];
          jobSelector.appendChild(jobOption);
           }
             console.log(userInput);
             
    }else if(userInput[0] != "" && jobSelector.value != ''){                  surveyButton.remove(); //div "submit";
           jobsSelector.remove(); //div "Jobs";
                                                           
            //div message = "Career name"
        
             
    console.log("finished",jobSelector.value, userInput);
             

        }
         
              
    
            });
   
});