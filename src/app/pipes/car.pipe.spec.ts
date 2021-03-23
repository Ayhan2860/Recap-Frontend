import { CarPipe } from './car.pipe';

describe('CarPipe', () => {
  it('create an instance', () => {
    const pipe = new CarPipe();
    expect(pipe).toBeTruthy();
  });
});
