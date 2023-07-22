import classNames from "classnames";
import { type FieldValues, type SubmitHandler, useForm } from "react-hook-form";
import Layout from "~/components/segments/Layout";
import { api } from "~/utils/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Button from "~/components/ui/Button";
import ErrorMessage from "~/components/ui/ErrorMessage";

const FaqCreate = () => {
  const {
    handleSubmit,
    reset,
    register,
    formState: { errors },
  } = useForm();
  const mutation = api.faqs.createFaq.useMutation();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    mutation.mutate({
      question: data?.question as string,
      answer: data?.answer as string,
    });

    toast.success(`Data has been sent to DB`, {
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
  };

  const inputClasses = classNames(
    `w-full p-4 bg-slate-200 font-[600] rounded drop-shadow-md placeholder:text-slate-700 cursor-pointer`
  );

  return (
    <Layout>
      <div className="mx-auto my-48 flex w-full max-w-[1280px] flex-wrap items-start justify-start gap-[20px] px-4">
        <h1 className="w-full rounded bg-forest p-2 text-[40px] font-black uppercase text-forestLight drop-shadow-md">
          Feature creation
        </h1>
        <form
          // eslint-disable-next-line @typescript-eslint/no-misused-promises
          onSubmit={handleSubmit(onSubmit)}
          className="flex w-full flex-col items-start justify-start gap-[20px]"
        >
          <input
            {...register("question", {
              required: true,
              pattern: /^[a-zA-Z',:.$?! 0-9 -]+$/,
            })}
            placeholder="Question is..."
            className={inputClasses}
          />
          <ErrorMessage>
            {errors?.question?.type === "required" && "Question is required."}
            {errors?.question?.type === "pattern" &&
              "Question characters allowed: lowercase uppercase dash colon."}
          </ErrorMessage>
          <input
            {...register("answer", {
              required: true,
              pattern: /^[a-zA-Z',:.$?!0-9 -]+$/,
            })}
            placeholder="Answer is..."
            className={inputClasses}
          />
          <ErrorMessage>
            {errors?.answer?.type === "required" && "Answer is required."}
            {errors?.answer?.type === "pattern" &&
              "Answer characters allowed: lowercase uppercase space."}
          </ErrorMessage>
          <Button>Create an faq</Button>
        </form>
      </div>
      <ToastContainer />
    </Layout>
  );
};

export default FaqCreate;
