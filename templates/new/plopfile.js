export default (plop) => {
    plop.setGenerator('component', {
        description: 'Generate a new component',
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: 'What is your component name? (PascalCase)',
                default: '',
            },
        ],
        actions: (data) => {
            const basename = data?.name;
            const basePath = '../../src/components';
            const componentPath = `${basePath}/{{pascalCase name}}`;
            const componentSrcPath = `${componentPath}`;
            const componentStoriesPath = `${componentPath}`;
            if (
                !basename ||
                basename.trim().length < 2 ||
                !/[A-Za-z0-9]+/.test(basename) ||
                !/^[A-Z]/.test(basename)) {
                console.error(
                    'Invalid component name. Component names must: \n' +
                    '* PascalCase\n' +
                    '* Start with a letter\n' +
                    '* Be longer than 1 character.\n' +
                    'Please try again.'
                );
                return [];
            }
            return [
                {
                    type: 'add',
                    skipIfExists: true,
                    path: `${componentSrcPath}/{{pascalCase name}}.tsx`,
                    templateFile: 'templates/component.tsx.hbs',
                },
                {
                    type: 'add',
                    skipIfExists: true,
                    path: `${componentSrcPath}/{{pascalCase name}}.module.css`,
                    templateFile: 'templates/component.css.hbs',
                },
                {
                    type: 'add',
                    skipIfExists: true,
                    path: `${componentStoriesPath}/{{pascalCase name}}.stories.tsx`,
                    templateFile: 'templates/component.stories.tsx.hbs',
                },
                {
                    type: 'add',
                    skipIfExists: true,
                    path: `${componentStoriesPath}/{{pascalCase name}}Model.test.ts`,
                    templateFile: 'templates/viewModel.test.ts.hbs',
                },
                {
                    type: 'add',
                    skipIfExists: true,
                    path: `${componentStoriesPath}/{{pascalCase name}}Model.ts`,
                    templateFile: 'templates/viewModel.ts.hbs',
                },
                {
                    type: 'add',
                    skipIfExists: true,
                    path: `${componentPath}/index.ts`,
                    templateFile: 'templates/component.index.ts.hbs',
                },
            ];

        }
    })
}
