# Linus Pauling Electronic Distribution of a Chemistical Element 
> ### [Node.js](https://nodejs.org/en/)

##  Guide file
#### We have the guide.js file, which is at [src/config/guide.js](https://github.com/NicolasLopes7/linus-pauling-electronic-distribution/blob/master/src/config/guide.js), and it contains a JSON array, with the following keys/values: 
```json
[
  { "conf": 2, "name": "1S", "lim": 0 },
  { "conf": 2, "name": "2S", "lim": 0 },
  { "conf": 6, "name": "2P", "lim": 0 },
  { "conf": 2, "name": "3S", "lim": 0 },
  { "conf": 6, "name": "3P", "lim": 0 },
  { "conf": 2, "name": "4S", "lim": 0 },
  { "conf": 10, "name": "3D", "lim": 0 },
  { "conf": 6, "name": "4P", "lim": 0 },
  { "conf": 2, "name": "5S", "lim": 0 },
  { "conf": 10, "name": "4D", "lim": 0 },
  { "conf": 6, "name": "5P", "lim": 0 },
  { "conf": 2, "name": "6D", "lim": 0 },
  { "conf": 14, "name": "4F", "lim": 0 },
  { "conf": 10, "name": "5D", "lim": 0 },
  { "conf": 6, "name": "6P", "lim": 0 },
  { "conf": 2, "name": "7S", "lim": 0 },
  { "conf": 14, "name": "5F", "lim": 0 },
  { "conf": 10, "name": "6D", "lim": 0 },
  { "conf": 6, "name": "7P", "lim": 0 },
];
```
> ### The key "conf" represents the number of electrons in this position.
> ### The key "name" represents the "toString() of this position"
> ### The key "lim" it's an aux key that represents the limit

## [Populate Limits](src/utils/GenerateDistributionString.js)
>#### We have two while nested, the first checks whether the atomic number is less than 0, and the second checks whether the limit is less than the number of electrons in these positions, in the "conf" key. If the second is executed, we have that the "lim" key receives an increase of one unit, and the atomic number receives a decrease by one unit, in addition to a stop condition. And to go through the array, we have a counter being incremented after the execution of the second while, within the first.
```javascript
  populateLimits(guide, atomicNumber) {
    let counter = 0
    while (atomicNumber > 0) {
      while (guide[counter].lim < guide[counter].conf) {
        guide[counter].lim += 1
        atomicNumber = atomicNumber - 1
        if (atomicNumber <= 0) {
          break
        }
      }
      counter += 1
    }
  }
```
## Generate Distribution String
>#### We will through the array, if the limit is bigger than 0, the distribution string will concatenate the name, limit from guide, and return the total distribution. 
```javascript
  generateDistributionString(guide) {
    let distribution = ''
    for (let i = 0; i < guide.length; i++) {
      if (guide[i].lim > 0) {
        distribution += guide[i].name + guide[i].lim + ' '
      } else {
        break
      }
    }
    return distribution
  
  ```
  > For example, the return of atomic number 24 is 1S2 2S2 3P6 4S2 3D4 