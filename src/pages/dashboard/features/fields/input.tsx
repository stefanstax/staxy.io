import classNames from "classnames";
import React from "react";
import { useForm } from "react-hook-form";
import ErrorMessage from "~/components/ui/ErrorMessage";

type InputProps = {
  inputLabel: string;
  pattern: RegExp;
  required: boolean;
};

const Input = ({ inputLabel, pattern, required }: InputProps) => {
  const {
    register,
    formState: { errors },
  } = useForm();
  const inputClasses = classNames(
    `w-full p-4 bg-slate-50 rounded placeholder:text-slate-700 cursor-pointer`
  );

  return (
    <>
      <input
        {...register(`${inputLabel}`, {
          required,
          pattern,
        })}
        placeholder="Feature Icon is..."
        className={inputClasses}
      />
      <ErrorMessage>
        {errors?.inputLabel?.type === "required" && `${inputLabel} is required`}
      </ErrorMessage>
      <ErrorMessage>
        {errors?.inputLabel?.type === "pattern" &&
          `${inputLabel}  characters allowed: lowercase uppercase dash colon`}
      </ErrorMessage>
    </>
  );
};

export default Input;
