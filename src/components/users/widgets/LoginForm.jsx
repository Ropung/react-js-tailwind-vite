const LoginForm = () => {
  return (
    <div className="flex flex-col items-stretch w-[50vw]">
      <div className="flex flex-row justify-between ">
        <span className="">ID</span>
        <input type="text" className="border" />
      </div>
      <div className="flex flex-row justify-between ">
        <span>PW</span>
        <input type="password" className="border" />
      </div>
    </div>
  );
};

export default LoginForm;
