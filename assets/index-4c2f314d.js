(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&l(r)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();function h(i,o,a,l){function e(){const t=new Date,r=t.getHours(),g=t.getFullYear(),d=t.getMinutes();function f(n){return n===0?"12":(n>12&&(n=n-12),n<10&&n<12?`0${n}`:`${n}`)}i.innerHTML=f(r),o.innerHTML=d<10?`0${d}`:`${d}`,a.innerHTML=r<12?"AM":"PM",l.innerHTML=g.toString()}e(),setInterval(e,1e3)}const L=document.querySelector("[data-hour]"),p=document.querySelector("[data-minute]"),y=document.querySelector("[data-year]"),v=document.querySelector("[data-meridiem]");h(L,p,v,y);const m=`
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 3v1m0 16v1m-8-9H3m3.314-5.686L5.5 5.5m12.186.814L18.5 5.5M6.314 17.69l-.814.81m12.186-.81.814.81M21 12h-1m-4 0a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
      stroke="#bbb"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>`,u=`
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
  <path
    d="M3.32 11.684a9 9 0 0 0 17.357 3.348A9 9 0 0 1 8.32 6.683c0-1.18.23-2.32.644-3.353a9.003 9.003 0 0 0-5.645 8.354Z"
    fill="#666"
    stroke="#666"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  </svg>`,s=document.querySelector("[data-btn-theme]"),c=document.querySelector("body");s.addEventListener("click",()=>{c.classList.contains("light")?(s.innerHTML=m,localStorage.removeItem("theme")):(s.innerHTML=u,localStorage.setItem("theme","light")),c.classList.toggle("light")});window.addEventListener("load",()=>{const i=localStorage.getItem("theme")==="light",o=window.matchMedia("(prefers-color-scheme: light)").matches;i||o?(c.classList.add("light"),s.innerHTML=u):(c.classList.remove("light"),s.innerHTML=m),c.style.transition="all 250ms ease-out"});
