# localpilot README

A very simple vscode extension for using codellama via oobabooga text generation webui. Feel free to make issues describing features you want or questions you have about setup.

## How to use

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

The code model will extend the text your currently have highlighted.

### Edit Selection

You will be prompted for a text-based command, then the selected text will be edited according to that command. 


## Requirements

You need to be running a codellama model in text generation webui with the API mode enabled on the same machine for this extension to work. 

## Contributing
Since I just set this up so I could use it, it's not documented well and also may be difficult to set up, feel free to contribute improvements and instructions.


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
