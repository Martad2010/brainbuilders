import SignUpForm from "@/components/signup/SignupForm";

export const SignUp = () => {
  return (
    <main
      className="flex min-h-screen px-0 md:px-12"
      style={{
        background: 'url("/images/overview-hero-bg.svg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container flex flex-col items-center justify-center lg:items-start">
        <SignUpForm />
      </div>
    </main>
  );
};
