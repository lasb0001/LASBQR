(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})(),document.querySelector(`#app`).innerHTML=`
<div class="app">

    <header class="header">
        <h1>QuickScan QR</h1>
        <p>by <span>Las B</span></p>
    </header>

    <section class="hero">

        <div class="scan-circle">
            <button id="scanBtn">
                <i class="fas fa-qrcode"></i>
            </button>
        </div>

        <h2>Scan smarter.</h2>
        <p>Fast, secure and beautiful QR scanning.</p>

    </section>

    <section class="cards">

        <div class="card">
            <i class="fas fa-qrcode"></i>
            <h3>Generate</h3>
        </div>

        <div class="card">
            <i class="fas fa-clock-rotate-left"></i>
            <h3>History</h3>
        </div>

        <div class="card">
            <i class="fas fa-gear"></i>
            <h3>Settings</h3>
        </div>

    </section>

</div>
`;