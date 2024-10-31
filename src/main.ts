import { getApiData } from './gc/store';
import { handleApiData } from './listeners/store';

getApiData();
handleApiData();

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>Hello GC</div>
`