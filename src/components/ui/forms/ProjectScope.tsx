import {
  type FieldValues,
  type SubmitHandler,
  useForm,
  Controller,
} from "react-hook-form";
import classNames from "classnames";
import FormSection from "./components/FormSection";
import Button from "../Button";
import Switch from "./components/Switch";
import { api } from "~/utils/api";
import { useEffect } from "react";
import FormDisclaimer from "./components/FormDisclaimer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// type ProjectScopeData = {
//   domain: string;
//   category: string;
//   budget: string;
//   payment_type: string[];
//   revenue_expectation: string;
//   return_expectation: string;
//   team_size: string;
//   description: string;
//   modules: string[];
//   created_at: Date;
//   email: string;
// };

const ProjectScope = () => {
  const { handleSubmit, reset, register, control, setValue } = useForm();

  const mutation = api.projects.createProject.useMutation();

  //   ! Setting value via useForm as if no value is provided undefined instead of false is displayed - Bug in react-hook-form
  useEffect(() => {
    setValue("payment_lifetime", false);
    setValue("payment_monthly", false);
    setValue("payment_weekly", false);
    setValue("module_education", false);
    setValue("module_commerce", false);
    setValue("module_events", false);
    setValue("module_forms", false);
  }, []);

  const inputClasses = classNames(
    `w-full p-4 border-forest border font-[600] rounded placeholder:text-slate-700 cursor-pointer`
  );

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    reset();
    const {
      domain,
      description,
      country,
      category,
      budget,
      users,
      team_size,
      payment_monthly,
      payment_lifetime,
      payment_weekly,
      module_education,
      module_commerce,
      module_events,
      module_forms,
      revenue_expectation,
      return_expectation,
      email,
    } = data;

    mutation.mutate({
      domain: domain as string,
      description: description as string,
      country: country as string,
      category: category as string,
      budget: budget as string,
      users: users as string,
      team_size: team_size as string,
      payment_weekly: payment_weekly as boolean,
      payment_monthly: payment_monthly as boolean,
      payment_lifetime: payment_lifetime as boolean,
      module_education: module_education as boolean,
      module_commerce: module_commerce as boolean,
      module_events: module_events as boolean,
      module_forms: module_forms as boolean,
      revenue_expectation: revenue_expectation as string,
      return_expectation: return_expectation as string,
      email: email as string,
    });
    toast.success(
      "We have received your application and placed you on the waitlist!",
      {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "dark",
      }
    );
  };

  return (
    <>
      <form
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        onSubmit={handleSubmit(onSubmit)}
        className="flex w-full flex-col gap-[20px]"
      >
        {/* Fields */}
        <FormSection label="Basic Info" />
        {/* Project desired Domain Name */}
        <input
          {...register("domain", { required: true })}
          placeholder="Domain..."
          className={inputClasses}
        />
        {/* Project brief description */}
        <textarea
          {...register("description", { required: true })}
          placeholder="Tell us more about your idea"
          className={inputClasses}
        />
        <input
          className={inputClasses}
          {...register("country", { required: true })}
          placeholder="Which country would you launch this idea in? (example: USA \ UK \ Serbia \ Spain)"
        />
        <FormSection label="Project Categorization" />
        {/* Project category */}
        <select
          {...register("category", { required: true })}
          className={inputClasses}
        >
          <option value="">Select Project Category</option>
          <option value="it">Software Services</option>
          <option value="entrepenuer">Entrepeneurial Services</option>
          <option value="instructor">Teaching Services</option>
          <option value="academy">Police Academy Services</option>
          <option value="religion">Church Services</option>
          <option value="other">Other</option>
        </select>
        {/* Project budget */}
        <select
          {...register("budget", { required: true })}
          className={inputClasses}
        >
          <option value="">Select Budget Range</option>
          <option value="entrepeneuer">Entrepeneurial</option>
          <option value="teacher">Teacher</option>
          <option value="software">Software</option>
          <option value="enterprise">Enterprise</option>
          <option value="other">Other</option>
        </select>
        {/* Project number of personnel */}
        <select
          {...register("team_size", { required: true })}
          className={inputClasses}
        >
          <option value="">Select Team Size</option>
          <option value="0-1">1 (Entrepeneurial)</option>
          <option value="2-5">2-5 (Teacher)</option>
          <option value="6-15">6-15 (Software)</option>
          <option value="enterprise">Enterprise (Service)</option>
        </select>
        {/* Project Users */}
        <select
          {...register("users", { required: true })}
          className={inputClasses}
        >
          <option value="">Select Your Audience Size</option>
          <option value="10">more than 10</option>
          <option value="250">more than 250</option>
          <option value="500">more than 500</option>
          <option value="enterprise">Enterprise</option>
        </select>
        {/* Project payment in Weeks/Months/One-Time */}
        <FormSection label="How will you be able to invest in this project?" />
        <Controller
          name="payment_weekly"
          control={control}
          render={({ field: { value, onChange } }) => (
            <Switch
              label="Weekly Payments"
              className={inputClasses}
              value={value as boolean}
              onChange={onChange}
            />
          )}
        />
        <Controller
          name="payment_monthly"
          control={control}
          render={({ field: { value, onChange } }) => (
            <Switch
              label="Monthly Payments"
              className={inputClasses}
              value={value as boolean}
              onChange={onChange}
            />
          )}
        />
        <Controller
          name="payment_lifetime"
          control={control}
          render={({ field: { value, onChange } }) => (
            <Switch
              label="Lifetime Payment"
              className={inputClasses}
              value={value as boolean}
              onChange={onChange}
            />
          )}
        />
        <FormDisclaimer label="All billing models include monthly payments besides the setup fee | Monthly payments will start from the 1st of every month after setup fee has been paid." />
        {/* /> */}
        <FormSection
          label="
        Besides core features, is there another set which you would like to have
        from the start?"
        />
        <Controller
          name="module_education"
          control={control}
          render={({ field: { value, onChange } }) => (
            <Switch
              label="E-Learning"
              className={inputClasses}
              value={value as boolean}
              onChange={onChange}
            />
          )}
        />
        <Controller
          name="module_commerce"
          control={control}
          render={({ field: { value, onChange } }) => (
            <Switch
              label="E-Commerce"
              className={inputClasses}
              value={value as boolean}
              onChange={onChange}
            />
          )}
        />
        <Controller
          name="module_events"
          control={control}
          render={({ field: { value, onChange } }) => (
            <Switch
              label="Event Managment"
              className={inputClasses}
              value={value as boolean}
              onChange={onChange}
            />
          )}
        />
        <Controller
          name="module_forms"
          control={control}
          render={({ field: { value, onChange } }) => (
            <Switch
              label="Layered Forms"
              className={inputClasses}
              value={value as boolean}
              onChange={onChange}
            />
          )}
        />
        <FormDisclaimer label="Modules besides listed ones can be discussd on the meeting. Anything is possible at Staxy." />
        {/* Project checkboxes - all modules list */}
        <FormSection label="Expectations" />
        {/* Project revenue expectation */}
        <input
          {...register("revenue_expectation", { required: true })}
          placeholder="Revenue expectation (example: $25.000,00)"
          className={inputClasses}
        />
        {/* Project investment return expectation */}
        <input
          {...register("return_expectation", { required: true })}
          placeholder="Return expectation date (example: By may 2024)"
          className={inputClasses}
        />
        <FormDisclaimer label="Expectation is purely informational. We would love to know your ambition and be ready to support in more areas than just providing the means to your business utmost success." />
        <FormSection label="Contact Information" />
        <input
          {...register("email", { required: true })}
          placeholder="Your email is..."
          className={inputClasses}
          type="email"
        />
        {/* Project Submit all data */}
        <Button>Submit Project Scope</Button>
      </form>
      <ToastContainer />
    </>
  );
};

export default ProjectScope;
