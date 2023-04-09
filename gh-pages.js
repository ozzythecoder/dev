import { publish } from 'gh-pages';

publish(
 'build', // path to public directory
 {
  branch: 'gh-pages',
  repo: 'https://github.com/ozzythecoder/ozzythecoder.github.io.git', // Update to point to your repository
  user: {
   name: 'August McAllister', // update to use your name
   email: 'august.chm@gmail.com' // Update to use your email
  },
  dotfiles: true
  },
  () => {
   console.log('Deploy Complete!');
  }
);