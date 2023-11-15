const { Triangle, Square, Circle } = require('./yourShapeFile'); // Update this with your actual file path

describe('Shape classes', () => {
  describe('Triangle', () => {
    it('should set color correctly', () => {
      const triangle = new Triangle();
      triangle.setColor('red');
      expect(triangle.color).toBe('red');
    });

    it('should render triangle with correct color', () => {
      const triangle = new Triangle();
      triangle.setColor('blue');
      expect(triangle.render()).toBe('<polygon points="150, 18 244, 182 56, 182" fill="blue"/>');
    });
  });

  describe('Square', () => {
    it('should set color correctly', () => {
      const square = new Square();
      square.setColor('green');
      expect(square.color).toBe('green');
    });

    it('should render square with correct color', () => {
      const square = new Square();
      square.setColor('yellow');
      expect(square.render()).toBe('<rect x="73" y="40" width="160" fill="yellow" />');
    });
  });

  describe('Circle', () => {
    it('should set color correctly', () => {
      const circle = new Circle();
      circle.setColor('purple');
      expect(circle.color).toBe('purple');
    });

    it('should render circle with correct color', () => {
      const circle = new Circle();
      circle.setColor('orange');
      expect(circle.render()).toBe('<circle cx="150" cy="115" r="80" fill="orange" />');
    });
  });
});