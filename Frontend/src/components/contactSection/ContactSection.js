import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import ParagraphText from '../paragraphTexts/ParagraphText';
import SectionTitle from '../titles/SectionTitle';
import Results from '../results/Results';
import PrimaryButton from '../buttons/PrimaryButton';

const ContactSectionStyles = styled.div`
  padding: 10rem 0;
  margin-bottom: 10px;
  .contact__wrapper {
    max-width: 800px;
    margin: 0 auto;
    text-align: center;
  }
  .contact__info {
    margin-bottom: 4rem;
  }
  .contact__form {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 1.5rem;
    row-gap: 3rem;
    .contact__field--fullWidth {
      grid-column: span 2;
    }
    .contact__submit {
      width: max-content;
      cursor: pointer;
    }
  }
  @media only screen and (max-width: 768px) {
    .contact__form {
      grid-template-columns: 1fr;
      row-gap: 2rem;
      .contact__field--fullWidth {
        grid-column: span 1;
      }
    }
  }
`;

const Input = styled.input`
margin-top: 1rem;
    width: 100%;
    height: 40px;
    padding: 1rem;
    border: none;
    border-radius: 4px;
    font-size: 1.6rem;
    background-color: var(--lightBlue_2);
    margin-bottom: 10px;
`

function ContactSection() {
  const [image, setImage] = useState(null);
  const [result, setResult] = useState('');
  const fileRef = useRef();
  const handleImageUpload = (event) => {
    event.preventDefault();
    setImage(event.target.files[0]);
  };

  async function submitHandler(e) {
    e.preventDefault();
    const data = new FormData();
    data.append('file1', fileRef.current.files[0]);
    data.append('filename', 'hello');

    try {
      const response = await fetch('http://127.0.0.1:5000/after', {
        method: 'POST',
        body: data,
        headers: {
          type: 'application/x-www-form-urlencoded; charset=UTF-8',
        },
      });
      setResult(await response.json());
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <ContactSectionStyles id="contact">
        <div className="container">
          <div className="contact__wrapper">
            <div className="contact__info">
              <SectionTitle>Image Annotater</SectionTitle>
              <ParagraphText>Let's Put Word To Your Image</ParagraphText>
            </div>
            <form onSubmit={submitHandler} encType="multipart/form-data">
              <Input
                className="form-control"
                ref={fileRef}
                type="file"
                onChange={handleImageUpload}
              />
              <PrimaryButton className="btn btn-primary mt-3" type="submit">
                Submit!
              </PrimaryButton>
            </form>
          </div>
        </div>
      </ContactSectionStyles>
      {result !== '' && <Results result={result} image={image} />}
    </>
  );
}

export default ContactSection;
