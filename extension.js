// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');
const {default : fetch} = require('node-fetch');
// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "localpilot" is now active!');
	
	//unused but left because it's useful for debugging
	//let localpilotLog = vscode.window.createOutputChannel("Localpilot Log");


	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json
	let extendSelectionCommand = vscode.commands.registerCommand('localpilot.extendSelection', function () {
		// The code you place here will be executed every time your command is executed

		let editor = vscode.window.activeTextEditor;
		let selectedText = editor.document.getText(editor.selection);
	
		let HOST = 'localhost:5000'
		let URI = `http://${HOST}/v1/completions`

		//derived from https://github.com/oobabooga/text-generation-webui/blob/main/api-examples/api-example.py
		const request = {
			'prompt': selectedText,
			"max_tokens": 10,
			"temperature": 1,
			"top_p": 0.9,
			"seed": 10
		}
		
		fetch(URI, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(request)
		})
		.then(response => response.json())
		.then(data => {
			let resultText = data.choices[0].text;

			vscode.window.activeTextEditor.edit(edit => {
				edit.insert(editor.selection.end, resultText)
			});
		})
		.catch(error => {
			console.error('Error:', error);
		});
		
		  
	});
	

	context.subscriptions.push(extendSelectionCommand);


	let editSelectionCommand = vscode.commands.registerCommand('localpilot.editSelection', function () {
		// The code you place here will be executed every time your command is executed

		let editor = vscode.window.activeTextEditor;
		let selectedText = editor.document.getText(editor.selection);
	
		let HOST = 'localhost:5000'
		let URI = `http://${HOST}/v1/completions`

		let options = {
			prompt: "Enter Edit Instructions", 
			placeHolder: "",
		}

		vscode.window.showInputBox(options).then(response =>
		{
			if (response)
			{
				//derived from https://github.com/oobabooga/text-generation-webui/blob/main/api-examples/api-example.py
		const request = {
			'prompt': "ORIGINAL VERSION:\n" + selectedText + "\n Below is the above code according to the following instructions. Don't add comments.: \n"+response+"\nEDITED VERSION:\n",
			'max_tokens': selectedText.length,
			"temperature": 1,
			"top_p": 0.9,
			"seed": 10
		}
		
		fetch(URI, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(request)
		})
		.then(response => response.json())
		.then(data => {
			let resultText = data.choices[0].text
			vscode.window.activeTextEditor.edit(edit => {
				edit.replace(editor.selection, resultText)
			});
		})
		.catch(error => {
			console.error('Error:', error);
		});
			}
		});

		
		  
	});


	context.subscriptions.push(editSelectionCommand);


}

// This method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
