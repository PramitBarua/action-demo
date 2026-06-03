export function setupCounter(element: HTMLButtonElement) {
  console.log("Counter is being set up");
  let counter = 0;
  const setCounter = (count: number) => {
    counter = count;
    element.innerHTML = `Count is ${counter}`;
  };
  element.addEventListener("click", () => setCounter(counter + 1));
  setCounter(0);
}
