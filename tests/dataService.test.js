const ds = require('../services/dataService');

// fake data
const testSample = [
  {
    id: 0,
    name: "S-1",
    properName: "Alpha Stellaris",
    distance: 0.00,
    planets: 1
  }
]

const sample = testSample;
const name = testSample[0]['properName'];
const undefinedName = undefined;

test('expect [testName] to give "Alpha Stellaris" when using getSystem ', async () => {
  let testName = testSample[0]['properName'];
  let name = await ds.getSystem(testName);
  expect(name).toBe(testName);
});

test('expect [testName] to not give Alpha "Stellaris" when using getSystem', async () => {
  let testName = 'undefined';
  let name = await ds.getSystem(testName);
  console.log({ 'name': [testName, name] });
  expect(name).toEqual(expect.not.stringContaining(testName));
})
