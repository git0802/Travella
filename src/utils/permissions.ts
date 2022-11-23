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