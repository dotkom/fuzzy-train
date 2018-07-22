export function getCookie(name: string): string {
  return (
    document.cookie
      .split(';')
      .map(c => c.trim())
      .filter(cookie => {
        return cookie.substring(0, name.length + 1) === `${name}=`;
      })
      .map(cookie => {
        return decodeURIComponent(cookie.substring(name.length + 1));
      })[0] || ''
  );
}
