console.log('prompt connected');
// alert('ki khobor dosto');
const showAlert = () => {
  const num = Math.random() * 10;
  console.log(num);
  if (num < 5) {
    alert('ki khobor dosto');
  }
};

const askSomething = () => {
  const decision = confirm('Are you coming to the picnic?');
  console.log(decision);
  if (decision === true) {
    alert('Dosto 500 tk bkash kor');
  } else {
    alert('DGM!!! Dure giya mor');
  }
};

const getUserInfo = () => {
  const name = prompt('What is your name?');
  console.log(name);
  if(!!name){
    console.log('Welcome here', name)
  }
};
