const numbers: number[] = [1, 2, 3, 4, 5];
console.log(numbers);
const sum: number = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(`The sum of the numbers is: ${sum}`);


enum Role {
  Admin = "ADMIN",
  User = "USER",
  Guest = "GUEST"
}
console.log(Object.values(Role));

type Status = "loading" | "success" | "error";

const getStatusMessage = (status: Status) => {
  return `Current status: ${status}`;
}
console.log(getStatusMessage("success"));