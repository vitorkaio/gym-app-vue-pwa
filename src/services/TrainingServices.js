/* eslint-disable no-console */

class TrainingServices {

  // Salva o treino que está no topo
  static saveTraining(id) {
    localStorage.setItem('training_id', id);
  }

  // Retorna o treino salvo, que está no topo
  static getTraining() {
    return localStorage.getItem('training_id');
  }

  // Coloca o item no topo da pilha que tenha o mesmo id que foi passado...
  static orderList(id, list) {
    if (!list) return [];
    let stop = false;
    do {
      if (list[0]._id === id) return [...list];
      const item = list.shift();
      list.push(item);
    } while (!stop);
  }

}

export default TrainingServices;
