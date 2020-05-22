# Electronic Distribution of a Chemistical Element 
> ### commonJS | Vanilla
> ### [Node.js](https://nodejs.org/en/)

##  Logic
### We have the guide.js file, which is at src/config/guide.js, and it contains a JSON array, with the following keys/values: 
```json
[
  { conf: 2, name: "1S", lim: 0 },
  { conf: 2, name: "2S", lim: 0 },
  { conf: 6, name: "2P", lim: 0 },
  { conf: 2, name: "3S", lim: 0 },
  { conf: 6, name: "3P", lim: 0 },
  { conf: 2, name: "4S", lim: 0 },
  { conf: 10, name: "3D", lim: 0 },
  { conf: 6, name: "4P", lim: 0 },
  { conf: 2, name: "5S", lim: 0 },
  { conf: 10, name: "4D", lim: 0 },
  { conf: 6, name: "5P", lim: 0 },
  { conf: 2, name: "6D", lim: 0 },
  { conf: 14, name: "4F", lim: 0 },
  { conf: 10, name: "5D", lim: 0 },
  { conf: 6, name: "6P", lim: 0 },
  { conf: 2, name: "7S", lim: 0 },
  { conf: 14, name: "5F", lim: 0 },
  { conf: 10, name: "6D", lim: 0 },
  { conf: 6, name: "7P", lim: 0 },
];
```
> ### The key "conf" represents the number of electrons in this position.
> ### The key "name" represents the "toString() of this position"
> ### The key "lim" it's an aux key that represents the limit
