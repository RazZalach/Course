import React, { useState } from 'react';

export default function Silabos() {
  const [silabosVisibility, setToggleSilabos] = useState(Array(10).fill(false));

  const toggleSilabos = (index) => {
    setToggleSilabos((prevVisibility) => {
      const updatedVisibility = [...prevVisibility];
      updatedVisibility[index] = !updatedVisibility[index];
      return updatedVisibility;
    });
  };
  return (
    <div>
      <h1>סילבוס</h1>
      <div class="accordion">


      <div class="accordion-item" onClick={() => toggleSilabos(0)}>
          <div class="accordion-title" >1. Intro basics</div>
          {silabosVisibility[0] && (
            <div class="accordion-content">
                <ul>
                <li>Intro to WEB development fundamentals</li>
                <li>Basics Operating Systems</li>
                <li>Communication</li>
                <li>The Web</li>
                <li>HTTP Protocol</li>
                <li>Networks</li>
                <li>Command-line</li>
                <li>Web development frameworks</li>
                <li>MERN</li>
                <li>Github basics</li>
                </ul>
            </div>
           )}
      </div>

      <div class="accordion-item" onClick={() => toggleSilabos(1)}>
          <div class="accordion-title" >2. HTML & CSS</div>
          {silabosVisibility[1] && (
            <div class="accordion-content">
                <ul>
                <li>Introduction to HTML</li>
                <li>Browsers and HTML</li>
                <li>Editor’s Offline and Online</li>
                <li>Tags, Attribute and Elements</li>
                <li>Doctype Element</li>
                <li>Headings, Paragraphs, and Formatting Text</li>
                <li>Lists and Links</li>
                <li>Tables</li>
                <li>Introduction CSS</li>
                <li>Applying CSS to HTML</li>
                <li>Properties</li>
                <li>selectors</li>
                <li>specificity</li>
                <li>Margins, Padding, and Borders</li>
                <li>box-model, Text and Font Properties</li>
                <li>Units</li>
                </ul>
            </div>
           )}
      </div>

      <div class="accordion-item" onClick={() => toggleSilabos(2)}>
          <div class="accordion-title" >3.JavaScript basics</div>
          {silabosVisibility[2] && (
          <div class="accordion-content">
              <ul>
                  <li>Introduction to HTML</li>
                  <li>Browsers and HTML</li>
                  <li>Editor’s Offline and Online</li>
                  <li>Tags, Attribute and Elements</li>
                  <li>Doctype Element</li>
                  <li>Headings, Paragraphs, and Formatting Text</li>
                  <li>Lists and Links</li>
                  <li>Tables</li>
                  <li>Introduction CSS</li>
                  <li>Applying CSS to HTML</li>
                  <li>Properties</li>
                  <li>selectors</li>
                  <li>specificity</li>
                  <li>Margins, Padding, and Borders</li>
                  <li>box-model, Text and Font Properties</li>
                  <li>Units</li>
              </ul>

          </div>
           )}
      </div>

      <div class="accordion-item" onClick={() => toggleSilabos(3)}>
          <div class="accordion-title" >4.Front End development React & state management</div>
          {silabosVisibility[3] && (
          <div class="accordion-content">
              <ul>
                  <li>Introduction to HTML</li>
                  <li>Browsers and HTML</li>
                  <li>Editor’s Offline and Online</li>
                  <li>Tags, Attribute and Elements</li>
                  <li>Doctype Element</li>
                  <li>Headings, Paragraphs, and Formatting Text</li>
                  <li>Lists and Links</li>
                  <li>Tables</li>
                  <li>Introduction CSS</li>
                  <li>Applying CSS to HTML</li>
                  <li>Properties</li>
                  <li>selectors</li>
                  <li>specificity</li>
                  <li>Margins, Padding, and Borders</li>
                  <li>box-model, Text and Font Properties</li>
                  <li>Units</li>
              </ul>

          </div>
           )}
      </div>

      <div class="accordion-item" onClick={() => toggleSilabos(4)}>
          <div class="accordion-title" >5.Mid-Project</div>
          {silabosVisibility[4] && (
          <div class="accordion-content">
              Working on the midterm project of the course.

          </div>
           )}
      </div>

      <div class="accordion-item" onClick={() => toggleSilabos(5)}>
          <div class="accordion-title" >6.Backend development using Node.js & Mongo</div>
          {silabosVisibility[5] && (
          <div class="accordion-content">
              <ul>
                  <li>Introduction to HTML</li>
                  <li>Browsers and HTML</li>
                  <li>Editor’s Offline and Online</li>
                  <li>Tags, Attribute and Elements</li>
                  <li>Doctype Element</li>
                  <li>Headings, Paragraphs, and Formatting Text</li>
                  <li>Lists and Links</li>
                  <li>Tables</li>
                  <li>Introduction CSS</li>
                  <li>Applying CSS to HTML</li>
                  <li>Properties</li>
                  <li>selectors</li>
                  <li>specificity</li>
                  <li>Margins, Padding, and Borders</li>
                  <li>box-model, Text and Font Properties</li>
                  <li>Units</li>
              </ul>

          </div>
           )}
      </div>

      <div class="accordion-item" onClick={() => toggleSilabos(6)}>
          <div class="accordion-title" >7.Python fundamentals</div>
          {silabosVisibility[6] && (
          <div class="accordion-content">
              <ul>
                  <li>Introduction to HTML</li>
                  <li>Browsers and HTML</li>
                  <li>Editor’s Offline and Online</li>
                  <li>Tags, Attribute and Elements</li>
                  <li>Doctype Element</li>
                  <li>Headings, Paragraphs, and Formatting Text</li>
                  <li>Lists and Links</li>
                  <li>Tables</li>
                  <li>Introduction CSS</li>
                  <li>Applying CSS to HTML</li>
                  <li>Properties</li>
                  <li>selectors</li>
                  <li>specificity</li>
                  <li>Margins, Padding, and Borders</li>
                  <li>box-model, Text and Font Properties</li>
                  <li>Units</li>
              </ul>

          </div>
           )}
      </div>

      <div class="accordion-item" onClick={() => toggleSilabos(7)}>
          <div class="accordion-title" >8.SQL</div>
          {silabosVisibility[7] && (
          <div class="accordion-content">
              <ul>
                  <li>Introduction to HTML</li>
                  <li>Browsers and HTML</li>
                  <li>Editor’s Offline and Online</li>
                  <li>Tags, Attribute and Elements</li>
                  <li>Doctype Element</li>
                  <li>Headings, Paragraphs, and Formatting Text</li>
                  <li>Lists and Links</li>
                  <li>Tables</li>
                  <li>Introduction CSS</li>
                  <li>Applying CSS to HTML</li>
                  <li>Properties</li>
                  <li>selectors</li>
                  <li>specificity</li>
                  <li>Margins, Padding, and Borders</li>
                  <li>box-model, Text and Font Properties</li>
                  <li>Units</li>
              </ul>

          </div>
           )}
      </div>

      <div class="accordion-item" onClick={() => toggleSilabos(8)}>
          <div class="accordion-title" >9.Web Services</div>
          {silabosVisibility[8] && (
          <div class="accordion-content">
              <ul>
                  <li>Introduction to HTML</li>
                  <li>Browsers and HTML</li>
                  <li>Editor’s Offline and Online</li>
                  <li>Tags, Attribute and Elements</li>
                  <li>Doctype Element</li>
                  <li>Headings, Paragraphs, and Formatting Text</li>
                  <li>Lists and Links</li>
                  <li>Tables</li>
                  <li>Introduction CSS</li>
                  <li>Applying CSS to HTML</li>
                  <li>Properties</li>
                  <li>selectors</li>
                  <li>specificity</li>
                  <li>Margins, Padding, and Borders</li>
                  <li>box-model, Text and Font Properties</li>
                  <li>Units</li>
              </ul>

          </div>
           )}
      </div>
      <div class="accordion-item" onClick={() => toggleSilabos(9)}>
          <div class="accordion-title" >10.Git commands + Final project </div>
          {silabosVisibility[9] && (
          <div class="accordion-content">
              Working on the final project of the course.
              <ul>
                  <li>Introduction to HTML</li>
                  <li>Browsers and HTML</li>
                  <li>Editor’s Offline and Online</li>
                  <li>Tags, Attribute and Elements</li>
                  <li>Doctype Element</li>
                  <li>Headings, Paragraphs, and Formatting Text</li>
                  <li>Lists and Links</li>
                  <li>Tables</li>
                  <li>Introduction CSS</li>
                  <li>Applying CSS to HTML</li>
                  <li>Properties</li>
                  <li>selectors</li>
                  <li>specificity</li>
                  <li>Margins, Padding, and Borders</li>
                  <li>box-model, Text and Font Properties</li>
                  <li>Units</li>
              </ul>

          </div>
           )}
      </div>


</div>
    </div>
  )
}
