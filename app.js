// NAME ENTER

function insertName() {
    // Input value
    var name = document.getElementById("name").value;
    //Display name
    document.getElementById("result").innerHTML = "Inserted Name: " + name;
}

const textarea = document.getElementById('goal');


// SUBMIT FORM 
function adjustSize() {
    const textarea = document.getElementById('goal');
    textarea.style.width = '1000px';
    textarea.style.height = '300px';
  }

  document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('multipleChoiceForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        var formData = new FormData(this);

        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'your-submit-url');
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.onload = function() {
          if (xhr.status === 200) {
            console.log('Form submitted successfully:', xhr.responseText);
        } else {
          // Handle errors
          console.error('Form submission error:', xhr.statusText);
        }
      };
      xhr.onerror = function() {
        console.error('Request failed');
      };
      xhr.send(new URLSearchParams(formData));
    });
  });



  // 