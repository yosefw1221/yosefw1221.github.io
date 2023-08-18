import React from 'react';
import emailJs from '@emailjs/browser';
import { emailJsConfig } from '@utils/config';

export const sendMessage =
  (setStatus: React.Dispatch<MessageStatus>) =>
  async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      emailJs.init(emailJsConfig.publicKey);
      const form = e.currentTarget;
      const keys = ['Name', 'email', 'message'];
      const hasError = keys.some(
        (key) => !!form[key].parentNode.querySelector('.error')
      );
      if (hasError) return;
      const formData = keys.reduce(
        (acc: object, key: string) => ({
          ...acc,
          [key]: form[key].value,
        }),
        {}
      );
      if (!formData['Name'] || !formData['email'] || !formData['message'])
        return;
      setStatus({ sending: true, message: 'Sending...' });
      await emailJs.send(
        emailJsConfig.serviceId,
        emailJsConfig.templateId,
        formData
      );
      setStatus({ sending: false, success: true, message: 'Message sent!' });
      form.reset();
    } catch (error) {
      setStatus({
        sending: false,
        success: false,
        message: 'Failed to send message!',
      });
      return;
    }
  };

export type MessageStatus = {
  sending?: boolean;
  success?: boolean;
  message: string;
};
