export function getAuthLink(service){
    return `api/auth/${service}`;
}
export function getFriends(count){
    return `api/friends/get?count=${count}`;
}
export function logout(){return 'api/auth/logut'}