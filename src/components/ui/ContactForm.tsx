import { Icon } from "@iconify/react";
import classNames from "classnames";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type ContactFormProps = {
  className?: string;
  formId: string;
};

type FormProps = {
  data?: object;
  name: string;
  email: string;
};

type ErrorMessageProps = {
  message: string;
};

const ContactForm = ({ className, formId }: ContactFormProps) => {
  const BASE_URL = process.env.CONVERTKIT_URL;
  const API_KEY = process.env.CONVERTKIT_KEY;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
    },
  });

  const onSubmit = async (data: FormProps) => {
    const url = [BASE_URL, "forms", formId, "subscribe"].join("/");
    const headers = new Headers({
      "Content-Type": "application/json; charset=utf-8",
    });
    const body = JSON.stringify({
      api_key: API_KEY,
      first_name: data?.name,
      email: data?.email,
    });

    try {
      const response = await fetch(url, {
        method: "POST",
        headers,
        mode: "cors",
        cache: "no-cache",
        body,
      });

      // Check if the response status is between 200 and 299
      if (response.ok) {
        toast.success("You're on the waitlist!", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
          theme: "dark",
        });
        reset();
      } else {
        throw new Error(response.statusText);
      }
    } catch (error) {
      toast.error("Oopsie, something happened. Try again later.", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  const ErrorMessage = (props: ErrorMessageProps) => {
    return (
      <p className="font-italic font-[600] text-red-500">{props.message}</p>
    );
  };

  const classes = classNames(className);
  const inputClasses = classNames(
    `w-full p-4 rounded bg-slate-200 drop-shadow-md font-black placeholder:font-[500]`
  );
  const buttonClasses = classNames(
    `w-full flex justify-center gap-[10px] items-center p-4 rounded font-black uppercase transition-all text-white min-w-[200px] cursor-pointer hover:opacity-75 transition-all`,
    (errors?.email || errors?.name) && `bg-red-500 text-white`,
    !errors?.email && !errors?.name && `bg-forest text-neutral-900`
  );
  return (
    <div className={classes}>
      <form
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        onSubmit={handleSubmit(onSubmit)}
        className="mx-auto flex w-full max-w-[600px] flex-wrap gap-[20px] py-10"
      >
        <input
          type="text"
          className={inputClasses}
          placeholder="Name..."
          {...register("name", { required: true, pattern: /^[a-zA-Z]+$/ })}
        />
        {errors?.name?.type === "required" && (
          <ErrorMessage message="Name field is required." />
        )}
        {errors?.name?.type === "pattern" && (
          <ErrorMessage message="Please include only letters." />
        )}
        <input
          type="email"
          className={inputClasses}
          placeholder="Email..."
          {...register("email", { required: true })}
        />
        {errors?.email?.type === "required" && (
          <ErrorMessage message="Email field is required." />
        )}
        <button type="submit" className={buttonClasses}>
          <Icon
            icon={
              errors?.name || errors?.email
                ? `solar:shield-cross-broken`
                : `solar:confetti-minimalistic-broken`
            }
            fontSize={32}
          />{" "}
          Subscribe me
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default ContactForm;
