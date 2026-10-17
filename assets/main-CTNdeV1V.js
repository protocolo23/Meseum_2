const n=document.querySelector("#menu"),l=document.querySelector(".icon--burger_menu"),u=document.querySelector(".icon--close"),f=document.querySelectorAll(".nav__link, .footer__list__link"),m=document.querySelectorAll(".action-button, .root-button"),c=document.querySelector("#form__subscribe"),s=document.createElement("div");s.className="site-toast";s.setAttribute("role","status");s.setAttribute("aria-live","polite");s.style.cssText=`
  position: fixed;
  right: 20px;
  bottom: 20px;
  z-index: 9999;
  padding: 12px 18px;
  border-radius: 999px;
  background: #173f46;
  color: #fff;
  font-size: 14px;
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.18);
  opacity: 0;
  transform: translateY(12px);
  transition: opacity 0.25s ease, transform 0.25s ease;
  pointer-events: none;
`;document.body.appendChild(s);const i=t=>{s.textContent=t,s.style.opacity="1",s.style.transform="translateY(0)",clearTimeout(i.timeoutId),i.timeoutId=setTimeout(()=>{s.style.opacity="0",s.style.transform="translateY(12px)"},2200)},r=t=>{n&&(n.classList.toggle("is-open",t),document.body.classList.toggle("menu-open",t))};l==null||l.addEventListener("click",t=>{t.preventDefault();const e=!(n!=null&&n.classList.contains("is-open"));r(e)});u==null||u.addEventListener("click",t=>{t.preventDefault(),r(!1)});f.forEach(t=>{t.addEventListener("click",()=>{r(!1)})});document.addEventListener("keydown",t=>{t.key==="Escape"&&r(!1)});document.addEventListener("click",t=>{const e=t.target;if(!(e instanceof HTMLElement))return;const o=e.closest(".icon--burger_menu"),a=n==null?void 0:n.contains(e);n!=null&&n.classList.contains("is-open")&&!o&&!a&&r(!1)});m.forEach(t=>{t.addEventListener("click",e=>{const o=e.currentTarget;if(!o.closest(".subscribe__action-button")){if(o.closest(".root-button")){e.preventDefault();const a=o.className.includes("exhibition")?"#events":o.className.includes("events")?"#visit":o.className.includes("news")?"#subscribe":"#home",d=document.querySelector(a);d&&d.scrollIntoView({behavior:"smooth",block:"start"}),i("More information coming soon");return}if(o.closest(".action-button")){if(o.dataset.exhibitionsPage==="true"){window.location.href="./exhibitions.html";return}if(o.dataset.ticketPage==="true"){window.location.href="./buy-ticket.html";return}e.preventDefault(),i("Booking started")}}})});c==null||c.addEventListener("submit",t=>{t.preventDefault();const e=c.querySelector('input[type="email"]');if(!(e==null?void 0:e.value.trim())){i("Please enter your email"),e==null||e.focus();return}i("Thanks! We will keep you informed."),c.reset()});
