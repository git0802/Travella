import { precacheAndRoute } from 'workbox-precaching'

declare let self: ServiceWorkerGlobalScope
// @ts-ignore 
self.addEventListener('message', (event) => {
    // @ts-ignore 
    if (event.data && event.data.type === 'SKIP_WAITING') self.skipWaiting()
})
// self.__WB_MANIFEST is default injection point
precacheAndRoute(self.__WB_MANIFEST)
