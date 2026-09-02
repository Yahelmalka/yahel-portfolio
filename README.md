# Yahel Malka

אתר אחד. גרסאות שונות לפי סוג משרה. אותו עיצוב, תוכן אחר.

**Live:** https://yahelmalka.github.io/yahel-portfolio/

## קישורים למגייסות

| גרסה | קישור |
| --- | --- |
| General | https://yahelmalka.github.io/yahel-portfolio/ |
| QA | https://yahelmalka.github.io/yahel-portfolio/qa/ |
| SQA | https://yahelmalka.github.io/yahel-portfolio/sqa/ |
| Full-Stack | https://yahelmalka.github.io/yahel-portfolio/fullstack/ |
| Front-End | https://yahelmalka.github.io/yahel-portfolio/frontend/ |
| Back-End | https://yahelmalka.github.io/yahel-portfolio/backend/ |
| Software | https://yahelmalka.github.io/yahel-portfolio/software/ |
| Data | https://yahelmalka.github.io/yahel-portfolio/data/ |
| Technical Support | https://yahelmalka.github.io/yahel-portfolio/technical-support/ |
| Product Operations | https://yahelmalka.github.io/yahel-portfolio/product-operations/ |
| Priority | https://yahelmalka.github.io/yahel-portfolio/priority-developer/ |
| Product Manager | https://yahelmalka.github.io/yahel-portfolio/product-manager/ |
| Project Manager | https://yahelmalka.github.io/yahel-portfolio/project-manager/ |
| Cybersecurity | https://yahelmalka.github.io/yahel-portfolio/cybersecurity/ |
| AI | https://yahelmalka.github.io/yahel-portfolio/ai/ |

רשימה להעתקה: https://yahelmalka.github.io/yahel-portfolio/links.html

## איך זה עובד

התוכן יושב ב-`role-config.js`. כל תיקייה (`qa/`, `fullstack/` וכו') רק מפעילה גרסה.

- לשנות טקסט / skills / פרויקטים → `role-config.js`
- להוסיף קו"ח → PDF ב-`assets/cv/` בשם שכתוב בגרסה
- להוסיף גרסה → אובייקט ב-`role-config.js` + תיקייה עם `index.html` קטן

אם אין PDF, כפתור Download CV פשוט לא מופיע.

## הרצה מקומית

```bash
npx --yes serve -l 8765
```

ואז `http://localhost:8765/`
