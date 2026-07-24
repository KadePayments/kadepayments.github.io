import './style.css'
import kadePay from './assets/kadepay.svg'

let h3 = "No nonsense";
let count = 0;

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<header>
<img src="${kadePay}" alt="KadePayments" height="36" width="36">
</header>

<section id="center">
  <div>
    <h1>No Bitcoin. No Better Money</h1>
    <h2>Payments redefined, the Bitcoin way.</h2>
    <h3 id="subheading2">${h3}</h3>
  </div>
</section>
<!--section id="next-steps">
  <div id="social">
    <ul>
      <li><a href="https://github.com/kadepayments" target="_blank"><svg class="button-icon" role="presentation" aria-hidden="true"><use href="/icons.svg#github-icon"></use></svg>GitHub</a></li>
    </ul>
  </div>
</section-->
`

const subHeadings = [
    "Your money",
    "Smart",
    "Your control",
    "No middlemen",
    "No nonsense",
];

const h3Element = document.querySelector<HTMLDivElement>('#subheading2');
const timerId = setInterval(() => {
    count++
    if (count > 4) {
        count = 0;
    }
    const subHeading = subHeadings[count];
    if (h3Element) {
        h3Element.textContent = `${subHeading}`;
    }
}, 3000);

addEventListener('beforeunload', () => {
    clearInterval(timerId);
})