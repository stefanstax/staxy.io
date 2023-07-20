import classNames from "classnames";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Layout from "~/components/segments/Layout";
import { api } from "~/utils/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FeatureCreate = () => {
  const { handleSubmit, reset, register } = useForm();
  const mutation = api.features.createFeature.useMutation();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(mutation, mutation.isSuccess, mutation.isError);

    mutation.mutate({
      image: data?.image as string,
      title: data?.title as string,
      description: data?.description as string,
      category: data?.category as string,
      extraClass: data?.extraClass as string,
      parent: data?.parent as string,
    });

    mutation.isSuccess &&
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

    mutation.isError &&
      toast.error(`There's been an issue with the update`, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "dark",
      });

    mutation.isSuccess && reset();
  };

  const inputClasses = classNames(
    `w-full p-4 bg-slate-50 rounded drop-shadow-md placeholder:text-slate-700 cursor-pointer`
  );

  const buttonClasses = classNames(
    `w-fit min-w-[200px] p-4 text-slate-50 drop-shadow-md uppercase rounded bg-gradient-to-r from-slate-900 to-neutral-900 font-black hover:cursor-pointer hover:from-neutral-900 hover:to-slate-900 transition-all hover:opacity-[75%]`
  );

  return (
    <Layout>
      <div className="mx-auto my-48 flex w-full max-w-[1280px] flex-wrap items-center justify-center gap-[20px] px-4">
        <h1 className="w-full text-[40px] font-black uppercase underline">
          Feature Creation in progress
        </h1>
        <form
          // eslint-disable-next-line @typescript-eslint/no-misused-promises
          onSubmit={handleSubmit(onSubmit)}
          className="flex w-full flex-wrap items-center justify-start gap-[20px]"
        >
          <input
            {...register("image")}
            placeholder="Feature Icon is..."
            className={inputClasses}
          />
          <input
            {...register("title")}
            placeholder="Feature title is..."
            className={inputClasses}
          />
          <input
            {...register("description")}
            placeholder="Feature description is..."
            className={inputClasses}
          />
          <select {...register("category")} className={inputClasses}>
            <option value="core">Core</option>
            <option value="module">Module</option>
          </select>
          <input
            {...register("extraClass")}
            placeholder="Feature extra class is..."
            className={inputClasses}
          />
          <select
            {...register("parent")}
            placeholder="Feature parent is..."
            className={inputClasses}
          >
            <option defaultChecked value="">
              Ignore this field if feature has no parent (options inside)
            </option>
            <option value="e-learning">E-Learning</option>
            <option value="events">Events</option>
          </select>

          <button className={buttonClasses} type="submit">
            Create feature
          </button>
        </form>
      </div>
      <ToastContainer />
    </Layout>
  );
};

export default FeatureCreate;
