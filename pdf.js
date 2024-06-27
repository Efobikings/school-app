
// let pageNum = 0 

  
// function next(){
//     alert("hi")

    
//    const pageN =  pageNum + 1;
//     alert(pageN)
// //     let counter = 10;
// //     const counterDisplay = document.getElementById('counter');
// //     const incrementButton = document.getElementById('incrementButton');
// //     incrementButton.addEventListener('click', function() {
// //         counter++;
// //         counterDisplay.textContent = counter;
// //     })
// //     return counter
// // }
// }

function hello(){
    alert("hi")
}

const countDisplay = document.getElementById('count-display')
const incrementBtn = document.getElementById('incrementButton-btn')
const decrementBtn = document.getElementById('decrementButton-btn')

let count = 1

incrementBtn.addEventListener('click', increase)
decrementBtn.addEventListener('click', decrease)

function decrease(){
    document.querySelector('#image-div').style.display = 'none'
    if (count <= 1){
        if(
          (document.querySelector('#image-div').style.display) = 'none')
          {
            document.querySelector('#image-div').style.display = ''
        }
    } else{
        count--
        countDisplay.textContent = `Count:${count}`
                    // Specify the URL of the PDF file
                    const pdfUrl = './pdf/faith-bible-study-guide-kenneth-e-hagin-1.pdf';

                    // Asynchronous download of PDF
                    pdfjsLib.getDocument(pdfUrl).promise.then(function(pdf) {
                    // Get the first page
                    pdf.getPage(count).then(function(page) {
                        var scale = .5;
                        var viewport = page.getViewport({ scale: scale });
        
                        // Prepare canvas using PDF page dimensions
                        var canvas = document.getElementById('pdf-canvas');
                        var context = canvas.getContext('2d');
                        canvas.height = viewport.height;
                        canvas.width = viewport.width;
        
                        // Render PDF page into canvas context
                        var renderContext = {
                            canvasContext: context,
                            viewport: viewport
                        };
                        page.render(renderContext);
                    });
                });

    }

   
}



    
function increase(){
    document.querySelector('#image-div').style.display = 'none'
    count++
    countDisplay.textContent = `Count:${count}`



            // Specify the URL of the PDF file
                 const pdfUrl = './pdf/faith-bible-study-guide-kenneth-e-hagin-1.pdf';

            // Asynchronous download of PDF
            pdfjsLib.getDocument(pdfUrl).promise.then(function(pdf) {
            // Get the first page
            pdf.getPage(count).then(function(page) {
                var scale = 1.0;
                var viewport = page.getViewport({ scale: scale });

                // Prepare canvas using PDF page dimensions
                var canvas = document.getElementById('pdf-canvas');
                var context = canvas.getContext('2d');
                canvas.height = viewport.height;
                canvas.width = viewport.width;

                // Render PDF page into canvas context
                var renderContext = {
                    canvasContext: context,
                    viewport: viewport
                };
                page.render(renderContext);
            });
        });
}




