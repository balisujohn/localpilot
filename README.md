# localpilot README

A very simple vscode extension for using codellama via oobabooga text generation webui. Doesn't require a GPU; recommended for use with https://huggingface.co/TheBloke/CodeLlama-13B-Python-GGML. Feel free to make issues describing features you want or questions you have about setup.

## How to use

Tested on Ubuntu with `node` version v14.20.0 and `npm` version 6.14.17

First clone the repository, then run 
````
npm install
npm install -g @vscode/vsce
````

Then run:
````
vsce package
````
Which will generate a vsix file. 

You can load this file directly from vscode or vscodium as an extension.

## Features

You select the text that is to be the prompt, then you call the "extendSelection" command and 10 characters are generated with codellama and appended. 

## Requirements

You need to be running a codellama model in text generation webui with the API mode enabled on the same machine for this extension to work. In addition, I recommend mapping ctrl-Q to the extendSelection command, since it isn't mapped to a keyboard command by default.

## Contributing
Feel free to contribute improvements and instructions, also feel free to post feature requests as issues.


## License
MIT


## Credits
Template generated with https://github.com/Microsoft/vscode-generator-code



### Template Generator License
vscode-generator-code

The MIT License (MIT)

Copyright (c) Microsoft Corporation

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
