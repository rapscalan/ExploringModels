const Color = require('./Color');

describe('Color Model', () => {
  describe('name', () => {
    it('requires a name', () => {
      const color = new Color({
        red: 255,
        green: 0,
        blue: 0
      });

      const { errors } = color.validateSync();
      expect(errors.name.message).toEqual('Path `name` is required.');
    });
  });

  describe('red', () => {
    it('is required', () => {
      const color = new Color({
        name: 'red',
        green: 0,
        blue: 0
      });

      const { errors } = color.validateSync();
      expect(errors.red.message).toEqual('Path `red` is required.');
    });

    it('is over 0', () => {
      const color = new Color({
        name: 'red',
        red: -1,
        green: 0,
        blue: 0
      });

      const { errors } = color.validateSync();
      expect(errors.red.message).toEqual('Path `red` (-1) is less than minimum allowed value (0).');
    });

    it('is under 256', () => {
      const color = new Color({
        name: 'red',
        red: 256,
        green: 0,
        blue: 0
      });

      const { errors } = color.validateSync();
      expect(errors.red.message).toEqual('Path `red` (256) is more than maximum allowed value (255).');
    });
  });

  describe('green', () => {
    it('is required', () => {
      const color = new Color({
        name: 'red',
        red: 255,
        blue: 0
      });

      const { errors } = color.validateSync();
      expect(errors.green.message).toEqual('Path `green` is required.');
    });

    it('is over 0', () => {
      const color = new Color({
        name: 'red',
        red: 255,
        green: -1,
        blue: 0,
      });

      const { errors } = color.validateSync();
      expect(errors.green.message).toEqual('Path `green` (-1) is less than minimum allowed value (0).');
    });

    it('is under 256', () => {
      const color = new Color({
        name: 'red',
        red: 255,
        green: 256,
        blue: 0
      });

      const { errors } = color.validateSync();
      expect(errors.green.message).toEqual('Path `green` (256) is more than maximum allowed value (255).');
    });
  });

  describe('blue', () => {
    it('is required', () => {
      const color = new Color({
        name: 'red',
        red: 255,
        green: 0
      });

      const { errors } = color.validateSync();
      expect(errors.blue.message).toEqual('Path `blue` is required.');
    });

    it('is over 0', () => {
      const color = new Color({
        name: 'red',
        red: 255,
        green: 0,
        blue: -1
      });

      const { errors } = color.validateSync();
      expect(errors.blue.message).toEqual('Path `blue` (-1) is less than minimum allowed value (0).');
    });

    it('is under 256', () => {
      const color = new Color({
        name: 'red',
        red: 255,
        green: 0,
        blue: 256
      });

      const { errors } = color.validateSync();
      expect(errors.blue.message).toEqual('Path `blue` (256) is more than maximum allowed value (255).');
    });
  });
});
