const count = signal(0);

// Signals are getter functions - calling them reads their value.
console.log('The count is: ' + count());
count.set(3);
// Increment the count by 1.
count.update(value => value + 1);
const showCount = signal(false);
const count = signal(0);

const count: WritableSignal<number> = signal(0);
const doubleCount: Signal<number> = computed(() => count() * 2);
doubleCount.set(3);

const conditionalCount = computed(() => {
  if (showCount()) {
    return `The count is ${count()}.`;
  } else {
    return 'Nothing to see here!';
  }
});
effect(() => {
  console.log(`The current count is: ${count()}`);
});
