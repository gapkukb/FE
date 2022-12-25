import { debounce } from 'lodash-es';
import { creator } from './throttle';

//<button v-debounce:1000.click="handler">点击</button>
export default creator(debounce);
