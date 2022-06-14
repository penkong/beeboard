# Data formatting web app

## The task
Given are two files - both contain the same content - one is a CSV file the other is a PRN file, 
we want you write a simple web application that reads the CSV file and PRN file and, utilising 
a simple UI: 

* formats and displays the raw data appropriately.
* allows switching between an HTML table, and a formatted JSON display.
* that compares the generated outputs and reports a failure message if the outputs are not identical. The HTML generated from each input file should be identical, and the JSON generated from each file should be identical.

The content (i.e. the data in the file, minus the formatting characters) of the input files
differ, but you should produce identical output - irrespective of whether the input data format was CSV or PRN. 
Non ASCII characters should be handled and rendered correctly. 
No content should be lost in translation, but reformatting of content may be necessary
and all output should be readable when presented in the UI.

## How to proceed
Solutions that utilise web standards/apis (HTML, CSS, and JS) are preferred, but if you are not familiar 
with these then use your main (work) language. 

### Dependencies
Make sure you are ready to defend any and all dependencies you introduce into your solution.
* Any open source libraries which make life easier for you are of course allowed.
* Using frameworks like React/Preact, Vue, or Angular, Tailwind, Styled Components, StencilJs, Lit-Element, Bootstrap, etc. are an option but not required. Make sure they add value if you use them.
* Server-side solutions, client-side solutions, or a combination of the two are acceptable.

## How to deliver
Please include only the source code, any test code, and the build files. - no IDE files or build products. 
Please include a README.md with instructions on how to build and run the solution.

Please return the solution as a git repository. Make regular commits and pushes, so that we can see the evolution of the solution. Tar.gz or zip files are fine for delivery

## Deadline
You have 48 hours to complete the task. We reckon a couple of evenings should be enough.
