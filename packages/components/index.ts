import { App } from 'vue';
import Button from './button/src/button';
import Input from './input/src/input';

const componentPrefix = 'mf';
const components = [Button, Input];

export default {
  install: (app: App) => {
    components.forEach((component) => {
      const { name } = component;
      const componentName = componentPrefix + name;
      app.component(componentName, component);
    });
  },
};
