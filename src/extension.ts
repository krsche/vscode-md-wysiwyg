import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	console.log('Congratulations, your extension "md-wysiwyg" is now active!');

	let disposable = vscode.commands.registerCommand('md-wysiwyg.helloWorld', () => {
		vscode.window.showInformationMessage('Moin Meister!');
	});

	context.subscriptions.push(disposable);
}

export function deactivate() { }
