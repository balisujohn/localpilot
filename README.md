# localpilot README

![A gif showing localpilot being used to generate an is_prime function in python from its header.](https://github.com/balisujohn/localpilot/assets/20377292/b3952e63-5e26-4bde-9878-9b307f5902d3)

A very simple vscode extension for using codellama via oobabooga text generation webui. Doesn't require a GPU; recommended for use with https://huggingface.co/TheBloke/CodeLlama-13B-Python-GGML or https://huggingface.co/TheBloke/WizardCoder-Python-13B-V1.0-GGML. Feel free to make issues describing features you want or questions you have about setup.

## How to use

### Quick Install
If you want to set it up with as little hassle as possible, you can install via the pre-built vsix files provided in the most recent release:

Go to [`Releases`](https://github.com/balisujohn/localpilot/releases/), then download the latex vsix file and install in from the vscode/vscodium extensions tab.  Note this is in beta and really unpolished.

### Local Build


If you want to modify the extension yourself, you likely will want to build from source. You can do so as follows:

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

Both `extendSelection` and `editSelection` become available in command palette. I recommend binding them to ctrl-q and ctrl-e respectively. 

### Extend Selection

The code model will extend the text you currently have highlighted.

### Edit Selection

You will be prompted for a text-based command, then the selected text will be edited according to that command. 


## Requirements

You need to be running a codellama model in text generation webui with the API mode enabled on the same machine for this extension to work. 

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
