import { Close } from "@material-ui/icons";
import React from "react";
import "./SendMail.css";
import { Button } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { closeSendMessage } from "./features/mailSlice";

function SendMail() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  const onSubmit = (formData) => {
    console.log(formData);
  };

  return (
    <div className="sendMail">
      <div className="sendMail__header">
        <h3>New Message</h3>
        <Close
          onClick={() => dispatch(closeSendMessage())}
          className="sendMail__close"
        />
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="email"
          placeholder="To"
          name="To"
          id=""
          {...register("To", {
            required: true,
          })}
        />

        {errors.To && <p className="sendMail__error">To is Required !</p>}

        <input
          type="text"
          placeholder="Subject"
          name="Subject"
          id=""
          {...register("Subject", { required: true })}
        />

        {errors.Subject && (
          <p className="sendMail__error">Subject is Required !</p>
        )}

        <input
          type="text"
          placeholder="Message"
          name="Message"
          id=""
          className="sendMail__message"
          {...register("Message", { required: true })}
        />

        {errors.Message && (
          <p className="sendMail__error">Message is Required !</p>
        )}

        <div className="sendMail__options">
          <Button
            className="sendMail__send"
            variant="contained"
            color="primary"
            type="submit"
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SendMail;
