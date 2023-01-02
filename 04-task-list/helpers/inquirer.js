import inquirer from 'inquirer';
import colors from 'colors';

const questions = [
    {
        type: 'list',
        name: 'option',
        message: 'What do you want to do?',
        choices: ['opt1','opt2','opt3']
    }
];

const inquirerMenu = async() => {
    console.log('================'.green);
    console.log('Select an option'.green);
    console.log('================\n'.green);

    return await inquirer.prompt(questions);
}

export { inquirerMenu };
