# localpilot README

A very simple vscode extension for using codellama via oobabooga text generation webui. Feel free to make issues describing features you want or questions you have about setup.

## How to use
There's no vsix file for this, the way I run it is by opening the top level folder of the repo in vscodium(alternatively vscode), then from the `Run` menu selecting `Start Debugging`. A contribution to provide a vsix file or strategy to generate it would be welcome, since I'm not sure how to generate one from this template-derived repo.

## Features

You select the text that is to be the prompt, then you call the "extendSelection" command and 10 characters are generated with codellama and appended. 

## Requirements

You need to be running a codellama model in text generation webui with the API mode enabled on the same machine for this extension to work. In addition, I recommend mapping ctrl-Q to the extendSelection command, since it isn't mapped to a keyboard command by default.

## Contributing
Since I just set this up so I could use it, it's not documented well and also may be difficult to set up, feel free to contribute improvements and instructions.
