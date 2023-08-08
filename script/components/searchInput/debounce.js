/**
 * @description Delays the execution of a function.
 * @param {function} callback - The callback function that will be delayed.
 *
 */

export function debounce(callback) {
  let timer;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      callback();
    }, 200);
  };
}
