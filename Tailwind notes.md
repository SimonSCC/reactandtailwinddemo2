https://tailwindcss.com/docs/installation

npm init
npm install -D tailwindcss
npx tailwindcss init

Configure template paths: content: ["./src/**/*.{html,js}"],

Add the @tailwind directives for each of Tailwind’s layers to your main CSS file.
@tailwind base;
@tailwind components;
@tailwind utilities;

Start the tailwind CLI build process
npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch

The biggest maintainability concern when using a utility-first approach is managing commonly repeated utility combinations.

This is easily solved by extracting components and partials, and using editor and language features like multi-cursor editing and simple loops.

@layer components {
.btn-primary {
@apply py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75;
}
}

Whatever you do, don’t use @apply just to make things look “cleaner”. Yes, HTML templates littered with Tailwind classes are kind of ugly. Making changes in a project that has tons of custom CSS is worse.

If you start using @apply for everything, you are basically just writing CSS again and throwing away all of the workflow and maintainability advantages Tailwind gives you

If you’re going to use @apply, use it for very small, highly reusable things like buttons and form controls — and even then only if you’re not using a framework like React where a component would be a better choice.

Doing:
https://www.youtube.com/watch?v=pfaSUYaSgRo

## Usage with React

https://www.youtube.com/watch?v=pfaSUYaSgRo
https://tailwindcss.com/docs/guides/create-react-app

Install dependencies

npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

Configure your template paths
Add the paths to all of your template files in your tailwind.config.js file.

content: [
"./src/**/*.{js,jsx,ts,tsx}",
],

Add the Tailwind directives to your CSS Add the @tailwind directives for each of Tailwind’s layers to your ./src/index.css file.
@tailwind base;
@tailwind components;
@tailwind utilities;

npm run start
done...
