import { sum } from "./sum";

beforeEach(()=>{console.log('I am beforeEach');})

afterEach(()=>{console.log('cleanup after');})


beforeAll(()=>{console.log('I am beforeAll');})

afterAll(()=>{console.log('cleanup afterAll');})

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });