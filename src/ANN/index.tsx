import { Network, Layer } from 'synaptic'; 

export default class ANN extends Network {
  constructor(input: number, hidden: number, output: number) {
    super();
    var inputLayer = new Layer(input);
    var hiddenLayer = new Layer(hidden);
    var outputLayer = new Layer(output);
    inputLayer.project(hiddenLayer);
    hiddenLayer.project(outputLayer);
    this.set({
      input: inputLayer,
      hidden: [hiddenLayer],
      output: outputLayer
    });
  }
}