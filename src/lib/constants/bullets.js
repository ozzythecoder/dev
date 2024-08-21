const princeSymbolString = `<img style="height:1.2rem; margin-bottom:-0.2rem" src="./icons/Prince-Love-Symbol.svg" />`;
const enbyFlagString = `<img style="height:0.8rem;" src="./icons/nonbinary-flag.png" alt="non-binary pride flag" />`;

const introBullets = [
    `📌${princeSymbolString} Minneapolis, Minnesota`,
    '🇸🇪 Swedish-American',
    `${enbyFlagString} non-binary (they/them)`,
    '💻 full-stack software developer',
    '🎹 musician',
    '🎮 video game enjoyer',
    '💡 extrovert',
    '🛌 homebody',
    '🦀️ cancer sun'
];

const skillBullets = [
    {
        url: getShield('typescript-eeeeee', 'typescript', '3277c6'),
        name: 'TypeScript'
    },
    {
        url: getShield('react-222222', 'react', '57c3dc'),
        name: 'React'
    },
    {
        url: getShield('svelte-fc3f00', 'svelte'),
        name: 'Svelte'
    },
    {
        url: getShield('next.js-black', 'nextdotjs'),
        name: 'Next.js'
    },
    {
        url: getShield('postgres-699eca', 'postgresql'),
        name: 'Postgres'
    },
    {
        url: getShield('drizzle_orm-black', 'drizzle'),
        name: 'Drizzle ORM'
    },
    {
        url: getShield('scss-c7689a', 'sass'),
        name: 'SCSS'
    },
    {
        url: getShield('tailwindcss-blue', 'tailwindcss'),
        name: 'Tailwind'
    },
    {
        url: getShield('figma-333333', 'figma'),
        name: 'Figma'
    },
    {
        url: getShield('nest.js-red', 'nestjs'),
        name: 'Nest.js'
    },
    {
        url: getShield('digitalocean-darkblue', 'digitalocean'),
        name: 'DigitalOcean'
    },
    {
        url: getShield('vercel-black', 'vercel'),
        name: 'Vercel'
    },
    {
        url: getShield('git-222222', 'git'),
        name: 'Git'
    },
    {
        url: getShield('github-000000', 'github'),
        name: 'GitHub'
    },
    {
        url: getShield('shell_scripting-blue', 'zsh'),
        name: 'Shell Scripting'
    },
    {
        url: getShield('redis-ff1111', 'redis'),
        name: 'Redis'
    },
    {
        url: getShield('jira-0a51cf', 'jira'),
        name: 'Jira',
    },
    {
        url: getShield('neovim-519942', 'neovim'),
        name: 'NeoVim'
    },
    {
        url: getShield('obsidian-7d3aed', 'obsidian'),
        name: 'Obsidian'
    }
]

function getShield(name, logo, logoColor = 'white') {
    return `https://img.shields.io/badge/${name}?style=for-the-badge&logo=${logo}&logoColor=${logoColor}`;
}

export { introBullets, skillBullets }