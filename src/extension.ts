import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    console.log('Congratulations, your extension "md-wysiwyg" is now active!');

    context.subscriptions.push(
        vscode.commands.registerCommand('md-wysiwyg.helloWorld', () => {
            vscode.window.showInformationMessage('Moin Meister!');
        })	
    );
    context.subscriptions.push(
        vscode.commands.registerCommand('md-wysiwyg.moin', async () => {
            let answer = await vscode.window.showInformationMessage('Moin Meister! How r things?', 'Mega', 'Even mega-er');
            
            if (answer === "Mega") { 
                vscode.window.showInformationMessage("Fett!"); 
            } else if (answer === "Even mega-er") { 
                vscode.window.showInformationMessage("Richtig Fett!");
            } else { 
                console.log('Macht der einfach zu....');
            }
        })	
    );
}

export function deactivate() { }
