import { EventListenerManager } from "./EventListenerManager";

const listenerManager = new EventListenerManager();

export async function handleApiData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");

    if (!response.ok) throw new Error("API error");

    const data = await response.json();

    // dispara o evento de dados vazios
    if (data.length === 0) listenerManager.trigger("empty");

    // dispara o evento de sucesso
    listenerManager.trigger("success");
  } catch (error) {
    // dispara o evento de erro
    listenerManager.trigger("error");
  } finally {
    // remove todos os listeners para evitar vazamento de memória
    listenerManager.removeListener();
    console.log("Listeners removidos!");
  }
}

listenerManager.addListener("success", () => {
  console.log("Dados carregados com sucesso!");
});

listenerManager.addListener("error", () => {
  console.error("Erro ao carregar os dados!");
});

listenerManager.addListener("empty", () => {
  console.warn("Nenhum dado foi encontrado!");
});
