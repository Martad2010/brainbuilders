import LoginForm from "@/components/login/LoginForm";

export const Login = () => {
  return (
    <main
      className="min-h-screen px-0 md:px-12 flex"
      style={{
        background: 'url("/images/login-bg.svg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container flex flex-col items-center justify-center lg:items-end">
        <LoginForm />
      </div>
    </main>
  );
};
