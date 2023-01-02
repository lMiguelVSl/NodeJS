import inquirer from 'inquirer';
import colors from 'colors';

const questions = [
    {
        type: 'list',
        name: 'option',
        message: 'What do you want to do?',
        choices: [
            {
                value: '1',
                name: '1. Create task'
            },
            {
                value: '2',
                name: '2. Task list'
            },
            {
                value: '3',
                name: '3. Completed tasks list'
            },
            {
                value: '4',
                name: '4. Pending tasks list'
            },
            {
                value: '5',
                name: '5. Complete task'
            },
            {
                value: '0',
                name: '0. Exit'
            },
        ]
    }
];

const inquirerMenu = async() => {
    console.clear();
    console.log('================'.green);
    console.log('Select an option'.green);
    console.log('================\n'.green);

    const {option} = await inquirer.prompt(questions);
    return option;
}

const pause = async() => {
    const question = [
        {
            type: 'input',
            name: 'enter',
            message: `\nPress ${'ENTER'.green} to continue\n`
        }
    ];

    await inquirer.prompt(question);
}

export { inquirerMenu, pause };
