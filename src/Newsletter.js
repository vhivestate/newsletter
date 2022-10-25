import React from "react";
// import { render } from "react-dom";
import MailchimpSubscribe from "react-mailchimp-subscribe";


const url = `https://gmail.us12.list-manage.com/subscribe/post?u=$bbf4839f9fbe4f45db8579c62&id=$fa687d0414`;

const MailchimpFormContainer = () => <MailchimpSubscribe url={url}/>

export default MailchimpFormContainer;