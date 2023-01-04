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
                name: `${'1.'.green} Create task`
            },
            {
                value: '2',
                name: `${'2.'.green} Task list`
            },
            {
                value: '3',
                name: `${'3.'.green} Completed tasks list`
            },
            {
                value: '4',
                name: `${'4.'.green} Pending tasks list`
            },
            {
                value: '5',
                name: `${'5.'.green} Complete task`
            },
            {
                value: '0',
                name: `${'0.'.green} Exit`
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

    console.log('\n');
    await inquirer.prompt(question);
}

const readInput = async(message) => {
    const question = {
        type: 'input',
        name: 'desc',
        message,
        validate(value){
            return value.length === 0 ? `Please type a message` : true;
        }
    }

    const { desc } = await inquirer.prompt(question);
    return desc;
}

export { 
    inquirerMenu, 
    pause,
    readInput
};
