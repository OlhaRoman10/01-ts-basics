enum Status {
  Loading = "loading",
  Success = "success",
  Error = "error"
}

function logStatus(status: Status): void {
  if (status === Status.Loading) {
    console.log("Loading...");
  } else if (status === Status.Success) {
    console.log("Success!");
  } else if (status === Status.Error) {
    console.log("Something went wrong");
  }
}

logStatus(Status.Loading);
logStatus(Status.Success);
logStatus(Status.Error);    
