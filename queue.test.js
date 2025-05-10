const Queue = require('./queue')

describe('Queue', () => {
  it('Deve criar uma fila', () => {
    const queue = new Queue();

    expect(queue).toEqual({ elements: [] });
  })

  it('Deve ser capaz de calcular o tamanho da fila', () => {
    const queue = new Queue();

    queue.add('Morango');
    queue.add('Banana');
    queue.add('Goiaba');
    queue.add('Manga');
    queue.add('Maça');
    queue.add('Mamão');

    expect(queue.size()).toEqual(6);
  })

  it('Deve ser capaz de adicionar um item na fila', () => {
    const queue = new Queue();

    expect(queue.add('Uva')).toEqual(1);
  })

  it('Deve escolher o primeiro item da fila', () => {
    const queue = new Queue();

    queue.add('Morango');
    queue.add('Banana');
    queue.add('Goiaba');
    queue.add('Manga');
    queue.add('Maça');
    queue.add('Mamão');

    expect(queue.peek()).toEqual('Morango');
  })

  it('Deve remover o primeiro item da fila', () => {
    const queue = new Queue();
    queue.add('Morango');
    queue.add('Banana');
    queue.add('Goiaba');
    queue.add('Manga');
    queue.add('Maça');
    queue.add('Mamão');

    expect(queue.dequeue()).toEqual('Morango');
  })
})