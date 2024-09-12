export default function Login({ setIsLoggedIn }) {
  return (
    <div className="login">
      <h1>Login</h1>
      <button onClick={() => setIsLoggedIn(true)}>Login</button>
    </div>
  );
}