import inquirer from 'inquirer';
import colors from 'colors';

const questions = [
    {
        type: 'list',
        name: 'option',
        message: 'What do you want to do?',
        choices: [
            {
                value: 1,
                name: `${'1.'.green} Search City`
            },
            {
                value: 2,
                name: `${'2.'.green} History`
            },
            {
                value: 0,
                name: `${'0.'.green} Exit`
            }
        ]
    }
];

const inquirerMenu = async () => {
    console.clear();
    console.log('================'.green);
    console.log('Select an option'.green);
    console.log('================\n'.green);

    const { option } = await inquirer.prompt(questions);
    return option;
}

const pause = async () => {
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

const readInput = async (message) => {
    const question = {
        type: 'input',
        name: 'desc',
        message,
        validate(value) {
            return value.length === 0 ? `Please type a message` : true;
        }
    }

    const { desc } = await inquirer.prompt(question);
    return desc;
}

const placesList = async (places = []) => {
    const choices = places.map((place, i) => {
        const idx = `${i + 1}.`.green;
        return {
            value: place.id,
            name: `${idx} ${place.name}`
        }
    });

    choices.unshift({
        value: '0',
        name: '0.'.green + 'Cancel'
    });

    const question = [{
        type: 'list',
        name: 'id',
        message: 'Select place',
        choices
    }]

    const { id } = await inquirer.prompt(question);
    return id;
}

export {
    inquirerMenu,
    pause,
    readInput,
    placesList
};
