import { useEffect } from "react";
import classNames from "classnames";
import { type FieldValues, type SubmitHandler, useForm } from "react-hook-form";
import Layout from "~/components/segments/Layout";
import { api } from "~/utils/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useRouter } from "next/router";
import Button from "~/components/ui/Button";
import ErrorMessage from "~/components/ui/ErrorMessage";
import PageBack from "~/components/ui/PageBack";
import FormSection from "~/components/ui/forms/components/FormSection";
import Skeleton from "~/components/ui/loading/Skeleton";

const FaqUpdate = () => {
  const router = useRouter();
  // ? Acquire current post's id
  const { id } = router.query;
  // ? Grab data using current id
  const { data, isLoading } = api.faqs.getFaqById.useQuery({
    identifier: id as string,
  });

  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors },
  } = useForm();

  // * Work-around for un-touched fields not getting API data via hook form
  useEffect(() => {
    setValue("question", data?.question);
    setValue("answer", data?.answer);
  }, [data]);

  // ? Use update mutation
  const mutation = api.faqs.updateFaqById.useMutation();
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    mutation.mutate({
      identifier: id as string,
      question: data?.question as string,
      answer: data?.answer as string,
    });

    toast.success(`Data has been updated for ${data?.question as string}`, {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      theme: "dark",
    });
  };

  const inputClasses = classNames(
    `w-full p-4 border border-forest font-[600] rounded placeholder:text-slate-700 cursor-pointer`
  );

  return (
    <Layout>
      <div className="mx-auto my-48 flex w-full max-w-[1280px] flex-wrap items-start justify-start gap-[20px] px-4">
        <PageBack />
        {isLoading ? (
          <Skeleton times={1} skeletonFull />
        ) : data ? (
          <>
            <h1 className="w-full rounded bg-forest p-2 text-[40px] font-black uppercase text-forestLight drop-shadow-md">
              Record data: {data?.question}
            </h1>

            <form
              // eslint-disable-next-line @typescript-eslint/no-misused-promises
              onSubmit={handleSubmit(onSubmit)}
              className="flex w-full flex-col items-start justify-start gap-[20px]"
            >
              <FormSection label="Basic" />
              <input
                {...register("question", {
                  required: true,
                  pattern: /^[a-zA-Z',:.$?! 0-9 -]+$/,
                })}
                placeholder="Icon is..."
                className={inputClasses}
                defaultValue={data?.question}
              />
              <ErrorMessage>
                {errors?.question?.type === "required" &&
                  "Question is a required field."}
                {errors?.question?.type === "pattern" &&
                  "Question accepts: lowercase, uppercase, dash and a colon"}
              </ErrorMessage>
              <input
                {...register("answer", {
                  required: true,
                  pattern: /^[a-zA-Z',:.$?! 0-9 -]+$/,
                })}
                placeholder="Answer is..."
                className={inputClasses}
                defaultValue={data?.answer}
              />
              <ErrorMessage>
                {errors?.answer?.type === "required" &&
                  "Answer is a required field."}
                {errors?.answer?.type === "pattern" &&
                  "Answer accepts: lowercase, uppercase, dash and a colon"}
              </ErrorMessage>
              <Button>Update FAQ</Button>
            </form>
          </>
        ) : null}
        <ToastContainer />
      </div>
    </Layout>
  );
};

export default FaqUpdate;
