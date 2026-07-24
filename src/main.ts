import './style.css'
import kadePay from './assets/kadepay.svg'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<header>
<img src="${kadePay}" alt="KadePayments" height="36" width="36">
</header>

<section id="center">
  <div>
    <h1>No Bitcoin. No Better Money</h1>
    <h2>Payments redefined, the Bitcoin way.</h2>
  </div>
</section>

<section id="next-steps">
  <!--div id="social">
    <ul>
      <li><a href="https://github.com/kadepayments" target="_blank"><svg class="button-icon" role="presentation" aria-hidden="true"><use href="/icons.svg#github-icon"></use></svg>GitHub</a></li>
    </ul>
  </div-->
</section>
`