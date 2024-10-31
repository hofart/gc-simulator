type EventType = 'success' | 'error' | 'empty';

type EventListenerRecord = {
  eventType: EventType;
  handler: () => void;
};

export class EventListenerManager {
  private listeners: EventListenerRecord[] = [];

  // adiciona um listener para um tipo de evento
  addListener(eventType: EventType, handler: () => void): void {
    this.listeners.push({ eventType, handler });
  }

  // remove um listener para um tipo de evento - limpando todos os linteners de uma vez só

  removeListener(): void {
    this.listeners = [];
  }

  // dispara um evento para todos os listeners registrados
  trigger(eventType: EventType): void {
    this.listeners.forEach((listener) => {
      if (listener.eventType === eventType) {
        listener.handler();
      }
    });
  }
}