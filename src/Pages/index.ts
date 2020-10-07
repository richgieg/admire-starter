import { body, div, h1, head, html } from 'admire';
import { Navigation } from '../Components/Navigation';

export default () =>

html([
    head(),
    body([
        Navigation(),
        h1('Welcome'),
        div('hello world'),
    ]),
]);
