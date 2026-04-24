function greet() {
  console.log("Hello world!");
}

const user = {
  name: "Rolazar",
  email: "my@email.com",
};

user.address = "555 abc st.";
user.greet = greet;

greet();
user.greet();

export default user;
