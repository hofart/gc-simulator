import { MemoryObject } from "./MemoryObject";

export class GarbageCollector {
  // é onde os objetos são armazenados e gerenciados pelo coletor de lixo
  private _heap: MemoryObject[] = [];

  constructor() {
    this._heap = [];
  }

  // método para alocar o objeto na memória
  allocate(obj: MemoryObject): void {
    this._heap.push(obj);
  }

  // método para expor o head e testar a coleta de lixo
  getHeap() {
    return this._heap;
  }

  markAndSweep(rootObj: MemoryObject[]): void {
    // Etapa de marcação (Mark): Marca todos os objetos acessíveis a partir dos roots
    const mark = (obj: MemoryObject) => {
      if (!obj.isMarked) {
        obj.isMarked = true;
        obj.references.forEach((ref) => mark(ref)); // recursivamente marca todos os objetos referenciados
      }
    };

    // Marca todos os objetos acessíveis a partir dos roots
    rootObj.forEach((obj) => mark(obj));

    // Etapa de varredura (Sweep): Remove todos os objetos não marcados
    this._heap = this._heap.filter((obj) => {
      if (!obj.isMarked) {
        return false;
      }
      obj.isMarked = false;
      return true;
    });

    console.log('Heap após a coleta de lixo:', this._heap);
  }
}