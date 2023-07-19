import classNames from "classnames";
import { useRouter } from "next/router";
import React from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Layout from "~/components/segments/Layout";
import { api } from "~/utils/api";

const Features = () => {
  const { handleSubmit, register } = useForm();
  const router = useRouter();
  const { id } = router.query;
  const pageId = id as string;

  const { data } = api.features.getFeatureById.useQuery({
    featureId: pageId,
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log("Data to be sent is:", data);
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
          Feature: {data?.title}{" "}
          <span className="text-[20px]">#{data?.identifier}</span>
        </h1>
        <form
          // eslint-disable-next-line @typescript-eslint/no-misused-promises
          onSubmit={handleSubmit(onSubmit)}
          className="flex w-full flex-wrap items-center justify-start gap-[20px]"
        >
          <input
            {...register("icon")}
            defaultValue={data?.image}
            placeholder="Feature Icon is..."
            className={inputClasses}
          />
          <input
            {...register("title")}
            defaultValue={data?.title}
            placeholder="Feature title is..."
            className={inputClasses}
          />
          <input
            {...register("description")}
            defaultValue={data?.description as string}
            placeholder="Feature description is..."
            className={inputClasses}
          />
          <select {...register("category")} className={inputClasses}>
            <option value="core">Core</option>
            <option value="module">Module</option>
          </select>
          <input
            {...register("extraClass")}
            defaultValue={data?.extraClass}
            placeholder="Feature extra class is..."
            className={inputClasses}
          />
          <input
            {...register("parent")}
            defaultValue={data?.parent as string}
            placeholder="Feature parent is..."
            className={inputClasses}
          />
          <input
            {...register("order")}
            defaultValue={data?.order}
            placeholder="Feature order number is..."
            className={inputClasses}
            min={0}
            type="number"
          />
          <button className={buttonClasses} type="submit">
            Update feature {data?.title}
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Features;
