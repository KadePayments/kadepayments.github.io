import './style.css'
import kadePayRail from './assets/kadepay_rail.svg'
import kadePay from './assets/kadepay.svg'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<header>
<img src="${kadePay}" alt="KadePayments" height="36" width="36">
</header>

<section id="center">
  <div class="hero">
    <img src="${kadePayRail}" alt="KadePay Rail"/>
  </div>
  <div>
    <h1>Fast Bitcoin, the Arkade way</h1>
  </div>
</section>

<section id="next-steps">
  <div id="social">
    <ul>
      <li><a href="https://github.com/kadepayments" target="_blank"><svg class="button-icon" role="presentation" aria-hidden="true"><use href="/icons.svg#github-icon"></use></svg>GitHub</a></li>
    </ul>
  </div>
</section>
`