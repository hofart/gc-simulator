export class MemoryObject {
  id: number;
  references: MemoryObject[];
  isMarked: boolean = false;

  constructor(id: number, references: MemoryObject[] = []) {
    this.id = id;
    this.references = references;
  }
}