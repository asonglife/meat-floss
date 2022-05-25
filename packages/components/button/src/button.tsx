import { defineComponent } from 'vue';
export default defineComponent({
  name: 'Button',
  setup() {
    const handleClick = (event: MouseEvent, param: string) => {
      console.log(event, param);
    };
    return () => {
      return (
        <button onClick={(e) => handleClick(e, 'mf-button')}>测试按钮</button>
      );
    };
  },
});
