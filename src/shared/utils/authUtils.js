const key = 'AuthorizationdData';

export function getAuthorizationData() {
  const group = localStorage.getItem(key);
  return JSON.parse(group) || '';
}

export function setAuthorizationData(group) {
  if (group === undefined) {
    localStorage.setItem(key, '');
    return;
  }
  localStorage.setItem(key, JSON.stringify(group));
}
