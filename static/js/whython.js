// Get all scripts
var scripts = document.getElementsByName("script");

// Get only python scripts
var python_scripts = [];
scripts.forEach((script) => {
    if (script.type == "application/python") {
        python_scripts.push(script);
    }
});

console.log(python_scripts);