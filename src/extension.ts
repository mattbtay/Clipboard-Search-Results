import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

	
	let disposable = vscode.commands.registerCommand('searched.clipboardSearchFiles', async () => {
		const searchResults = await vscode.workspace.findFiles('**');
			const filePaths = searchResults.map(fileUri => fileUri.fsPath);
			const resultText = filePaths.join('\n');
			vscode.env.clipboard.writeText(resultText);
			vscode.window.showInformationMessage('Search results copied to clipboard!');
		vscode.window.showInformationMessage('Hello World from test!');
	});
	

	context.subscriptions.push(disposable);
}

export function deactivate() {}
