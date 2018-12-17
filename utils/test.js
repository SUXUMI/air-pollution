export function limits(obj1) {
  for (const key of Object.keys(obj1)) {
    console.log(key, obj1(key));
  }
}