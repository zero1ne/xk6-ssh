import ssh from 'k6/x/ssh';

export default function () {
  ssh.connect({
    username: 'YOUR_USERNAME',
	  host: "YOUR_HOST",
    password: "YOUR_PASSWORD",
	  port: 22
  })
  console.log(ssh.run(['pwd', 'ls -la']));
}