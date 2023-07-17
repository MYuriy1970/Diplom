import React from "react";
import { useForm } from "react-hook-form";

import "./style.css";

const Authorization = () => {
  const {
    register,
    handleSubmit,
	 reset,
    formState: { errors, isValid },
  } = useForm({
	mode: "onBlur"
  });
  const onSubmit = data => {
    alert(JSON.stringify(data)); //Обрабатываем то что ввели в инпутах
	 reset();
  };

  return (
    <form className="Authorization" onSubmit={handleSubmit(onSubmit)}>
      <h1>Регистрация / Войти</h1>
      <label>
        <h2>Login</h2>
        <input
          {...register("login", {
            required: "Поле обязательно к заполнению",
            pattern: /^[a-zA-Z][a-zA-Z0-9-_\.]{1,20}$/i,
            maxLength: {
              value: 20,
              message: "Максимум 20 знаков.",
            },
          })}
        />
      </label>
      {errors.login && <p className="Authorization-paragraph">{errors.login?.message || "Error!"}</p>}
      <label>
        <h2>Password</h2>
        <input
          {...register("password", {
            required: "Поле обязательно к заполнению",
            minLength: {
              value: 8,
              message: "Минимум 8 знаков, буквы и цифры",
            },
            pattern: /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/i,
          })}
        />
      </label>
      {errors.password && <p className="Authorization-paragraph">{errors.password?.message || "Error!"}</p>}
      <label>
        <h2>Mail</h2>
        <input
          {...register("mail", {
            required: "Поле обязательно к заполнению",
            pattern: /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/i,
          })}
        />
      </label>
      {errors.mail && <p className="Authorization-paragraph">{errors.mail?.message || "Error!"}</p>}
      <input type="submit" disabled={!isValid}/>
    </form>
  );
};

export default Authorization;
