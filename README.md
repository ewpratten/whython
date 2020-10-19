# whython
A small utility for writing inline Python in webapps

## How it works

whython is a small JavaScript script that does the following:

 - Loads [Pyodide](https://hacks.mozilla.org/2019/04/pyodide-bringing-the-scientific-python-stack-to-the-browser/)
 - Searches for script tags with the content type `application/python`
 - Resolves any remote scripts
 - Opens a new Python scope for each script, and executes it

whython is basically just a wrapper for Pyodide.

## How to use whython

Using whython is simple:

```html
<script src="https://ewpratten.retrylife.ca/whython/static/js/whython.js"></script>
<script type="application/python">
import sys
print(sys.version)
</script>

<!-- Or -->
<script src="https://ewpratten.retrylife.ca/whython/static/js/whython.js"></script>
<script type="application/python" src="/path/to/script.py"></script>
```

Since whython is based on Pyodide, see the [pyodide documentation](https://pyodide.readthedocs.io/en/latest/index.html) for information on loading packages, and accessing DOM.

## What's with the name?

My friends know all too well that I have an obsession with running Python on unusual platforms. It has gotten to the point where every time I say "hey, guess what I got Python to run on?", I'm just met with collective sighs, and generally someone saying "but why?". Also, the **w** was supposed to stand for "web".