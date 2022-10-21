'use strict';
importScripts('/sw-toolbox.js');
//перечисление файлов, которые можно кэшировать
toolbox.precache([
'index.html',
'style.css',
'icon.png',
'myscript.js',
'main.mp4',
'manifest.json',
'sw-toolbox.js',
'sw.js',
'icons'

]);
toolbox.router.get('/templates/new/images/*', toolbox.cacheFirst);
toolbox.router.get('/*', toolbox.networkFirst, { networkTimeoutSeconds: 5 });

