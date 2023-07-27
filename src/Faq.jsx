import React, { useState } from 'react';

export default function Faq() {

  const [faqVisibility, setFaqVisibility] = useState(Array(7).fill(false));

  const toggleFaq = (index) => {
    setFaqVisibility((prevVisibility) => {
      const updatedVisibility = [...prevVisibility];
      updatedVisibility[index] = !updatedVisibility[index];
      return updatedVisibility;
    });
  };

  return (
    <div>
      <h1>שאלות תשובות </h1>
      <div className="faq">
                    <div className="faq-item" onClick={() => toggleFaq(0)}>
                        <div className="faq-title" > באיזה תפקידים אפשר לעבוד אחרי הקורס?</div>
                        {faqVisibility[0] && (
                          <div className="faq-content" >
                              <p>ניתן לעבוד בחברות סטארטאפ, הייטק, בחברות עם מחלקות טכנולוגיות, כשכירים או כמפתחים עצמאיים. אפשר להיכנס לחברה בדרגת ג'וניור בתפקידים כמו:</p>
                              <ul>
                                  <li>Full Stack Developer</li>
                                  <li>Front-End Developer</li>
                                  <li>Back-End Developer</li>
                                  <li>Software Development</li>
                              </ul>
                          </div>
                         )}
                        
                    </div>
                    <div className="faq-item"  onClick={() => toggleFaq(1)}>
                        <div className="faq-title" > כמה מרוויחים בתחום?</div>
                        {faqVisibility[1] && (
                          <div className="faq-content">
                              <p>בדרך כלל, משכורות התחלתיות למפתחי Full Stack בישראל נעים בין 12-16 אלף ש"ח, עם פוטנציאל למשכורות גבוהות יותר ככל שצוברים ניסיון ומומחיות.</p>
                          </div>
                         )}
                    </div>
                    <div className="faq-item" onClick={() => toggleFaq(2)}>
                        <div className="faq-title" > האם צריך ציוד לקורס?</div>
                        {faqVisibility[2] && (
                          <div className="faq-content">
                              <p>נדרש מחשב נייד במהלך הקורס – חלק מדרישות הקורס הם התחייבות לשעות תרגול מרובות בבית בשעות הערב, כדי שיהיה ניתן לשמור על רצף הלמידה, שמהווה הגורם המרכזי להצלחה בקורס.</p>

                          </div>
                         )}
                    </div>
                    <div className="faq-item" onClick={() => toggleFaq(3)}>
                        <div className="faq-title" > מה הם דרישות הקורס?</div>
                        {faqVisibility[3] && (
                          <div className="faq-content">
                              <ul>
                                  <li>עמידה בקריטריונים של חיילים משוחררים.</li>
                                  <li>בעלי בגרות במתמטיקה ואנגלית.</li>
                                  <li>פניות מלאה להשתתפות בקורס לאורך כל היום מהבוקר ועד הערב.</li>
                                  <li>בעלי זיקה טכנולוגית ושאיפה להשתלב בתעשיית ההייטק ולהמשיך להתפתח בתחום.</li>
                                  <li>בעלי יכולת למידה עצמית גבוהה לאורך כל הקורס – כולל תרגול בשעות הערב.</li>
                                  <li>עמידה בהצלחה בשלבי המיון.</li>
                              </ul>
                              
                          </div>
                        )}
                    </div>
                    <div className="faq-item" onClick={() => toggleFaq(4)}>
                        <div className="faq-title" >האם ניתן לעבוד במקביל לקורס?</div>
                        {faqVisibility[4] && (
                          <div className="faq-content">
                              <p>
                                  כן ניתן לעבוד במקביל להשתתפות בקורס,  אך נא לשים לב כיוון שמדובר בקורס אינטנסיבי ונדרשת התמסרות מלאה לתהליך יש להקפיד על 80% נוכחות מלאה.
                              </p>
                              
                          </div>
                         )}
                    </div>
                    <div className="faq-item" onClick={() => toggleFaq(5)}>
                        <div className="faq-title" >כמה יעלה לי הקורס?</div>
                        {faqVisibility[5] && (
                          <div className="faq-content">
                              <p>
                                  הקורס במימון כמעט מלא ונדרשת השתתפות עצמית בסך 2,000 ש"ח בלבד – אותם ניתן לקחת מכספי הפיקדון. רק כדי לסבר את האוזן, קורס פרטי ללא סבסוד עולה כ- 30,000 ש"ח.
                              </p>
                              
                          </div>
                         )}
                    </div>
                    <div className="faq-item" onClick={() => toggleFaq(6)}> 
                        <div className="faq-title" >מה כולל תהליך המיון לקורס?</div>
                        {faqVisibility[6] && (
                          <div className="faq-content">
                              <ul>
                                  <li>השארת פרטים כאן באתר. </li>
                                  <li>נציג מטעמנו יצור עימך קשר ויישלח לך טופס הגשת מועמדות. </li>
                                  <li>השלמת מבחן בית, אשר ישלחו למועמד/ת במייל:
                                      <ul>
                                          <li>מבחן לוגיפס (פסיכוטכני).</li>
                                          <li>
                                          משימת בית מקצועית קצרה – בה תצטרכו ללמוד נושא חדש בתחום ולהכין את המשימה על בסיס מה שלמדתם. כך גם תוכלו לראות אם התחום מדבר אליכם, אנו נספק לכם את חומרי הלימוד הנדרשים.
                                          </li>  

                                      </ul>
                                  </li>
                                  <li>ראיון אישי.</li>
                              </ul>
                              
                          </div>
                        )}
                    </div>

      </div>
    </div>
  )
}
