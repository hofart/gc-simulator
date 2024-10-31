import { GarbageCollector } from "./GarbageCollector";
import { MemoryObject } from "./MemoryObject";

const gc = new GarbageCollector();

export async function getApiData() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();

    // alocando cada post como um MemoryObject no heap
    const memoryObjcts = data.map((post: any, index: number) => new MemoryObject(index, []));

    // aloca todos os objetos no heap
    memoryObjcts.forEach((obj: MemoryObject) => gc.allocate(obj));

    console.log('Heap após a alocação:', gc.getHeap());

    // simulando a coleta de lixo dos objetos roots
    const roots = [memoryObjcts[0], memoryObjcts[1]]; // roots são os dois primeiros objetos

    // executa a coleta de lixo
    gc.markAndSweep(roots);
  } catch (error) {
    console.error('There has been a problem with your fetch operation:', error);
  }
}