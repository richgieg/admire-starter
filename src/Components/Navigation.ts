import { a, div } from "admire";

export const Navigation = () =>

div([
    a('home', { href: '/' }), ' | ',
    a('about', { href: '/about' }), ' | ',
    a('contact', { href: '/contact' }),
]);
