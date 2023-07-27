import React from 'react'

export default function Main() {
  const containerStyle = {
    backgroundImage: "url(http://localhost:5656/public/24.jpg)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    
  };
  return (
    <div>
      <section className="bg-light py-5" >
        <div className="container"  style={containerStyle}>
          <div className="row">
            <div className="col-md-12 text-center">
              <h1>Full Stack Development <span>- קורס תוכנה</span></h1>
              <p className="lead">
                  קורס פיתוח תוכנה של מכללת IITC ומרכז הצעירים העירוני, במימון כמעט מלא של האגף והקרן לחיילים משוחררים, יכין אותך לתפקיד הראשון שלך בחברת הייטק, במקצוע שבו היצע המשרות הפתוחות גדול, וחברות רבות מוכנות להעסיק בו גם חסרי ניסיון.
              </p>
              <p className="lead">
                  הקורס כולל למידת המקצוע מהבסיס, פרקטיקה, פרויקטים, הכנה לראיונות עבודה, וכמובן עזרה במציאת עבודה וליווי אישי עד להשתלבות מלאה בתעשייה.
              </p>
              <a className="btn btn-primary btn-lg" href="#myTabContent">הרשמה לקורס</a>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-light py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h2>קריירה בפיתוח תוכנה</h2>
              <p className="lead">
                  Full Stack Developer הוא מפתח תוכנה אשר שולט במספר רחב של טכנולוגיות, עד כדי רמה שהוא מסוגל לפתח אפליקציה, מוצר אינטרנטי, מערכת ניהול ואף אתר שלם מקצה לקצה – מצד הלקוח (Front-End) ומצד השרת (Back-End).
              </p>
              <p className="lead">
                  בימינו חברות הייטק רבות מגייסות מפתחי פולסטאק, וישנו ביקוש גדול למפתחים מיומנים, לכן זהו תחום מבוקש מאוד. מדובר בתפקיד מאתגר ודורש תכנון, חשיבה לוגית, סבלנות, חשיבה יצירתית ותשוקה לפתרון בעיות, יכולת ללמידה מתמשכת וראייה של התמונה הגדולה.
              </p>
              <p className="lead">
                  המפתחים חייבים להיות בעלי יכולות תכנון ופיתוח, עליהם להכיר פלטפורמות שונות, מסדי נתונים ושפות תכנות רלוונטיות.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
