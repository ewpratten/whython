
// Adds pyodide to the current document
function injectPyodide() {
    var new_script = document.createElement("script");
    new_script.src = "https://pyodide-cdn2.iodide.io/v0.15.0/full/pyodide.js";
    new_script.onload = run;
    document.head.appendChild(new_script);
}
injectPyodide();

// Search for python scripts, and execute them
function run() {
    // Get all scripts
    var scripts = document.getElementsByTagName("script");

    // Get only python scripts
    var python_scripts = [];

    for (let i = 0; i < scripts.length; i++) {
        const script = scripts[i];
        if ("type" in script.attributes && script.attributes.type.value == "application/python") {
            python_scripts.push(script);
        }

    }

    python_scripts.forEach(evalScript);
}

// Evaluates a script, and correctly loads it
function evalScript(script) {
    // Handle remote script
    if (script.src != "") {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState == XMLHttpRequest.DONE) {
                evalRawPythonCode(xhr.responseText);
            }
        }
        xhr.open('GET', script.src, true);
        xhr.send(null);
    } else {
        evalRawPythonCode(script.innerText);
    }
}

// Open a python scope, and execute code
function evalRawPythonCode(text) {
    languagePluginLoader.then(() => {
        console.log(pyodide.runPython(text));
    });
}