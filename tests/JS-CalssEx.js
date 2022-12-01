const Person = (name, age) => {
  let _name = name;
  let _age = age;

  const getName = () => _name;
  const setName = (name) => (_name = name);

  const getAge = () => _age;
  const setAge = (age) => (_age = age);

  const _this = (msg) => {
    switch (msg) {
      case "getName":
        return getName;
      case "setname":
        return setName;
      case "getAge":
        return getAge;
      case "setAge":
        return setAge;
      default:
        throw new Error("Unknown msg: " + msg);
    }
  };

  return {
    send: (msg, ...args) => _this(msg)(...args),
  };
};

const User = (name, age, email) => {
  let _parent = Person(name, age);
  let _email = email;

  const getEmail = () => _email;
  const setEmail = (email) => (_email = email);

  const _this = (msg) => {
    switch (msg) {
      case "getEmail":
        return getEmail;
      case "setEmail":
        return setEmail;
      default:
        return (...args) => _parent.send(msg, ...args);
    }
  };

  return {
    send: (msg, ...args) => _this(msg)(...args),
  };
};

User.super = Person;

// const send = (obj, msg, ...args) => obj(msg)(...args)

const anass = User("Hassan Ashfan Kbit", "24", "hassan@ashfan.kbit");
console.log(anass.send("getName"));

anass.send("setAge", 30);
console.log(anass.send("getAge"));

console.log(anass.send("getEmail"));
