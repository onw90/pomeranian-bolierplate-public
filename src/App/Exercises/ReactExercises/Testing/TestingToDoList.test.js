import { getNumberOfTasks } from '.';
import { getRandomTaskName } from '.';
import { getRandomInt } from '.';
import { TestingToDoList } from '.';
import { render, screen, within, waitFor } from '@testing-library/react';

describe('getNumberOfTasks', () => {
  test('returns 0 for an empty array', () => {
    expect(getNumberOfTasks([])).toBe(0);
  });
  test('throws and Error if parameter is undefined', () => {
    expect(() => getNumberOfTasks()).toThrow(/missing/);
  });
});

describe('getRandomTaskName', () => {
  it('returns first element from test data', () => {
    const randomMock = jest.fn().mockReturnValue(0);
    expect(getRandomTaskName(randomMock)).toBe('Grocery Shopping');
  });
});

describe('getRandomInt', () => {
  beforeAll(() => {
    jest.spyOn(Math, 'random');
  });
  afterAll(() => {
    jest.resetAllMocks();
  });

  it('returns 0 when random is close to zero', () => {
    // Math.random.mockImplementation(() => 0.999)
    Math.random.mockReturnValue(0.00001);
    expect(getRandomInt(8)).toBe(0);
  });
  it('returns 0 when random is zero', () => {
    // Math.random.mockImplementation(() => 0.999)
    Math.random.mockReturnValue(0);
    expect(getRandomInt(8)).toBe(0);
  });
});

describe('Todo List', () => {
  it('renders with header', () => {
    render(<TestingToDoList />);
    const heading = screen.getByRole('heading', {
      name: /todo list/i,
    });
    expect(heading).toBeInTheDocument();
    //screen.logTestingPlaygroundURL(); // jak strona wyglada w tym momencie (kod asynchroniczny wiec nie bedzie wszystkeigo)
  });

  it('returns list with elements', async () => {
    render(<TestingToDoList />);
    await waitFor(() => {
      screen.getAllByRole('button', {
        name: /delete/i,
      });
    });
    // expect(heading).toBeInTheDocument();
    screen.logTestingPlaygroundURL();
  });
});
