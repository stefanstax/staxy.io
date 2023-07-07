import { Icon } from "@iconify/react";
import classNames from "classnames";
import { useForm } from "react-hook-form";
import { api } from "~/utils/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type ContactFormProps = {
  className?: string;
};

type FormProps = {
  data?: object;
  name: string;
  email: string;
};

type ErrorMessageProps = {
  message: string;
};

const ContactForm = ({ className }: ContactFormProps) => {
  const mutation = api.contacts.create.useMutation();
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

  const onSubmit = (data: FormProps) => {
    mutation.mutate(
      {
        name: data.name,
        email: data.email,
      },
      {
        onSuccess: () => {
          toast.success("You've successfully subscribed to the email list.", {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            rtl: false,
            pauseOnFocusLoss: false,
            draggable: false,
            pauseOnHover: false,
            delay: 1,
            theme: "dark",
          });
        },
        onError: () => {
          toast.error(
            "There might be a problem in connection right now, please try again a bit later.",
            {
              position: "bottom-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: false,
              rtl: false,
              pauseOnFocusLoss: false,
              draggable: false,
              pauseOnHover: false,
              delay: 1,
              theme: "dark",
            }
          );
        },
      }
    );
    reset();
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
