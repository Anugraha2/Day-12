document 
    .getElementById("surveyForm") 
    .addEventListener( 
        "submit", 
        function (event) { 
            // PreventDefault() is used to avoid 
            // Refreshing of browser while submit 
            event.preventDefault(); 
  
            let nameField = 
                document.getElementById( 
                    "name"
                ); 
            let ageField = 
                document.getElementById( 
                    "age"
                ); 
            let errorText = 
                document.getElementById( 
                    "errorText"
                ); 
  
            let name = nameField.value; 
            let age = ageField.value; 
  
            // Creating a regular expression for  
            // Name field 
            let Regex = /^[A-Za-z ]+$/; 
  
            // If name does not matches the  
            // Regular expression 
            if (!name.match(Regex)) { 
                nameField.classList.add( 
                    "error"
                ); 
                errorText.innerHTML = 
                    `Name field should only contain  
                     English alphabets and spaces`; 
                errorText.classList.add( 
                    "errorText"
                ); 
                return; 
            } 
  
            // Check whether age is between 1 and 150 
            else if ( 
                isNaN(age) || 
                age < 1 || 
                age > 150 
            ) { 
                ageField.classList.add( 
                    "error"
                ); 
                errorText.innerHTML = 
                    `Age should only contain valid 
                     values ( 1 - 150 )`; 
                errorText.classList.add( 
                    "errorText"
                ); 
                return; 
            } 
  
            // Removing red border in name field 
            if ( 
                nameField.classList.contains( 
                    "error"
                ) 
            ) 
                nameField.classList.remove( 
                    "error"
                ); 
  
            // Removing red border in age field 
            if ( 
                ageField.classList.contains( 
                    "error"
                ) 
            ) 
                ageField.classList.remove( 
                    "error"
                ); 
  
            // Adding success message and styles 
            errorText.innerHTML = 
                "Submitted Successfully"; 
            errorText.classList.add( 
                "successText"
            ); 
  
            const formData = 
                new FormData( 
                    event.target 
                ); 
            const formValues = {}; 
  
            
            formData.forEach( 
                (value, key) => { 
                    formValues[key] = 
                        value; 
                } 
            ); 
  
            
            const csvContent = 
                convertToCSV( 
                    formValues 
                ); 
            const blob = new Blob( 
                [csvContent], 
                { type: "text/csv" } 
            ); 
  
            
            const link = 
                document.createElement( 
                    "a"
                ); 
            link.href = 
                window.URL.createObjectURL( 
                    blob 
                ); 
            link.download = 
                "survey_data.csv"; 
            link.click(); 
  
            
            setTimeout( 
                document 
                    .getElementById( 
                        "surveyForm"
                    ) 
                    .reset(), 
                2000 
            ); 
        } 
    ); 
  

function convertToCSV(objArr) { 
    const array = 
        typeof objArr !== "object"
            ? JSON.parse(objArr) 
            : objArr; 
    let result = ""; 
  
    
    const header = 
        Object.keys(array).join(",") + 
        "\n"; 
    result += header; 
  
    for (const item in array) { 
        if ( 
            array.hasOwnProperty(item) 
        ) { 
            result += array[item] + ","; 
        } 
    } 
    result = result.slice(0, -1); 
    result += "\n"; 
  
    return result; 
}
let stars = 
    document.getElementsByClassName("star");
let output = 
    document.getElementById("output");
 

function gfg(n) {
    remove();
    for (let i = 0; i < n; i++) {
        if (n == 1) cls = "one";
        else if (n == 2) cls = "two";
        else if (n == 3) cls = "three";
        else if (n == 4) cls = "four";
        else if (n == 5) cls = "five";
        stars[i].className = "star " + cls;
    }
    output.innerText = "Rating is: " + n + "/5";
}
 

function remove() {
    let i = 0;
    while (i < 5) {
        stars[i].className = "star";
        i++;
    }
}