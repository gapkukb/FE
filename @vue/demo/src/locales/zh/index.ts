import { importAll } from 'shared/utils';
const locales = import.meta.glob('./*.ts', { eager: true });
export default importAll(locales);
