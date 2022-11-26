export async function handlePermission(permission: PermissionName) {
   const state = await navigator.permissions.query({ name: permission }).then((result) => {
        if (result.state === 'granted') {
            return true;
        } else if (result.state === 'prompt') {
            return true;
        } else if (result.state === 'denied') {
            return false;
        }
        result.addEventListener('change', () => {
            console.log(result.state);
        });
    });
    return state;
}

export function errorFunction() {
    localStorage['authorizedGeoLocation'] = 0;
}

export function checkauthorizedGeoLocation() { // you can use this function to know if geoLocation was previously allowed
    if (typeof localStorage['authorizedGeoLocation'] == "undefined" || localStorage['authorizedGeoLocation'] == "0")
        return false;
    else
        return true;
}

export const storeAcceptedGeoLocation = () => {
    localStorage['authorizedGeoLocation'] = 1;
}
