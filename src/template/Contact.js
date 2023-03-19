import React from 'react';
import { useState } from 'react';
import ScrollToTopOnMount from './ScrollToTopOnMount';

function Contact(props) {

    const [name, setName] = useState("")
    const [surname, setSurname] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMassage] = useState("")
    const [title, setTitle] = useState("")

    return (
      <div className="container mt-5">
        <ScrollToTopOnMount />
        <div className="row justify-content-center">
          <div className="col-lg-9 mt-5">
            <h1 className="mb-3">Gửi câu hỏi của bạn cho chúng tôi</h1>
            <form>
              <div className="row g-3">
                <div className="col-md-6">
                  <label htmlFor="your-name" className="form-label">
                    Họ
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="your-name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="your-surname" className="form-label">
                    Tên
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="your-surname"
                    name="surname"
                    value={surname}
                    onChange={(e) => setSurname(e.target.value)}
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="your-email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="your-email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="your-subject" className="form-label">
                    Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="your-subject"
                    name="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
                <div className="col-12">
                  <label htmlFor="your-message" className="form-label">
                    Câu hỏi
                  </label>
                  <textarea
                    className="form-control"
                    id="your-message"
                    name="message"
                    rows={5}
                    required
                    defaultValue={""}
                    value={message}
                    onChange={(e) => setMassage(e.target.value)}
                  />
                </div>
                <div className="col-12">
                  <div className="row">
                    <div className="col-md-6">
                      <button
                        data-res="<?php echo $sum; ?>"
                        className="btn btn-dark w-100 fw-bold"
                        onClick={() => {
                          alert("Câu hỏi của bạn đã được gửi đi");
                          setName("");
                          setSurname("");
                          setTitle("");
                          setEmail("");
                          setMassage("");
                        }}
                      >
                        Send
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
}

export default Contact;