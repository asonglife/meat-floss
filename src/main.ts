import { createApp } from 'vue';
import plugin from '../packages/components/index';
import App from './App';

createApp(App).use(plugin).mount('#app');
