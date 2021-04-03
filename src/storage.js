const storage = window.localStorage;
const KEY = "rollData";

export function loadRolls() {
  const data = storage.getItem(KEY);

  if (!data) return [];

  return JSON.parse(data);
}

export function saveRolls(rolls) {
  const data = JSON.stringify(rolls);

  storage.setItem(KEY, data);
}
