import { getCookie } from 'src/utilities/cookie';

export function redirectIfUserWantsRedirect(): void {
  const redirect = getCookie('AlwaysRedirectToOW');
  if (redirect) {
    // @ToDo: Check if this should use history API; but we don't really want it to be stored in browser history.
    document.location.assign('https://online.ntnu.no');
  }
}
