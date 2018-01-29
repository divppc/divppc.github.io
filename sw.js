‘use strict’;

importScripts(‘sw-toolbox.js’);
toolbox.precache(['index.html','assets/css/style.css']);
toolbox.router.get('assets/images/*', toolbox.cacheFirst);
toolbox.router.get('*', toolbox.networkFirst, { networkTimeoutSeconds: 5});