import { defineComponent, ref } from 'vue';
export default defineComponent({
  name: 'Input',
  setup() {
    const inputRef = ref('input');
    const handleInput = (event: InputEvent | CompositionEvent | Event) => {
      const target = event.target as HTMLInputElement;
      inputRef.value = target.value;
      console.log(inputRef.value);
    };
    return () => {
      return (
        <input
          value={inputRef.value}
          onInput={(event: Event) => handleInput(event)}
        />
      );
    };
  },
});
