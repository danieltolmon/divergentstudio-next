import styles from './styles';

const ContactForm = () => {
  return (
    <>
      <form name="contact" method="POST" data-netlify="true">
        <input type="hidden" name="form-name" value="contact" />
        <input type="text" name="name" placeholder="Name" />
        <input type="email" name="email" placeholder="Email" />
        <textarea name="message" placeholder="Message" rows={6} />
        <button type="submit">Send</button>
      </form>
      <style jsx>{styles}</style>
    </>
  );
};

export default ContactForm;
