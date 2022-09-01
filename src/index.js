import { runCode } from './exercise';

const array = [1, 2, -3, -1, 2, 4, 4, 1, 45, -1];
const rta = runCode(array);

document.getElementById("app").innerHTML = `
<h1>Challenge</h1>
<p>Sample Array: ${array}</p>
<p>Rta: ${rta}</p>`;
