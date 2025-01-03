import { useState } from "react";
import "./styles.css";
import LoginForm from "../../components/LoginForm";
import RegisterForm from "../../components/RegisterForm";

const Auth = () => {
  const [onRegister, setOnRegister] = useState<boolean>(false);
  const togglePanel = () => {
    setOnRegister(!onRegister);
  };
  return (
    <div className="flex justify-center h-screen items-center overflow-hidden ">
      <div className="box lg:max-w-4xl">
        <div className={`cover ${onRegister && "rotate-active"}`}>
          <div className="front">
            <img
              className=""
              src="https://projectsly.com/images/task-management-system-screenshot-1.png?v=1691124479409199525"
              alt=""
            />
            <div className="text">
              <span className="text-1">
                Success is built upon well organized Tasks.
              </span>
              <span className="text-2 text-xs">Let's get connected</span>
            </div>
          </div>
          <div className="back">
            <img
              src="https://projectsly.com/images/blog/benefits-of-employee-task-management-system.png?v=1686553999071005322"
              alt=""
            />
          </div>
        </div>
        <div className="forms h-full">
          <div className="form-content h-full">
            <div className="login-form">
              <LoginForm togglePanel={togglePanel} />
            </div>
            <div className="signup-form">
              <RegisterForm togglePanel={togglePanel} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
