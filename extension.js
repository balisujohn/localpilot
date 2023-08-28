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

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json
	let extendSelectionCommand = vscode.commands.registerCommand('localpilot.extendSelection', function () {
		// The code you place here will be executed every time your command is executed

		let editor = vscode.window.activeTextEditor;
		let selectedText = editor.document.getText(editor.selection);
	
		let HOST = 'localhost:5000'
		let URI = `http://${HOST}/api/v1/generate`

		//derived from https://github.com/oobabooga/text-generation-webui/blob/main/api-examples/api-example.py
		const request = {
			'prompt': selectedText,
			'max_new_tokens': 10,
			'auto_max_new_tokens': false,
			'preset': 'None',
			'do_sample': true,
			'temperature': 0.1,
			'top_p': 0.1,
			'typical_p': 1,
			'epsilon_cutoff': 0,  
			'eta_cutoff': 0,
			'tfs': 1,
			'top_a': 0,
			'repetition_penalty': 1.18,
			'repetition_penalty_range': 0,
			'top_k': 40,
			'min_length': 0,
			'no_repeat_ngram_size': 0,
			'num_beams': 1,
			'penalty_alpha': 0,
			'length_penalty': 1,
			'early_stopping': false,
			'mirostat_mode': 0,
			'mirostat_tau': 5,
			'mirostat_eta': 0.1,
			'guidance_scale': 1,
			'negative_prompt': '',
			'seed': -1,
			'add_bos_token': true,
			'truncation_length': 2048,
			'ban_eos_token': false,
			'skip_special_tokens': true,
			'stopping_strings': []
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
			let resultText = data['results'][0]['text'];
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
		let URI = `http://${HOST}/api/v1/generate`

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
			'max_new_tokens': selectedText.length,
			'auto_max_new_tokens': false,
			'preset': 'None',
			'do_sample': true,
			'temperature': 0.1,
			'top_p': 0.1,
			'typical_p': 1,
			'epsilon_cutoff': 0,  
			'eta_cutoff': 0,
			'tfs': 1,
			'top_a': 0,
			'repetition_penalty': 1.18,
			'repetition_penalty_range': 0,
			'top_k': 40,
			'min_length': 0,
			'no_repeat_ngram_size': 0,
			'num_beams': 1,
			'penalty_alpha': 0,
			'length_penalty': 1,
			'early_stopping': false,
			'mirostat_mode': 0,
			'mirostat_tau': 5,
			'mirostat_eta': 0.1,
			'guidance_scale': 1,
			'negative_prompt': '',
			'seed': -1,
			'add_bos_token': true,
			'truncation_length': 2048,
			'ban_eos_token': false,
			'skip_special_tokens': true,
			'stopping_strings': []
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
			let resultText = data['results'][0]['text'];
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
