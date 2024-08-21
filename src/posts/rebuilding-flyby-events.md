---
title: Rebuilding FlyBy Events
date: Sep 18, 2023
description: Identifying potential points for improvement for rebuilding my solo project from Prime Digital Academy.
layout: ../routes/blog/[slug]/+layout.svelte
---

_Art is never finished, only abandoned. - Leonardo Da Vinci_

My solo project at Prime Digital Academy was one of the hardest things I've ever done on such a short timeline. Two months prior, I didn't know what a hook, component, or left join was, yet there I was building a full-stack application. I was and am proud of FlyBy Events. But when visiting the deployed app now, or looking at the source code, I can't help but cringe. useEffect hell, unprotected routes, vanilla JS with no type checking... 😰 It's both humbling and invigorating. On one hand, I wrote some absolute JANK. But on the other hand, I've grown so much in the past six months, that I can see dozens of ways to improve it. So I've decided to identify some key points for improvement, and begin working on FlyBy Events 2.0.

### ✦ Auth & Security

My solo project came pre-loaded with Passport.js middleware and a basic username/password login strategy. Since then I've learned that passwords are not the strongest option for auth, and I also didn't encrypt emails or phone numbers before storing them (!!!!!).

I've since become a much stronger believer in 1) OAuth, and 2) outsourcing auth to a third party. Security being its own vast discipline, I want to keep my focus on building the interface and data logic of the application. It's impossible to understand everything, after all. This is why I'll be using Clerk for user authentication in FlyBy 2.0.

### ✦ TypeScript

I'm a TS convert now, plain and simple. The problems that I had during FlyBy's development would have been identified and fixed almost immediately, had I not been dealing with JavaScript's loose "anything goes" type system. It is frankly baffling to me that the fundamental language of the web doesn't have type checking.

My project starter repo was bootstrapped in `create-react-app`, which has since been deprecated and removed from the React docs. We also used an older, more verbose version of Redux and Redux Sagas, for state management and data fetching respectively. Instead, I'll be rebuilding FlyBy in Next.js, my chosen full-stack React framework, and relying on core React features for state management, such as the Context API.

### ✦ Presentation & UX

One of my stated goals for FlyBy was a frictionless user experience. At the time, I thought this just meant building Facebook Events without the cruft, so I focused on what _not_ to add. But I've learned that it is just as important to give clear feedback to the user. OG FlyBy could have felt a lot better with just something as simple as a loading spinner.

I also relied heavily on Google's Material UI component library, which was quick to set up and easy to use. But after using tools like Tailwind and Sass, I find MUI's prefab components too opinionated, and the ceiling for design flexibility too low. I'll be using Tailwind for FlyBy 2.0, with some light assistance from shadcn-ui, a component library built on the ARIA-compliant Radix UI primitives. There are some wheels that don't need reinventing.

### ✦ Code cleanup

Finally, I'd like to have code that just feels better to read and write, and can be easily iterated upon. Manually-defined routes in App.jsx are just painful compared to file-based routing. Ajax is mainly syntactic sugar for the fetch API, and there are other tools such as useSWR and react query that can supercharge data fetching. And the complex data flow of user interaction -> dispatch -> ajax call -> saga call -> express route -> database query, and then all the way back up the pipe... it's easy for both data and developer to get lost along the way. The user experience of tools like Drizzle ORM and Next's app router have made development quicker and just more fun.

---

So: Next.js, TypeScript, Tailwind, Clerk, Drizzle, and Postgres. This is a very trendy tech stack at the moment, and as a contrarian, that hurts a bit to admit. It's also chock-full of abstractions, and is supported by the work of many library authors that have saved me the chore/lesson of figuring out the hardest parts. I'm also learning Rust at the moment, which doesn't have a difficulty curve as much as a difficulty cliff. So after beating my head against the borrow checker, I think I'll appreciate coming back to this project, to create in a familiar way.
