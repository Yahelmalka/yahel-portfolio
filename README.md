# Yahel Malka — Dynamic Portfolio

אתר פורטפוליו אחד, עם בסיס קוד משותף, שמתאים את עצמו לסוגי משרות שונים. התוכן והדגשים של כל גרסה מגיעים מקובץ `role-config.js`. אין עותקים מלאים של האתר לכל תפקיד.

כתובת GitHub Pages מתוכננת:

`https://Yahelmalka.github.io/yahel-portfolio/`

## 1. מה יש כאן

- `index.html` — הגרסה הכללית (`/`)
- `role-config.js` — כל התוכן לפי תפקיד
- `script.js` — קורא את הגרסה הפעילה ומעדכן את האתר
- `styles.css` — עיצוב משותף
- `assets/` — תמונת פרופיל, צילומי מסך וקורות חיים
- תיקיות תפקיד (`qa/`, `fullstack/` וכו') — `index.html` קטן עם Meta Tags וטעינת האתר הראשי
- `links.html` — עמוד פנימי להעתקת קישורים
- `backup/` — גיבוי של הקבצים המקוריים לפני השינוי

## 2. פתיחה מקומית

1. היכנסי לתיקיית `yahel-portfolio`.
2. הפעילי שרת סטטי, למשל:

```bash
npx --yes serve -l 8765
```

3. פתחי בדפדפן:

- `http://localhost:8765/`
- `http://localhost:8765/qa/`
- `http://localhost:8765/links.html`

כדי לבדוק גם את נתיב GitHub Pages, הפעילי את השרת מתיקיית האב:

```bash
npx --yes serve -l 8770
```

ואז פתחי `http://localhost:8770/yahel-portfolio/`.

## 3. העלאה ל-GitHub

1. צרי repository בשם `yahel-portfolio` תחת המשתמש `Yahelmalka`.
2. מתוך תיקיית `yahel-portfolio`:

```bash
git init
git add .
git commit -m "Add dynamic multi-role portfolio"
git branch -M main
git remote add origin https://github.com/Yahelmalka/yahel-portfolio.git
git push -u origin main
```

אל תעלי את תיקיית `backup/` אם אין בכך צורך.

## 4. הפעלת GitHub Pages

1. ב-GitHub: **Settings → Pages**.
2. Source: **Deploy from a branch**.
3. Branch: `main`, folder: `/ (root)`.
4. אחרי כמה דקות האתר יהיה ב:

`https://Yahelmalka.github.io/yahel-portfolio/`

## 5. איך מוסיפים גרסת תפקיד חדשה

1. הוסיפי אובייקט אחד ל-`ROLES` ב-`role-config.js`.
2. צרי תיקייה חדשה, למשל `devops/`, עם `index.html` קטן כמו ב-`qa/index.html`.
3. שנו רק את `window.PORTFOLIO_ROLE` ואת ה-Meta Tags.
4. `links.html` יציג את הגרסה אוטומטית.

## 6. איך משנים תוכן של גרסה קיימת

ערכי רק את האובייקט המתאים ב-`role-config.js`:

- כותרות ופסקת היכרות
- סדר Skills
- Skills מודגשים
- סדר פרויקטים ותיאוריהם
- טקסט Contact
- נתיב CV

אל תוסיפי ניסיון, טכנולוגיות או מקומות עבודה שלא קיימים.

## 7. איך מוסיפים קובץ CV

שימי PDF ב-`assets/cv/` בשם שמופיע ב-`cvFilename` של הגרסה.

דוגמאות:

- `assets/cv/yahel-malka-qa-cv.pdf`
- `assets/cv/yahel-malka-fullstack-cv.pdf`

אם הקובץ חסר, כפתור **Download CV** מוסתר. אין קישורים שבורים.

## 8. קישורים קיימים

| Role | Relative URL | GitHub Pages |
| --- | --- | --- |
| General Technology | `/` | https://Yahelmalka.github.io/yahel-portfolio/ |
| Junior QA | `/qa/` | https://Yahelmalka.github.io/yahel-portfolio/qa/ |
| Junior SQA | `/sqa/` | https://Yahelmalka.github.io/yahel-portfolio/sqa/ |
| Junior Full-Stack | `/fullstack/` | https://Yahelmalka.github.io/yahel-portfolio/fullstack/ |
| Junior Front-End | `/frontend/` | https://Yahelmalka.github.io/yahel-portfolio/frontend/ |
| Junior Back-End | `/backend/` | https://Yahelmalka.github.io/yahel-portfolio/backend/ |
| Junior Software | `/software/` | https://Yahelmalka.github.io/yahel-portfolio/software/ |
| Junior Data Analyst | `/data/` | https://Yahelmalka.github.io/yahel-portfolio/data/ |
| Junior Technical Support | `/technical-support/` | https://Yahelmalka.github.io/yahel-portfolio/technical-support/ |
| Junior Product Operations | `/product-operations/` | https://Yahelmalka.github.io/yahel-portfolio/product-operations/ |
| Junior Priority Developer | `/priority-developer/` | https://Yahelmalka.github.io/yahel-portfolio/priority-developer/ |
| Junior Product Manager | `/product-manager/` | https://Yahelmalka.github.io/yahel-portfolio/product-manager/ |
| Junior Project Manager | `/project-manager/` | https://Yahelmalka.github.io/yahel-portfolio/project-manager/ |
| Junior Cybersecurity | `/cybersecurity/` | https://Yahelmalka.github.io/yahel-portfolio/cybersecurity/ |
| Junior AI Solution Engineer | `/ai-engineer/` | https://Yahelmalka.github.io/yahel-portfolio/ai-engineer/ |

## 9. `links.html`

עמוד פנימי בלבד. הוא מציג טבלה עם Role, כותרת, URL יחסי, URL מלא, Copy Link, Open Preview וסטטוס CV. הוא לא מופיע בניווט הציבורי.

## 10. Checklist לפני שליחת קישור למגייס

- [ ] פתחת את גרסת התפקיד הנכונה
- [ ] הכותרת וההיכרות מתאימות למשרה
- [ ] Skills הרלוונטיים מופיעים ראשונים ומודגשים בזהב
- [ ] הפרויקטים מתוארים מנקודת המבט הנכונה
- [ ] כפתור CV מופיע רק אם העלית את ה-PDF
- [ ] בדקת מובייל
- [ ] בדקת Email, Phone, LinkedIn ו-GitHub
- [ ] אין טענה לניסיון שלא קיים בקורות החיים
