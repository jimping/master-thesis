const path = require('path');
const spawn = require('child_process').spawn;

spawn('npm', ['run', 'a:nuxt:start'], {
    detached: false,
    cwd: path.resolve(__dirname, '../../'),
}).unref();
